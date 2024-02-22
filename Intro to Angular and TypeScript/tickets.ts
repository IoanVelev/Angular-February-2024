class Ticket {

    constructor(public destination?: string, public price?: number, public status?: string){
        this.destination = destination
        this.price = price
        this.status = status
    }
}


function storeTickets(data: string[], criteria: string) {
    let result: object[] = [];

    for (let line of data) {
        const currentTicketLine = line.split("|");

        const destination = currentTicketLine[0];
        const price = Number(currentTicketLine[1]);
        const status = currentTicketLine[2];
        
        const ticketInfo = new Ticket(destination, price, status);
        result.push(ticketInfo);
    
    }

    switch (criteria) {
        case 'destination':
            result.sort((a: any, b: any) => a.destination.localeCompare(b.destination));
            break;
            case 'price':
            result.sort((a: any, b: any) => a.price - b.price);
            break;
            case 'destination':
            result.sort((a: any, b: any) => a.status.localeCompare(b.status));
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
],
    'destination'
))