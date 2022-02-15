import React, { useState } from "react";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Send } from "../../Assets/leave.svg";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment });

    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
