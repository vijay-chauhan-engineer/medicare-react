export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto w-full">
      <div className="max-w-7xl mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 Medic. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
