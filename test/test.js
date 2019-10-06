

var cartClass = require ('../js/cart.js');   
var expect = require('expect.js');

describe("Discount",function(){
    it("The function should give default discounted values for Item A",function() {  
    var value=cartClass.getTotalPriceAfterDiscount('A',5,30);
    expect(value).to.equal((150.00).toFixed(2));
    });

    it("The function should give default discounted values for Item B",function() {   
        var value=cartClass.getTotalPriceAfterDiscount('B',2,15);
        expect(value).to.equal((30.00).toFixed(2));
        });
    });