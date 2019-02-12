import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Project, {
  ProjectTitle,
  ProjectDescription,
  ProjectImage,
  Button,
} from "../components/project";

const Code = styled.code`
  font-family: "Source Code Pro", monospace;
  border-bottom: solid 3px #d83535;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Project>
      <ProjectImage>
        <img src="/images/meridian-screenshot.png" />
      </ProjectImage>
      <ProjectDescription>
        <h1>Meridian</h1>
        <p>
          Meridian uses the concept of timelines to show the time in any of a
          number of timezones at the same time. I initially made it as a way to
          easily calculate and visualise the duration of a journey that happens
          across multiple timezones. It's made with <Code>TypeScript</Code> and{" "}
          <Code>React</Code> and uses <Code>Cordova</Code> for the Android app.
        </p>
        <Button href="https://www.meridianapp.co" target="_blank">
          View the web app →
        </Button>
        <Button href="https://api.meridianapp.co/android-app" target="_blank">
          View the Android app →
        </Button>
      </ProjectDescription>
    </Project>

    <Project>
      <ProjectImage>
        <img src="/images/bide-screenshot.png" />
      </ProjectImage>
      <ProjectDescription>
        <h1>Bide</h1>
        <p>
          Bide is an "IDE" for bookmarklets. It takes your JavaScript, compiles
          and minifies it using <Code>Babel</Code>, and injects it into a
          bookmarklet on the page, which you can then drag to your bookmarklets
          bar and run anywhere. It is made using <Code>React</Code> and uses{" "}
          <Code>CodeMirror</Code> as the editor.
        </p>
        <Button href="http://bide.onodi.co" target="_blank">
          View BIDE →
        </Button>
        <Button href="https://github.com/tonyonodi/bide" target="_blank">
          View on Github →
        </Button>
      </ProjectDescription>
    </Project>

    <Project>
      <ProjectImage>
        <img src="/images/sayable-screenshot.png" />
      </ProjectImage>
      <ProjectDescription>
        <h1>Sayable</h1>
        <p>
          You can submit any URL to Sayable and it will return a three word
          phrase that you can use to retrieve the URL from anywhere! You just
          have to go back to Sayable on any device and enter the same three word
          phrase again. Sayable is made using <Code>Node</Code> and{" "}
          <Code>MongoDB</Code>, it is hosted serverlessly on <Code>Now</Code>.
        </p>
        <Button href="https://www.sayable.co" target="_blank">
          View Sayable →
        </Button>
      </ProjectDescription>
    </Project>
    {/* <Image />
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
