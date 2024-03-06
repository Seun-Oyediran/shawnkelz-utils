export function joinName(firstName = "", lastName = "") {
  return `${firstName} ${lastName}`;
}

export function getRandomNumber(limit) {
  const randomIndex = Math.floor(Math.random() * limit);

  return randomIndex;
}

const utils = {
  joinName,
  getRandomNumber,
};

module.exports = utils;
