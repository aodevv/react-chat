import React from "react";
import { H2, H2s } from "./Headings.styles";

export const HeadingPrimary = ({ text, className }) => {
  return <H2 className={className}>{text}</H2>;
};

export const HeadingSecendary = ({ text, className, isBig }) => {
  return (
    <H2s isBig={isBig} className={className}>
      {text}
    </H2s>
  );
};
