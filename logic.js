let logic = (left,right,operation) => {
    if(operation === 'or') {
        if(left === true && right === true) {
            return true
        }
        else if (left === true && right === false) {
            return true
        }
        else if (left === false && right === true) {
            return true
        }
        else if (left === false && right === false) {
            return false
        }
    }
    else if(operation === 'and') {
        if (left === true && right === true) {
            return true
        } 
        else if (left === true && right === false) {
            return false
        } 
        else if (left === false && right === true) {
            return false
        } 
        else if (left === false && right === false) {
            return false
        }
    }
    else if(operation === 'ifthen') {
        if (left === true && right === true) {
            return true
        } 
        else if (left === true && right === false) {
            return false
        } 
        else if (left === false && right === true) {
            return true
        } 
        else if (left === false && right === false) {
            return true
        }
    }
    else if(operation === 'onlyif') {
        if (left === true && right === true) {
            return true
        } 
        else if (left === true && right === false) {
            return false
        } 
        else if (left === false && right === true) {
            return false
        } 
        else if (left === false && right === false) {
            return true
        }
    }
}

console.log(logic(true, false, 'and'));