# Troubleshooting Guide

This guide helps you diagnose and resolve common issues you may encounter while using or developing the React Pokemon App.

## Table of Contents

1. [Installation Issues](#installation-issues)
2. [Development Server Issues](#development-server-issues)
3. [API & Network Issues](#api--network-issues)
4. [Browser Issues](#browser-issues)
5. [Build & Deployment Issues](#build--deployment-issues)
6. [Performance Issues](#performance-issues)
7. [React & Component Issues](#react--component-issues)
8. [Getting Help](#getting-help)

## Installation Issues

### Issue: npm install fails with EACCES error

**Symptoms:**

```
npm ERR! code EACCES
npm ERR! syscall access
npm ERR! path /usr/local/lib/node_modules
```

**Cause:** Permission issues with npm global directory

**Solutions:**

**Option 1: Fix npm permissions (Recommended)**

```bash
# macOS/Linux
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile

# Then retry
npm install
```

**Option 2: Use a Node version manager**

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Use nvm to install Node
nvm install 20
nvm use 20
npm install
```

---

### Issue: npm install hangs or takes too long

**Symptoms:**

- Installation stuck at a particular package
- No progress for several minutes

**Solutions:**

1. **Check your internet connection**

   ```bash
   ping npmjs.org
   ```

2. **Clear npm cache**

   ```bash
   npm cache clean --force
   npm install
   ```

3. **Use a different registry**

   ```bash
   npm install --registry=https://registry.npmjs.org/
   ```

4. **Increase timeout**
   ```bash
   npm install --fetch-timeout=60000
   ```

---

### Issue: TypeScript type errors during installation

**Symptoms:**

```
Could not find a declaration file for module 'lodash'
```

**Cause:** Missing type definitions

**Solutions:**

1. **Run typesync (should happen automatically)**

   ```bash
   npx typesync
   npm install
   ```

2. **Install missing types manually**
   ```bash
   npm install --save-dev @types/lodash
   npm install --save-dev @types/react
   npm install --save-dev @types/react-dom
   ```

---

### Issue: Node version incompatibility

**Symptoms:**

```
error: engine "node" is incompatible with this module
Expected version: >=18.0.0
Actual version: v16.x.x
```

**Cause:** Node.js version is too old

**Solutions:**

1. **Update Node.js**

   - Download from [nodejs.org](https://nodejs.org/)
   - Install version 18 or higher

2. **Use nvm (Node Version Manager)**
   ```bash
   nvm install 20
   nvm use 20
   nvm alias default 20
   ```

---

## Development Server Issues

### Issue: Port 5173 already in use

**Symptoms:**

```
Port 5173 is in use, trying another one...
```

or

```
Error: listen EADDRINUSE: address already in use :::5173
```

**Solutions:**

**Option 1: Kill the process using the port (macOS/Linux)**

```bash
lsof -ti:5173 | xargs kill -9
```

**Option 2: Kill the process (Windows)**

```bash
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**Option 3: Use a different port**

```bash
npm run dev -- --port 3000
```

---

### Issue: Dev server starts but shows blank page

**Symptoms:**

- Server runs successfully
- Browser shows white/blank screen
- No errors in terminal

**Solutions:**

1. **Check browser console for errors**

   - Press F12 to open DevTools
   - Look for red error messages

2. **Clear browser cache**

   - Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

3. **Check if JavaScript is enabled**

   - Ensure JavaScript is not blocked in browser settings

4. **Try incognito/private mode**
   - Eliminates extension interference

---

### Issue: Hot Module Replacement (HMR) not working

**Symptoms:**

- Changes in code don't reflect automatically
- Need to manually refresh browser

**Solutions:**

1. **Restart dev server**

   ```bash
   # Stop with Ctrl+C
   npm run dev
   ```

2. **Clear Vite cache**

   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

3. **Check file watcher limits (Linux)**
   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

---

## API & Network Issues

### Issue: Pokemon data not loading

**Symptoms:**

- "Loading..." message persists
- "Error" message displays
- Pokemon list/details don't appear

**Solutions:**

1. **Check internet connection**

   ```bash
   ping pokeapi.co
   ```

2. **Verify PokeAPI is accessible**

   - Open https://pokeapi.co/api/v2/pokemon in browser
   - Should return JSON data

3. **Check browser console for errors**

   - Look for CORS errors
   - Look for network errors (ERR_CONNECTION_REFUSED)

4. **Disable browser extensions**

   - Ad blockers may interfere
   - Try in incognito mode

5. **Check firewall/antivirus**
   - May be blocking API requests
   - Temporarily disable to test

---

### Issue: CORS errors in browser console

**Symptoms:**

```
Access to fetch at 'https://pokeapi.co/api/v2/pokemon'
from origin 'http://localhost:5173' has been blocked by CORS policy
```

**Cause:** Usually not an issue with PokeAPI (it allows CORS), but may occur with network proxies

**Solutions:**

1. **Check network proxy settings**

   - Corporate networks may interfere
   - Try different network

2. **Clear browser cache and cookies**

3. **Use a different browser**

4. **Check for browser extensions blocking requests**

---

### Issue: API requests are slow

**Symptoms:**

- Long loading times
- Delayed responses

**Solutions:**

1. **Check your internet speed**

   - Use speedtest.net

2. **Check PokeAPI status**

   - Visit https://pokeapi.co/
   - Check their status page

3. **Clear React Query cache**

   - Restart the application
   - Clear browser storage

4. **Check for network throttling**
   - DevTools Network tab
   - Disable any throttling settings

---

### Issue: Pokemon images not displaying

**Symptoms:**

- Pokemon name shows but no image
- Broken image icon

**Solutions:**

1. **Check if image URL is valid**

   - Open browser DevTools
   - Check Network tab for failed image requests

2. **Verify pokemon.sprites.front_default exists**

   - Some Pokemon may not have sprites
   - Check API response in Network tab

3. **Check image CDN availability**
   - PokeAPI uses external image hosting
   - May be temporarily unavailable

---

## Browser Issues

### Issue: App not working in specific browser

**Symptoms:**

- Works in Chrome but not Safari/Firefox
- Features missing in certain browsers

**Solutions:**

1. **Update browser to latest version**

2. **Check browser compatibility**

   - Modern browsers required
   - Internet Explorer not supported

3. **Clear browser cache and cookies**

4. **Disable extensions**

   - Test in incognito/private mode

5. **Check console for JavaScript errors**

---

### Issue: Console shows warnings about React

**Symptoms:**

```
Warning: Each child in a list should have a unique "key" prop
```

**Cause:** Development warnings (already handled in code)

**Solution:**

- These are informational warnings
- Don't affect functionality
- Can be safely ignored if app works correctly

---

### Issue: Back button not working as expected

**Symptoms:**

- Back button doesn't return to expected page
- Navigation history seems incorrect

**Solutions:**

1. **Check if using `replace: true` in navigation**

   - This overwrites history instead of adding to it
   - Expected behavior for tab navigation

2. **Clear browser history and restart**

3. **Use in-app navigation instead**
   - Click sidebar links
   - Use Pokemon list links

---

## Build & Deployment Issues

### Issue: Production build fails

**Symptoms:**

```
npm run build
Error: Build failed
```

**Solutions:**

1. **Check for TypeScript errors**

   ```bash
   npx tsc --noEmit
   ```

2. **Check for linting errors**

   ```bash
   npm run lint
   ```

3. **Clear cache and rebuild**

   ```bash
   rm -rf node_modules/.vite dist
   npm install
   npm run build
   ```

4. **Check available disk space**
   ```bash
   df -h
   ```

---

### Issue: Preview build doesn't work

**Symptoms:**

```
npm run preview
Error: Failed to load dist folder
```

**Solutions:**

1. **Ensure build exists**

   ```bash
   npm run build
   npm run preview
   ```

2. **Check dist folder**

   ```bash
   ls -la dist/
   ```

3. **Rebuild and preview**
   ```bash
   rm -rf dist
   npm run build
   npm run preview
   ```

---

## Performance Issues

### Issue: App is slow or laggy

**Symptoms:**

- Slow page loads
- Laggy interactions
- Delayed responses

**Solutions:**

1. **Check browser performance**

   - Close unnecessary tabs
   - Clear browser cache
   - Restart browser

2. **Check system resources**

   - Close other applications
   - Check CPU/RAM usage

3. **Clear React Query cache**

   - Refresh the page
   - Clear browser storage

4. **Check for memory leaks**
   - Open browser DevTools
   - Performance tab → Record
   - Look for growing memory

---

### Issue: High memory usage

**Symptoms:**

- Browser tab uses excessive RAM
- System becomes slow

**Solutions:**

1. **Refresh the page**

   - Clears component state
   - Resets memory

2. **Close and reopen browser**

3. **Check for infinite loops**

   - Look at browser console
   - Check Network tab for repeated requests

4. **Update browser**
   - Latest versions have better memory management

---

## React & Component Issues

### Issue: State not updating

**Symptoms:**

- Button clicks don't work
- Tab changes don't reflect
- Pagination stuck

**Solutions:**

1. **Check browser console for errors**

2. **Hard refresh the page**

   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

3. **Clear React Query cache**
   - Restart app
   - Clear browser storage

---

### Issue: Infinite re-renders

**Symptoms:**

```
Maximum update depth exceeded
```

**Cause:** Usually a development issue

**Solutions:**

1. **Check useEffect dependencies**

   - Ensure proper dependency arrays
   - Avoid missing dependencies

2. **Check state updates in render**

   - Don't call setState directly in component body

3. **Restart dev server**

---

### Issue: Component not rendering

**Symptoms:**

- Expected content doesn't show
- Component seems to be skipped

**Solutions:**

1. **Check conditional rendering logic**

   - Verify if conditions are met

2. **Check for null/undefined data**

   - Add console.logs to debug

3. **Check React DevTools**
   - Verify component is mounted
   - Check props and state

---

## General Debugging Tips

### Using Browser DevTools

1. **Console Tab**

   - View JavaScript errors
   - See console.log output
   - Check warnings

2. **Network Tab**

   - Monitor API requests
   - Check response data
   - Verify status codes

3. **React DevTools Extension**
   - Inspect component tree
   - View props and state
   - Track component updates

### Common Commands

```bash
# Start fresh
npm run clean
npm install
npm run dev

# Check for issues
npm run lint
npx tsc --noEmit

# Clear caches
rm -rf node_modules/.vite
npm cache clean --force
```

## Getting Help

If issues persist after trying these solutions:

### 1. Check Documentation

- [Installation Guide](./INSTALLATION.md)
- [User Guide](./USER_GUIDE.md)
- [Features Documentation](./FEATURES.md)

### 2. Check External Resources

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)

### 3. Review Error Messages

- Copy the full error message
- Search for it online
- Check Stack Overflow

### 4. Contact Support

- **Email**: shikhar.singh@gmail.com
- **Include**:
  - Error message (full text)
  - Steps to reproduce
  - Browser and OS version
  - Node.js version
  - What you've already tried

### 5. Create an Issue

If you've found a bug:

- Document the issue clearly
- Provide reproduction steps
- Include screenshots if applicable
- Share console error messages

## Prevention Tips

### Best Practices

1. **Keep dependencies updated**

   ```bash
   npm outdated
   npm update
   ```

2. **Regular cache clearing**

   ```bash
   npm cache clean --force
   rm -rf node_modules/.vite
   ```

3. **Use latest browser versions**

4. **Monitor console for warnings**

5. **Test in multiple browsers**

6. **Keep Node.js updated**

### Before Reporting Issues

✅ Tried restarting dev server
✅ Cleared browser cache
✅ Checked browser console
✅ Verified internet connection
✅ Tested in incognito mode
✅ Reviewed relevant documentation
✅ Searched for similar issues

---

**Remember**: Most issues have simple solutions. Start with the basics (restart, refresh, clear cache) before diving into complex debugging!
