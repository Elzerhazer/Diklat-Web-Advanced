import React from "react";
import  HeaderSimple  from "./header";
import { Flex } from "@mantine/core";
import FooterSocial from "./footer";
const Layout = ({ children }) => {
    return (
        <>
          <Flex direction={"column"}>
            <Flex
              direction={"column"}
              gap={0}>
              <HeaderSimple />
              {children}
            </Flex>
            <FooterSocial />
          </Flex>
        </>
      );
    };

export default Layout;