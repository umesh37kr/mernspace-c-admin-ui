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
  Upload,
} from "antd";
import { Category, Tenant } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import { getCategories, getTenants } from "../../../http/api";
import { PlusOutlined } from "@ant-design/icons";
import Pricing from "./Pricing";
import { Attributes } from "./Attributes";

const ProductForm = () => {
  const selectedCategory = Form.useWatch("categoryId");
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return getCategories();
    },
  });

  const { data: restaurants } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () => {
      return getTenants(`perPage=100&currentPage=1`).then((res) => res.data);
    },
  });
  return (
    <>
      <Row>
        <Col span={24}>
          <Space direction="vertical" size={"large"}>
            <Card title="Product info">
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item
                    label="Product Name"
                    name={"name"}
                    rules={[
                      {
                        required: true,
                        message: "First name is required",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Category"
                    name={"categoryId"}
                    rules={[
                      {
                        required: true,
                        message: "Category is required",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      style={{ width: "100%" }}
                      allowClear={true}
                      placeholder="Select Restaurants"
                      onChange={() => {}}
                    >
                      {categories?.data.map((category: Category) => (
                        <Select.Option
                          value={JSON.stringify(category)}
                          key={category._id}
                        >
                          {category.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Description"
                    name={"description"}
                    rules={[
                      {
                        required: true,
                        message: "Description is required",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={2}
                      maxLength={100}
                      style={{ resize: "none" }}
                      size="large"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Image Upload">
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item
                    label=""
                    name={"image"}
                    rules={[
                      {
                        required: true,
                        message: "Please upload a product Image",
                      },
                    ]}
                  >
                    <Upload listType="picture-card">
                      <Space direction="vertical">
                        <PlusOutlined />
                        <Typography.Text>Upload</Typography.Text>
                      </Space>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Tenant info">
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item
                    label="Select Restaurants"
                    name={"tenantId"}
                    rules={[
                      {
                        required: true,
                        message: "restaurants is required",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      style={{ width: "100%" }}
                      allowClear={true}
                      placeholder="Select Restaurants"
                      onChange={() => {}}
                    >
                      {restaurants?.map((tenant: Tenant) => (
                        <Select.Option value={tenant.id} key={tenant.id}>
                          {tenant.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            {selectedCategory && (
              <Pricing selectedCategory={selectedCategory} />
            )}
            {selectedCategory && <Attributes />}
            <Card title="Other Properties">
              <Row gutter={24}>
                <Col span={24}>
                  <Space>
                    <Form.Item name="isPublish">
                      <Switch
                        defaultChecked
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                        onChange={() => {}}
                      />
                    </Form.Item>
                    <Typography.Text
                      style={{ marginBottom: 22, display: "block" }}
                    >
                      Published
                    </Typography.Text>
                  </Space>
                </Col>
              </Row>
            </Card>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default ProductForm;
