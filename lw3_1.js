"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Функції для кожної задачі
function reduceMaxByFive(a, b, c) {
    var max = Math.max(a, b, c);
    max -= 5;
    console.log("Максимальне число зменшене на 5:", max);
}
function cubes() {
    for (var i = 25; i <= 125; i++) {
        console.log("".concat(i, "^3 = ").concat(Math.pow(i, 3)));
    }
}
function compareStrings(A, B) {
    var lengthA = A.length;
    var lengthB = B.length;
    var difference = Math.abs(lengthA - lengthB);
    if (lengthA > lengthB) {
        console.log("\u0423 \u0440\u044F\u0434\u043A\u0443 A \u0431\u0456\u043B\u044C\u0448\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 \u043D\u0430 ".concat(difference));
    }
    else if (lengthB > lengthA) {
        console.log("\u0423 \u0440\u044F\u0434\u043A\u0443 B \u0431\u0456\u043B\u044C\u0448\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 \u043D\u0430 ".concat(difference));
    }
    else {
        console.log('Рядки мають однакову кількість символів.');
    }
}
function substringFromЇToSpace(str) {
    var startIndex = str.indexOf('ї');
    var endIndex = str.indexOf(' ', startIndex);
    if (startIndex === -1) {
        console.log("Буква 'ї' не знайдена.");
    }
    else {
        var substring = str.substring(startIndex, endIndex);
        console.log("Підстрока:", substring);
    }
}
function rearrangeArray(M) {
    var positive = M.filter(function (x) { return x >= 0; });
    var negative = M.filter(function (x) { return x < 0; });
    var R = positive.concat(negative);
    console.log("Розташовані елементи:", R);
}
function findMaxOfMins(S) {
    var minValues = S.map(function (row) { return Math.min.apply(Math, row); });
    var maxOfMins = Math.max.apply(Math, minValues);
    var rowIndex = minValues.indexOf(maxOfMins);
    console.log("Номер рядка з максимальним мінімумом:", rowIndex + 1);
    console.log("Максимальний з мінімальних елементів:", maxOfMins);
}
// Меню
function showMenu() {
    console.log("\nВиберіть задачу:");
    console.log("1. Зменшити максимальне число з трьох на 5");
    console.log("2. Обчислити куби чисел від 25 до 125");
    console.log("3. Порівняти довжини двох рядків");
    console.log("4. Вивести підстроку від букви 'ї' до пробіла");
    console.log("5. Розташувати позитивні і негативні елементи масиву (Приклад вводу: 3 -1 4 -5 2 -8)");
    console.log("6. Знайти максимальний з мінімальних елементів матриці (Приклад вводу: 1 2 3; 4 0 6; -1 9 8)");
    console.log("7. Вийти\n");
    rl.question('Ваш вибір: ', function (choice) {
        switch (choice) {
            case '1':
                rl.question('Введіть три числа (a, b, c) через пробіл: ', function (input) {
                    var _a = input.split(' ').map(Number), a = _a[0], b = _a[1], c = _a[2];
                    reduceMaxByFive(a, b, c);
                    showMenu();
                });
                break;
            case '2':
                cubes();
                showMenu();
                break;
            case '3':
                rl.question('Введіть рядок A: ', function (A) {
                    rl.question('Введіть рядок B: ', function (B) {
                        compareStrings(A, B);
                        showMenu();
                    });
                });
                break;
            case '4':
                rl.question('Введіть рядок: ', function (str) {
                    substringFromЇToSpace(str);
                    showMenu();
                });
                break;
            case '5':
                rl.question('Введіть елементи масиву через пробіл (Приклад: 3 -1 4 -5 2 -8): ', function (input) {
                    var M = input.split(' ').map(Number);
                    rearrangeArray(M);
                    showMenu();
                });
                break;
            case '6':
                rl.question('Введіть матрицю (рядки через крапку з комою, елементи через пробіл) (Приклад: 1 2 3; 4 0 6; -1 9 8): ', function (input) {
                    var S = input.split(';').map(function (row) { return row.trim().split(' ').map(Number); });
                    findMaxOfMins(S);
                    showMenu();
                });
                break;
            case '7':
                console.log('Вихід з програми.');
                rl.close();
                break;
            default:
                console.log('Неправильний вибір. Спробуйте знову.');
                showMenu();
                break;
        }
    });
}
// Показуємо меню вперше
showMenu();
