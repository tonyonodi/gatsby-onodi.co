import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Project, {
  ProjectDescription,
  ProjectImage,
  Button,
  ButtonContainer,
} from "../components/project";
import meridianScreenshot from "../images/meridian-screenshot.png";
import bideScreenshot from "../images/bide-screenshot.png";
import sayableScreenshot from "../images/sayable-screenshot.png";

const TechLink = styled.a`
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

const green = "#00c386";
const orange = "#ffa03a";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Project>
      <ProjectImage>
        <img src={meridianScreenshot} alt="Meridian screenshot" />
      </ProjectImage>
      <ProjectDescription>
        <h1>Meridian</h1>
        <p>
          Meridian uses the concept of timelines to show the time in any of a
          number of timezones at the same time. I initially made it as a way to
          easily calculate and visualise the duration of a journey that happens
          across multiple timezones. It's made with{" "}
          <TechLink
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </TechLink>{" "}
          and{" "}
          <TechLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </TechLink>{" "}
          and uses{" "}
          <TechLink
            href="https://cordova.apache.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cordova
          </TechLink>{" "}
          for the Android app.
        </p>
        <ButtonContainer>
          <Button
            href="https://www.meridianapp.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: green }}
          >
            View web app →
          </Button>
          <Button
            href="https://api.meridianapp.co/android-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: orange }}
          >
            View Android app →
          </Button>
        </ButtonContainer>
      </ProjectDescription>
    </Project>

    <Project>
      <ProjectImage>
        <img src={bideScreenshot} alt="BIDE screenshot" />
      </ProjectImage>
      <ProjectDescription>
        <h1>Bide</h1>
        <p>
          Bide is an "IDE" for bookmarklets. It takes your JavaScript, compiles
          and minifies it using{" "}
          <TechLink
            href="https://babeljs.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Babel
          </TechLink>
          , and injects it into a bookmarklet on the page, which you can then
          drag to your bookmarklets bar and run anywhere. It is made using{" "}
          <TechLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </TechLink>{" "}
          and uses{" "}
          <TechLink
            href="https://codemirror.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeMirror
          </TechLink>{" "}
          as the editor.
        </p>
        <ButtonContainer>
          <Button
            href="http://bide.onodi.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: green }}
          >
            View BIDE →
          </Button>
          <Button
            href="https://github.com/tonyonodi/bide"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: orange }}
          >
            View on Github →
          </Button>
        </ButtonContainer>
      </ProjectDescription>
    </Project>

    <Project>
      <ProjectImage>
        <img src={sayableScreenshot} alt="Sayable screenshot" />
      </ProjectImage>
      <ProjectDescription>
        <h1>Sayable</h1>
        <p>
          You can submit any URL to Sayable and it will return a three word
          phrase that you can use to retrieve the URL from anywhere! You just
          have to go back to Sayable on any device and enter the same three word
          phrase again. Sayable is made using{" "}
          <TechLink
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node
          </TechLink>{" "}
          and{" "}
          <TechLink
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MongoDB
          </TechLink>
          , it is hosted serverlessly on{" "}
          <TechLink
            href="https://zeit.co/now"
            target="_blank"
            rel="noopener noreferrer"
          >
            Now
          </TechLink>
          .
        </p>
        <ButtonContainer>
          <Button
            href="https://www.sayable.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: green }}
          >
            View Sayable →
          </Button>
        </ButtonContainer>
      </ProjectDescription>
    </Project>
    {/* <Image />
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
