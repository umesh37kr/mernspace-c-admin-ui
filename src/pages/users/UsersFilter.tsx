import { Card, Col, Form, Input, Row, Select } from "antd";
import React from "react";

type UserFilterProps = {
  children?: React.ReactNode;
};
const UsersFilter = ({ children }: UserFilterProps) => {
  return (
    <>
      <Card>
        <Row justify={"space-between"}>
          <Col>
            <Row gutter={20}>
              <Col>
                <Form.Item name="q">
                  <Input.Search allowClear={true} placeholder="search" />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name="role">
                  <Select
                    style={{ width: 120 }}
                    allowClear={true}
                    placeholder="Select role"
                  >
                    <Select.Option value="admin">Admin</Select.Option>
                    <Select.Option value="manager">Manager</Select.Option>
                    <Select.Option value="customer">Customer</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* <Col>
                <Select
                  style={{ width: 120 }}
                  allowClear={true}
                  placeholder="Status"
                  onChange={(selectedItem) =>
                    onFilterChange("statusFilter", selectedItem)
                  }
                >
                  <Select.Option value="ban">Ban</Select.Option>
                  <Select.Option value="active">Active</Select.Option>
                </Select>
              </Col> */}
            </Row>
          </Col>
          <Col>{children}</Col>
        </Row>
      </Card>
    </>
  );
};

export default UsersFilter;
