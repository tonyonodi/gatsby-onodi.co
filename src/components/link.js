import React from "react";
import styled from "styled-components";

const LinkView = styled.a`
  font-family: "Source Code Pro", monospace;
  color: inherit;
  text-decoration: none;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: #d83535;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: height 0.2s;
  }
  &:hover {
    color: whitesmoke;
  }
  &:hover:after {
    height: 100%;
  }
`;

export default ({ children, ...props }) => {
  return (
    <LinkView rel="noopener noreferrer" {...props}>
      {children}
    </LinkView>
  );
};
