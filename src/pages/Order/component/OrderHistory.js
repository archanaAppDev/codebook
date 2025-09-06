import { getUserOrders } from "../../../services/dataService"
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const OrderHistory = () => {
    const [orderValue, setOrder] = useState([]);
    useEffect(() => {

        async function fetchOrderData() {
            const data = await getUserOrders();
            setOrder(data);


        }
        fetchOrderData();
    }, []);

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Order History</p>
            </section>

            <section>
                {orderValue.length > 0 ? (
                    orderValue.map((singleOrder) => (
                        <div key={singleOrder.id} className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
                            <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
                                <span>Order Id: {singleOrder.id}</span>
                                <span>Total: ${singleOrder.amount_paid}</span>
                            </div>
                            {singleOrder.cartList.map((product) => (
                                <div key={product.id} className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
                                    <div className="flex" onClick={() => <Navigate to={`/products/${product.id}`} />}>

                                        <img className="w-32 rounded" src={product.poster} alt={product.name} />
                                        <div className="">
                                            {/* <Navigate to={`/products/${product.id}`}>
                                                <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
                                            </Navigate> */}
                                            <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
                                            <div className="text-lg m-2 dark:text-slate-200">
                                                <span>${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <p className="text-center dark:text-slate-100">You have no orders yet.</p>
                )}
            </section>


        </main>
    )
}
