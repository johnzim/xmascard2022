const Main = () => {
  return (
    <div className={"container"}>
      <div className={"background"} />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div className={"card"}>
      <CardContent />
    </div>
  );
};

const CardContent = () => {
  const [openCard, setOpenCard] = React.useState(false);

  const outerCardClassnames = ["outer-cover", "card-size"];
  const outerCardBackClassNames = ["outer-cover-back", "card-size"];

  if (openCard) {
    outerCardClassnames.push("open");
    outerCardBackClassNames.push("open");
  }

  return (
    <React.Fragment>
      <div className={"card-backing card-size"}></div>
      <div className={outerCardBackClassNames.join(" ")} />
      <div className={outerCardClassnames.join(" ")}>
        <div
          className={"cover-gloss"}
          onClick={() => {
            setOpenCard(true);
          }}
        />
        <img src={"vera-christmas-pic.jpg"} />
        <div className={"cover-text"}></div>
      </div>
    </React.Fragment>
  );
};

const domContainer = document.querySelector("#react-container");
const root = ReactDOM.createRoot(domContainer);
root.render(<Main />);

export default Main;
