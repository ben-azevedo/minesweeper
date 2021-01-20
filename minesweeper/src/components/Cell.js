function Cell(props) {
  const cellStyle = {
    style: {
      background: "red",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid black",
      width: 30,
      height: 30,
    },
  };

  return (
    <div
      onClick={(e) => props.handleReveal(e, props.info.x, props.info.y)}
      onContextMenu={(e) => props.handleFlag(e, props.info.x, props.info.y)}
      style={cellStyle.style}
    >
      {props.info.revealed ? props.info.value : ""}
    </div>
  );
}

export default Cell;
