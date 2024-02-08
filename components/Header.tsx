import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-4 bg-gray-900">
      <div className="flex items-center space-x-4">
        <Image
          alt="Profile Picture"
          className="rounded-full h-10 w-10 object-cover"
          width="40"
          height="40"
          src="/pfp.jpg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
        />
        <Link href="/" scroll={false}>
          <h1 className="text-3xl font-bold">Rookmate</h1>
        </Link>
      </div>
      <NavMenu />
    </header>
  );
}
