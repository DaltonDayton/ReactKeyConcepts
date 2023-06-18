const Header = (props) => {
  return (
    <header>
      <img src={props.image} alt={props.altText} />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;
