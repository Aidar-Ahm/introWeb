"use strict";

// //Задача 2: Получить от пользователя два числа и вывести в 
// //диалоговое окно сумму значений, которые ввел пользователь,
// //вывод должен выглядеть так (пример): Результат сложения чисел 5 и 2 равен 7.

// const firstNum = Number.parseFloat(prompt("Введите первое число"));
// const secondNum = +prompt("Введите второе число");
// function sum(firstNum, secondNum) {
//     return firstNum + secondNum;
// }
// alert(`Результат сложения чисел ${firstNum} и ${secondNum} равен ${sum(firstNum,secondNum)}`);

// // Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”и кнопками «ОК»,
// // «Отмена», для чего необходимо использовать confirm.- При нажатии на кнопку “ОК” 
// // вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.- При нажатии на кнопку “Отмена”
// // вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

// const result = confirm("Вам хорошо живется?");
// if (result) {
//     alert("Тогда мы идем к вам!");
// } else {
//     alert("Ну вы держитесь там!");
// }


// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.
 
// <script>
// let product = "Бананы";
 
// if (product == "Мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "Бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "Груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//   alert('Нет такого продукта.');
// }
// </script>

// const product = "Бананы";
// switch (product){
//     case "Мандарины":
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case "Бананы":
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     case "Груши":
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта.');
// }

// // Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// // реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// // который записан в четном индексе включая 0.
 
// function getMaxEvenElement(arr) {
//     let max = arr[0];
//     for (let i = 2; i < arr.length; i+=2){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
 
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31


// Один покупатель старинных уникальных часов хочет приобрести для музея 
// двое часов. В магазине у хозяйки есть n разных часов с соответствующими 
// ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой 
// бюджет. Необходимо выяснить получится ли это.

function f(clockArr, money) {
    for(let i = 0; i < clockArr.length; i++){
        for (let k = i+1; k < clockArr.length; k++){
            if((Math.round((clockArr[i] + clockArr[k])*100))/100 == money){
                return true;
            }
        }
    }
    return false;
}
 
console.log(f([8.74, 3.12, 9.50, 2.35], 2.35)); // false
console.log(f([1.1, 4.2, 7.5, 0.4], 8.4)); // false
console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3)); // true