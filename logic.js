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
        else {
            return "--ERROR--"
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
        else {
            return "--ERROR--"
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
        else {
            return "--ERROR--"
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
        else {
            return "--ERROR--"
        }
    }

    else if(operation === 'inverse') {
        if(left === true && right === null) {
            return false
        }
        else if(left === false && right === null) {
            return true
        }
        else if(left === null && right === true) {
            return false
        }
        else if(left === null && right === false) {
            return true
        }
        else {
            return "--ERROR--"
        }
    }

    else if(operation === 'nor') {
        if (left === true && right === true) {
            return false
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
        else {
            return "--ERROR--"
        }
    }

    else if(operation === 'nand') {
        if (left === true && right === true) {
            return false
        }
        else if (left === true && right === false) {
            return true
        }
        else if (left === false && right === true) {
            return true
        }
        else if (left === false && right === false) {
            return true
        }
        else {
            return "--ERROR--"
        }
    }

    else if(operation === 'xor') {
        if (left === true && right === true) {
            return false
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
        else {
            return "--ERROR--"
        }
    }

    else if(operation === 'xnor') {
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
        else {
            return "--ERROR--"
        }
    }
}