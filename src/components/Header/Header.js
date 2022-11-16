import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header_left"><h2>Sua logo</h2></div>
      <div className="header_center">
        <a href="#cardapio">Cardapio</a>
        <a href="#contatos">Contatos</a>
      </div>
      <div className="header_right">

      </div>
    </header>
  );
};

export default Header;
