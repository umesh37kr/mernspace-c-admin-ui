import { Card, Col, Input, Row, Select } from "antd";
import React from "react";

type UserFilterProps = {
  children?: React.ReactNode;
  onFilterChange: (filterName: string, filterValue: string) => void;
};
const UsersFilter = ({ onFilterChange, children }: UserFilterProps) => {
  return (
    <>
      <Card>
        <Row justify={"space-between"}>
          <Col>
            <Row gutter={20}>
              <Col>
                <Input.Search
                  allowClear={true}
                  placeholder="search"
                  onChange={(e) =>
                    onFilterChange("searchFilter", e.target.value)
                  }
                />
              </Col>
              <Col>
                <Select
                  style={{ width: 120 }}
                  allowClear={true}
                  placeholder="Select role"
                  onChange={(selectedItem) =>
                    onFilterChange("roleFilter", selectedItem)
                  }
                >
                  <Select.Option value="admin">Admin</Select.Option>
                  <Select.Option value="manager">Manager</Select.Option>
                  <Select.Option value="customer">Customer</Select.Option>
                </Select>
              </Col>
              <Col>
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
              </Col>
            </Row>
          </Col>
          <Col>{children}</Col>
        </Row>
      </Card>
    </>
  );
};

export default UsersFilter;
