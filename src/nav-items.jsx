import { SplitSquareVertical } from "lucide-react";
import Comparison from "./pages/Comparison.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Comparison",
    to: "/",
    icon: <SplitSquareVertical className="h-4 w-4" />,
    page: <Comparison />,
  },
];