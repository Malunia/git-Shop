function Good(id, title, price) {
    Container.call(this, id);
    this.title = title;
    this.price = price;
}

Good.prototype = Object.create(Container.prototype);
Good.prototype.constructor = Good;

Good.prototype.render = function (jQuerySelector) {
    var $goodContainer = $('<div />', {
        class: 'good'
    });
  var $goodTitle = $('<p />', {
        class: "goods-title",
        text: this.title
    });


    var $goodPrice = $('<p> $. <span class="product-price">' + this.price + '</span> </p>');

    //Создаем иерархию элементов
    $goodTitle.appendTo($goodContainer);
    $goodPrice.appendTo($goodContainer);
  

    jQuerySelector.append($goodContainer);
};