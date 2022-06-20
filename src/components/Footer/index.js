import React from "react";
import { Anchor, Copyright, Footbar, Social } from "./FooterElements.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

const Footer = () => {
  return (
    <>
      <Footbar>
        <Copyright>&copy;2022 Caroline Reed</Copyright>

        <Social>
          <Anchor href="https://github.com/caroline-reed">
            <FontAwesomeIcon icon={["fab", "github-alt"]} /></Anchor>
          <Anchor href="https://www.linkedin.com/in/carolinereedc/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} /></Anchor>
          <Anchor href="mailto:reedce9@gmail.com?subject=Hello!">
            <FontAwesomeIcon icon={["fas", "envelope"]} /></Anchor>
        </Social>
      </Footbar>
    </>
  );
};

export default Footer;
