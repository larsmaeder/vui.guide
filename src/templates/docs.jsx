import * as React from "react";
import { graphql, Link } from "gatsby";
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
import SideNavigation from "../components/SideNavigation";

const DocsTemplate = ({ data, children, location, pageContext }) => {
  const shortcodes = { Link };
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
            crumbLabel={data.mdx.frontmatter.title}
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
      <Flex justify="center" paddingX={layoutBorder}>
        <Box w={layoutWidth}>
          <Grid templateColumns="repeat(3, 1fr)" gap={12}>
            <GridItem
              colSpan={1}
              // borderRight="1px"
              // borderColor="gray.100"
              display={{ base: "none", lg: "block" }}
            >
              <Box pos="sticky" top={0} pt={12}>
                <Logo />
                <Box as="nav" pt={32}>
                  <SideNavigation data={data.allMdx.edges} />
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box as="main" pt={32}>
                <Stack spacing={3} direction="row" align="center">
                  <Tooltip
                    aria-label="Click to go home"
                    label="Home"
                    placement="top-start"
                  >
                    <IconButton
                      aria-label="Go home"
                      icon={<MdHome />}
                      color="sundial.500"
                      background="sundial.100"
                      _hover={{ background: "sundial.200 " }}
                      _active={{ background: "sundial.300 " }}
                      size="md"
                      as={Link}
                      to="/"
                    />
                  </Tooltip>
                  <CustomBreadcrumbHidden />
                </Stack>
                <SkipNavContent />
                <Box maxW="40ch" pt={16}>
                  <Heading as="h1" color="purple.600" fontSize="5xl">
                    {data.mdx.frontmatter.title}
                  </Heading>
                  <Text fontFamily="heading" pt={6} fontSize="sm">
                    {data.mdx.frontmatter.prelude}
                  </Text>
                </Box>
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
                <TimeToRead time={data.mdx.fields.timeToRead.text} />
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
      frontmatter {
        category
        title
        navDocTitle
        toc
        prelude
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            category
            slug
            title
            navDocTitle
            sort
          }
        }
      }
    }
  }
`;

export default DocsTemplate;
