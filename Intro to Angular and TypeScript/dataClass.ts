class Data {
    
    response: undefined;
    fullfilled:boolean;
    constructor(
        public method:string,
        public uri:string,
        public version:string,
        public readonly message:string
    ){
        
        this.method = method 
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fullfilled = false;
       
    }
}

const myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
