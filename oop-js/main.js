var carClass = function(name, company, doors, price) {
  this.name = name
  this.company = company
  this.doors = doors
  this.price = price
}

carClass.prototype.greetings = function() {
  console.log('Hi welcome to Cars Masters would you like to drive a ' + this.name + ' its a brand new ' + this.company + ' for the price of ' + this.price)
}

var bmw = new carClass('M3', 'BMW', 2, '$35,000')
var honda = new carClass('civic', 'Honda', 4, '$18,000')
var benz = new carClass('e-class', 'benz', 2, '$40,000')
var audi = new carClass('quattro', 'audi', 4, '33,000')


carClass.prototype.printName = function () {
  return this.name
};
