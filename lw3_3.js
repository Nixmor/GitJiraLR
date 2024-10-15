var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(surname, name, patronymic) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
    }
    Person.prototype.toString = function () {
        return "".concat(this.surname, " ").concat(this.name, " ").concat(this.patronymic);
    };
    return Person;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(surname, name, patronymic, department) {
        var _this = _super.call(this, surname, name, patronymic) || this;
        _this.department = department;
        return _this;
    }
    return Manager;
}(Person));
var Credit = /** @class */ (function () {
    function Credit(creditAmount, rate, person) {
        this.creditAmount = creditAmount;
        this.rate = rate;
        this.person = person;
    }
    Credit.prototype.toString = function () {
        return "\u041A\u0440\u0435\u0434\u0438\u0442 \u043D\u0430 \u0441\u0443\u043C\u0443: ".concat(this.creditAmount, " \u0433\u0440\u043D, \u0421\u0442\u0430\u0432\u043A\u0430: ").concat(this.rate, "%, \u041F\u043E\u0437\u0438\u0447\u0430\u043B\u044C\u043D\u0438\u043A: ").concat(this.person);
    };
    return Credit;
}());
var Deposit = /** @class */ (function () {
    function Deposit(depositAmount, duration, person) {
        this.depositAmount = depositAmount;
        this.duration = duration;
        this.person = person;
    }
    Deposit.prototype.toString = function () {
        return "\u0414\u0435\u043F\u043E\u0437\u0438\u0442 \u043D\u0430 \u0441\u0443\u043C\u0443: ".concat(this.depositAmount, " \u0433\u0440\u043D, \u0422\u0435\u0440\u043C\u0456\u043D: ").concat(this.duration, " \u043C\u0456\u0441\u044F\u0446\u0456\u0432, \u0412\u043A\u043B\u0430\u0434\u043D\u0438\u043A: ").concat(this.person);
    };
    return Deposit;
}());
var Bank = /** @class */ (function () {
    function Bank() {
        this.credits = [];
        this.deposits = [];
        this.managers = [];
    }
    Bank.prototype.addCredit = function (credit) {
        this.credits.push(credit);
    };
    Bank.prototype.addDeposit = function (deposit) {
        this.deposits.push(deposit);
    };
    Bank.prototype.addManager = function (manager) {
        this.managers.push(manager);
    };
    // Пошук кредиту за ім'ям людини
    Bank.prototype.searchCreditByPersonName = function (name) {
        return this.credits.filter(function (credit) { return credit.person.name === name; });
    };
    // Сортування депозитів за сумою вкладу
    Bank.prototype.sortDepositsByAmount = function () {
        return this.deposits.sort(function (a, b) { return a.depositAmount - b.depositAmount; });
    };
    return Bank;
}());
// Створення даних
var person1 = new Person("Іванов", "Іван", "Іванович");
var person2 = new Person("Петров", "Петро", "Петрович");
var manager = new Manager("Сидоров", "Сидір", "Сидорович", "Кредитний відділ");
var credit1 = new Credit(10000, 5, person1);
var credit2 = new Credit(15000, 4.5, person2);
var deposit1 = new Deposit(20000, 12, person1);
var deposit2 = new Deposit(5000, 6, person2);
var bank = new Bank();
bank.addCredit(credit1);
bank.addCredit(credit2);
bank.addDeposit(deposit1);
bank.addDeposit(deposit2);
bank.addManager(manager);
// Пошук кредитів для певної людини
var searchResult = bank.searchCreditByPersonName("Іван");
console.log("Кредити для Івана:");
searchResult.forEach(function (credit) { return console.log(credit.toString()); });
// Сортування депозитів за сумою
var sortedDeposits = bank.sortDepositsByAmount();
console.log("\nВідсортовані депозити:");
sortedDeposits.forEach(function (deposit) { return console.log(deposit.toString()); });
