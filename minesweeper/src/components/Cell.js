function Cell(props) {
  
  const backgroundStyling = (x, y) => {
    if (props.info.revealed) {
      if (props.info.value === "💣") {
        return "#797979";
      } else if ((x % 2 === 0 && y % 2 === 0) || (x % 2 !== 0 && y % 2 !== 0)) {
        return "#c9c9c9";
      } else {
        return "#b9b9b9";
      }
    } else {
      if ((x % 2 === 0 && y % 2 === 0) || (x % 2 !== 0 && y % 2 !== 0)) {
        return "#aad751";
      } else {
        return "#a2d249";
      }
    }
  };

  const numStyling = (num) => {
    const colors = ["blue", "green", "red", "indigo", "maroon", "teal"];
    if (num <= colors.length) {
      return colors[num - 1];
    } else {
      return "black";
    }
  };
  
  const cellStyle = {
    style: {
      background: backgroundStyling(props.info.x, props.info.y),
      color: numStyling(props.info.value),
      fontStyle: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 30,
      height: 30,
    },
  };

  const cellContents = () => {
    if (props.info.revealed) {
      if (props.info.value === 0) {
        return "";
      } else {
        return props.info.value;
      }
    } else if (props.info.flagged && !props.info.revealed) {
      return "✋🏿";
    } else {
      return "";
    }
  }

  return (
    <div
      onClick={(e) => props.handleReveal(e, props.info.x, props.info.y)}
      onContextMenu={(e) => props.handleFlag(e, props.info.x, props.info.y)}
      style={cellStyle.style}
    >
      {cellContents()}
    </div>
  );
}

export default Cell;
