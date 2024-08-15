import { FC, ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

// Props interface for Layout component
interface LayoutProps {
  children: ReactNode; // Content to be displayed inside the layout
}

// Layout component that wraps its children with a consistent page structure
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header component at the top of the page */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-grow">
        {/* Sidebar navigation */}
        <Navbar />
        {/* Container for the main content */}
        <div className="flex-grow">{children}</div>
      </div>

      {/* Footer component at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default Layout;
