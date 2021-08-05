import Link from 'next/link';
import AutoMenu from '../Menu/Menu';
import TopBar from './TopBar';

export default function AutoHeader() {
  return (
    <header className="w-full flex flex-col z-20 h-30 fixed bg-white shadow-md border bg-tertiary">
      <TopBar />
      <nav className="mt-3 py-2 w-full h-full flex items-center ">
     <AutoMenu />
      </nav>
    </header>
  )
}