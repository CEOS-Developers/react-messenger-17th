import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SPLASHKEY, PAGEKEY } from "../constants/LOCAL_KEY";

const Intro = () => {
  const navigate = useNavigate();
  const latestPage = localStorage.getItem(PAGEKEY) || "friends";

  useEffect(() => {
    localStorage.removeItem(SPLASHKEY);
    navigate(`${latestPage}/`);
  });

  return <div></div>;
};

export default Intro;
