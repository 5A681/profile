# React Profile App

A modern React application built with TypeScript, Vite, and styled with Bootstrap and Ant Design.

## 🚀 Quick Start

### Development Setup

1. **Install dependencies:**

   ```bash
   bun install
   ```

2. **Start development server:**

   ```bash
   bun run dev
   ```

3. **Open your browser:**
   Visit `http://localhost:5173`

### Production Build

```bash
bun run build
bun run preview
```

## 🐳 Docker Setup

### Option 1: Using Docker Build Script (Recommended)

```bash
# Make the script executable
chmod +x docker-build.sh

# Build and get instructions
./docker-build.sh
```

### Option 2: Manual Docker Commands

1. **Build the Docker image:**

   ```bash
   docker build -f Dockerfile.simple -t profile-react-app:latest .
   ```

2. **Run the container:**

   ```bash
   # Run on port 3000
   docker run -d -p 3000:80 --name profile-app profile-react-app:latest

   # Or run on port 8080
   docker run -d -p 8080:80 --name profile-app profile-react-app:latest
   ```

3. **Access your app:**

   - Local: `http://localhost:3000` (or your chosen port)

4. **Stop and remove container:**
   ```bash
   docker stop profile-app
   docker rm profile-app
   ```

### Docker Management Commands

```bash
# View running containers
docker ps

# View all containers
docker ps -a

# View container logs
docker logs profile-app

# Remove the image
docker rmi profile-react-app:latest
```

## 📦 Project Structure

```
profile/
├── src/
│   ├── components/     # Reusable components
│   ├── assets/         # Static assets
│   └── ...
├── public/            # Public assets
├── Dockerfile.simple  # Docker configuration
├── docker-build.sh   # Docker build script
└── package.json      # Dependencies and scripts
```

## 🛠️ Technologies Used

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite
- **UI Libraries:** Bootstrap 5 + Ant Design
- **Package Manager:** Bun
- **Containerization:** Docker + Nginx

## 📝 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint
- `./docker-build.sh` - Build Docker image

## 🔧 ESLint Configuration

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
