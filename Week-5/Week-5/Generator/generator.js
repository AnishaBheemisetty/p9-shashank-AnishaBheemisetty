function* nextNatural() {
  const naturalNumber = 1;

  // Infinite Generation
  while (true) {
    yield naturalNumber++;
  }
}

// Calling the Generate Function
const gen = nextNatural();

// Loop to print the first
// 10 Generated number
for (const i = 0; i < 10; i++) {
  // Generating Next Number
  console.log(gen.next().value);
}
