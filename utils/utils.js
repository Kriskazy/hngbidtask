const { createHash } = require("crypto");

const strToList = (obj) => {
  let newObj = obj.split(";").map((item) => {
    let [key, value] = item.split(":");
    return { type: key, value: value };
  });
  return newObj;
};

function hash(string) {
  return createHash("sha256").update(string).digest("hex");
}

module.exports = {
  strToList,
  hash,
};
