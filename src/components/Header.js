import "../styles/Header.css"
const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <button className="menu__button">Home</button>
        <button className="menu__button">Card</button>
        <button className="menu__button">Pay</button>
        <button className="menu__button">Feedback</button>
      </div>
    </header>
  );
};
export default Header;
