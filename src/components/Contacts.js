import { useTheme } from "../context/ThemeContext";
import SideBar from "./SideBar";

const Contacts = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      style={{ height: "calc(100vh - 140px)" }}
      name="contact"
      className={`w-full  p-4 pb-20 mt-5 ${
        isDarkMode ? "bg-[#1a1b26] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-10">
          <h1 className="py-6 text-3xl flex justify-center">
            Submit the form below to get in touch with me
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a4d115ce-e49c-44fd-a9b0-1319c96e6c7c"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`p-2 border-2 rounded-md focus:outline-none ${
                isDarkMode
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className={`my-4 p-2 border-2 rounded-md focus:outline-none ${
                isDarkMode
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className={`p-2 border-2 rounded-md focus:outline-none ${
                isDarkMode
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
            ></textarea>

            <button className="text-white font-bold bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Contacts;
