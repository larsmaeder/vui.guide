import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  Box,
  HStack,
  Button,
  Tooltip,
  Hide,
  IconButton,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { MdMenu } from "react-icons/md";

const Navigation = ({ crumbs: autoGenCrumbs, dynamic: { ...dynamic } }) => {
  // * IMP.: set <HStack> spacing to "-1px" to remove anti-alised thin line in browser rendering
  const pages = [
    { id: 1, title: "Guide", slug: "/docs/", disabled: false },
    { id: 2, title: "Resources", slug: "/resources/", disabled: true },
    { id: 3, title: "Blog", slug: "/blog/", disabled: true },
    { id: 4, title: "About", slug: "/about/", disabled: false },
  ];
  return (
    <Box
      as="nav"
      pos="fixed"
      bottom={{ base: 10, md: 16 }}
      left="50%"
      transform="auto"
      translateX="-50%"
      zIndex="overlay"
      borderRadius={12}
      overflow="hidden"
      boxShadow="dark-lg"
    >
      <HStack spacing="-1px">
        {dynamic.isDocsNavigation && (
          <Hide above="md">
            <IconButton
              as="div"
              variant="navigation"
              onClick={dynamic.onToggle}
              cursor="pointer"
              icon={<MdMenu />}
              bg="blue.800"
              _hover={{
                bg: "blue.900",
              }}
            >
              Menu
            </IconButton>
          </Hide>
        )}
        {pages.map((c, i) => {
          if (c.disabled)
            return (
              <Tooltip
                aria-label="Coming soon"
                label="Coming soon"
                placement="top"
                hasArrow
                key={i + uuidv4}
              >
                <Button as="div" isDisabled variant="navigation" aria-disabled>
                  {c.title}
                </Button>
              </Tooltip>
            );
          else if (autoGenCrumbs[0].pathname === "/")
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
