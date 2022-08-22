import React from "react";
import { storiesOf } from "@storybook/react";
import { Header, MenuItem } from "./header";
import icon from "../../../../static/logo.png";

const story = storiesOf("Components|Layout", module);

const data: MenuItem[] = [
  {
    label: "NASLOVNA",
    href: "/",
  },
  {
    label: "O NAMA",
    href: "/about/",
  },
  
];

const logo = <img className="w-auto h-15" src={icon} alt="Workflow" />;

story.add("Header", () => <Header menuItems={data} logo={logo} />);
