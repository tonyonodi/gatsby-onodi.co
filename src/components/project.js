import styled from "styled-components";

const midBreakpoint = `860px`;
const smallBreakpoint = `610px`;

export const ProjectDescription = styled.div`
  max-width: 300px;
  font-size: 1.2rem;
  h1 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  @media only screen and (max-width: ${midBreakpoint}) {
    max-width: 80%;
  }
  @media only screen and (max-width: ${smallBreakpoint}) {
    max-width: 100%;
  }
`;

export const ProjectImage = styled.div`
  max-width: 60%;
  @media only screen and (max-width: ${midBreakpoint}) {
    max-width: 80%;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: ${smallBreakpoint}) {
    max-width: 100%;
  }
`;

// 860px break point
const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 80vh;
  align-items: center;
  margin: 4rem 0;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  img {
    max-height: 80vh;
    border-radius: 10px;
    transform: rotate3d(-5, 60, -9, 10deg);
    box-shadow: -13px 9px 27px 10px rgba(0, 0, 0, 0.25);
  }
  @media only screen and (min-width: ${midBreakpoint + 1}) {
    &:nth-child(even) img {
      transform: rotate3d(-5, 60, -9, -10deg);
      box-shadow: 13px 9px 27px 10px rgba(0, 0, 0, 0.25);
    }
  }
  @media only screen and (max-width: ${midBreakpoint}) {
    flex-direction: column !important;
  }
`;

const buttonDarkColor = "#c35050";

export const ButtonContainer = styled.div`
  @media only screen and (max-width: ${midBreakpoint}) {
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: ${smallBreakpoint}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.a`
  text-align: center;
  display: block;
  width: 220px;
  border-radius: 5px;
  padding: 15px 5px;
  font-size: 1rem;
  font-weight: 300;
  background: ${buttonDarkColor};
  color: whitesmoke;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin: 10px 0;
  &:hover,
  &:focus {
    outline: none;
    background: #812c2c;
    /* transform: translateY(-5px);
    box-shadow: 0 10px 20px rgb(0, 0, 0, 0.15); */
  }
  @media only screen and (max-width: ${midBreakpoint}) {
    margin: 10px;
  }
  @media only screen and (max-width: ${smallBreakpoint}) {
    margin: 10px 0;
    width: 100%;
  }
`;

export default Project;
