// Задание 2
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)
/*let user = prompt('Ваше имя:');
alert('Привет, ' + user);

// Задание 3
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.
let number = prompt('Запишите число:');
let degree = prompt('Степень:');
console.log(number ** degree);

// Задание 5
// Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let name = prompt('Ваше имя?');
if (name === 'hidden') {
	name = 'visible';
} else {
	name = 'hidden';
};
console.log(name);

// Задание 6
// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let num = 20;
if (num === 0) {
	num = 1;
} else if (num < 0) {
	num = 'less then zero';
} else if (num > 0) {
	num = num * 10;
} else {
	num = 'invalid value';
}
console.log(num);

// Задание 7
// Запросите у пользователя число и запишите его в переменную. 
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.
let figure = prompt('Введите цифру:');
let result;
if (figure < 5) {
	result = '0';
} else if (figure > 5) {
	result = '1';
} else {
	result = '5';
}
console.log(result);
*/

// Задание 8
// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел
let firstNum = prompt('Введите число:');
let secondNum = prompt('Введите число:');
let firstNumber = Number(firstNum);
let secondNumber = Number(secondNum)
if (firstNumber > secondNumber) {
	console.log('Большее число: ' + firstNumber);
} else if (firstNum < secondNum) {
	console.log('Большее число: ' + secondNumber);
} else {
	console.log('Числа равны!');
}

// Задание 9
// Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.
let num1 = prompt('Введите первое число: ');
let num2 = prompt('Введите второе число: ');
let result1 = num1 % num2;
let result2 = num1 / num2;
if (num1 % num2) {
	console.log('Не кратное! Остаток: ' + result1);
} else if (num1 / num2) {
	console.log('Кратное! Ответ: ' + result2);
} else {
	console.log('Неверное значение!');
}

// Задание 10
// Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).
let mark = prompt('Введите ваш средний балл: ');
if (1.0 <= mark && mark <= 4.0) {
	console.log("Двоечник, иди учись!");
} else if (4.1 <= mark && mark <= 8.0) {
	console.log("Неплохо, но давай еще поднажмем!");
} else if (8.1 <= mark && mark <= 10) {
	console.log("Ого, да ты настоящий отличник!");
} else {
	console.log('Да ты походу очень тупой!');
}

// Задание 11
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.
let examMark = prompt('Ваш балл за экзамен: ');
let projects = prompt('Количество выполняемых проектов: ');
if (90.0 <= examMark && examMark <= 100.0 && projects >= 10) {
	console.log('Общий выпускной балл: ' + 100);
} else if (75.0 <= examMark && examMark <= 100.0 && projects >= 5 && projects <= 9) {
	console.log('Общий выпускной балл: ' + 90)
} else if (50.0 <= examMark && examMark <= 100.0 && projects >= 2 && projects <= 4) {
	console.log('Общий выпускной балл: ' + 75)
} else {
	console.log('Общий выпускной балл: ' + 0)
};

// Задание 12
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.


let days = prompt('На сколько дней вы хотите арендовать автомобиль?');
if (1 <= days && days < 3) {
	alert('Цена аренды: ' + (days * 40) + '$');
} else if (3 <= days && days < 7) {
	alert('Цена аренды: ' + ((days * 40) - 20) + '$');
} else if (7 <= days) {
	alert('Цена аренды: ' + ((days * 40) - 50) + '$');
} else {
	alert('Неверное значение!');
}