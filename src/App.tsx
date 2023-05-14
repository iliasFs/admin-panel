import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import CategoryList from "./pages/CategoryList";
import ProductList from "./pages/ProductList";
import BrandList from "./pages/BrandList";
import BlogCategoryList from "./pages/BlogCategoryList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="list-category" element={<CategoryList />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="list-brand" element={<BrandList />} />
          <Route path="blog-category-list" element={<BlogCategoryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
