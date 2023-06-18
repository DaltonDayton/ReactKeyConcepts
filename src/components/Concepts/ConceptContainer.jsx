const ConceptContainer = (props) => {
  return (
    <ul id="concepts">
      <li className="concept">
        <img src={props.concepts[0].image} alt="TODO: TITLE" />
        <h2>TODO: TITLE</h2>
        <p>TODO: DESCRIPTION</p>
      </li>

      <li className="concept">
        <img src={props.concepts[1].image} alt="TODO: TITLE" />
        <h2>TODO: TITLE</h2>
        <p>TODO: DESCRIPTION</p>
      </li>

      <li className="concept">
        <img src={props.concepts[2].image} alt="TODO: TITLE" />
        <h2>TODO: TITLE</h2>
        <p>TODO: DESCRIPTION</p>
      </li>
    </ul>
  );
};

export default ConceptContainer;
