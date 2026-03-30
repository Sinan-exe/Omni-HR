function MainHeader({ Links, activeLink, setActiveLink }) {
  return (
    <div className="bg-muted text-muted-foreground border-b border-border pt-4">
      <ul className="flex gap-6 pl-4">
        {Links.map((link) => (
          <li
            key={link}
            onClick={() => setActiveLink(link)}
            className={`pb-2 cursor-pointer border-b-[3px] hover:font-medium ${
              activeLink === link
                ? "border-accent text-foreground font-medium"
                : "border-transparent"
            }`}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainHeader;
