import { useLocation } from "react-router-dom";

export const Names = () => {
  const location = useLocation();
  const userName = new URLSearchParams(location.search).get("user_name");

  console.log("userName", userName);

  return (
    <>
      <div>{userName}</div>
    </>
  );
};
