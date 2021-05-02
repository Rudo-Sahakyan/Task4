let corner1 = [45, 60, 80, 65, 55, 38, 40, 60];
let corner2 = [75, 90, 30, 64, 48, 80, 85, 60];
let arg;
for (i = 0; i < corner1.length; i++) {
  arg = 180 - (corner1[i] + corner2[i]);
  console.log(`${corner1[i]},${corner2[i]} : ${arg}`);
}
