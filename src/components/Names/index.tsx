import { useParams } from "react-router-dom";

export const Names = () => {
  const { username } = useParams();

  return <div>{username}</div>;
};
