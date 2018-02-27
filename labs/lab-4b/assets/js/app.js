$('.item').click(function() {
//  is the item already in the cart?
//  has the user already clicked this item
  if (!$(this).hasClass('in-cart')){
    // increment the cart number
    // find current value of .item-count
    // add 1 to current value of .item-count
    // represent new cart number in html on .item-count
    // console.log('clicked');

    var current_count = $('.item-count').html(),
        current_value = Math.abs(current_count),
        new_count     = current_value + 1;

    $('.item-count').html(new_count);

    // Add in-cart calss to items that have been clicked
    $(this).addClass('in-cart');
  } 
});