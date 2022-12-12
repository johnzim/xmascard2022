var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Main = function Main() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("div", { className: "background" }),
    React.createElement(Card, null)
  );
};

var Card = function Card() {
  return React.createElement(
    "div",
    { className: "card" },
    React.createElement(CardContent, null)
  );
};

var CardContent = function CardContent() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openCard = _React$useState2[0],
      setOpenCard = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      removeDelay = _React$useState4[0],
      setRemoveDelay = _React$useState4[1];

  var outerCardClassnames = ["outer-cover", "card-size"];
  var outerCardBackClassNames = ["outer-cover-back", "card-size"];

  if (openCard) {
    outerCardClassnames.push("open");
    outerCardBackClassNames.push("open");
  }

  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", { className: "card-backing card-size" }),
    React.createElement("div", { className: outerCardBackClassNames.join(" ") }),
    React.createElement(Photos, { removeDelay: removeDelay }),
    React.createElement(
      "div",
      { className: outerCardClassnames.join(" ") },
      React.createElement("div", {
        className: "cover-gloss",
        onClick: function onClick() {
          setOpenCard(true);
          setTimeout(function () {
            setRemoveDelay(true);
          }, 1000);
        }
      }),
      React.createElement("img", { src: "vera-christmas-pic.jpg" }),
      React.createElement("div", { className: "cover-text" })
    )
  );
};

var Photos = function Photos(_ref) {
  var removeDelay = _ref.removeDelay;

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selected = _React$useState6[0],
      setSelected = _React$useState6[1];

  return React.createElement(
    "div",
    { className: "photos" },
    React.createElement(Photo, {
      imgSrc: "bigimage.jpg",
      selected: selected,
      removeDelay: removeDelay,
      setSelected: setSelected
    }),
    React.createElement(Photo, {
      imgSrc: "bigimage2.jpg",
      selected: selected,
      removeDelay: removeDelay,
      setSelected: setSelected
    }),
    React.createElement(Photo, {
      imgSrc: "bigimage3.jpg",
      selected: selected,
      removeDelay: removeDelay,
      setSelected: setSelected
    })
  );
};

var Photo = function Photo(_ref2) {
  var imgSrc = _ref2.imgSrc,
      selected = _ref2.selected,
      setSelected = _ref2.setSelected,
      removeDelay = _ref2.removeDelay;

  var classes = ["photo", "photo-size"];
  if (imgSrc === selected) {
    classes.push("selected");
  }
  if (removeDelay) {
    classes.push("remove-delay");
  }
  return React.createElement(
    "div",
    {
      className: classes.join(" "),
      onClick: function onClick() {
        if (selected === imgSrc) {
          setSelected(null);
        } else {
          setSelected(imgSrc);
        }
      }
    },
    React.createElement("img", { src: imgSrc })
  );
};

var domContainer = document.querySelector("#react-container");
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Main, null));

export default Main;