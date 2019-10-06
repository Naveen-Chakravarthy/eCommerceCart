
$('.update-cart').click(function() {
    let cart = []
$(".discount-value").each(function() {
    //if($(this).val() > 0)
   // {
        let data = {'name': $(this).data('original-item'),
    'count': $(`input[data-original-item="${$(this).data('original-item')}"].count-value`).val(),
    'price': $(`input[data-original-item="${$(this).data('original-item')}"].price-value`).val(),
    'discount': $(`input[data-original-item="${$(this).data('original-item')}"].discount-value`).val()
};
cart.push(data);
    //}
    
    //console.log($(this).val());
    //console.log($(this).data('original-item'));
});

//console.log(cart);
var data = {'data': cart};
    $.ajax({
        type: "POST",
        url: "/test/updateToDB/",
        data: JSON.stringify(data),
        contentType : "application/json",
        success: function( resp ) {
          //console.log(resp);
          alert('success') ;
       },
        error: function( req, status, err ) {
          console.log( 'something went wrong', status, err );
        }
      });
      
});


Object.keys(discounts).forEach(function(key,_index) {
    //console.log(key);
    $(`input[data-original-item="${key}"].count-value`).val(discounts[key].count);
    $(`input[data-original-item="${key}"].discount-value`).val(discounts[key].discount);
    $(`input[data-original-item="${key}"].price-value`).val(discounts[key].price);
});