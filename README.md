# Skip Selector UI

A modern and responsive skip selection interface built with React, GSAP, and custom CSS. This UI enables users to visually select skip sizes with animated interactions, detailed pricing, and a mobile-friendly layout.

## Features

- Responsive skip selection grid layout
- Animated page heading using GSAP on load
- Two-phase hover effect on skip cards
- Sticky footer showing selected skip details
- “View Full Image” button to open modal preview
- Modal with image overlay and close button
- Fully mobile-responsive and accessible design
- Clean gradient backgrounds and card styling

## Technologies Used

- React (with Hooks)
- GSAP (GreenSock Animation Platform)
- HTML5 & CSS3
- Vite (or Create React App)
- Responsive design with media queries

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mhmdzm/REMWaste.git
   cd skip-selector-ui
2-Install dependencies:
npm install
3-Start the development server:
npm run dev
4-Open in browser:
http://localhost:5173

### Folder Structure
src/
├── components/
│   └── SkipCard.jsx
├── index.css
├── App.jsx
└── main.jsx
public/
└── images/skip-[size].jpg
