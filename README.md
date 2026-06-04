# Navaneeth M - Portfolio OS (Inner Site)

This is the interactive 2D Operating System simulation that serves as the "Software" layer of my 3D portfolio. It is built as a standalone React application that can be viewed independently or projected inside a 3D environment.

## Live Demo
[View the Live OS](https://navaneeth-os.vercel.app/) (Link to your Vercel deployment)

## Features
- **Window Management:** Draggable, resizable, and minimizable windows with Z-index management.
- **Taskbar & Start Menu:** Fully functional system tray with clock and application launching.
- **Showcase App:** A modular portfolio explorer containing "About Me," "Experience," "Projects," and "Contact" sections.
- **Retro Emulators:** Play classic games like **Doom**, **Scrabble**, and **The Oregon Trail** directly in the browser.
- **Responsive Design:** Optimized for various screen sizes, specifically designed to fit into a 16:9 3D monitor projection.

## Tech Stack
- **Framework:** React 17
- **Language:** TypeScript
- **Animations:** Framer Motion (for smooth window transitions and UI effects)
- **Routing:** React Router 6
- **Styling:** CSS Modules / Vanilla CSS
- **Deployment:** Vercel

## Key Directory Structure
- `src/components/os/`: Core OS components (Desktop, Window, Toolbar).
- `src/components/applications/`: Individual app window implementations.
- `src/components/showcase/`: Content-heavy portfolio pages (About, Projects, etc.).
- `src/assets/`: System icons, sounds, and project images.

## Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/navaneeth-0930/PortfolioOS.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm start
   ```

---
Developed by [Navaneeth M](https://github.com/navaneeth-0930)
