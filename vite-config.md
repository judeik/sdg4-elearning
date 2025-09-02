Perfect 👌 — here’s a step-by-step migration guide for moving your project from CRA (react-scripts) to Vite when you’re ready.

🚀 Migration Guide: CRA → Vite
1. Install Vite & Initialize Project

Run this in your project root (or create a new folder if you want a clean setup):

npm create vite@latest saas-elearning-frontend -- --template react


Move into the new folder:

cd saas-elearning-frontend


Install dependencies:

npm install

2. Move Your Files

Copy the following from your old CRA project into the new Vite project:

src/ (all your React code)

public/ (assets, favicon, index.html customizations)

package.json dev dependencies (like bootstrap, react-bootstrap, chart.js, lucide-react, etc.)

Then install them again:

npm install bootstrap react-bootstrap chart.js react-chartjs-2 lucide-react

3. Update index.html (Vite vs CRA difference)

In CRA, the public/index.html has:

<div id="root"></div>


Leave that the same in Vite, but remove CRA placeholders like %PUBLIC_URL%.

For example, change:

<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />


to:

<link rel="icon" href="/favicon.ico" />

4. Update index.js Entry Point

CRA auto-injects React refresh, but in Vite it’s simpler.

Make sure src/main.jsx (or src/index.jsx) looks like this:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


Rename your index.js → main.jsx if needed.

5. Update Scripts in package.json

CRA scripts (before):

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}


Vite scripts (after):

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}

6. Handle Environment Variables

CRA uses REACT_APP_ prefix.
Vite uses VITE_ prefix.

So if you had:

REACT_APP_API_URL=http://localhost:5000/api


Change to:

VITE_API_URL=http://localhost:5000/api


And in code:

const api = import.meta.env.VITE_API_URL;

7. Add Proxy for Backend (if needed)

In CRA, you had "proxy" in package.json.
In Vite, create vite.config.js:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Your backend URL
    },
  },
});

8. Run the App 🎉

Start dev server:

npm run dev


Build for production:

npm run build


✅ That’s it! Your project will now run on Vite with much faster hot reloads and smaller builds.