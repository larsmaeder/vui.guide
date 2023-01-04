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
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import { v4 as uuidv4 } from "uuid";

const SideNavigation = ({
  data: node,
  crumbs: autoGenCrumbs,
  crumbLocationRef,
}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      mdx {
        frontmatter {
          category
        }
      }
    }
  `);
  console.log(data.mdx.frontmatter.category);

  // let isCurrentPage;
  const categories = [
    ...new Map(node.map((c) => [c.node.frontmatter.category, c])).values(),
  ];
  // autoGenCrumbs.map((c) => {
  //   console.log(autoGenCrumbs)
  //   isCurrentPage = crumbLocationRef === c.pathname;
  //   return console.log(isCurrentPage ? c.crumbLabel : null);
  // });
  // const test = () => {
  //   let finalnumber;

  //   categories.findIndex((x) => x.node.frontmatter.category === "Fundamentals");
  //   return finalnumber;
  // };
  const currentItem = Array.of(
    categories.findIndex((x) => x.node.frontmatter.category === "Fundamentals")
  );
  console.log(currentItem);

  return (
    <>
      <HStack spacing={2} paddingLeft={3}>
        <Icon as={MdLibraryBooks} />
        <Text fontFamily="heading">Guidelines</Text>
      </HStack>
      <Accordion defaultIndex={currentItem} allowMultiple>
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
