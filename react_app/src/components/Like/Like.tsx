import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import React, { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [FullHeart, setFullHeart] = useState(false);

  const toggle = () => {
    setFullHeart(!FullHeart);
    onClick();
  };

  if (FullHeart === false) {
    return <FcLikePlaceholder onClick={toggle} />;
  } else {
    return <FcLike onClick={toggle} />;
  }
};

export default Like;
