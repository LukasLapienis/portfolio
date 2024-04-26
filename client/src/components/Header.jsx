import { NavBar } from './NavBar';

export const Header = () => {
  return (
    <header className="header fixed top-0 flex justify-between items-center bg-gray-400 h-20 p-10 w-full">
      <div>logo</div>
      <NavBar />
    </header>
  );
};
