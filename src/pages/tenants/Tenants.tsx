import { RightOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Drawer, Space } from "antd";
import { Link } from "react-router-dom";
import TenantsFilter from "./TenantsFilter";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
const Tenants = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
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
