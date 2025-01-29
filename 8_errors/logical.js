const logicalError = () => {
  let a = 10;
  if (a == 11) {
    console.log(a);
  } else {
    console.log("num is  10");
  }
}
module.exports = logicalError;