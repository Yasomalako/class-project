class Cars {
    constructor(wheelsAmount, engin, color) {
        this.wheelsAmount = wheelsAmount;
        this.engin = engin;
        this.color = color
    }
    returncarDitails() {
        return `wheels amount:${this.wheelsAmount}engin powr:${this.engin}car color:${this.color}`
    }
}


class Suv extends Cars {
    constructor(wheelsAmount, engin, color, size) {
        super(wheelsAmount, engin, color)
        this.size = size;
    }
    get outcom(){
       return geepprintpivus()
    }
    printprivuseDitails(){
   return super.returncarDitails()
   `wheels amount:${this.wheelsAmount}engin powr:${this.engin}car color:${this.color}${this.size}${this.name}`
    }
}

class Geep extends Suv {
    constructor(wheelsAmount, engin, color, size, name) {
        super(wheelsAmount, engin, color, size)
        this.name = name
    }
    geepprintpivus(){
      return super.printprivuseDitails() 
         `wheels amount:${this.wheelsAmount}engin powr:${this.engin}car color:${this.color}${this.size}${this.name}`
    }
}
console.();
class Limo extends Geep {
    constructor(wheelsAmount, engin, color, size, name, city) {
        super(wheelsAmount, engin, color, size, name)
        this.city = city
    }
    limoprivusDitilse(){
        return super.geepprintpivus() 
         `wheels amount:${this.wheelsAmount}engin powr:${this.engin}car color:${this.color}${this.size}${this.name}${this.city}`
    }
}