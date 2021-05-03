let num = [15, -12, 8];
if (num[0] > num[1] && num[0] > num[2]) {
  console.log(`max ${num[0]}`);
  if (num[1] > num[2]) {
    console.log(`mid ${num[1]}`);
    console.log(`min ${num[2]}`);
  } else {
    console.log(`mid ${num[2]}`);
    console.log(`min ${num[1]}`);
  }
} else if (num[1] > num[0] && num[1] > num[2]) {
  console.log(`max ${num[1]}`);
  if (num[0] > num[2]) {
    console.log(`mid ${num[0]}`);
    console.log(`min ${num[2]}`);
  } else {
    console.log(`mid ${num[2]}`);
    console.log(`min ${num[0]}`);
  }
} else if (num[2] > num[0] && num[2] > num[1]) {
  console.log(`max ${num[2]}`);
  if (num[1] > num[0]) {
    console.log(`mid ${num[1]}`);
    console.log(`min ${num[0]}`);
  } else {
    console.log(`mid ${num[0]}`);
    console.log(`min ${num[1]}`);
  }
}
