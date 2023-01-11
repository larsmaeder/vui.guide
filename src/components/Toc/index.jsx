import * as React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OrderedList, ListItem, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const Toc = ({ toc: { items }, isAvailable, location }) => {
  const replaceUmlauts = (e) => {
    return e
      .replace(/\u00df/g, "ss")
      .replace(/\u00e4/g, "a")
      .replace(/\u00f6/g, "o")
      .replace(/\u00fc/g, "u")
      .replace(/\u00c4/g, "A")
      .replace(/\u00d6/g, "O")
      .replace(/\u00dc/g, "U");
  };
  if (isAvailable) {
    return (
      <>
        <Text fontFamily="heading" paddingBottom={2}>Table of contents</Text>
        <OrderedList>
          {items.map((c, i) => {
            return (
              <ListItem key={i + uuidv4}>
                <AnchorLink to={location + replaceUmlauts(c.url)}>
                  {c.title}
                </AnchorLink>
              </ListItem>
            );
          })}
        </OrderedList>
      </>
    );
  }
};

export default Toc;
