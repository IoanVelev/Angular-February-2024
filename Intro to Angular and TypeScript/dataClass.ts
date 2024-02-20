class Data {
    
    constructor(
        public method: string,
        public uri: string,
        public version: string,
        public readonly message: string
        ) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }

    printInfo() {
        return {
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: undefined,
            fulfilled: false
        }
    }
}

const myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData.printInfo());
