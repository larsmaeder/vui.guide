import * as React from "react";
import PropTypes from "prop-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OrderedList, ListItem, Text } from "@chakra-ui/react";

const Toc = ({ tocData: { items }, isAvailable, location }) => {
  const umlautMap = {
    ä: "a",
    ö: "o",
    ü: "u",
    Ä: "A",
    Ö: "O",
    Ü: "U",
    ß: "ss",
  };
  const replaceUmlauts = (str) => {
    return str.replace(/[äöüÄÖÜß]/g, (match) => umlautMap[match]);
  };
  return (
    isAvailable && (
      <>
        <Text fontFamily="heading" paddingBottom={2}>
          Table of contents
        </Text>
        <OrderedList>
          {items.map((c) => {
            return (
              <ListItem key={`item-${c.url}`}>
                <AnchorLink to={location + replaceUmlauts(c.url)}>
                  {c.title}
                </AnchorLink>
              </ListItem>
            );
          })}
        </OrderedList>
      </>
    )
  );
};

export default Toc;

Toc.propTypes = {
  tocData: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  isAvailable: PropTypes.bool,
  location: PropTypes.string.isRequired,
};

Toc.defaultProps = {
  isAvailable: false,
};
