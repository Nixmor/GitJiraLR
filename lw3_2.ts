class Tenant {
    surname: string;
    name: string;
    patronymic: string;
    address: string;
    apartmentNumber: number;
    area: number;
    rooms: number;
    occupants: number;

    constructor(surname: string, name: string, patronymic: string, address: string, apartmentNumber: number, area: number, rooms: number, occupants: number) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.address = address;
        this.apartmentNumber = apartmentNumber;
        this.area = area;
        this.rooms = rooms;
        this.occupants = occupants;
    }
}

// Колекція квартиронаймачів
const tenants: Tenant[] = [
    new Tenant("Іванов", "Іван", "Іванович", "Вулиця 1", 10, 50, 2, 3),
    new Tenant("Петров", "Петро", "Петрович", "Вулиця 1", 5, 60, 3, 4),
    new Tenant("Сидоров", "Сидір", "Сидорович", "Вулиця 2", 3, 40, 1, 2),
    new Tenant("Коваленко", "Олексій", "Іванович", "Вулиця 1", 7, 70, 4, 5)
];

// Функція пошуку квартиронаймачів по будинку та сортування по номеру квартири
function findTenantsByAddress(address: string): Tenant[] {
    const filteredTenants = tenants.filter(tenant => tenant.address === address);
    return filteredTenants.sort((a, b) => a.apartmentNumber - b.apartmentNumber);
}

// Виведення результатів
const addressToSearch: string = "Вулиця 1";
const resultTenants: Tenant[] = findTenantsByAddress(addressToSearch);
console.log(`Квартиронаймачі за адресою ${addressToSearch}:`);
resultTenants.forEach(tenant => {
    console.log(`${tenant.surname} ${tenant.name}, Квартира №${tenant.apartmentNumber}`);
});
