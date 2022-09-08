//Aufgabe 1
function specialMultiply(a, b) {
  if (b == undefined) {
    const mal = (c) => {
      return a * c;
    };
    return mal;
  } else {
    return a * b;
  }
}

console.log(specialMultiply(3,4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // function(){}....

/* 

//Alternative Lösung

function specialMultiply(a, b) {
    if (arguments.length === 2) return a * b;
    else {
    return function (b) {
    return a * b;
    };
    }
    }
    
    console.log(specialMultiply(3, 4));
    console.log(specialMultiply(4)(3));
    console.log(specialMultiply(3)); */





//aufgabe 2

/* function guessingGame(amount) {
  let answer = Math.floor(Math.random() * 10);
  console.log(answer);
  let guesses = 0;
  return (closure = (guess) => {
    guesses++;
    if (guesses < amount) {
      if (guess === answer) {
        return "You got it!";
      } else if (guess < answer) {
        return "You're too low!";
      } else {
        return "You're too high!";
      }
    } else if (guesses === amount) {
      if (guess === answer) {
        return `You got it`;
      } else return `No more guesses the answer was ${answer}`;
    } else {
      return `you ara all done playing`;
    }
  });
}

const game = guessingGame(9);
console.log(game(1)); // "You're too low!"
console.log(game(8)); // "You're too high!"
console.log(game(5)); // "You're too low!"
console.log(game(7)); // "You got it!"
console.log(game(1)); // "You are all done playing!"
const game2 = guessingGame(3);
console.log(game2(5)); // "You're too low!"
console.log(game2(3)); // "You're too low!"
console.log(game2(1)); // "No more guesses the answer was 0"
console.log(game2(1)); // "You are all done playing!"
 */





