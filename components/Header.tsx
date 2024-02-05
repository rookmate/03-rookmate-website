import Link from 'next/link';
import NavMenu from './NavMenu.tsx';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <Link href="/" scroll={false}>
        <h1 className="text-3xl font-bold">Rookmate</h1>
      </Link>
      <NavMenu />
    </header>
  );
}

