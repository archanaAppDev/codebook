import { OrderSuccess } from "./component/OrderSuccess";
import { OrderFail } from "./component/OrderFail";
import { useLocation } from "react-router-dom";

export const OrderPage = () => {
    const { state } = useLocation();
    return (
        <div>
            {state?.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
        </div>
    )
}
