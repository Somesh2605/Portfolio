export default function Navbar() {
  return (
    <nav className="flex justify-end items-center px-6 md:px-16 py-6 text-sm uppercase tracking-widest">
      
      {/* Hide menu on mobile */}
      <ul className="hidden md:flex gap-8">
        <li>
          <a
            href="#about"
            className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-400 pb-1"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-400 pb-1"
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-400 pb-1"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#tech"
            className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-400 pb-1"
          >
            Tech Stack
          </a>
        </li>

        <li>
          <a
            href="#education"
            className="hover:text-gray-400 transition border-b border-transparent hover:border-gray-400 pb-1"
          >
            Education
          </a>
        </li>
      </ul>

    </nav>
  );
}
