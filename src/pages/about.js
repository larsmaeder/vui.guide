import * as React from "react";
import { graphql } from "gatsby";
import { Wrapper } from "../layout";
import { PagesTemplate } from "../templates";
import { svgGlobalization } from "../images";
import {
  chakra,
  GridItem,
  Box,
  Heading,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
  Button,
  VStack,
  Hide,
  Icon,
  Card,
  CardBody,
  Link,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Attribution } from "../components";
import {
  GoSignIn,
  GoRepoForked,
  GoRepoClone,
  GoPencil,
  GoGitCommit,
  GoRepoPush,
  GoGitPullRequest,
  GoCheck,
} from "react-icons/go";

const externalSources = [
  {
    id: 1,
    text: "People illustrations by Storyset",
    href: "https://storyset.com/people",
  },
  {
    id: 2,
    text: "People illustrations by Storyset",
    href: "https://storyset.com/people",
  },
];

const stepsGithub = [
  {
    id: 1,
    icon: GoSignIn,
    title: "1. Sign up for a GitHub account",
    text: "To contribute to the VUI Guide, you'll need a GitHub account.",
  },
  {
    id: 2,
    icon: GoRepoForked,
    title: "2. Fork the repository",
    text:
      'Find the repository for the VUI Guide on GitHub and click the "Fork" button. This creates a copy of the repository under your GitHub account.',
  },
  {
    id: 3,
    icon: GoRepoClone,
    title: "3. Clone the repository",
    text:
      "On your local machine, use Git to clone the repository you just forked. This creates a local copy of the repository that you can edit.",
  },
  {
    id: 4,
    icon: GoPencil,
    title: "4. Make changes",
    text:
      "Open the repository in your text/code editor and make the changes you would like to contribute.",
  },
  {
    id: 5,
    icon: GoGitCommit,
    title: "5. Commit changes",
    text:
      "Once you have made your changes, use Git to commit the changes to your local repository.",
  },
  {
    id: 6,
    icon: GoRepoPush,
    title: "6. Push changes",
    text: "Use Git to push your changes back up to your fork on GitHub.",
  },
  {
    id: 7,
    icon: GoGitPullRequest,
    title: "7. Submit a pull request",
    text:
      'On GitHub, navigate to your fork of the repository and click the "New pull request" button. This creates a pull request to submit your changes back to the original repository for review.',
  },
  {
    id: 8,
    icon: GoCheck,
    title: "8. Review",
    text:
      "The VUI Guide maintainers will review your pull request and may merge your changes into the main repository.",
  },
];

const CustomCard = ({ children, ...props }) => {
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
        whileFocus={{
          y: -8,
        }}
        whileHover={{
          y: -8,
        }}
      >
        {/* <VStack spacing={4} alignItems="flex-start"> */}
          <Heading variant="sup" size="xs" mt={0}>
            {props.sup}
          </Heading>
          <Box>
            <LinkOverlay href={props.to}>
              <Heading as="h3" size="lg" mb={0} mt={0}>
                {props.title}
              </Heading>
            </LinkOverlay>
            <Text>{children}</Text>
          </Box>
          <Button colorScheme="blue" variant="link">
            {props.link}
          </Button>
        {/* </VStack> */}
      </Motion>
    </LinkBox>
  );
};

const About = ({ data, location, pageContext }) => {
  const currentUrl = data.site.siteMetadata.siteUrl + location.pathname;
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <PagesTemplate crumbs={crumbs} url={currentUrl}>
      <Wrapper grid as="section">
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Heading as="h1" size="4xl" color="purple.600" mt={0}>
            What is VUI Guide?
          </Heading>
          <Text>
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
        grid
        as="section"
        color="white"
        bg="purple.900"
        templateColumns="repeat(2, 1fr)"
      >
        <Hide below="md">
          <Box
            id="attr-1"
            pos="absolute"
            top="0"
            right="0"
            transform="auto"
            translateY="-50%"
            zIndex="docked"
          >
            <Box
              pos="relative"
              _after={{
                content: "'1'",
                py: 1,
                px: 2,
                pos: "absolute",
                top: 0,
                right: 0,
                fontFamily: "heading",
                fontSize: "xs",
                bg: "gray.50",
                color: "gray.300",
                borderRadius: 4,
              }}
            >
              <Image
                src={svgGlobalization}
                w={{ md: "md", lg: "lg", xl: "xl" }}
              />
            </Box>
          </Box>
        </Hide>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <CustomCard
            to="#github"
            sup="Help improve VUI Guide"
            title="Add content to the guide"
            link="Read how you can contribute"
          >
            VUI Guide is hosted on GitHub, a platform for version control and
            collaboration for open-source projects. Contributing to the VUI
            Guide’s content is possible by using GitHub’s collaboration
            features.
          </CustomCard>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <CustomCard
            to="#blogpost"
            sup="Share your knowledge"
            title="Write a blog post"
            link="Read how to submit a blog post"
          >
            Sharing your knowledge and writing a blog post is a great way to
            contribute to the VUI Guide and help others learn from your
            experiences and insights.
          </CustomCard>
        </GridItem>
      </Wrapper>
      <Wrapper id="github" grid templateColumns="repeat(4, 1fr)" as="section">
        <GridItem colSpan={{ base: 4 }}>
          <Heading as="h2" size="3xl" color="purple.600" mt={0}>
            Contribute using GitHub
          </Heading>
          <Card display="inline-flex">
            <CardBody>
              <VStack spacing={1} alignItems="flex-start">
                <Badge variant="outline" colorScheme="green">
                  Master
                </Badge>
                <Text fontFamily="heading" fontWeight="bold">
                  Go to GitHub Repository
                </Text>
                <Link isExternal>github.com/larsmaeder/vui.guide</Link>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>
        {stepsGithub.map((c, i) => {
          return (
            <GridItem key={i} colSpan={{ base: 4, md: 2, xl: 2, "2xl": 1 }}>
              <VStack spacing={4} alignItems="flex-start">
                <Icon as={c.icon} boxSize={16} color="purple.600"></Icon>
                <Heading size="md" color="purple.600">
                  {c.title}
                </Heading>
                <Text>{c.text}</Text>
              </VStack>
            </GridItem>
          );
        })}
      </Wrapper>
      <Wrapper id="blogpost" grid as="section">
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Heading as="h2" size="3xl" color="purple.600" mt={0}>
            Write a blogpost
          </Heading>
          <Text>
            If you want to write a blog post please contact the VUI Guide
            maintainers at blogpost@vui.guide. The VUI Guide maintainers will
            review your blog post and may suggest edits or revisions. Once the
            blog post is approved, it will be published on the VUI Guide
            website. Thank you for your contribution!
          </Text>
        </GridItem>
      </Wrapper>
      <Attribution attr={externalSources} />
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
