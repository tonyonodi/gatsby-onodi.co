import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Icon from "./icon";

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  a {
    color: black;
    text-decoration: none;
    margin-left: 10px;
  }
  a:hover,
  a:focus {
    outline: none;
    svg {
      transform: translate(-0px, -5px);
      box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
    }
  }
  svg {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    transition: transform 0.5s, box-shadow 0.5s;
  }
`;

const HeaderView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <HeaderView
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        fontSize: "1.4rem",
      }}
    >
      <Title style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
      <SocialMediaLinks>
        <a
          href="https://instagram.com/tonyonodi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="instagram" />
        </a>
        <a
          href="https://twitter.com/tonyonodi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="twitter" />
        </a>
        <a
          href="https://github.com/tonyonodi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="github" />
        </a>
      </SocialMediaLinks>
    </HeaderView>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
