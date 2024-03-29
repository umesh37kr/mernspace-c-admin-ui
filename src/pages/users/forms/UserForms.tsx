import { useQuery } from "@tanstack/react-query";
import { Card, Col, Form, Input, Row, Select, Space } from "antd";
import { getTenants } from "../../../http/api";
import { Tenant } from "../../../types";
import { useWatch } from "antd/es/form/Form";

const UserForms = ({ isEditMode = false }: { isEditMode: boolean }) => {
  const selectedRole = useWatch("role");
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
                  <Form.Item
                    label="First Name"
                    name={"firstName"}
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
                    label="Last Name"
                    name={"lastName"}
                    rules={[
                      {
                        required: true,
                        message: "Last name is required",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name={"email"}
                    rules={[
                      {
                        required: true,
                        message: "First name is required",
                      },
                      {
                        type: "email",
                        message: "Please enter a valid email",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            {!isEditMode && (
              <Card title="Security info">
                <Row gutter={20}>
                  <Col span={12}>
                    <Form.Item
                      label="Password"
                      name={"password"}
                      rules={[
                        {
                          required: true,
                          message: "password is required",
                        },
                      ]}
                    >
                      <Input type="password" size="large" />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            )}

            <Card title="Role">
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item
                    label="Select role"
                    name={"role"}
                    rules={[
                      {
                        required: true,
                        message: "role is required",
                      },
                    ]}
                  >
                    <Select
                      id="selectBoxInUserForm"
                      size="large"
                      style={{ width: "100%" }}
                      allowClear={true}
                      placeholder="Select role"
                      onChange={() => {}}
                    >
                      <Select.Option value="admin">Admin</Select.Option>
                      <Select.Option value="manager">Manager</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                {selectedRole === "manager" && (
                  <Col span={12}>
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
                        {tenants?.map((tenant: Tenant) => (
                          <Select.Option value={tenant.id} key={tenant.id}>
                            {tenant.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                )}
              </Row>
            </Card>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default UserForms;
