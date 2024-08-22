import Link from "next/link";

const Header = () => (
  <header className="px-4 py-10 text-white">
    <nav className="flex justify-around">
      <div className="flex flex-col">
        <Link
          href="/"
          className="relative  p-2 hover:text-green-400 group transform transition-transform duration-500 ease-out"
        >
          <span className="absolute inset-0 border border-transparent transition-all duration-500 ease-out group-hover:border-green-400 group-hover:scale-x-100 scale-x-0 origin-center"></span>
          <span className="relative block group-hover:translate-x-2 transition-transform duration-500 ease-out">
            {"//01. <Home/>"}
          </span>
        </Link>
        <Link
          href="/portfolio"
          className="relative p-2 hover:text-green-400 group transform transition-transform duration-500 ease-out"
        >
          <span className="absolute inset-0 border border-transparent transition-all duration-500 ease-out group-hover:border-green-400 group-hover:scale-x-100 scale-x-0 origin-center"></span>
          <span className="relative block group-hover:translate-x-2 transition-transform duration-500 ease-out">
            {"//02. <Portfolio/>"}
          </span>
        </Link>
      </div>
      <span className="text-5xl font-bold">.GZ</span>
      <div className="flex flex-col">
        <Link
          href="/press"
          className="relative p-2 hover:text-green-400 group transform transition-transform duration-500 ease-out"
        >
          <span className="absolute inset-0 border border-transparent transition-all duration-500 ease-out group-hover:border-green-400 group-hover:scale-x-100 scale-x-0 origin-center"></span>
          <span className="relative block group-hover:translate-x-2 transition-transform duration-500 ease-out">
            {"//03. <Press/>"}
          </span>
        </Link>
        <Link
          href="/contact"
          className="relative p-2 hover:text-green-400 group transform transition-transform duration-500 ease-out"
        >
          <span className="absolute inset-0 border border-transparent transition-all duration-500 ease-out group-hover:border-green-400 group-hover:scale-x-100 scale-x-0 origin-center"></span>
          <span className="relative block group-hover:translate-x-2 transition-transform duration-500 ease-out">
            {"//04. <Contact/>"}
          </span>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
