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
import Link from "../components/link";
import meridianScreenshot from "../images/meridian-screenshot.png";
import bideScreenshot from "../images/bide-screenshot.png";
import sayableScreenshot from "../images/sayable-screenshot.png";

const green = "#00c386";
const orange = "#ffa03a";

const Intro = styled.div`
  font-size: 1.7rem;
  line-height: 2.2rem;
  margin: 5rem 3rem;
  @media only screen and (max-width: 610px) {
    margin: 2rem 0;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Tony Onodi`, `react`, `web developer`]} />
    <Intro>
      <p>
        Hi, I'm Tony. I'm a full stack web developer from London. I am currently
        the lead developer at{" "}
        <Link href="https://headsandheads.co.uk" target="_blank">
          Heads&amp;Heads
        </Link>
        . I have a front end focus and usually use{" "}
        <Link href="https://www.javascript.com/" target="_blank">
          JavaScript
        </Link>{" "}
        (or{" "}
        <Link href="https://www.javascript.com/" target="_blank">
          TypeScript
        </Link>
        ) with{" "}
        <Link href="https://reactjs.org/" target="_blank">
          React
        </Link>{" "}
        when I want to get things done. When I'm not in a hurry I enjoy playing
        around with more functional languages (
        <Link href="https://www.haskell.org/" target="_blank">
          Haskell
        </Link>
        ,{" "}
        <Link href="https://elm-lang.org/" target="_blank">
          Elm
        </Link>
        ,{" "}
        <Link href="https://clojure.org/" target="_blank">
          Clojure
        </Link>{" "}
        etc.) and whatever the new hotness is in the frontend world. When I'm
        not programming I enjoy{" "}
        <Link href="http://rocketreads.com/tony" target="_blank">
          reading
        </Link>
        , cooking, climbing, and running. Check out some of my more recent
        projects below...
      </p>
    </Intro>
    <div>
      <Project>
        <ProjectImage>
          <img src={meridianScreenshot} alt="Meridian screenshot" />
        </ProjectImage>
        <ProjectDescription>
          <h1>Meridian</h1>
          <p>
            Meridian uses timelines to show the time in any of a number of
            timezones at the same time. I initially made it as a way to easily
            calculate and visualise the duration of a journey that happens
            across multiple timezones. It's made with{" "}
            <Link
              href="https://www.typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </Link>{" "}
            and{" "}
            <Link
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </Link>{" "}
            and uses{" "}
            <Link
              href="https://cordova.apache.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cordova
            </Link>{" "}
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
            Bide is an "IDE" for bookmarklets. It takes your JavaScript,
            compiles and minifies it using{" "}
            <Link
              href="https://babeljs.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Babel
            </Link>
            , and injects it into a bookmarklet on the page, which you can then
            drag to your bookmarklets bar and run anywhere. It is made using{" "}
            <Link
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </Link>{" "}
            and uses{" "}
            <Link
              href="https://codemirror.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeMirror
            </Link>{" "}
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
            have to go back to Sayable on any device and enter the same three
            word phrase again. Sayable is made using{" "}
            <Link
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MongoDB
            </Link>
            , it is hosted serverlessly on{" "}
            <Link
              href="https://zeit.co/now"
              target="_blank"
              rel="noopener noreferrer"
            >
              Now
            </Link>
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
    </div>
    {/* <Image />
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
