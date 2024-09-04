type HeaderProps = {
  title: string;
  total: number;
};

function Header({ title, total }: HeaderProps) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <span>Total Number of Tasks: {total}</span>
    </header>
  );
}

export default Header;