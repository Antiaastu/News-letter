import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
          <Navbar />
          <div className="flex flex-col flex-grow">
            <AppRoutes />
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
