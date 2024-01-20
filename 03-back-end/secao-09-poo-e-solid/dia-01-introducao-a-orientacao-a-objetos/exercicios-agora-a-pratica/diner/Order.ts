class Order {
  constructor(
    private _customer: Customer, 
    private _items: OrderItem[],
    private  paymentMethod: string,
    private discount: number = 0,
  ) {
    this._customer = _customer;
    this._items = _items;
    this.paymentMethod = paymentMethod;
    this.discount = discount;
  }

  total() {
    const total = this._items.reduce((acc, curr) => acc + curr.price, 0);
    return total;
  }

  totalWithDiscount() {
    const total = this.total();
    const discount = total * this.discount;
    return total - discount;
  }
}

