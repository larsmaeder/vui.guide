import * as React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  HStack,
  Flex,
  Icon,
  Link,
} from "@chakra-ui/react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdLibraryBooks,
} from "react-icons/md";
import { Link as GatsbyLink } from "gatsby";
import { v4 as uuidv4 } from "uuid";

const SideNavigation = ({ data: node, category }) => {
  // remove all category duplicates and create new array
  const cleanArray = [
    ...new Map(node.map((c) => [c.node.frontmatter.category, c])).values(),
  ];
  // write new array with the current position as an integer, if component passed down prop pageContext.frontmatter.category is equal to node.frontmatter.category
  const currentCatPos = Array.of(
    cleanArray.findIndex((x) => x.node.frontmatter.category === category)
  );
  return (
    <>
      <HStack spacing={2}>
        <Icon as={MdLibraryBooks} />
        <Text fontFamily="heading">Guidelines</Text>
      </HStack>
      <Accordion defaultIndex={currentCatPos} allowMultiple>
        <AccordionItem key={uuidv4}>
          <AccordionButton>
            <Link
              as={GatsbyLink}
              to="/docs"
              key={uuidv4}
              textDecoration="none !important"
            >
              Overview
            </Link>
          </AccordionButton>
        </AccordionItem>
        {cleanArray.map((c, i) => {
          const category = c.node.frontmatter.category;
          if (category === null) {
            return null;
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
                                borderLeft="1px solid red"
                                px={6}
                                py={3}
                                _hover={{ borderLeft: "1px solid blue" }}
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
    </>
  );
};

export default SideNavigation;
