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
