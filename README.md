# Thematic React Application

This project is a modern React application that showcases a dynamic theming system, a responsive layout, and data visualization. It is built with a component-based architecture and utilizes CSS variables for a highly maintainable and customizable design. The application fetches product data from a mock API and displays it in a grid and a dynamic chart.

## Table of Contents

- Features
- Technologies Used
- Project Structure
- How to Run Locally

## Features

- **Dynamic Theming**: Users can switch between three distinct themes, each with its own color palette, typography, and layout. The styling is managed using CSS variables for easy updates.
- **Responsive Layout**: The application's layout adapts seamlessly to various screen sizes, ensuring an optimal viewing experience on both desktop and mobile devices.
- **Product Grid Display**: The main content area displays product information in a responsive grid layout.
- **Data Visualization**: A bar chart visualizes product data by category, with its colors and text dynamically updated to match the current theme.
- **Client-Side Routing**: The application uses React Router to handle navigation between different pages (Home, About, Contact) without a full page reload.
- **Mock API Integration**: Product data is fetched asynchronously from a simple, internal mock API, demonstrating a common web development pattern.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router DOM: Used for declarative routing in the application.
- Chart.js: A powerful and flexible open-source charting library for data visualization.
- CSS Variables: A core part of the theming system, allowing for dynamic color, font, and spacing changes.
- Heroicons: A collection of free, MIT-licensed high-quality SVG icons for the UI.

## Project Structure

The project follows a standard React application structure, organized to keep related components and files together.

project-root/

├── public/

├── src/

│ ├── api/                # API utility functions (e.g., fetchProducts.ts)

│ │ ├── api.ts 

│ ├── components/

│ │ ├── data-display/     # Components for displaying data (e.g., ProductChart.tsx)

│ │ └── layout/           # Shared layout components (Header.tsx, Layout.tsx)

│ ├── context/            # ThemeContext for state management

│ │ └── ThemeContext.tsx

│ ├── pages/              # Page-level components (HomePage.tsx, AboutPage.tsx)

│ │ ├── AboutPage.tsx

│ │ ├── ContactPage.tsx

│ │ └── HomePage.tsx

│ ├── themes/             # Theme definitions and CSS variables

│ │ ├── themes.ts

│ │ └── variables.css 

│ ├── App.css

│ ├── App.tsx

│ ├── index.css

│ └── index.tsx

├── package.json

└── README.md

## How to Run Locally

Follow these steps to set up and run the project on your local machine:

1.  **Clone the repository:**

    git clone https://github.com/Prathamesh-Pawaskar/multi-theme-switcher-app.git

    cd multi-theme-switcher-app

2.  **Install dependencies:**

    npm install

3.  **Start the development server:**

    npm start
    
    The application will open in your browser at `http://localhost:3000`.