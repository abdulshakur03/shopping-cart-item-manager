import Products from "./Products";

export default function Main() {
  return (
    <div>
      <h2>Cart</h2>
      <span>(30 products)</span>
      <br />
      <span>Product</span>
      <span>Count</span>
      <span>Price</span>
      <Products/>
    </div>
  );
}
