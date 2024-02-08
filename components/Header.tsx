import Link from 'next/link';
import NavMenu from './NavMenu';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-4 bg-gray-900">
      <Link href="/" scroll={false}>
        <h1 className="text-3xl font-bold">Rookmate</h1>
      </Link>
      <NavMenu />
    </header>
  );
}

