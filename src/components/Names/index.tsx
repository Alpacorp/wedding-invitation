import { useParams } from "react-router-dom";

export const Names = () => {
  console.log("useParams", useParams());

  const { username } = useParams();

  return <div>{username}</div>;
};
