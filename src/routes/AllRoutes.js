import { Route, Routes } from "react-router-dom"
import { HomePage, ProductList, ProductDetail, Login, Register, CartPage, OrderPage } from "../pages"
import { ProtectedRoute } from "./ProtectedRoute"
import { OrderHistory } from "../pages/Order/component/OrderHistory"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="/order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
            <Route path="/order-history" element={<ProtectedRoute><OrderHistory /></ProtectedRoute>} />

        </Routes>
    )
}
