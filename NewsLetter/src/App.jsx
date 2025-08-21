import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import { PostsProvider } from "./context/PostsContext"; // ✅ Import your provider
import { Toaster } from "react-hot-toast";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <PostsProvider>
          <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
            <Navbar />
            <div className="flex flex-col flex-grow">
              <AppRoutes />
            </div>
            {/* <Footer /> */}
            <Toaster position="top-center" reverseOrder={false} />
          </div>
        </PostsProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
