const capitalize = require("../src/capitalize");

if (capitalize("hello") !== "Hello") {
  throw new Error("Not right result!");
}
if (capitalize("") !== "") {
  throw new Error("Not right result!");
}
