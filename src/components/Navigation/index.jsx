import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, HStack, Button } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const Navigation = () => {
  const pages = [
    { id: 1, title: "Guidelines", slug: "/docs/", disabled: false },
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
          return (
            <Button
              as={GatsbyLink}
              to={c.disabled ? "#" : c.slug}
              key={i + uuidv4}
              isDisabled={c.disabled}
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
