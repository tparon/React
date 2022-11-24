import React, { FC, FormEvent, useState } from "react";
import Post from "../types/Post";

interface Props {
  post: Post;
}

const PostRow: FC<Props> = ({ post }) => {

  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: FormEvent) => {
    if (!isChecked) {
      setStyle("line-through")
      setColor("red")
    } else {
      setStyle("")
      setColor("black")
    }

    setIsChecked(current => !current)
  };

  return (
    <div style={{color: color, textDecoration: style}}>
      <h2>
        <input
          type={"checkbox"}
          checked={isChecked}
          onChange={handleChange}
        />
        {' ' + post.task + ', '}
        {post.date}
      </h2>
    </div>
  );
}

export default PostRow;
