import {
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";

type ProductsFilterProps = {
  children?: React.ReactNode;
};

const ProductsFilter = ({ children }: ProductsFilterProps) => {
  return (
    <Card>
      <Row justify={"space-between"}>
        <Col span={16}>
          <Row gutter={20}>
            <Col>
              <Form.Item name="q">
                <Input.Search allowClear={true} placeholder="search" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="category">
                <Select
                  style={{ width: "100%" }}
                  allowClear={true}
                  placeholder="Select category"
                >
                  <Select.Option value="pizza">Pizza</Select.Option>
                  <Select.Option value="beverages">Beverages</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item name="restaurants">
                <Select
                  style={{ width: "100%" }}
                  allowClear={true}
                  placeholder="Select restaurants"
                >
                  <Select.Option value="pizzaHub">Pizza Hub</Select.Option>
                  <Select.Option value="softyCorner">
                    Softy Corner
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Space>
                <Switch defaultChecked onChange={() => {}} />
                <Typography.Text>Show only published</Typography.Text>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "end" }}>
          {children}
        </Col>
      </Row>
    </Card>
  );
};

export default ProductsFilter;
