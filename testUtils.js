function expect(reason, value, expected) {
  if(value !== expected) {
    console.info(`\u274C ${reason}`);
    console.error(`Error: Expected ${expected}, got: ${value}`);
    process.exit(-1);
  } else {
    console.info(`\u2705 ${reason}`);
  }
}

module.exports = {
  expect
};