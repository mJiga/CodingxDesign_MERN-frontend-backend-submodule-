import { FC, ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-grow">
        <Navbar />
        <div className="flex-grow">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
