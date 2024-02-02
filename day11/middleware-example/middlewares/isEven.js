const allowWhenNumberIsEven = (req, res, next) => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);

  if (randomNumber % 2 === 0) {
    console.log("Number is even. So allowing the access.");
    next();
  } else {
    console.log("Number is odd. So access is restricted.");
  }
};

module.exports = allowWhenNumberIsEven;
