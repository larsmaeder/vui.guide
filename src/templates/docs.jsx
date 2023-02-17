import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { theme } from "../theme";
import {
  ChakraProvider,
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
  Slide,
  useDisclosure,
  Hide,
  Show,
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
import { Footer, Wrapper } from "../layout";

const DocsTemplate = ({ data, children, location, pageContext, attr }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isDocsNavigation, setDocsNavigation] = React.useState(true);
  const funcDocsNavigation = () => {
    console.log("Hello World");
  };
  React.useEffect(() => {
    setDocsNavigation(true);
  }, [isDocsNavigation, setDocsNavigation]);
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
  return (
    <ChakraProvider theme={theme}>
      <Wrapper as="header" pt={{ base: 8, md: 12 }} pb={0}>
        <SkipNavLink>Skip to content</SkipNavLink>
        <Navigation crumbs={crumbs} dynamic={{ isDocsNavigation, onToggle }} />
        <GridItem colSpan={{ base: 3 }}>
          <Logo />
          <Stack
            spacing={3}
            direction="row"
            align="center"
            pt={{ base: 8, md: 12 }}
          >
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
            {!(location.pathname === "/docs/") ? (
              <Flex align="stretch">
                <CopyURL url={currentUrl} />
                <CustomBreadcrumb
                  crumbs={crumbs}
                  crumbLabel={pageContext.frontmatter.title}
                  crumbLocationRef={location.pathname}
                  hiddenCrumbs={["/"]}
                />
              </Flex>
            ) : (
              <CopyURL url={currentUrl} standalone />
            )}
          </Stack>
        </GridItem>
      </Wrapper>
      <Wrapper grid as="section">
        <GridItem colSpan={{ base: 3 }}>
          <TimeToRead time={data.mdx.fields.timeToRead.text} />
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Heading as="h1" size="4xl" color="purple.600" mt={0}>
            {pageContext.frontmatter.title}
          </Heading>
          <Text>{pageContext.frontmatter.prelude}</Text>
        </GridItem>
      </Wrapper>
      <SkipNavContent />
      <Wrapper grid as="main" templateColumns="repeat(4, 1fr)" pt={0}>
        <GridItem colSpan={1}>
          <Show above="md">
            <DocsNavigation
              data={data.allMdx.edges}
              category={pageContext.frontmatter.category}
            />
          </Show>
          <Show below="md">
            <Slide direction="left" in={isOpen}>
              <Box
                position="fixed"
                w="66%"
                top={0}
                bottom={0}
                left={0}
                zIndex="sticky"
                pl={4}
                bg="gray.50"
                overflowY="scroll"
                boxShadow="xs"
              >
                <Box py={{ base: 8, md: 12 }}>
                  <Logo />
                </Box>
                <DocsNavigation
                  data={data.allMdx.edges}
                  category={pageContext.frontmatter.category}
                />
              </Box>
            </Slide>
          </Show>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3, lg: 3, xl: 2 }}>
          <Toc
            toc={data.mdx.tableOfContents}
            isAvailable={data.mdx.frontmatter.toc}
            location={location.pathname}
          />
          <Box className="mdx-prose">
            <Prose>
              <MDXProvider components={shortcodes}>{children}</MDXProvider>
            </Prose>
          </Box>
        </GridItem>
      </Wrapper>
      <Footer attr={attr} />
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
