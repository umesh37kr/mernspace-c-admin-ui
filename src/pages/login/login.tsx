import {
  Layout,
  Card,
  Space,
  Form,
  Input,
  Checkbox,
  Button,
  Flex,
  Alert,
} from "antd";
import { LockFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../../components/icons/Logo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Credentials } from "../../types";
import { login, self } from "../../http/api";
import { useAuthStore } from "../../store";

const loginUser = async (credentials: Credentials) => {
  // server call logic
  const { data } = await login(credentials);
  return data;
};

const getSelf = async () => {
  const { data } = await self();
  return data;
};
const LoginPage = () => {
  const { setUser } = useAuthStore();
  const { refetch } = useQuery({
    queryKey: ["self"],
    queryFn: getSelf,
    enabled: false,
  });
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async () => {
      const selfDataPromise = await refetch();
      setUser(selfDataPromise.data);
    },
  });
  return (
    <>
      <Layout
        style={{ height: "100vh", display: "grid", placeItems: "center" }}
      >
        <Space direction="vertical" align="center" size="large">
          <Layout.Content style={{ justifyContent: "center" }}>
            <Logo />
          </Layout.Content>
          <Card
            style={{ width: 300 }}
            title={
              <Space
                style={{
                  width: "100%",
                  fontSize: 16,
                  justifyContent: "center",
                }}
              >
                <LockFilled /> Sign in
              </Space>
            }
          >
            {isError && (
              <Alert
                style={{ marginBottom: 23 }}
                type="error"
                message={error?.message}
              />
            )}
            <Form
              initialValues={{ remember: true }}
              onFinish={(values) => {
                mutate({ email: values.username, password: values.password });
                console.log(values);
              }}
            >
              <Form.Item
                name={"username"}
                rules={[
                  {
                    required: true,
                    message: "Please input your username",
                  },
                  {
                    type: "email",
                    message: "Email is not a valid email",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="username" />
              </Form.Item>
              <Form.Item
                name={"password"}
                rules={[
                  {
                    required: true,
                    message: "Please input your password",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="password"
                />
              </Form.Item>
              <Flex justify="space-between">
                <Form.Item name={"remember"} valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="" id="login-form-forgot">
                  Forgot password
                </a>
              </Flex>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                  loading={isPending}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </Layout>
    </>
  );
};

export default LoginPage;
