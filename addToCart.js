function addToCart(item){
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var cartItems = document.getElementsById('col-2');
    cartItems.append(selectedItem);
}