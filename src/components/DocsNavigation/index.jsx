import * as React from "react";
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
import { v4 as uuidv4 } from "uuid";

const DocsNavigation = ({ data: node, category }) => {
  const cleanArray = [
    // remove all category duplicates and create new array
    ...new Map(node.map((c) => [c.node.frontmatter.category, c])).values(),
  ];
  const currentCatPos = Array.of(
    // if component passed down prop pageContext.frontmatter.category is equal to node.frontmatter.category: write a new array with the current position as an integer
    cleanArray.findIndex((x) => x.node.frontmatter.category === category)
  );
  return (
    <Box as="nav">
      <HStack spacing={2} mb={4} color="gray.500">
        <Icon boxSize={6} as={MdLibraryBooks} />
        <Heading size="md">Guide</Heading>
      </HStack>
      <Accordion defaultIndex={currentCatPos} allowMultiple variant="docs">
        {cleanArray.map((c, i) => {
          const category = c.node.frontmatter.category;
          if (c.node.frontmatter.child === false) {
            return (
              <AccordionItem key={uuidv4}>
                <LinkBox display="inline-flex">
                  <AccordionButton>
                    <LinkOverlay as={GatsbyLink} to={c.node.frontmatter.slug}>
                      {c.node.frontmatter.navDocTitle}
                    </LinkOverlay>
                  </AccordionButton>
                </LinkBox>
              </AccordionItem>
            );
          } else
            return (
              <AccordionItem key={i + uuidv4}>
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
                        {node.map((c, i) => {
                          if (category === c.node.frontmatter.category) {
                            return (
                              <Link
                                as={GatsbyLink}
                                to={c.node.frontmatter.slug}
                                key={i + uuidv4}
                                variant="docs"
                              >
                                {c.node.frontmatter.navDocTitle}
                              </Link>
                            );
                          } else return null;
                        })}
                      </Flex>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
        })}
      </Accordion>
    </Box>
  );
};

export default DocsNavigation;
