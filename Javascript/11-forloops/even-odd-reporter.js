//exercise 1
for (i = 0; i <= 20; i++) {
  if (i % 2) console.log(`${i} is odd`);
  else {
    console.log(`${i} is even`);
  }
}

//exercise 2
for (i = 0; i <= 10; i++) {
  console.log(`${i}x9=${i * 9}`);
}

//exercise 3

for (i = 60; i <= 100; i++) {
  console.log(`Voor ${i} punten krijg je een ${assignGrade(i)}`);
}

function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}
