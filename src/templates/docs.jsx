import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { theme } from "../theme";
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
  Slide,
  useDisclosure,
  Show,
  Image,
  Divider,
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
      <Seo pathname={location.pathname} />
      <SkipNavLink zIndex="skipLink">Skip to content</SkipNavLink>
      <Navigation
        crumbs={crumbs}
        dynamic={{ docsNavigation: true }}
        func={{ onToggleDocsNavigation }}
        pages={pages}
      />
      {image ? (
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
      ) : (
        <Box
          pos="absolute"
          top={0}
          left={0}
          width="full"
          height="80vh"
          zIndex="base"
          bgColor={data.mdx.frontmatter.color || "purple.100"}
          _before={{
            bgGradient:
              "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%), linear-gradient(90deg, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 100%)",
            content: '""',
            position: "absolute",
            width: "full",
            height: "100%",
            zIndex: "docked",
          }}
        ></Box>
      )}
      <Wrapper as="header" pt={{ base: 8, md: 12 }} pb={0}>
        <GridItem colSpan={{ base: 3 }}>
          <Logo />
        </GridItem>
      </Wrapper>
      <Wrapper pt={{ base: 8, md: 12 }} pb={0}>
        <GridItem colSpan={{ base: 3 }}>
          <Stack spacing={3} direction="row" align="center">
            <Tooltip aria-label="Home" label="Home" placement="top-start">
              <IconButton
                aria-label="Click to go home"
                icon={<MdHome />}
                colorScheme="gray"
                size="md"
                as={GatsbyLink}
                to="/"
                variant="outline"
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
      <Wrapper as="main" pt={16}>
        <Grid templateColumns="repeat(3, 1fr)" gap={{ base: 6, md: 12 }}>
          <GridItem colSpan={{ base: 3, md: 2 }}>
            <SkipNavContent />
            <Heading as="h1" size="4xl" color="purple.600" mt={0}>
              {pageContext.frontmatter.title}
            </Heading>
            <Text fontFamily="heading">{pageContext.frontmatter.prelude}</Text>
            <TimeToRead time={data.mdx.fields.timeToRead.text} />
          </GridItem>
        </Grid>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={{ base: 6, md: 12 }}
          pt={{ base: 4, md: 24 }}
        >
          <GridItem colSpan={1}>
            <Show above="md">
              <DocsNavigation
                data={data.allMdx.edges}
                category={pageContext.frontmatter.category}
              />
            </Show>
            <Show below="md">
              <Slide
                direction="left"
                in={isOpenDocsNavigation}
                style={{ zIndex: "var(--chakra-zIndices-dropdown)" }}
              >
                <Box
                  w="66%"
                  px={4}
                  py={8}
                  bg="white"
                  overflowY="scroll"
                  boxShadow="xs"
                  h="full"
                >
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
              tocData={data.mdx.tableOfContents}
              isAvailable={data.mdx.frontmatter.toc}
              location={location.pathname}
            />
            <Box className="mdx-prose">
              <Prose>
                <MDXProvider components={shortcodes}>{children}</MDXProvider>
              </Prose>
            </Box>
            <Divider mt={16} />
            <Text fontFamily="heading" fontSize="xs" color="gray.400">
              Last edited: {data.mdx.parent.modifiedTime}
            </Text>
          </GridItem>
        </Grid>
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
        color
        toc
        heroImageAlt
        heroImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM DD, YYYY")
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
