 let numbers = [1, 2, 3, 4, 5];
 let sumOfSquare = 0;

 for (let i = 0; i < numbers.length; i++) {
    sumOfSquare += numbers[i] ** 2;
 }

 console.log("сумма квадратов эдементов массива:", sumOfSquare);