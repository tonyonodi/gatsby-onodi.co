import styled from "styled-components";

export const ProjectDescription = styled.div`
  max-width: 300px;
  font-size: 1.2rem;
  h1 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`;

export const ProjectImage = styled.div`
  max-width: 60%;
`;

const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80vh;
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
  &:nth-child(even) img {
    transform: rotate3d(-5, 60, -9, -10deg);
    box-shadow: 13px 9px 27px 10px rgba(0, 0, 0, 0.25);
  }
`;

const buttonDarkColor = "#c35050";

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
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover,
  &:focus {
    outline: none;
    background: #812c2c;
    /* transform: translateY(-5px);
    box-shadow: 0 10px 20px rgb(0, 0, 0, 0.15); */
  }
`;

export default Project;
