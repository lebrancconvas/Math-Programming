function Stat() {
    let data = []

    this.leng = function() {
        return data.length
    }

    this.disPlay = function() {
        return data
    }

    this.addData = function(element) {
        data.push(element)
        // this.leng++
    }

    this.delData = function(element) {
        data.splice(data.indexOf(element),1)
        // this.leng--
    }

    this.sum = function() {
        let s = 0
        for(let i = 0 ; i < data.length ; i++) {
            s += data[i]
        }
        return s
    }

    this.mean = function() {
        return this.sum() / data.length
    }

    this.median = function() {
        if(data.length % 2 === 0) {
            medindex = data.length / 2
            return ((data[medindex - 1] + data[medindex]) / 2)
        }
        else if(data.length % 2 !== 0) {
            medindex = Math.ceil(data.length / 2)
            return data[medindex-1]
        }
    }

    this.maxi = function() {
        return Math.max(...data)
    }

    this.mini = function () {
        return Math.min(...data)
    }

    this.range = function() {
        return this.maxi() - this.mini()
    }
}

let browser = new Stat()
browser.addData(1)
browser.addData(2)
browser.addData(3)
browser.addData(4)
console.log(browser.disPlay())
console.log(browser.sum())
console.log(browser.mean())
console.log(browser.median())
console.log(browser.leng())
console.log(browser.maxi())
console.log(browser.mini())
console.log(browser.range())
