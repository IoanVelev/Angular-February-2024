var Data = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    Data.prototype.printInfo = function () {
        return {
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: undefined,
            fulfilled: false
        };
    };
    return Data;
}());
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData.printInfo());
