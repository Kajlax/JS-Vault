// AREA OF A TRIANGLE
// Pass in the length of each side to calculate the area.

function areaOfTriangle(a, b, c) {
  const perimeter = (a + b + c) / 2;
  const area = Math.sqrt(
    perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c))
  );

  return area;
}

const x = areaOfTriangle(5, 6, 7);
console.log(x);
