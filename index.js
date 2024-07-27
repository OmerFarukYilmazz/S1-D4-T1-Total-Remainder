function totalRemainder(array) {
  /* kodlar buraya */
  let result = 0;
  if (array.length < 1) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    result += array[i] % 3;
  }
  return result;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = totalRemainder;
