import React, { ReactNode, useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (children.length <= maxChars) {
    return <p>{children}</p>;
  } else {
    const summary =
      expanded === false ? children.substring(0, maxChars) : children;
    return (
      <p>
        {summary}...
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "less" : "more"}
        </button>
      </p>
    );
  }
};

export default ExpandableText;
