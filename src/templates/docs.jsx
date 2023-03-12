import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
  Show,
  Image,
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
  Seo,
} from "../components";
import { Footer, Wrapper } from "../layout";
import pages from "../data/mainNavigation.json";

const DocsTemplate = ({
  data,
  children,
  location,
  pageContext,
  imageAttributions,
}) => {
  const image = getImage(data.mdx.frontmatter.heroImage);
  const {
    isOpen: isOpenDocsNavigation,
    onToggle: onToggleDocsNavigation,
  } = useDisclosure();
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
      {image && (
        <Image
          as={GatsbyImage}
          image={image}
          alt={data.mdx.frontmatter.heroImageAlt}
          pos="absolute"
          top={0}
          left={0}
          width="full"
          height="80vh"
          zIndex="base"
          _before={{
            bgGradient:
              "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%), linear-gradient(90deg, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 100%)",
            content: '""',
            position: "absolute",
            width: "full",
            height: "100%",
            zIndex: "docked",
          }}
        />
      )}
      <Seo pathname={location.pathname} />
      <Wrapper as="header" pt={{ base: 8, md: 12 }} pb={0}>
        <SkipNavLink>Skip to content</SkipNavLink>
        <Navigation
          crumbs={crumbs}
          dynamic={{ docsNavigation: true }}
          func={{ onToggleDocsNavigation }}
          pages={pages}
        />
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
                colorScheme="blackAlpha"
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
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <TimeToRead time={data.mdx.fields.timeToRead.text} />
          <Heading as="h1" size="4xl" color="purple.600" mt={4}>
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
            <Box
              zIndex="dropdown"
              position="fixed"
              top={0}
              bottom={0}
              left={0}
              right={0}
            >
              <Slide direction="left" in={isOpenDocsNavigation}>
                <Box
                  w="66%"
                  pl={4}
                  bg="gray.50"
                  overflowY="scroll"
                  boxShadow="xs"
                  h="full"
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
            </Box>
          </Show>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3, lg: 3, xl: 2 }}>
          <Toc
            tocData={data.mdx.tableOfContents}
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
      <Footer imageAttributions={imageAttributions} />
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
        heroImageAlt
        heroImage {
          childImageSharp {
            gatsbyImageData
          }
        }
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
            toc
          }
        }
      }
    }
  }
`;

export default DocsTemplate;
