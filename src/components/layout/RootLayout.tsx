import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const RootLayout = () => {
  return (
    <main className="w-full h-full min-h-screen">
      <Navbar />
      <div className="grid gap-12 place-items-center mx-auto max-w-screen-2xl overflow-hidden px-24">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default RootLayout;
