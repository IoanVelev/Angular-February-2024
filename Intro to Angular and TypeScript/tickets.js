var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function storeTickets(data, criteria) {
    var result = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var line = data_1[_i];
        var currentTicketLine = line.split("|");
        var destination = currentTicketLine[0];
        var price = Number(currentTicketLine[1]);
        var status_1 = currentTicketLine[2];
        var ticketInfo = new Ticket(destination, price, status_1);
        result.push(ticketInfo);
    }
    switch (criteria) {
        case 'destination':
            result.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            result.sort(function (a, b) { return a.price - b.price; });
            break;
        case 'destination':
            result.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
        default:
            break;
    }
    return result;
}
console.log(storeTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));
