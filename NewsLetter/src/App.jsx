import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen dark:bg-gray-800 text-gray-900 dark:text-white transition-colors">
          <Navbar />
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
