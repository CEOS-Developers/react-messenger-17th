import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const latestPage = localStorage.getItem("latestPage") || "friends";

  useEffect(() => {
    navigate(`${latestPage}/`);
  });

  return <div></div>;
};

export default Intro;
