export const NavBar = () => {
  const links = [
    { url: '#about', name: 'About' },
    { url: '#skills', name: 'Skills' },
    { url: '#projects', name: 'Projects' },
    { url: '#contact', name: 'Contact' },
  ];

  return (
    <ul className="navBar flex gap-4 text-2xl ">
      {links.map((link) => {
        return (
          <li className="duration-300 hover:scale-110 text-teal-900 hover:text-teal-600">
            <a href={link.url}>{link.name}</a>
          </li>
        );
      })}
    </ul>
  );
};
