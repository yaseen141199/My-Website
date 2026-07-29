# Build frontend - استخدام Node.js 22
FROM node:22-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci --omit=dev || npm install
COPY frontend .
RUN npm run build

# Build backend - استخدام Node.js 22
FROM node:22-alpine AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci --omit=dev || npm install
COPY backend .

# Final image
FROM nginx:alpine
COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]