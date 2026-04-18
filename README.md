# Keen Keeper

A React-based personal relationship management app that helps you stay connected with friends and track your interactions with them.

## Description

Keen Keeper is a modern web application designed to help you maintain meaningful connections with your friends. Track when you last contacted them, set relationship goals, and log your interactions (calls, texts, video chats) to ensure no friendship falls through the cracks.

## Technologies Used

- **React 19** - Frontend library for building the user interface
- **React Router v7** - For client-side routing and navigation
- **Context API** - For global state management (friends data, timeline, toast notifications)
- **Recharts** - For the pie chart visualization on the Stats page
- **React Icons** - For consistent iconography throughout the app
- **Tailwind CSS v4** - For styling and responsive design
- **Vite** - Build tool for fast development and optimized production builds

## Features

### Core Features

1. **Home Page** - View all friends as cards with their status (Overdue, Almost Due, On Track)
2. **Friend Details** - Click any friend card to see detailed information and log interactions
3. **Quick Check-In** - Log calls, texts, or video chats with one click from the friend detail page
4. **Timeline Page** - View all your interaction history with filtering by interaction type
5. **Stats Page** - See friendship analytics with a pie chart showing interaction breakdown

### Additional Features

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Loading States** - Shows loading animation while data is being fetched
- **Toast Notifications** - Confirms when interactions are logged
- **404 Page** - Custom error page for invalid routes
- **Active Navigation** - Navbar highlights the current page

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
keen-keeper/
├── public/
│   └── data.json          # Friend data
├── src/
│   ├── components/
│   │   ├── cards/         # Friend card component
│   │   ├── friend/        # Friend detail page
│   │   ├── footer/        # Footer component
│   │   ├── Home/          # Home page
│   │   ├── navbar/        # Navigation bar
│   │   ├── notfound/      # 404 page
│   │   └── toast/         # Toast notification
│   ├── context/
│   │   └── AppContext.jsx # Global state management
│   ├── rootfile/
│   │   └── Root.jsx       # Root layout component
│   ├── states/
│   │   └── States.jsx     # Stats/Analytics page
│   ├── timeline/
│   │   └── Timeline.jsx   # Timeline page
│   └── ui/
│       ├── Hero.jsx       # Banner component
│       └── HeroStates.jsx # Summary cards
├── package.json
└── vite.config.js
```

## License

MIT# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
