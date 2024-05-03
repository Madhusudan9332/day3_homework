import Image from "next/image";
// console.log(svg)
const Header = () => {
  // Array of navigation links
  const navLinks = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Services", href: "#" },
    { text: "Contact", href: "#" }
  ];

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/reactLogo.svg"
          alt="Next.js Logo"
          width={75}
          height={15}
          priority
        />
          {/* <img src={NextLogo} alt="Logo" className="h-10 mr-4" /> */}
          <h1 className="text-white text-4xl font-bold">React</h1>
        </div>
        <nav>
          <ul className="flex">
            {navLinks.map((link, index) => (
              <li key={index} className="mr-6">
                <span className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">{link.text}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
