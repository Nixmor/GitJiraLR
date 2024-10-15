var Tenant = /** @class */ (function () {
    function Tenant(surname, name, patronymic, address, apartmentNumber, area, rooms, occupants) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.address = address;
        this.apartmentNumber = apartmentNumber;
        this.area = area;
        this.rooms = rooms;
        this.occupants = occupants;
    }
    return Tenant;
}());
// Колекція квартиронаймачів
var tenants = [
    new Tenant("Іванов", "Іван", "Іванович", "Вулиця 1", 10, 50, 2, 3),
    new Tenant("Петров", "Петро", "Петрович", "Вулиця 1", 5, 60, 3, 4),
    new Tenant("Сидоров", "Сидір", "Сидорович", "Вулиця 2", 3, 40, 1, 2),
    new Tenant("Коваленко", "Олексій", "Іванович", "Вулиця 1", 7, 70, 4, 5)
];
// Функція пошуку квартиронаймачів по будинку та сортування по номеру квартири
function findTenantsByAddress(address) {
    var filteredTenants = tenants.filter(function (tenant) { return tenant.address === address; });
    return filteredTenants.sort(function (a, b) { return a.apartmentNumber - b.apartmentNumber; });
}
// Виведення результатів
var addressToSearch = "Вулиця 1";
var resultTenants = findTenantsByAddress(addressToSearch);
console.log("\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u043E\u043D\u0430\u0439\u043C\u0430\u0447\u0456 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E ".concat(addressToSearch, ":"));
resultTenants.forEach(function (tenant) {
    console.log("".concat(tenant.surname, " ").concat(tenant.name, ", \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u2116").concat(tenant.apartmentNumber));
});
