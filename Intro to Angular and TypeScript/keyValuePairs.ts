class keyValuePair<T, U> {
    private key: T;
    private value: U;

    setKeyValue(key: T, value: U) {
        this.key = key;
        this.value = value;
    }

    display(){
        console.log(`key = ${this.key}, value = ${this.value}`);
        
    }
} 

const kvp = new keyValuePair<string, number>();
kvp.setKeyValue('Joe', 21);
kvp.display();