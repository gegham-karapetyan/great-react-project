
const idGenerator = (function () {
  let count = 1;
  return function () {
    return ++count;
  };
})();

export default idGenerator