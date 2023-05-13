import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { RiDashboard2Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill, BsCardList } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { SiBloglovin } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { ImBlog, ImList } from "react-icons/im";
import { Outlet } from "react-router-dom";
import { MdOutlineQuestionAnswer, MdNotifications } from "react-icons/md";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo text-white font-bold flex gap-1 items-center justify-center">
          <div className="text-3xl">
            <TbBrandFramerMotion />
          </div>
          <h2>Admin Panel</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
              return;
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <RiDashboard2Fill className="fs-5" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <BsFillPersonFill className="fs-5" />,
              label: "Customers",
            },
            {
              key: "catalogue",
              icon: <AiOutlineShoppingCart className="fs-5" />,
              label: "Products",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-5" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart className="fs-5" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <TbBrandFramerMotion className="fs-5" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <TbBrandFramerMotion className="fs-5" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-5" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-5" />,
                  label: "Category List",
                },
              ],
            },
            {
              key: "orders",
              icon: <BsCardList className="fs-5" />,
              label: "Orders",
            },
            {
              key: "blog",
              icon: <SiBloglovin className="fs-5" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-5" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <ImList className="fs-5" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-5" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <ImList className="fs-5" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "inquiries",
              icon: <MdOutlineQuestionAnswer className="fs-5" />,
              label: "Inquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="flex justify-between"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="text-[16px] color-[#1D1D1D] flex gap-3 items-center justify-center pr-[18px]">
            <div className="text-2xl relative">
              <MdNotifications />
              <span className="rounded-full text-[12px] font-bold absolute bg-red-500 w-[16px] h-[16px] top-[-6px] left-[11px] flex items-center justify-center">
                3
              </span>
            </div>
            <div>
              <h3 className="tracking-tighter font-bold text-[#1677FF]">
                Logged in:
              </h3>
            </div>
            <div>
              {" "}
              <h3>ilias@gmail.com</h3>
            </div>{" "}
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
