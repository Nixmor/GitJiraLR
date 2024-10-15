class Person {
    surname: string;
    name: string;
    patronymic: string;

    constructor(surname: string, name: string, patronymic: string) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
    }

    toString(): string {
        return `${this.surname} ${this.name} ${this.patronymic}`;
    }
}

class Manager extends Person {
    department: string;

    constructor(surname: string, name: string, patronymic: string, department: string) {
        super(surname, name, patronymic);
        this.department = department;
    }
}

class Credit {
    creditAmount: number;
    rate: number;
    person: Person;

    constructor(creditAmount: number, rate: number, person: Person) {
        this.creditAmount = creditAmount;
        this.rate = rate;
        this.person = person;
    }

    toString(): string {
        return `Кредит на суму: ${this.creditAmount} грн, Ставка: ${this.rate}%, Позичальник: ${this.person}`;
    }
}

class Deposit {
    depositAmount: number;
    duration: number;
    person: Person;

    constructor(depositAmount: number, duration: number, person: Person) {
        this.depositAmount = depositAmount;
        this.duration = duration;
        this.person = person;
    }

    toString(): string {
        return `Депозит на суму: ${this.depositAmount} грн, Термін: ${this.duration} місяців, Вкладник: ${this.person}`;
    }
}

class Bank {
    credits: Credit[];
    deposits: Deposit[];
    managers: Manager[];

    constructor() {
        this.credits = [];
        this.deposits = [];
        this.managers = [];
    }

    addCredit(credit: Credit): void {
        this.credits.push(credit);
    }

    addDeposit(deposit: Deposit): void {
        this.deposits.push(deposit);
    }

    addManager(manager: Manager): void {
        this.managers.push(manager);
    }

    // Пошук кредиту за ім'ям людини
    searchCreditByPersonName(name: string): Credit[] {
        return this.credits.filter(credit => credit.person.name === name);
    }

    // Сортування депозитів за сумою вкладу
    sortDepositsByAmount(): Deposit[] {
        return this.deposits.sort((a, b) => a.depositAmount - b.depositAmount);
    }
}

// Створення даних
const person1: Person = new Person("Іванов", "Іван", "Іванович");
const person2: Person = new Person("Петров", "Петро", "Петрович");

const manager: Manager = new Manager("Сидоров", "Сидір", "Сидорович", "Кредитний відділ");

const credit1: Credit = new Credit(10000, 5, person1);
const credit2: Credit = new Credit(15000, 4.5, person2);

const deposit1: Deposit = new Deposit(20000, 12, person1);
const deposit2: Deposit = new Deposit(5000, 6, person2);

const bank: Bank = new Bank();
bank.addCredit(credit1);
bank.addCredit(credit2);
bank.addDeposit(deposit1);
bank.addDeposit(deposit2);
bank.addManager(manager);

// Пошук кредитів для певної людини
const searchResult: Credit[] = bank.searchCreditByPersonName("Іван");
console.log("Кредити для Івана:");
searchResult.forEach(credit => console.log(credit.toString()));

// Сортування депозитів за сумою
const sortedDeposits: Deposit[] = bank.sortDepositsByAmount();
console.log("\nВідсортовані депозити:");
sortedDeposits.forEach(deposit => console.log(deposit.toString()));
