import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import theme from "../theme";
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
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { MdHome } from "react-icons/md";
import Logo from "../components/Logo";
import CopyURL from "../components/CopyURL";
import CustomBreadcrumb from "../components/CustomBreadcrumb";
import TimeToRead from "../components/TimeToRead";
import SideAccordion from "../components/SideAccordion";
import Navigation from "../components/Navigation";

const DocsTemplate = ({ data, children, location, pageContext }) => {
  const shortcodes = { GatsbyLink };
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
  const layoutWidth = {
    base: "full",
    lg: "60em",
    xl: "70em",
    "2xl": "90em",
  };
  const layoutBorder = {
    base: "4",
    md: "8",
    lg: "12",
  };
  return (
    <ChakraProvider theme={theme}>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Navigation crumbs={crumbs} />
      <Flex justify="center" paddingX={layoutBorder}>
        <Box w={layoutWidth}>
          <Box pt={12} pb={16} w="full">
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
              <Heading as="h1" color="purple.600" fontSize="6xl">
                {pageContext.frontmatter.title}
              </Heading>
              <Text fontFamily="heading" pt={6} fontSize="lg" maxW="60ch">
                {pageContext.frontmatter.prelude}
              </Text>
            </Box>
            <Box pt={9}>
              <TimeToRead time={data.mdx.fields.timeToRead.text} />
            </Box>
          </Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={12}>
            <GridItem colSpan={1} display={{ base: "none", lg: "block" }}>
              <Box as="nav">
                <SideAccordion
                  data={data.allMdx.edges}
                  category={pageContext.frontmatter.category}
                />
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box as="main">
                <SkipNavContent />
                <Box>
                  <Text>Contributors:</Text>
                  <AvatarGroup
                    size="sm"
                    max={2}
                    fontFamily="heading"
                    fontSize="sm"
                  >
                    <Avatar name="Lars Mäder" />
                    <Avatar name="Segun Adebayo" />
                    <Avatar name="Kent Dodds" />
                    <Avatar name="Prosper Otemuyiwa" />
                    <Avatar name="Christian Nwamba" />
                  </AvatarGroup>
                </Box>
                <MDXProvider components={shortcodes}>
                  <Box maxW="42ch" className="mdx-prose">
                    {children}
                  </Box>
                </MDXProvider>
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
