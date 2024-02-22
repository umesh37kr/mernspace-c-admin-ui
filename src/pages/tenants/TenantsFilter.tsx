import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import Search from "antd/es/input/Search";
import type { SearchProps } from "antd/es/input/Search";
const TenantsFilter = () => {
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
          <Button type="primary">
            <PlusOutlined /> Add Restaurants
          </Button>
        </Space>
      </Card>
    </>
  );
};

export default TenantsFilter;
