// Prove that fog(x) = f(g(x))
let f = x => {
    return x + 5
}

let g = x => {
    return x**2
}

let fog = x => {
    return (x**2) + 5
}


let prove = x => {
    if(f(g(x)) === fog(x)) {
        return "Theory is true."
    }
    else {
        return "Theory is false."
    }
}

for (let i = 0 ; i <= 100 ; i++) {
    console.log(`${prove(i)} with x = ${i} so fog(${i}) = ${fog(i)}`)
}



