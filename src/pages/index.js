import * as React from "react";
import { graphql } from "gatsby";
import PagesTemplate from "../templates/pages";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { Orion, Seo } from "../components";
import { Wrapper } from "../layout";
import { useCookieConsent } from "../hooks/useCookieConsent";
import { motion } from "framer-motion";
import { MdInfoOutline } from "react-icons/md";

const Index = ({ data, location, pageContext }) => {
  const { hasOptedIn, optIn, optOut, choiceMade } = useCookieConsent();
  const currentUrl = data.site.siteMetadata.siteUrl + location.pathname;
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const templateProps = { crumbs, currentUrl, data, location };
  const messages = [
    {
      id: "1",
      message: "First message.",
      trigger: "2",
      time: true,
    },
    {
      id: "2",
      component: <div style={{ color: "red" }}>Hello World</div>,
      trigger: "3",
    },
    {
      id: "3",
      component: (
        <motion.div
          initial={{ opacity: 0, y: "0px", width: "100%" }}
          whileInView={{ opacity: 1, y: "-5px" }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Wrapper grid fluid gutters={false} pb={0} pt={12}>
            <GridItem colSpan="3">
              <ButtonGroup
                colorScheme="purple"
                size={{ base: "sm", sm: "md", md: "lg" }}
              >
                <Button onClick={optIn}>Accept Cookies</Button>
                <Button variant="ghost" onClick={optOut}>
                  Decline Cookies
                </Button>
              </ButtonGroup>
              <Flex gap={1.5} pt={8} color="gray.400" w="md">
                <Icon boxSize={3} as={MdInfoOutline} mt={1} />
                <Box fontFamily="heading" fontSize="xs">
                  We use cookies to improve your experience, analyze website
                  traffic and performance. We never collect personal information
                  from you.
                </Box>
              </Flex>
            </GridItem>
          </Wrapper>
        </motion.div>
      ),
      end: true,
    },
  ];

  const RenderConsent = () => {
    if (!choiceMade) {
      return <Orion steps={messages} />;
    }
    if (choiceMade && hasOptedIn) {
      return <div>Choice made and opt in</div>;
    }
    if (choiceMade && !hasOptedIn) {
      return <div>Choice made and opt out</div>;
    }
    return null;
  };

  return (
    <PagesTemplate {...templateProps}>
      <Seo pathname={location.pathname} />
      <Wrapper
        grid
        as="section"
        pt={16}
        minH={{ base: "calc(100vh - 479px)", md: "calc(100vh - 591px)" }}
      >
        <GridItem colSpan={3}>
          <RenderConsent />
        </GridItem>
      </Wrapper>
    </PagesTemplate>
  );
};

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default Index;
