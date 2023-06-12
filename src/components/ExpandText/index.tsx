import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  maxChars: number;
  children: string;
}

const ExpandText = ({ maxChars, children }: Props) => {
  console.log("maxChars: ", maxChars);
  console.log("text:", children.length);

  const [showExpand, setShowExpand] = useState(false);

  const TextOverflow = styled.p`
    overflow: hidden;
    max-width: ${showExpand && `${maxChars}ch`};
    text-overflow: ${showExpand && `ellipsis`};
    white-space: ${showExpand && `nowrap`};
  `;

  return (
    <>
      <TextOverflow>{children}</TextOverflow>
      <button onClick={() => setShowExpand(!showExpand)}>
        {showExpand ? `Expand` : `Collapse`}
      </button>
    </>
  );
};

export default ExpandText;
