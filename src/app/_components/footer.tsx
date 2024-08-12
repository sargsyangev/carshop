import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../../../public/footer_logo.png";

function Footer() {
  return (
    <footer className=" w-4/5 h-16 flex justify-between items-center border-t-black dark:border-t-gray-300 border-t max-md:flex-col max-md:h-80">
      <div className="relative w-36 h-4/5">
        <Image
          priority
          style={{ objectFit: "cover" }}
          fill
          src={FooterLogo}
          color="black"
          alt="Logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-1/2 h-full text-txtBaseColor flex justify-end gap-5 items-center mr-3 max-xl:w-2/3 max-md:flex-col ">
        <Link href="/about" className=" hover:text-blue-300">
          About project
        </Link>
        <Link href="/rules" className=" hover:text-blue-300">
          Rules of use
        </Link>
        <Link href="/advertisement" className=" hover:text-blue-300">
          Advertisement
        </Link>
        <Link href="/contact" className=" hover:text-blue-300">
          Contact
        </Link>
        <Link href="/help" className=" hover:text-blue-300">
          Help
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
