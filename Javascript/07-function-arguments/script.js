var paintWallRed = function () {
  console.log("the wall has been painted red");
};

var paintWall = function (color) {
  console.log("The wall has been painted " + color);
};

paintWall("green");

var paintWalls = function (color1, color2) {
  console.log(
    "The first wall has been painted " +
      color1 +
      " and the second wall has been painted " +
      color2
  );
};

paintWalls("red", "yellow");
