const Header = () => (
  <header className="px-4 py-10 text-white">
    <nav className="flex justify-around">
      <div className="flex flex-col">
        <a
          href="#Hero"
          className="relative p-2 hover:text-green-400 group transform transition-transform duration-500 ease-out"
        >
          <span className="absolute inset-0 border border-transparent transition-all duration-500 ease-out group-hover:border-green-400 group-hover:scale-x-100 scale-x-0 origin-center"></span>
          <span className="relative block group-hover:translate-x-2 transition-transform duration-500 ease-out">
            {"//01. <Home/>"}
          </span>
        </a>
        <a
          href="#Portfolio"
          className="relative p-2 hover:text-green-400 group transform transition-transform duration-500 ease-out"
        >
          <span className="absolute inset-0 border border-transparent transition-all duration-500 ease-out group-hover:border-green-400 group-hover:scale-x-100 scale-x-0 origin-center"></span>
          <span className="relative block group-hover:translate-x-2 transition-transform duration-500 ease-out">
            {"//02. <Portfolio/>"}
          </span>
        </a>
      </div>
      <span className="text-5xl font-bold">.GZ</span>
      <div className="flex flex-col">
        <a
          href="#Technology"
          className="relative p-2 hover:text-green-400 group transform transition-transform duration-500 ease-out"
        >
          <span className="absolute inset-0 border border-transparent transition-all duration-500 ease-out group-hover:border-green-400 group-hover:scale-x-100 scale-x-0 origin-center"></span>
          <span className="relative block group-hover:translate-x-2 transition-transform duration-500 ease-out">
            {"//03. <Skills/>"}
          </span>
        </a>
        <a
          href="#Contact"
          className="relative p-2 hover:text-green-400 group transform transition-transform duration-500 ease-out"
        >
          <span className="absolute inset-0 border border-transparent transition-all duration-500 ease-out group-hover:border-green-400 group-hover:scale-x-100 scale-x-0 origin-center"></span>
          <span className="relative block group-hover:translate-x-2 transition-transform duration-500 ease-out">
            {"//04. <Contact/>"}
          </span>
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
