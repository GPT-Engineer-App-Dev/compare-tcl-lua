import { Home, CodeCompare } from "lucide-react";
import Index from "./pages/Index.jsx";
import Comparison from "./pages/Comparison.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Comparison",
    to: "/comparison",
    icon: <CodeCompare className="h-4 w-4" />,
    page: <Comparison />,
  },
];