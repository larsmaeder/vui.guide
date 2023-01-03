import * as React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  HStack,
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

const SideNavigation = ({ data: node }) => {
  const categories = [
    ...new Map(node.map((c) => [c.node.frontmatter.category, c])).values(),
  ];
  return (
    <>
      <HStack spacing={2} paddingLeft={3}>
        <Icon as={MdLibraryBooks} />
        <Text fontFamily="heading">Guidelines</Text>
      </HStack>
      <Accordion allowToggle>
        {categories.map((c, i) => {
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
                      <Box as="span" flex="1" textAlign="left">
                        {category}
                      </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {node.map((c, i) => {
                        if (category === c.node.frontmatter.category) {
                          return (
                            <Link
                              as={GatsbyLink}
                              to={c.node.frontmatter.slug}
                              key={i + uuidv4}
                              display="block"
                              py={3}
                            >
                              {c.node.frontmatter.navDocTitle}
                            </Link>
                          );
                        } else return null;
                      })}
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
