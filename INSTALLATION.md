# Installation Guide

This guide provides detailed instructions for setting up and running the React Pokemon App on your local machine.

## System Requirements

### Minimum Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Node.js**: Version 18.x or higher (20.x recommended)
- **npm**: Version 9.x or higher (comes with Node.js)
- **RAM**: 4GB minimum (8GB recommended)
- **Disk Space**: 500MB free space for dependencies

### Recommended Tools

- **Code Editor**: Visual Studio Code, WebStorm, or similar
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)
- **Terminal**: Git Bash (Windows), Terminal (macOS/Linux), or iTerm2

## Step-by-Step Installation

### 1. Check Node.js Installation

First, verify that Node.js is installed on your system:

```bash
node --version
npm --version
```

**Expected output:**

```
v20.x.x  (or v18.x.x or higher)
9.x.x    (or higher)
```

If Node.js is not installed, download it from [nodejs.org](https://nodejs.org/).

### 2. Clone the Repository

```bash
# Using HTTPS
git clone <repository-url>

# Or using SSH
git clone git@github.com:username/react-intro.git

# Navigate to the project directory
cd react-intro
```

If you don't have the repository URL, contact the project maintainer.

### 3. Install Dependencies

The project uses npm for package management. Install all required dependencies:

```bash
npm install
```

This command will:

- Install all packages listed in `package.json`
- Run `npx typesync` (pre-install hook) to sync TypeScript types
- Create a `node_modules` directory with all dependencies
- Generate a `package-lock.json` file (if not present)

**Installation time:** 2-5 minutes depending on your internet connection.

### 4. Verify Installation

Check that the installation was successful by running:

```bash
npm run dev
```

You should see output similar to:

```
VITE v7.1.7  ready in 523 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 5. Open the Application

Open your web browser and navigate to:

```
http://localhost:5173
```

You should see the Pokemon application running.

## Understanding Dependencies

### Core Dependencies

| Package                 | Version | Purpose                   |
| ----------------------- | ------- | ------------------------- |
| `react`                 | 19.1.1  | Core React library        |
| `react-dom`             | 19.1.1  | React DOM rendering       |
| `react-router-dom`      | 7.9.4   | Client-side routing       |
| `@tanstack/react-query` | 5.90.5  | Data fetching and caching |
| `lodash`                | 4.17.21 | Utility functions         |

### Development Dependencies

| Package                | Version | Purpose                   |
| ---------------------- | ------- | ------------------------- |
| `typescript`           | 5.9.3   | TypeScript compiler       |
| `vite`                 | 7.1.7   | Build tool and dev server |
| `eslint`               | 9.36.0  | Code linting              |
| `@vitejs/plugin-react` | 5.0.4   | React support for Vite    |

## Environment Configuration

This application does not require environment variables by default. It uses the public PokeAPI endpoint:

```
https://pokeapi.co/api/v2/
```

### Optional: Create `.env` File

If you need to customize settings, create a `.env` file in the root directory:

```env
# Optional: Custom port (default is 5173)
PORT=3000

# Optional: Custom API base URL
VITE_API_BASE_URL=https://pokeapi.co/api/v2/
```

**Note:** Variables in Vite must be prefixed with `VITE_` to be exposed to your app.

## Common Installation Issues

### Issue 1: `npm install` Fails

**Symptoms:**

```
npm ERR! code EACCES
npm ERR! syscall access
```

**Solutions:**

1. **Check permissions**: Run with sudo (not recommended) or fix npm permissions

   ```bash
   # Fix npm permissions (macOS/Linux)
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
   source ~/.profile
   ```

2. **Clear npm cache**:

   ```bash
   npm cache clean --force
   npm install
   ```

3. **Delete node_modules and reinstall**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Issue 2: Port 5173 Already in Use

**Symptoms:**

```
Port 5173 is in use, trying another one...
```

**Solutions:**

1. **Use a different port**:

   ```bash
   npm run dev -- --port 3000
   ```

2. **Kill the process using port 5173** (macOS/Linux):

   ```bash
   lsof -ti:5173 | xargs kill -9
   ```

   **Windows:**

   ```bash
   netstat -ano | findstr :5173
   taskkill /PID <PID> /F
   ```

### Issue 3: TypeScript Errors During Installation

**Symptoms:**

```
Could not find a declaration file for module 'some-package'
```

**Solutions:**

1. **Run typesync manually**:

   ```bash
   npx typesync
   npm install
   ```

2. **Install missing types**:
   ```bash
   npm install --save-dev @types/lodash
   ```

### Issue 4: Node Version Incompatibility

**Symptoms:**

```
error: engine "node" is incompatible with this module
```

**Solutions:**

1. **Update Node.js** to version 18 or higher
2. **Use nvm (Node Version Manager)**:

   ```bash
   # Install nvm (macOS/Linux)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

   # Install and use Node 20
   nvm install 20
   nvm use 20
   ```

### Issue 5: Slow Installation

**Solutions:**

1. **Use a faster registry**:

   ```bash
   npm install --registry=https://registry.npmjs.org/
   ```

2. **Clear cache and retry**:
   ```bash
   npm cache clean --force
   npm install
   ```

## Post-Installation Steps

### 1. Run Linter

Check for code quality issues:

```bash
npm run lint
```

### 2. Build for Production

Test the production build:

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### 3. Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

## Updating Dependencies

To update dependencies to their latest versions:

```bash
# Check for outdated packages
npm outdated

# Update all packages (respecting version ranges in package.json)
npm update

# Update to latest versions (use with caution)
npm install <package>@latest
```

## Cleaning Up

If you need to start fresh:

```bash
# Using the provided script
npm run clean

# Or manually
rm -rf node_modules dist package-lock.json
npm install
```

## Getting Help

If you encounter issues not covered here:

1. Check the [Troubleshooting Guide](./TROUBLESHOOTING.md)
2. Review [Vite documentation](https://vite.dev/)
3. Check [React documentation](https://react.dev/)
4. Contact the project maintainer: shikhar.singh@gmail.com

## Next Steps

Once installation is complete:

1. Read the [User Guide](./USER_GUIDE.md) to learn how to use the application
2. Explore the [Features](./FEATURES.md) documentation
3. Start developing!
