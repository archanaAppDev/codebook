import { CartEmpty } from './components/CartEmpty'
import { CartList } from './components/CartList'
import { useAppContext } from '../../context';
export const CartPage = () => {
    const { state } = useAppContext();
    const cartListLength = state.cart.cartList.length;
    return (
        <main>
            <h1>Shopping Cart</h1>
            {cartListLength ? <CartList /> : <CartEmpty />}
        </main>
    )
}
