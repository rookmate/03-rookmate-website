import Link from 'next/link';
import styles from './NavMenu.module.css';

export default function NavMenu() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a className="hover:underline" href="#">
            About
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Work
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
