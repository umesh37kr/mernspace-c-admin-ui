import { RightOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Drawer, Space, Table } from "antd";
import { Link, Navigate } from "react-router-dom";
import TenantsFilter from "./TenantsFilter";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { getTenants } from "../../http/api";
import { useAuthStore } from "../../store";
const Tenants = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const {
    data: tenants,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tnants"],
    queryFn: () => {
      return getTenants().then((res) => res.data);
    },
  });

  const { user } = useAuthStore();

  if (user?.role !== "admin") {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <Breadcrumb
        separator={<RightOutlined />}
        items={[
          {
            title: <Link to={"/"}>Dashboard</Link>,
          },
          {
            title: "Restaurants",
          },
        ]}
      />
      <TenantsFilter>
        <Button type="primary" onClick={() => setOpenDrawer(true)}>
          <PlusOutlined /> Add Restaurants
        </Button>
      </TenantsFilter>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      <Table dataSource={tenants} columns={columns} rowKey={"id"} />;
      <Drawer
        title="Add Restaurants"
        width={720}
        destroyOnClose={true}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        extra={
          <Space>
            <Button>Cancel</Button>
            <Button type="primary">Submit</Button>
          </Space>
        }
      >
        <p>this is sample demo</p>
        <p>this is sample demo</p>
      </Drawer>
    </>
  );
};

export default Tenants;
