import { Card, Col, Form, InputNumber, Row, Space, Typography } from "antd";
import { Category } from "../../../types";

type PricingProps = {
  selectedCategory: string;
};

const Pricing = ({ selectedCategory }: PricingProps) => {
  const category: Category | null = selectedCategory
    ? JSON.parse(selectedCategory)
    : null;
  if (!category) {
    return null;
  }
  return (
    <Card
      title={<Typography.Text>Product Price</Typography.Text>}
      bordered={false}
    >
      {Object.entries(category?.priceConfiguration).map(
        ([cofigurationKey, cofigurationValue]) => {
          return (
            <div key={cofigurationKey}>
              <Space
                direction="vertical"
                size={"large"}
                style={{ width: "100%" }}
              >
                <Typography.Text>
                  {`${cofigurationKey} (${cofigurationValue.priceType})`}
                </Typography.Text>

                <Row gutter={20}>
                  {cofigurationValue.availableOptions.map((option: string) => {
                    return (
                      <Col span={8} key={option}>
                        <Form.Item
                          label={option}
                          name={[
                            "priceCofiguration",
                            JSON.stringify({
                              cofigurationKey: cofigurationKey,
                              priceType: cofigurationValue.priceType,
                            }),
                            option,
                          ]}
                        >
                          <InputNumber addonAfter="₹" />
                        </Form.Item>
                      </Col>
                    );
                  })}
                </Row>
              </Space>
            </div>
          );
        }
      )}
    </Card>
  );
};

export default Pricing;
