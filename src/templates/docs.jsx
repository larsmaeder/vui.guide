import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { theme, pageGutter, pageWidth } from "../theme";
import {
  ChakraProvider,
  Grid,
  GridItem,
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  IconButton,
  Tooltip,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { MdHome } from "react-icons/md";
import {
  Logo,
  CopyURL,
  CustomBreadcrumb,
  TimeToRead,
  DocsNavigation,
  Navigation,
  Toc,
} from "../components";

const DocsTemplate = ({ data, children, location, pageContext }) => {
  const shortcodes = {
    GatsbyLink,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  };
  const currentUrl = data.site.siteMetadata.siteUrl + location.pathname;
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const CustomBreadcrumbHidden = () => {
    if (!(location.pathname === "/docs/")) {
      return (
        <Flex align="stretch">
          <CopyURL url={currentUrl} />
          <CustomBreadcrumb
            crumbs={crumbs}
            crumbLabel={pageContext.frontmatter.title}
            crumbLocationRef={location.pathname}
            hiddenCrumbs={["/"]}
          />
        </Flex>
      );
    } else {
      return <CopyURL url={currentUrl} standalone />;
    }
  };
  return (
    <ChakraProvider theme={theme}>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Navigation crumbs={crumbs} />
      <Flex justify="center" paddingX={pageGutter}>
        <Box w={pageWidth}>
          <Box pt={{ base: 8, md: 12 }} pb={{ base: 8, md: 12 }} w="full">
            <Logo />
          </Box>
          <Box w="full">
            <Stack spacing={3} direction="row" align="center">
              <Tooltip aria-label="Home" label="Home" placement="top-start">
                <IconButton
                  aria-label="Click to go home"
                  icon={<MdHome />}
                  color="sundial.500"
                  background="sundial.100"
                  _hover={{ background: "sundial.200 " }}
                  _active={{ background: "sundial.300 " }}
                  size="md"
                  as={GatsbyLink}
                  to="/"
                />
              </Tooltip>
              <CustomBreadcrumbHidden />
            </Stack>
          </Box>
          <Box w="full" py={16}>
            <Box>
              <Heading
                as="h1"
                color="purple.600"
                fontSize="6xl"
                letterSpacing="tight"
              >
                {pageContext.frontmatter.title}
              </Heading>
              <Text
                fontFamily="heading"
                pt={6}
                fontSize="lg"
                maxW="60ch"
                letterSpacing="tight"
              >
                {pageContext.frontmatter.prelude}
              </Text>
            </Box>
            <Box pt={9}>
              <TimeToRead time={data.mdx.fields.timeToRead.text} />
            </Box>
          </Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={12}>
            <GridItem colSpan={1} display={{ base: "none", md: "block" }}>
              <Box as="nav">
                <DocsNavigation
                  data={data.allMdx.edges}
                  category={pageContext.frontmatter.category}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 3, md: 2 }}>
              <Box as="main">
                <SkipNavContent />
                <Toc
                  toc={data.mdx.tableOfContents}
                  isAvailable={data.mdx.frontmatter.toc}
                  location={location.pathname}
                />
                <Box maxW={{ base: "full", lg: "42ch" }} className="mdx-prose">
                  <Prose>
                    <MDXProvider components={shortcodes}>
                      {children}
                    </MDXProvider>
                  </Prose>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export const pageQuery = graphql`
  query pageQuery($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      tableOfContents(maxDepth: 2)
      frontmatter {
        toc
      }
      fields {
        timeToRead {
          minutes
          text
          time
          words
        }
      }
    }
    allMdx(
      sort: { frontmatter: { sort: ASC } }
      filter: { frontmatter: { category: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            category
            slug
            title
            navDocTitle
            sort
            child
            toc
          }
        }
      }
    }
  }
`;

export default DocsTemplate;
