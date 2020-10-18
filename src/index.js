  //Stack class
  class Stack {
    
	constructor() {
        this.data = [];
        this.top = 0;
    }
  
    push(unit) {
        this.data.push(unit);
        this.top += 1;
    }
    
    peek() {
        return this.data[this.top - 1];
    }
    
    pop() {
        if ( this.top !== 0 ) {
        this.top -= 1;
        return this.data.pop();
        }  
    }  
}

module.exports = function check(str, bracketsConfig) {

    let newStack = new Stack();
    
    for ( let i = 0; i < str.length; i++ ) {
        if ( newStack.top === 0 ) {
            newStack.push(str[i]);
        } else {
            let bracketPair = [newStack.peek(), str[i] ].join();
        
            let action = 'push';
            for ( let j = 0; j < bracketsConfig.length; j++ ) {
                if ( bracketPair === bracketsConfig[j].join() ) {
                    action = 'pop';
                }
            }
            if ( action === 'pop' ) {
                newStack.pop();
            }
            if ( action === 'push' ) {
                newStack.push(str[i]);
            }
        }
        
    }
    
    return newStack.top === 0;
}
