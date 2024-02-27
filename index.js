export function joinName(firstName = "", lastName = "") {
  return `${firstName} ${lastName}`;
}

const utils = {
  joinName,
};

module.exports = utils;
