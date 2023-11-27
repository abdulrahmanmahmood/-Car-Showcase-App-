import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
        <Link href="/" className="justify-center items-center">
          <Image src/>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
