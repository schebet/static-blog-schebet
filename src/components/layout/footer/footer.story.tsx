import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "ZAPLANJE",
  facebook: "https://www.facebook.com/zaplanje/",
  
 
};

story.add("Footer", () => <Footer {...data} />);
