function areaPolygon({ polygon, base, height, radio }) {
  const figure = polygon.toLowerCase();

  if (figure === "triangle") {
    return console.log(areaTriangle(base, height));
  }

  if (figure === "square") {
    return console.log(areaSquare(base));
  }

  if (figure === "circle") {
    return console.log(areaCircle(radio));
  }
}

function areaTriangle(base, height) {
  return (base * height) / 2;
}

function areaCircle(radio) {
  return Math.PI * Math.pow(radio, 2);
}

function areaSquare(base) {
  return Math.pow(base, 2);
}

areaPolygon({ polygon: "Circle", radio: 5 });
areaPolygon({ polygon: "triAngle", base: 8, height: 5 });
areaPolygon({ polygon: "squarE", base: 5 });
