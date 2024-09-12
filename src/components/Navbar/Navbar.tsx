import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Moon, Sun } from "lucide-react";
import { toggleDarkMode } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { hash } = location;

  return (
    <nav className="w-full sticky top-0" id="navbar">
      <div className="max-w-screen-2xl flex items-center py-6 justify-between mx-auto px-24">
        <div className="text-4xl font-bold">Fake Store</div>
        <div className="flex items-center gap-4">
          <ul className="flex gap-8 text-lg">
            <li>
              <a href="#" className={cn(hash === "" ? "active" : "")}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={cn(hash === "#about" ? "active" : "")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#products"
                className={cn(hash === "#products" ? "active" : "")}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={cn(hash === "#contact" ? "active" : "")}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-2 ml-8">
            <Label htmlFor="dark-mode">
              <Sun />
            </Label>
            <Switch
              id="dark-mode"
              onCheckedChange={(val: boolean) => toggleDarkMode(val)}
            />
            <Label htmlFor="dark-mode">
              <Moon />
            </Label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
