import { useDispatch, useSelector } from "react-redux";
import Item_List from "./Item_List";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 py-8">
      <h1 className="text-2xl font-bold font-serif mb-4">🛒 Your Cart</h1>

      {items.length === 0 ? (
        <h2 data-testid="empty-cart" className="text-xl text-gray-500 mt-8">
          Cart is empty 😕
        </h2>
      ) : (
        <>
          <button
            onClick={handleClick}
            className="mb-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Clear Cart
          </button>

          <div
            data-testid="cart-items"
            className="w-11/12 md:w-8/12 lg:w-6/12 space-y-4"
          >
            {items.map((c, index) => (
              <Item_List itemDetails={c} key={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
