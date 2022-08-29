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

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

function displayNavigationTree(tree, level = 0) {
  tree.forEach((item) => {
    console.log("-".repeat(level + 1), item.title);
    displayNavigationTree(item.children, level + 1);
  });
}

console.log(factorial(4));
displayNavigationTree(navigation);

function findUppercase(str) {
  if (str.length === 0) return "Es gibt keine große Buchstaben.";
  if (str.charAt(0) === str.charAt(0).toUpperCase()) {
    return str.charAt(0);
  } else {
    return findUppercase(str.substring(1));
  }
}

console.log(findUppercase("asdkjfalDajdjhfald"));
