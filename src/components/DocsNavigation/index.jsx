import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  HStack,
  Flex,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  Heading,
} from "@chakra-ui/react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdLibraryBooks,
} from "react-icons/md";
import { Link as GatsbyLink } from "gatsby";

const DocsNavigation = ({ data: nodes, category }) => {
  const categories = React.useMemo(
    () =>
      nodes.reduce((acc, node) => {
        const category = node.node.frontmatter.category;
        acc[category] = acc[category] ? [...acc[category], node] : [node];
        return acc;
      }, {}),
    [nodes]
  );
  const currentCategoryIndex = React.useMemo(
    () => Object.keys(categories).indexOf(category),
    [categories, category]
  );
  return (
    <Box as="nav">
      <HStack spacing={2} mb={4} color="gray.500">
        <Icon boxSize={6} as={MdLibraryBooks} />
        <Heading size="md">Guide</Heading>
      </HStack>
      <Accordion
        defaultIndex={[currentCategoryIndex]}
        allowMultiple
        variant="docs"
      >
        {Object.entries(categories).map(([category, nodes]) => {
          if (nodes.length === 1) {
            return nodes.map((nodeData) => (
              <AccordionItem key={`item-${category}`}>
                <LinkBox display="inline-flex">
                  <AccordionButton>
                    <LinkOverlay
                      as={GatsbyLink}
                      to={nodeData.node.frontmatter.slug}
                    >
                      {nodeData.node.frontmatter.navDocTitle}
                    </LinkOverlay>
                  </AccordionButton>
                </LinkBox>
              </AccordionItem>
            ));
          } else {
            return (
              <AccordionItem key={`item-${category}`}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      {isExpanded ? (
                        <Icon as={MdKeyboardArrowDown} />
                      ) : (
                        <Icon as={MdKeyboardArrowRight} />
                      )}
                      <Box as="span">{category}</Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Flex direction="column" alignItems="self-start">
                        {nodes.map((nodeData) => (
                          <Link
                            as={GatsbyLink}
                            to={nodeData.node.frontmatter.slug}
                            key={`item-${nodeData.node.frontmatter.slug}`}
                            variant="docs"
                          >
                            {nodeData.node.frontmatter.navDocTitle}
                          </Link>
                        ))}
                      </Flex>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          }
        })}
      </Accordion>
    </Box>
  );
};

export default DocsNavigation;

DocsNavigation.propTypes = {
  data: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};
