import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, HStack, Button } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const Navigation = ({ crumbs: autoGenCrumbs }) => {
  const pages = [
    { id: 1, title: "Guide", slug: "/docs/", disabled: false },
    { id: 2, title: "Resources", slug: "/resources/", disabled: true },
    { id: 3, title: "Blog", slug: "/blog/", disabled: true },
    { id: 4, title: "Contribute", slug: "/contribute/", disabled: true },
  ];
  return (
    <Box
      as="nav"
      pos="fixed"
      bottom={16}
      left="50%"
      transform="auto"
      translateX="-50%"
      zIndex="overlay"
      fontFamily="heading"
      borderRadius={12}
      overflow="hidden"
      boxShadow="dark-lg"
    >
      {/* set spacing -1px to remove anti-alised thin line in browser rendering */}
      <HStack spacing="-1px">
        {pages.map((c, i) => {
          if (c.disabled)
            return (
              <Button
                as="span"
                key={i + uuidv4}
                isDisabled
                variant="navigation"
                aria-disabled
              >
                {c.title}
              </Button>
            );
          else if (autoGenCrumbs[1].pathname === c.slug)
            return (
              <Button
                as={GatsbyLink}
                to={c.slug}
                key={i + uuidv4}
                variant="navigation"
                aria-current="location"
              >
                {c.title}
              </Button>
            );
          else
            return (
              <Button
                as={GatsbyLink}
                to={c.slug}
                key={i + uuidv4}
                variant="navigation"
              >
                {c.title}
              </Button>
            );
        })}
      </HStack>
    </Box>
  );
};

export default Navigation;
