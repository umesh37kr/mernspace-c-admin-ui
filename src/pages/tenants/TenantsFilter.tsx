import { Card, Space } from "antd";
import Search from "antd/es/input/Search";
import type { SearchProps } from "antd/es/input/Search";
import React from "react";

type TenantFilterProps = {
  children?: React.ReactNode;
};
const TenantsFilter = ({ children }: TenantFilterProps) => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <>
      <Card style={{ width: "100%" }}>
        <Space direction="horizontal" size={400}>
          <Search
            placeholder="search"
            style={{ width: 400 }}
            allowClear={true}
            onSearch={onSearch}
            enterButton
          />
          {children}
        </Space>
      </Card>
    </>
  );
};

export default TenantsFilter;
