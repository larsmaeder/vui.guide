import * as React from "react";
import { graphql } from "gatsby";
import { pageGutter, pageWidth } from "../theme";
import { Wrapper } from "../layout";
import { PagesTemplate } from "../templates";
import { svgGlobalization } from "../images";
import {
  chakra,
  GridItem,
  Box,
  Heading,
  Text,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  Button,
  VStack,
  Hide,
  Link,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ children, ...props }) => {
  const Motion = chakra(motion.div);
  return (
    <LinkBox h="full">
      <Motion
        h="inherit"
        border="1px"
        borderColor="whiteAlpha.200"
        bg="whiteAlpha.50"
        p={16}
        borderRadius={4}
        _hover={{ bg: "whiteAlpha.100" }}
        initial={{}}
        whileHover={{
          y: -8,
        }}
      >
        <VStack spacing={4} align="flex-start">
          <Text casing="uppercase" fontFamily="heading" fontSize="md">
            {props.sup}
          </Text>
          <Box>
            <LinkOverlay href={props.to}>
              <Heading as="h3" size="lg" mb={2}>
                {props.title}
              </Heading>
            </LinkOverlay>
            <Text>{children}</Text>
          </Box>
          <Button colorScheme="blue" variant="link">
            {props.link}
          </Button>
        </VStack>
      </Motion>
    </LinkBox>
  );
};

const Attribution = () => {
  return (
    <Flex justify="center" paddingX={pageGutter}>
      <Box w={pageWidth} py={{ base: 16, md: 32 }}>
        <Divider mb={4} />
        <Box fontFamily="heading" fontSize="sm" color="gray.400">
          <Text fontWeight="bold">Attribution</Text>
          <Link
            href="https://storyset.com/people"
            isExternal
            display="flex"
            alignItems="center"
          >
            People illustrations by Storyset <Icon as={MdOpenInNew} mx="2px" />
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

const About = ({ data, location, pageContext }) => {
  const currentUrl = data.site.siteMetadata.siteUrl + location.pathname;
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <PagesTemplate crumbs={crumbs} url={currentUrl}>
      <Wrapper as="section">
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Heading
            as="h1"
            size="4xl"
            letterSpacing="tight"
            pb={8}
            color="purple.600"
          >
            What is VUI Guide?
          </Heading>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            lineHeight={{ base: 6, md: 8 }}
          >
            VUI Guide provides an open source hodgepodge for designing voice
            user interfaces. It covers best practices, design patterns, and
            practical tips to help designers create effective and engaging
            voice-only experiences. Whether you’re new to designing voice user
            interfaces or looking to take your skills to the next level, VUI
            Guide is the go-to source for all your voice user interfaces design
            needs.
          </Text>
        </GridItem>
      </Wrapper>
      <Wrapper
        as="section"
        color="white"
        bg="purple.900"
        templateColumns="repeat(2, 1fr)"
      >
        <Hide below="md">
          <Image
            pos="absolute"
            top="0"
            right="0"
            src={svgGlobalization}
            transform="auto"
            translateY="-50%"
            zIndex="docked"
            w={{ md: "md", lg: "lg", xl: "xl" }}
          />
        </Hide>
        <GridItem colSpan={{ base: 2, xl: 1 }}>
          <Card
            to="#"
            sup="Help improve VUI Guide"
            title="Add content to the guide"
            link="Read how you can contribute"
          >
            VUI Guide is hosted on GitHub, a platform for version control and
            collaboration for open-source projects. Contributing to the VUI
            Guide’s content is possible by using GitHub’s collaboration
            features.
          </Card>
        </GridItem>
        <GridItem colSpan={{ base: 2, xl: 1 }}>
          <Card
            to="#"
            sup="Share your knowledge"
            title="Write a blog post"
            link="Read how to submit a blog post"
          >
            Sharing your knowledge and writing a blog post is a great way to
            contribute to the VUI Guide and help others learn from your
            experiences and insights.
          </Card>
        </GridItem>
      </Wrapper>
      <Attribution />
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

export default About;
