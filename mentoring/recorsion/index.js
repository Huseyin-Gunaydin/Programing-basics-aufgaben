function findFirstUppercase(str) {
  if (str.length === 0) return str;
  if (str.charAt(0).replace(/[a-z]/g, "") !== "") {
    return str.charAt(0);
  } else {
    return findFirstUppercase(str.substring(1));
  }
}
console.log(findFirstUppercase("sdfkjsdfGHkW"));

 //--------------------------------------------------------------------- 

function findUppercase(str) {
  if(str.length === 0) return "Es gibt keine große Buchstaben."

  if(str.charAt(0) === str.charAt(0).toUpperCase()) {
      return str.charAt(0)
  } else {
      return findUppercase(str.substring(1));
  }
  
}
console.log(findUppercase("asHZdkjfalajdjfald"));

 //--------------------------------------------------------------------- 
 
function findFirstUppercase(str) {

  if (str.length === 0) {
    return undefined;
  }
  if (str.charAt(0) === str.charAt(0).toUpperCase()) {
    return str.charAt(0);
  } else {
    return findFirstUppercase(str.substr(1));
  }
}

console.log(findFirstUppercase("cdfjsdfsdfgjkf"));


 //--------------------------------------------------------------------- 



function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(4));

 //--------------------------------------------------------------------- 


const navigation = [
  {
    title: "Gesellschaft",
    children: [
      {
        title: "Bildung",
        children: [
          {
            title: "Bibliotheken",
            children: [
              {
                title: "Bibliothek Köln",
                children: [
                  {
                    title: "Test",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            title: "Pädagogik",
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: "Geschichte",
    children: [],
  },
  {
    title: "Politik",
    children: [],
  },
];

// - Gesellschaft
// - - Bildung
// - - - Bibliotheken
// - - - Pädagogik
// - Geschichte

function displayNavigationTree(tree, level = 0) {
  tree.forEach((item) => {
    console.log("-".repeat(level + 1), item.title);
    displayNavigationTree(item.children, level + 1);
  });
}


displayNavigationTree(navigation);






