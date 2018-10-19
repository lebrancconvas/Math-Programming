// ข้าม = opposed
// ฉาก = orthogonal
// ชิด = adjacent

function Tri(adj,opp,ort) {
    this.isOrtho = function() {
        if((opp**2) + (adj**2) === (ort**2)) {
            return true
        }
        else {
            return false
        }
    }

    if(this.isOrtho() === true) {
        this.sin = function () {
            return opp / ort
        }

        this.cos = function () {
            return adj / ort
        }

        // tan = sin / cos || tan = opp / adj
        this.tan = function () {
            return this.sin() / this.cos()
        }

        // sec = 1 / cos || sec = ort / adj
        this.sec = function () {
            return 1 / this.cos()
        }

        // cosec = 1 / sin || cosec = ort / opp
        this.cosec = function () {
            return 1 / this.sin()
        }

        // cot = 1 / tan || cot = adj / opp
        this.cot = function () {
            return 1 / this.tan()
        }

        this.arcsin = function() {
            for (let degree = 0 ; degree <= 360 ; degree++) {
                if(Math.sin((degree * Math.PI) / 180).toFixed(2) === this.sin().toFixed(2)) {
                    return degree
                }
            }
        }

        this.arccos = function () {
            for (let degree = 0; degree <= 360; degree++) {
                if (Math.cos((degree * Math.PI) / 180).toFixed(2) === this.cos().toFixed(2)) {
                    return degree
                }
            }
        }
    }
    else {
        this.sin = function() {
          return null
        }

        this.cos = function() {
          return null
        }

        // tan = sin / cos || tan = opp / adj
        this.tan = function() {
          return null
        }

        // sec = 1 / cos || sec = ort / adj
        this.sec = function() {
          return null
        }

        // cosec = 1 / sin || cosec = ort / opp
        this.cosec = function() {
          return null
        }

        // cot = 1 / tan || cot = adj / opp
        this.cot = function() {
          return null
        }

        this.arcsin = function () {
            return null
        }

        this.arccos = function() {
            return null;
        };
    }
}

let a1 = new Tri(3,4,5)
let a2 = new Tri(5,12,13)
let a3 = new Tri(9,40,41)
console.log(a1.arcsin())
console.log(a1.arccos());
console.log(a2.arcsin());
console.log(a2.arccos());
console.log(a3.arcsin());
console.log(a3.arccos());







