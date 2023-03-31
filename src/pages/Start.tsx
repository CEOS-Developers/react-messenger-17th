import { NavLink, Outlet } from "react-router-dom";

const Start = () => {
  const activeStyle = {
    color: "pink",
  };

  const normalStyle = {
    color: "black",
  };

  return (
    <div>
      <div>
        <NavLink
          to="/chatrooms/0">
          시작하기~!
        </NavLink>
        <Outlet/>
      </div>
    </div>
  );
};

export default Start;
