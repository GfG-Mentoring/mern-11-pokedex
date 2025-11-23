# User Guide

Welcome to the React Pokemon App! This guide will walk you through all the features and functionality of the application.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Navigation](#navigation)
3. [Browsing Pokemon](#browsing-pokemon)
4. [Viewing Pokemon Details](#viewing-pokemon-details)
5. [Using Tabs](#using-tabs)
6. [URL Structure](#url-structure)
7. [Tips & Best Practices](#tips--best-practices)

## Getting Started

### Launching the Application

1. Open your terminal and navigate to the project directory
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and go to `http://localhost:5173`

### First Look

When you open the application, you'll see:

- **Sidebar**: Navigation menu on the left side
- **Main Content Area**: Your current view (Dashboard, Pokemon List, or Pokemon Details)

## Navigation

### Sidebar Menu

The sidebar contains the following navigation options:

- **Home**: Returns to the dashboard home page
- **Pokemon**: Navigate to the Pokemon list page
- **Login**: Access the login page (placeholder)

### Using the Sidebar

Simply click on any menu item to navigate to that section of the application.

### Browser Navigation

You can also use:

- **Back button**: Return to the previous page
- **Forward button**: Move forward in your browsing history
- **Direct URLs**: Type URLs directly in the address bar

## Browsing Pokemon

### Accessing the Pokemon List

1. Click **Pokemon** in the sidebar, or
2. Navigate to `http://localhost:5173/pokemon`

### Understanding the List View

The Pokemon list displays:

- **Pokemon Names**: Clickable links to individual Pokemon
- **Pagination Controls**: Next and Previous buttons
- **Limited Results**: Shows 2 Pokemon at a time for easier browsing

### Using Pagination

#### Next Button

- Click **Next** to view the next set of Pokemon
- The button is disabled when you reach the end of the list (Pokemon #1000)
- Each click advances by 2 Pokemon

#### Previous Button

- Click **Previous** to go back to the earlier Pokemon
- The button is disabled on the first page
- Each click goes back by 2 Pokemon

### Navigating to Pokemon Details

Click on any Pokemon name in the list to view its detailed information.

## Viewing Pokemon Details

### Accessing Pokemon Details

**Method 1**: Click a Pokemon name from the list

**Method 2**: Type the URL directly:

```
http://localhost:5173/pokemon/{pokemon-name}
```

Examples:

- `http://localhost:5173/pokemon/pikachu`
- `http://localhost:5173/pokemon/charizard`
- `http://localhost:5173/pokemon/bulbasaur`

### Pokemon Detail Page Layout

The detail page displays:

#### Header Section

- **Pokemon Name**: Displayed at the top
- **Pokemon Sprite**: Front-facing image of the Pokemon

#### Tab Navigation

Four tabs organize different types of information:

1. **Abilities**: Pokemon abilities and characteristics
2. **Stats**: Base stats and attributes
3. **Moves**: Available moves and attacks
4. **Cries**: Pokemon sounds and vocalizations

### Loading States

When fetching Pokemon data, you'll see:

- **"Loading..."**: Displayed while data is being fetched
- This ensures you know the app is working

### Error States

If something goes wrong:

- **"Error"**: Displayed if the Pokemon cannot be found or loaded
- Common causes: Invalid Pokemon name, network issues

## Using Tabs

### Switching Between Tabs

1. Click on any tab name (Abilities, Stats, Moves, or Cries)
2. The selected tab is highlighted in blue
3. The URL updates automatically with the tab parameter

### Tab State Persistence

- **URL Integration**: The current tab is saved in the URL
- **Shareable Links**: You can share a link with a specific tab open
- **Browser History**: Use back/forward buttons to navigate between tabs

### Example Tab URLs

```
# Abilities tab (default)
http://localhost:5173/pokemon/pikachu?tab=Abilities

# Stats tab
http://localhost:5173/pokemon/pikachu?tab=Stats

# Moves tab
http://localhost:5173/pokemon/pikachu?tab=Moves

# Cries tab
http://localhost:5173/pokemon/pikachu?tab=Cries
```

## URL Structure

Understanding the URL structure helps you navigate efficiently.

### Route Patterns

| Route          | Description     | Example                                 |
| -------------- | --------------- | --------------------------------------- |
| `/`            | Dashboard home  | `http://localhost:5173/`                |
| `/login`       | Login page      | `http://localhost:5173/login`           |
| `/pokemon`     | Pokemon list    | `http://localhost:5173/pokemon`         |
| `/pokemon/:id` | Pokemon details | `http://localhost:5173/pokemon/pikachu` |

### Query Parameters

The app uses query parameters for tab navigation:

```
?tab=TabName
```

**Valid tab values:**

- `Abilities`
- `Stats`
- `Moves`
- `Cries`

**Default behavior**: If no tab parameter is provided, "Abilities" is selected by default.

### URL Navigation Tips

1. **Bookmark favorite Pokemon**: Save Pokemon detail URLs for quick access
2. **Share specific views**: Copy URLs including tab parameters to share exact views
3. **Manual navigation**: Type Pokemon names directly in the URL

## Tips & Best Practices

### Efficient Browsing

1. **Use pagination wisely**: Navigate through Pokemon systematically
2. **Bookmark frequently viewed Pokemon**: Save time on repeated visits
3. **Use browser back button**: Quick way to return to the list

### Performance Tips

1. **Data caching**: React Query caches fetched data automatically

   - Revisiting Pokemon is faster due to caching
   - Cache persists during your session

2. **Network awareness**: Initial loads require internet connection
   - Subsequent views use cached data when available

### Keyboard Navigation

While the app doesn't have specific keyboard shortcuts, you can use:

- **Tab key**: Navigate between clickable elements
- **Enter key**: Activate links and buttons
- **Arrow keys**: Scroll the page

### Browser Compatibility

The app works best with modern browsers:

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

**Note**: Internet Explorer is not supported.

### Mobile Usage

The app is accessible on mobile devices:

- Touch the sidebar menu items to navigate
- Tap Pokemon names to view details
- Use Next/Previous buttons for pagination
- Swipe gestures work for browser navigation

## Common User Scenarios

### Scenario 1: Finding a Specific Pokemon

1. Navigate to `/pokemon`
2. Use Next/Previous buttons to browse
3. Click the Pokemon name when found

**Tip**: If you know the Pokemon name, type it directly in the URL:

```
/pokemon/pokemon-name
```

### Scenario 2: Exploring Pokemon Stats

1. Open any Pokemon detail page
2. Click the **Stats** tab
3. View the Pokemon's statistical information

### Scenario 3: Comparing Multiple Pokemon

1. Open a Pokemon in one browser tab
2. Right-click another Pokemon name → "Open in new tab"
3. Compare information side-by-side

### Scenario 4: Sharing a Pokemon Discovery

1. Navigate to the Pokemon and tab you want to share
2. Copy the URL from the address bar
3. Share the link with others

Example:

```
http://localhost:5173/pokemon/mewtwo?tab=Stats
```

## Understanding Data Loading

### Initial Load

- First visit to any Pokemon: Data fetches from PokeAPI
- Loading indicator appears during fetch
- Data displays once loaded

### Cached Data

- Returning to previously viewed Pokemon: Data loads instantly
- React Query manages the cache automatically
- Cache clears when you close the browser

### Network Requirements

- **Internet required**: For initial data fetching
- **Offline behavior**: Previously viewed data may be available from cache
- **API dependency**: App relies on PokeAPI availability

## Troubleshooting Common Issues

### Pokemon Won't Load

**Try:**

1. Check your internet connection
2. Refresh the page (F5 or Cmd+R)
3. Clear browser cache and reload
4. Check if PokeAPI is accessible: https://pokeapi.co/

### Navigation Not Working

**Try:**

1. Click directly on the link text
2. Use the browser's refresh button
3. Check the browser console for errors

### Pagination Stuck

**Try:**

1. Refresh the page
2. Navigate directly to `/pokemon` to reset
3. Clear browser cache if issues persist

## Getting More Help

If you encounter issues:

1. Check the [Troubleshooting Guide](./TROUBLESHOOTING.md)
2. Review the [Features Documentation](./FEATURES.md)
3. Check the [Installation Guide](./INSTALLATION.md)
4. Contact support: shikhar.singh@gmail.com

## Feature Requests

Have ideas for improving the app? Contact the development team!

---

**Happy Pokemon Browsing! 🎮**
