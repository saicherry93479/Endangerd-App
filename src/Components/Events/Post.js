import React, { useContext } from "react";
import { userContext } from "../../App";

const Post = ({ data }) => {
  const { user } = useContext(userContext);
  const addLike = async () => {
    console.log("cliked one like ");
    const daat = await addLike(data.id, data.likes, user.username);
    if (daat === "sucess") {
      data.liked = true;
    }
  };
  return (
    <div className="post">
      <div className="postTop">
        <p className="userName">{data.username}</p>
        {data.liked ? (
          <i class="fa-solid fa-heart"></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </div>

      <p>{data.title}</p>

      <div class="image">
        <img src={data.image}></img>
      </div>
      <p className="content">{data.content}</p>
    </div>
  );
};

export default Post;
