export default function Nav() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <p>
          <input type="radio" name="" id="" />
          Cart
        </p>
        <p> &gt; </p>
        <p>
          <input type="radio" name="" id="" />
          Checkout
        </p>
        <p>&gt; </p>
        <p>
          <input type="radio" name="" id="" />
          Payout
        </p>
      </div>
      <div className="icons">
        <span>🔍</span>
        <span>🛍️</span>
        <span>👤</span>
      </div>
    </div>
  );
}
