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
  const [removeDelay, setRemoveDelay] = React.useState(false);

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
      <Photos removeDelay={removeDelay} />
      <div className={outerCardClassnames.join(" ")}>
        <div
          className={"cover-gloss"}
          onClick={() => {
            setOpenCard(true);
            setTimeout(() => {
              setRemoveDelay(true);
            }, 1000);
          }}
        />
        <img src={"vera-christmas-pic.jpg"} />
        <div className={"cover-text"}></div>
      </div>
    </React.Fragment>
  );
};

const Photos = ({ removeDelay }) => {
  const [selected, setSelected] = React.useState(null);

  return (
    <div className={`photos`}>
      <Photo
        imgSrc={"bigimage.jpg"}
        selected={selected}
        removeDelay={removeDelay}
        setSelected={setSelected}
      />
      <Photo
        imgSrc={"bigimage2.jpg"}
        selected={selected}
        removeDelay={removeDelay}
        setSelected={setSelected}
      />
      <Photo
        imgSrc={"bigimage3.jpg"}
        selected={selected}
        removeDelay={removeDelay}
        setSelected={setSelected}
      />
    </div>
  );
};

const Photo = ({ imgSrc, selected, setSelected, removeDelay }) => {
  const classes = ["photo", "photo-size"];
  if (imgSrc === selected) {
    classes.push("selected");
  }
  if (removeDelay) {
    classes.push("remove-delay");
  }
  return (
    <div
      className={classes.join(" ")}
      onClick={() => {
        if (selected === imgSrc) {
          setSelected(null);
        } else {
          setSelected(imgSrc);
        }
      }}
    >
      <img src={imgSrc} />
    </div>
  );
};

const domContainer = document.querySelector("#react-container");
const root = ReactDOM.createRoot(domContainer);
root.render(<Main />);

export default Main;
