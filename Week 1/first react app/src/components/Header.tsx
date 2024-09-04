type HeaderProps = {
    title: string;
    total: number;
  };
  function Header({ title, total }: HeaderProps) {
    return (
      <>
        <header>
          <h1>{title}</h1>
          <span>Items: {total}</span>
        </header>
      </>
    );
  }
  
  export default Header;