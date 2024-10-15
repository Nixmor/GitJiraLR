import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функції для кожної задачі

function reduceMaxByFive(a: number, b: number, c: number): void {
    let max = Math.max(a, b, c);
    max -= 5;
    console.log("Максимальне число зменшене на 5:", max);
}

function cubes(): void {
    for (let i = 25; i <= 125; i++) {
        console.log(`${i}^3 = ${Math.pow(i, 3)}`);
    }
}

function compareStrings(A: string, B: string): void {
    const lengthA = A.length;
    const lengthB = B.length;
    const difference = Math.abs(lengthA - lengthB);

    if (lengthA > lengthB) {
        console.log(`У рядку A більше символів на ${difference}`);
    } else if (lengthB > lengthA) {
        console.log(`У рядку B більше символів на ${difference}`);
    } else {
        console.log('Рядки мають однакову кількість символів.');
    }
}

function substringFromЇToSpace(str: string): void {
    const startIndex = str.indexOf('ї');
    const endIndex = str.indexOf(' ', startIndex);

    if (startIndex === -1) {
        console.log("Буква 'ї' не знайдена.");
    } else {
        const substring = str.substring(startIndex, endIndex);
        console.log("Підстрока:", substring);
    }
}

function rearrangeArray(M: number[]): void {
    const positive = M.filter(x => x >= 0);
    const negative = M.filter(x => x < 0);
    const R = positive.concat(negative);
    console.log("Розташовані елементи:", R);
}

function findMaxOfMins(S: number[][]): void {
    const minValues = S.map(row => Math.min(...row));
    const maxOfMins = Math.max(...minValues);
    const rowIndex = minValues.indexOf(maxOfMins);

    console.log("Номер рядка з максимальним мінімумом:", rowIndex + 1);
    console.log("Максимальний з мінімальних елементів:", maxOfMins);
}

// Меню
function showMenu(): void {
    console.log("\nВиберіть задачу:");
    console.log("1. Зменшити максимальне число з трьох на 5");
    console.log("2. Обчислити куби чисел від 25 до 125");
    console.log("3. Порівняти довжини двох рядків");
    console.log("4. Вивести підстроку від букви 'ї' до пробіла");
    console.log("5. Розташувати позитивні і негативні елементи масиву (Приклад вводу: 3 -1 4 -5 2 -8)");
    console.log("6. Знайти максимальний з мінімальних елементів матриці (Приклад вводу: 1 2 3; 4 0 6; -1 9 8)");
    console.log("7. Вийти\n");

    rl.question('Ваш вибір: ', (choice) => {
        switch (choice) {
            case '1':
                rl.question('Введіть три числа (a, b, c) через пробіл: ', (input) => {
                    const [a, b, c] = input.split(' ').map(Number);
                    reduceMaxByFive(a, b, c);
                    showMenu();
                });
                break;
            case '2':
                cubes();
                showMenu();
                break;
            case '3':
                rl.question('Введіть рядок A: ', (A) => {
                    rl.question('Введіть рядок B: ', (B) => {
                        compareStrings(A, B);
                        showMenu();
                    });
                });
                break;
            case '4':
                rl.question('Введіть рядок: ', (str) => {
                    substringFromЇToSpace(str);
                    showMenu();
                });
                break;
            case '5':
                rl.question('Введіть елементи масиву через пробіл (Приклад: 3 -1 4 -5 2 -8): ', (input) => {
                    const M = input.split(' ').map(Number);
                    rearrangeArray(M);
                    showMenu();
                });
                break;
            case '6':
                rl.question('Введіть матрицю (рядки через крапку з комою, елементи через пробіл) (Приклад: 1 2 3; 4 0 6; -1 9 8): ', (input) => {
                    const S = input.split(';').map(row => row.trim().split(' ').map(Number));
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
