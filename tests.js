const { isValidUrl } = require("./utils");
const assert = require("assert");

assert.strictEqual(isValidUrl("https://google.com"), true);
assert.strictEqual(isValidUrl("invalid_url"), false);

console.log("All tests passed!");
