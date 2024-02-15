import { RightOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { getUsers } from "../../http/api";
import { User } from "../../types";

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return getUsers().then((res) => res.data);
    },
  });
  return (
    <>
      <Breadcrumb
        separator={<RightOutlined />}
        items={[{ title: <Link to={"/"}>Dashboard</Link> }, { title: "user" }]}
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>};
      {users && (
        <div>
          <h1>Users</h1>
          <ul>
            {users.map((user: User) => (
              <li key={user.id}>{user.firstName}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Users;
