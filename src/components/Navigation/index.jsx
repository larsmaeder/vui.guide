import * as React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import {
  Box,
  HStack,
  Button,
  Tooltip,
  Hide,
  IconButton,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

const Navigation = ({ crumbs, dynamic, func, pages }) => {
  const { docsNavigation } = dynamic;
  const { onToggleDocsNavigation } = func;
  return (
    <Box
      as="nav"
      aria-label="Main navigation"
      pos="fixed"
      bottom={{ base: 10, md: 16 }}
      left="50%"
      transform="auto"
      translateX="-50%"
      zIndex="sticky"
      borderRadius={12}
      overflow="hidden"
      boxShadow="dark-lg"
    >
      <HStack spacing="-1px">
        {docsNavigation && (
          <Hide above="md">
            <IconButton
              as="div"
              variant="navigation"
              onClick={onToggleDocsNavigation}
              cursor="pointer"
              icon={<MdMenu />}
              bg="blue.800"
              _hover={{
                bg: "blue.900",
              }}
            />
          </Hide>
        )}
        {React.useMemo(
          () =>
            pages.map((page) => {
              const { title, slug, disabled } = page;
              const key = `page-${page.id}`;
              if (disabled) {
                return (
                  <Tooltip
                    key={key}
                    aria-label="Coming soon"
                    label="Coming soon"
                    placement="top"
                    hasArrow
                  >
                    <Button
                      as="div"
                      isDisabled
                      variant="navigation"
                      aria-disabled
                    >
                      {title}
                    </Button>
                  </Tooltip>
                );
              } else if (crumbs[0].pathname === "/") {
                return (
                  <Button
                    as={GatsbyLink}
                    to={slug}
                    key={key}
                    variant="navigation"
                  >
                    {title}
                  </Button>
                );
              } else if (crumbs[1].pathname === slug) {
                return (
                  <Button
                    as={GatsbyLink}
                    to={slug}
                    key={key}
                    variant="navigation"
                    aria-current="location"
                  >
                    {title}
                  </Button>
                );
              } else {
                return (
                  <Button
                    as={GatsbyLink}
                    to={slug}
                    key={key}
                    variant="navigation"
                  >
                    {title}
                  </Button>
                );
              }
            }),
          [crumbs, pages]
        )}
      </HStack>
    </Box>
  );
};

export default Navigation;

Navigation.propTypes = {
  crumbs: PropTypes.array.isRequired,
  dynamic: PropTypes.object,
  func: PropTypes.object,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
};

Navigation.defaultProps = {
  dynamic: {},
  func: {},
};
