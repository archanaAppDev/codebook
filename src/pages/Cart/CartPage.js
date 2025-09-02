import { CartEmpty } from './components/CartEmpty'
import { CartList } from './components/CartList'
import { useAppContext } from '../../context';
export const CartPage = () => {
    const { cartList } = useAppContext();
    const cartListLength = cartList.length;
    return (
        <main>
            <h1>Shopping Cart</h1>
            {cartList.length ? <CartList /> : <CartEmpty />}
        </main>
    )
}
