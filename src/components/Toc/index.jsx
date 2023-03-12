import * as React from "react";
import PropTypes from "prop-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OrderedList, ListItem, Text, Link, Box } from "@chakra-ui/react";

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
      <Box fontFamily="heading">
        <Text paddingBottom={2}>Table of contents</Text>
        <OrderedList>
          {items.map((c) => {
            return (
              <ListItem key={`item-${c.url}`}>
                <Link as={AnchorLink} to={location + replaceUmlauts(c.url)}>
                  {c.title}
                </Link>
              </ListItem>
            );
          })}
        </OrderedList>
      </Box>
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
