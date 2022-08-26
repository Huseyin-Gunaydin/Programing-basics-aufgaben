function findFirstUppercase(str) {
  if (str.length === 0) return str;
  if (str.charAt(0).replace(/[a-z]/g, "") !== "") {
    return str.charAt(0);
  } else {
    return findFirstUppercase(str.substring(1));
  }
}
console.log(findFirstUppercase("sdfkjsdfGHkW"));
