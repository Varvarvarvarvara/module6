//1 задание 


function counter() {

  let zeros = 0;
  let strs = 0;
  let countables = 0;
  let uncountables = 0;
  let nulls = 0;

  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 'dog', 'cat', 'beer'];
  for (i = 0; i < array.length; i++) {

    if (typeof array[i] == 'string') {
      strs++;
    } else if (array[i] == null) {
      nulls++;
    } else if (array[i] == 0) {
      zeros++;
    } else if (array[i] % 2 === 0) {
      countables++;
    } else {
      uncountables++;
    }
  }


  alert(`Нулей - ${zeros} \n Строк - ${strs} \n Нуллов - ${nulls} \n Четных - ${countables} \n Нечетных - ${uncountables}`)


}
counter()


//2 задание
function prime(a) {
  let primebool;
  if (typeof a == 'number' && !isNaN(a)) {
    if (a <= 1000) {
      for (let i = 2; i < 10; i++) {
        if (a % i != 0 && a != i) {
          primebool = true;
        } else if (a != i) {
          primebool = false;
          return 'Это не простое число';
        }
      }
      if (primebool == true) {
        return 'Это простое число';
      }
    } else {
      return 'Число больше 1000';
    }
  } else {
    return 'Это не число';
  }
}

number = +prompt('Введите число:');

console.log(prime(number));

//3 задание 
function func1(a) {
  return function (b) {
    return a + b;
  }
}
let resultFunc = func1(2);
console.log(resultFunc(3));
//4 задание
function logNumbers(a, b) {
  let current = a;
  let timerId = setInterval(function () {
    console.log(current);
    if (current == b) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
logNumbers(2, 28);


//5 задание 
const exponentiation = (x, n) => {
  result = Math.pow(x, n);
  console.log(result);
}
exponentiation(2, 8);