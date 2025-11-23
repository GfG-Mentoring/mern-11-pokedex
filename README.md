# React Pokemon App 🎮

A modern, interactive Pokemon browsing application built with React, TypeScript, and Vite. Explore Pokemon data from the PokeAPI with an intuitive interface featuring pagination, detailed views, and smooth navigation.

## ✨ Features

- 📋 **Browse Pokemon** - View a paginated list of Pokemon with easy navigation
- 🔍 **Detailed Views** - Access comprehensive Pokemon information including stats, abilities, moves, and cries
- 🎨 **Tabbed Interface** - Organize Pokemon data with an interactive tabbed layout
- ⚡ **Fast & Responsive** - Built with Vite for lightning-fast development and optimized builds
- 🔄 **Smart Caching** - TanStack React Query for efficient data fetching and caching
- 🧭 **Intuitive Routing** - Seamless navigation with React Router

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-intro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📚 Documentation

For detailed information, please refer to:

- **[Installation Guide](./INSTALLATION.md)** - Detailed setup instructions and system requirements
- **[User Guide](./USER_GUIDE.md)** - Step-by-step guide to using the application
- **[Features](./FEATURES.md)** - Complete feature documentation
- **[Troubleshooting](./TROUBLESHOOTING.md)** - Common issues and solutions

## 🛠️ Tech Stack

- **Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **Routing**: React Router DOM 7.9.4
- **State Management**: TanStack React Query 5.90.5
- **Data Source**: [PokeAPI](https://pokeapi.co/)
- **Styling**: CSS with inline styles

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run clean` | Clean dependencies and build artifacts |

## 🗂️ Project Structure

```
react-intro/
├── src/
│   ├── components/        # Reusable components
│   │   └── Sidebar.tsx   # Navigation sidebar
│   ├── pages/            # Page components
│   │   ├── dashboard.tsx # Main layout wrapper
│   │   ├── login.tsx     # Login page
│   │   └── pokemon/      # Pokemon-related pages
│   │       ├── pokemonList.tsx    # List view
│   │       └── pokemon.tsx        # Detail view
│   ├── hooks.tsx         # Custom React hooks
│   ├── App.tsx          # Main app component with routing
│   └── main.tsx         # Application entry point
├── public/              # Static assets
└── docs/               # Documentation files
```

## 🌐 Routes

- `/login` - Login page (placeholder)
- `/` - Dashboard with sidebar navigation
- `/pokemon` - Pokemon list with pagination
- `/pokemon/:id` - Individual Pokemon details

## 👨‍💻 Author

**Shikhar Singh**
- Email: shikhar.singh@gmail.com

## 📄 License

MIT License - feel free to use this project for learning and development purposes.

## 🙏 Acknowledgments

- Pokemon data provided by [PokeAPI](https://pokeapi.co/)
- Built as part of the MERN-11 course
