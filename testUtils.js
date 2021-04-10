function expect(reason, value, expected) {
  if(value !== expected) {
    console.error(`\u274C ${reason} (Expected ${expected}, got: ${value})`);
  } else {
    console.info(`\u2705 ${reason}`);
  }
}

module.exports = {
  expect
};