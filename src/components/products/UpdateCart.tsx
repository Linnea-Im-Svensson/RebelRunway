interface Product {
  productId: string;
  selectedSize: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
}
export const updateCart = (
  productId: string,
  selectedSize: string,
  productName: string,
  productImage: string,
  price: number,
) => {
  const storedCart = localStorage.getItem("cart");
  const existingCart: Product[] = storedCart ? JSON.parse(storedCart) : [];

  const newItem: Product = {
    productId: productId,
    productName: productName,
    productImage: productImage,
    selectedSize: selectedSize,
    price: price,
    quantity: 1,
  };

  const existingItemIndex = existingCart.findIndex(
    (item: Product) =>
      item.productId === newItem.productId &&
      item.selectedSize === newItem.selectedSize,
  );

  if (existingItemIndex !== -1) {
    existingCart[existingItemIndex]!.quantity += 1;
  } else {
    existingCart.push(newItem);
  }

  localStorage.setItem("cart", JSON.stringify(existingCart));
  return existingCart;
};
