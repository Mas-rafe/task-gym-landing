import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full flex items-center justify-between   z-30">

      {/* Logo */}
      <div className="bg-white">
        <Image
          src="/logo.png"
          alt="gym"
          width={126}
          height={126}
          className=" pl-2 rounded-3xl bg-white object-contain"
        />
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center  gap-8 border border-white px-6 py-6 w-2xl mr-70 rounded-full">
        <p>Home</p>
        <p>Our gym location</p>

        {/* Search */}
        <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm px-2"
          />
          🔍
        </div>
      </div>

      {/* Register Button */}
      <Link href="/auth/register">
      <button className="text-2xl bg-[#71AC16] mr-10  rounded-full font-semibold h-12 w-40 lg:h-28 lg:w-xs">
        REGISTER
      </button>
      </Link>
    </nav>
  );
};

export default Navbar;