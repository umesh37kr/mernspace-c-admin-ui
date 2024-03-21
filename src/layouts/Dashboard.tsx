import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store";
import Icon, { BellOutlined } from "@ant-design/icons";
import {
  Badge,
  Flex,
  Layout,
  Menu,
  Space,
  theme,
  Dropdown,
  Avatar,
} from "antd";
import { useState } from "react";
import Logo from "../components/icons/Logo";
import Home from "../components/icons/Home";
import UserIcon from "../components/icons/UserIcon";
import { foodIcon } from "../components/icons/FoodIcon";
import GiftIcon from "../components/icons/GiftIcon";
import BasketIcon from "../components/icons/BasketIcon";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../http/api";
const { Sider, Header, Footer, Content } = Layout;

const getMenuItems = (roles: string) => {
  const adminItems = [
    {
      key: "/users",
      icon: <Icon component={UserIcon} />,
      label: <NavLink to="/users">User</NavLink>,
    },
  ];
  const baseItems = [
    {
      key: "/",
      icon: <Icon component={Home} />,
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "/restaurants",
      icon: <Icon component={foodIcon} />,
      label: <NavLink to="/restaurants">Restaurants</NavLink>,
    },
    {
      key: "/products",
      icon: <Icon component={BasketIcon} />,
      label: <NavLink to="/products">Products</NavLink>,
    },
    {
      key: "/promos",
      icon: <Icon component={GiftIcon} />,
      label: <NavLink to="/promos">Promos</NavLink>,
    },
  ];
  if (roles === "admin") {
    const menus = [...baseItems];
    menus.splice(1, 0, ...adminItems);
    return menus;
  }
  return baseItems;
};

const Dashboard = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { logout: logoutFromStore } = useAuthStore();
  const { mutate: logoutMutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: async () => {
      logoutFromStore();
      return;
    },
  });
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user } = useAuthStore();
  if (user === null) {
    return (
      <Navigate
        to={`/auth/login?returnTo=${location.pathname}`}
        replace={true}
      />
    );
  }
  const items = getMenuItems(user.role);
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo">
            <Logo />
          </div>
          <Menu
            theme="light"
            defaultSelectedKeys={["/"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              paddingLeft: "30px",
              paddingRight: "30px",
              background: colorBgContainer,
            }}
          >
            <Flex gap="middle" align="start" justify="space-between">
              <Badge
                text={
                  user.role === "admin" ? "you are an admin" : user.tenant?.name
                }
                status={"success"}
              />
              <Space size={16}>
                <Badge dot={true}>
                  <BellOutlined />
                </Badge>
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "logout",
                        label: "Logout",
                        onClick: () => logoutMutate(),
                      },
                    ],
                  }}
                  placement="bottomRight"
                >
                  <Avatar
                    style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                  >
                    U
                  </Avatar>
                </Dropdown>
              </Space>
            </Flex>
          </Header>
          <Content style={{ margin: "24px" }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>Mern Space Pizza Shop</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
