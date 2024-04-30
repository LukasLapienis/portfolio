import { NavBar } from './NavBar';
import { ThemeButton } from './ThemeButton';

export const Header = () => {
   return (
      <header className="header fixed top-0 z-10 flex h-20 w-full items-center justify-between bg-gray-400 p-10">
         {/* <ThemeButton /> */}
         <div>logo</div>
         <NavBar />
      </header>
   );
};
