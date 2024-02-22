import { RightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import TenantsFilter from "./TenantsFilter";

const Tenants = () => {
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
      <TenantsFilter />
    </>
  );
};

export default Tenants;
