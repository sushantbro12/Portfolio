import { useTheme } from "../context/ThemeContext";
import SideBar from "./SideBar";

const Contacts = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full p-4 pb-16 mt-5 ${
        isDarkMode ? "bg-[#1a1b26] text-white" : "bg-white text-gray-900"
      }`}
      style={{ minHeight: "calc(100vh - 140px)" }}
    >
      <div className="flex flex-col justify-center items-center mx-auto">
        <form
          action="https://getform.io/f/a4d115ce-e49c-44fd-a9b0-1319c96e6c7c"
          method="POST"
          className={`flex flex-col w-full md:w-1/2 p-8 rounded-lg shadow-lg mt-9 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-2xl font-bold text-center mb-6 ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Contact Me
          </h2>

          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            aria-label="Name"
            className={`p-4 mb-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              isDarkMode
                ? "bg-gray-800 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-800"
            }`}
            required
          />

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            aria-label="Email"
            className={`p-4 mb-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              isDarkMode
                ? "bg-gray-800 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-800"
            }`}
            required
          />

          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            aria-label="Message"
            rows="5"
            className={`p-4 mb-6 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              isDarkMode
                ? "bg-gray-800 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-800"
            }`}
            required
          ></textarea>

          <button
            type="submit"
            className="text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Let's Talk
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Contacts;
