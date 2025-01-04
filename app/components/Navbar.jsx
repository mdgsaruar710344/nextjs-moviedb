import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex gap-10">
      <Link href={'/'}>
      <Image 
      src='/logo.svg'
      alt='movie-title'
      width={100}
      height={100}

      ></Image>
       </Link>
      <Link href={'/'}>Home</Link>
      <Link href={'/compare'}>Compare </Link>
      <Link href={'/wishlist'}>WishList</Link>
    </div>
  );
};

export default Navbar;