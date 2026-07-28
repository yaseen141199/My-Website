# DevOps AI Dashboard

A React-based DevOps Engineer Dashboard with Gemini AI integration for quick drafting and runbook generation.

## How to run this project locally in VS Code (Windows & Linux)

This project is built using standard web technologies (HTML, TypeScript/React via ESM) and doesn't require a complex Node.js build step (like Webpack or Vite) to run, as it uses `esm.sh` for imports directly in the browser.

However, because it uses ES modules (`<script type="module">`), you **cannot** just double-click the `index.html` file to open it in your browser. You must serve it via a local web server.

Here is the easiest way to run it using Visual Studio Code:

### Prerequisites

1.  **Visual Studio Code (VS Code):** Make sure you have VS Code installed.
2.  **Live Server Extension:**
    *   Open VS Code.
    *   Go to the Extensions view (`Ctrl+Shift+X` on Windows/Linux, `Cmd+Shift+X` on macOS).
    *   Search for **"Live Server"** (by Ritwick Dey).
    *   Click **Install**.

### Running the App

1.  **Open the Project Folder:**
    *   Open VS Code.
    *   Go to `File` > `Open Folder...` and select the folder containing your project files (where `index.html` is located).

2.  **Start the Server:**
    *   Open the `index.html` file in the VS Code editor.
    *   Right-click anywhere inside the `index.html` file and select **"Open with Live Server"**.
    *   *Alternatively*, you can click the **"Go Live"** button that appears in the bottom right corner of the VS Code status bar.

3.  **View the App:**
    *   Your default web browser should automatically open and navigate to `http://127.0.0.1:5500/index.html` (or a similar local address).
    *   The dashboard should now be running!

### Profile Picture Setup

To display your own photo in the dashboard and profile sections:
1. Take the image you uploaded.
2. Rename the file to exactly `avatar.jpg`.
3. Place `avatar.jpg` in the root folder of this project (the same folder where `index.html` is located).

### Setting up the Gemini API Key (Important)

The "Quick Draft" feature uses the Google Gemini API. For it to work locally, you need to provide an API key.

Since this is a client-side only setup without a bundler like Vite/Webpack to inject environment variables, the `process.env.API_KEY` in `services/geminiService.ts` will be undefined by default.

**For local testing purposes only**, you can temporarily hardcode your API key in `services/geminiService.ts`:

1.  Get a Gemini API key from Google AI Studio.
2.  Open `services/geminiService.ts`.
3.  Change this line:
    ```typescript
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY, vertexai: true });
    ```
    To this (replace `'YOUR_ACTUAL_API_KEY'` with your real key):
    ```typescript
    // WARNING: Never commit your actual API key to a public repository!
    const ai = new GoogleGenAI({ apiKey: 'YOUR_ACTUAL_API_KEY', vertexai: true });
    ```

*Note: In a real production environment, you would use a backend server to securely handle API calls or use a build tool to inject the environment variable securely during the build process.*

### Alternative: Using Python's built-in server (Linux/Windows)

If you have Python installed, you don't even need the Live Server extension.

1.  Open a terminal (or command prompt/PowerShell) and navigate to your project folder.
2.  Run the following command:
    *   **Python 3:** `python -m http.server 8000`
    *   **Python 2:** `python -m SimpleHTTPServer 8000`
3.  Open your browser and go to `http://localhost:8000`.

---

## How to Run with Docker

You can easily run this dashboard using Docker. A `Dockerfile` is included which uses the official Nginx image to serve the static files.

### Prerequisites
*   Docker installed on your machine.

### Steps

1.  **Build the Docker image:**
    Open your terminal in the project root directory and run:
    ```bash
    docker build -t devops-dashboard .
    ```

2.  **Run the Docker container:**
    ```bash
    docker run -d -p 8080:80 --name my-dashboard devops-dashboard
    ```

3.  **Access the app:**
    Open your browser and go to `http://localhost:8080`.

---

## How to Deploy on AWS EC2 (Nginx or Apache)

Since this is a purely frontend application (HTML, CSS, JS/TS via ESM), it consists only of static files. You do not need Node.js, PM2, or any backend runtime on the server. You only need a web server to serve the static files.

Both **Nginx** and **Apache (httpd)** are excellent choices. Nginx is generally preferred for static content due to its high performance and low resource consumption, but Apache works perfectly fine as well.

### Prerequisites on AWS
1.  An EC2 instance running Linux (e.g., Ubuntu, Amazon Linux 2023, RHEL).
2.  Security Group configured to allow inbound HTTP (port 80) and optionally HTTPS (port 443) traffic from anywhere (0.0.0.0/0).
3.  SSH access to your instance.

### Option 1: Deploying with Nginx (Recommended)

**1. Connect to your EC2 instance via SSH:**
```bash
ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-ip
```

**2. Update packages and install Nginx:**
*For Ubuntu/Debian:*
```bash
sudo apt update
sudo apt install nginx -y
```
*For Amazon Linux/RHEL/CentOS:*
```bash
sudo yum update -y
sudo yum install nginx -y
```

**3. Start and enable Nginx:**
```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

**4. Transfer your project files to the server:**
You need to copy all the files from your local project folder to the Nginx web root directory, which is usually `/var/www/html` (Ubuntu) or `/usr/share/nginx/html` (Amazon Linux).

You can use `scp` from your local machine:
```bash
# Run this from your local machine, inside your project folder
scp -i /path/to/your-key.pem -r * ubuntu@your-ec2-public-ip:/tmp/
```
Then, on the EC2 instance, move them to the web root:
```bash
sudo rm -rf /var/www/html/*  # Clear default Nginx page
sudo mv /tmp/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/ # Set correct permissions (Ubuntu)
# OR sudo chown -R nginx:nginx /usr/share/nginx/html/ (Amazon Linux)
```

**5. Access your site:**
Open your browser and navigate to your EC2 instance's Public IPv4 address or Public DNS.

---

### Option 2: Deploying with Apache (httpd)

**1. Connect to your EC2 instance via SSH.**

**2. Update packages and install Apache:**
*For Ubuntu/Debian:*
```bash
sudo apt update
sudo apt install apache2 -y
```
*For Amazon Linux/RHEL/CentOS:*
```bash
sudo yum update -y
sudo yum install httpd -y
```

**3. Start and enable Apache:**
*For Ubuntu/Debian:*
```bash
sudo systemctl start apache2
sudo systemctl enable apache2
```
*For Amazon Linux/RHEL/CentOS:*
```bash
sudo systemctl start httpd
sudo systemctl enable httpd
```

**4. Transfer your project files to the server:**
The default web root for Apache is usually `/var/www/html`.

Use `scp` from your local machine:
```bash
scp -i /path/to/your-key.pem -r * ec2-user@your-ec2-public-ip:/tmp/
```
Then, on the EC2 instance:
```bash
sudo rm -rf /var/www/html/*
sudo mv /tmp/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/ # Ubuntu
# OR sudo chown -R apache:apache /var/www/html/ # Amazon Linux
```

**5. Access your site:**
Open your browser and navigate to your EC2 instance's Public IPv4 address.

### Important Note on TypeScript (.tsx) Files
Because this project uses `esm.sh` and native ES modules in the browser, the browser is actually downloading the `.tsx` files directly. Modern browsers don't natively understand TypeScript or JSX. 

However, `esm.sh` handles the transpilation on the fly when you import React components. The `index.html` uses a `<script type="module" src="./index.tsx">` which works in this specific sandboxed environment because of how the environment is configured to handle `.tsx` files on the fly.

**For a true production deployment outside of this specific sandbox environment**, you would typically need to build the project first (using Vite, Webpack, or esbuild) to compile the `.tsx` files into standard `.js` files before uploading them to Nginx/Apache. 

If you deploy these raw files to a standard Nginx server, the browser will likely throw an error because it cannot parse the JSX syntax inside the `.tsx` files natively without a build step or a runtime transpiler (like Babel standalone) included in the HTML.
