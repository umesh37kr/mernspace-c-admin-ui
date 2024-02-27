import { useQuery } from "@tanstack/react-query";
import { Card, Col, Form, Input, Row, Select, Space } from "antd";
import { getTenants } from "../../../http/api";
import { Tenant } from "../../../types";

const UserForms = () => {
  const { data: tenants } = useQuery({
    queryKey: ["tenants"],
    queryFn: () => {
      return getTenants().then((res) => res.data);
    },
  });
  return (
    <>
      <Row>
        <Col span={24}>
          <Space direction="vertical" size={"large"}>
            <Card title="Basic info">
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item label="First Name" name={"firstName"}>
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Last Name" name={"lastName"}>
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Email" name={"email"}>
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Security info">
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item label="Password" name={"password"}>
                    <Input type="password" size="large" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Role">
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item label="Select role" name={"role"}>
                    <Select
                      size="large"
                      style={{ width: "100%" }}
                      allowClear={true}
                      placeholder="Select role"
                      onChange={() => {}}
                    >
                      <Select.Option value="admin">Admin</Select.Option>
                      <Select.Option value="manager">Manager</Select.Option>
                      <Select.Option value="customer">Customer</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Select Restaurants" name={"tenantId"}>
                    <Select
                      size="large"
                      style={{ width: "100%" }}
                      allowClear={true}
                      placeholder="Select Restaurants"
                      onChange={() => {}}
                    >
                      {tenants?.map((tenant: Tenant) => (
                        <Select.Option value={tenant.id}>
                          {tenant.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default UserForms;
