import NavBar from "./components/NavBar";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`h-screen w-screen ${
        isDarkMode ? "bg-[#1a1b26] text-white" : "bg-white text-black"
      }`}
    >
      <NavBar />
    </div>
  );
}
