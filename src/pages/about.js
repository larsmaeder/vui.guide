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
  VStack,
  Hide,
  Icon,
  Card,
  CardBody,
  Link,
  Badge,
  Code,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { ImageFlag } from "../components";
import githubSteps from "../data/githubSteps";

// TODO: add github references for non-tech persons; repository card styles/wording; new section to describe who is behind and what's the goal of vui guide

const About = ({ data, location, pageContext }) => {
  const currentUrl = data.site.siteMetadata.siteUrl + location.pathname;
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <PagesTemplate crumbs={crumbs} url={currentUrl} attr={dataAttr}>
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
            <ImageFlag num={1}>
              <Image
                src={svgGlobalization}
                w={{ md: "md", lg: "lg", xl: "xl" }}
              />
            </ImageFlag>
          </Box>
        </Hide>
        {dataContributionCard.map((c, i) => {
          return (
            <GridItem key={i + uuidv4} colSpan={{ base: 2, lg: 1 }}>
              <ContributionCard
                to={c.to}
                runner={c.runner}
                title={c.title}
                link={c.link}
                text={c.text}
              />
            </GridItem>
          );
        })}
      </Wrapper>
      <Wrapper id="contribute-using-gitHub" grid as="section" pb={0}>
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Heading as="h2" size="3xl" color="purple.600" mt={0}>
            Add content to the guide
          </Heading>
          <Text>
            We acknowledge that contributing to the VUI Guide may pose a
            challenge for non-technical individuals. If you have familiarity
            with GitHub, the steps to contribute are outlined below. If you
            require further information on using <Code>Git</Code> or{" "}
            <Code>GitHub</Code>, helpful guides can be found here:
          </Text>
          <UnorderedList>
            <ListItem>
              <Link>Adresse</Link>
            </ListItem>
            <ListItem>
              <Link>Adresse</Link>
            </ListItem>
          </UnorderedList>
          <Text>
            For non-technical individuals, you can also reach out directly to
            the VUI Guide maintainers via email. They will gladly assist in
            editing the content for you.
          </Text>
        </GridItem>
      </Wrapper>
      <Wrapper grid templateColumns="repeat(4, 1fr)" as="section" pt={0}>
        <GridItem colSpan={{ base: 4 }}>
          <Heading as="h3" size="2xl">
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
        {githubSteps.map((c, i) => {
          return (
            <GridItem
              key={i + uuidv4}
              colSpan={{ base: 4, md: 2, xl: 2, "2xl": 1 }}
            >
              <VStack spacing={4} alignItems="flex-start">
                <Icon as={c.icon} boxSize={12} color="purple.600"></Icon>
                <Heading size="md" color="purple.600">
                  {c.title}
                </Heading>
                <Text>{c.text}</Text>
              </VStack>
            </GridItem>
          );
        })}
      </Wrapper>
      <Wrapper id="write-a-blogpost" grid as="section">
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Heading as="h2" size="3xl" color="purple.600" mt={0}>
            Write a blogpost
          </Heading>
          <Text>
            If you want to write a blog post please contact the VUI Guide
            maintainers at{" "}
            <Link href="mailto:blogpost@vui.guide">blogpost@vui.guide</Link>.
            The VUI Guide maintainers will review your blog post and may suggest
            edits or revisions. Once the blog post is approved, it will be
            published on the VUI Guide website. Thank you for your contribution!
          </Text>
        </GridItem>
      </Wrapper>
    </PagesTemplate>
  );
};

const ContributionCard = ({ ...props }) => {
  const Motion = chakra(motion.div);
  return (
    <LinkBox h="full">
      <Motion
        h="inherit"
        border="1px"
        borderColor="whiteAlpha.200"
        bg="whiteAlpha.50"
        p={{ base: 8, md: 12, xl: 16 }}
        borderRadius={4}
        _hover={{ bg: "whiteAlpha.100" }}
        whileHover={{
          y: -4,
        }}
      >
        <Heading variant="runner" as="div">
          {props.runner}
        </Heading>
        <LinkOverlay href={props.to}>
          <Heading as="div" size="lg" mb={0} mt={0}>
            {props.title}
          </Heading>
        </LinkOverlay>
        <Text>{props.text}</Text>
        <Link href={props.to}>{props.link}</Link>
      </Motion>
    </LinkBox>
  );
};

const dataAttr = [
  {
    id: 1,
    text: "People illustrations by Storyset",
    href: "https://storyset.com/people",
  },
];

const dataContributionCard = [
  {
    id: 1,
    to: "#contribute-using-gitHub",
    runner: "Help improve VUI Guide",
    title: "Add content to the guide",
    link: "Read how you can contribute",
    text:
      "VUI Guide is hosted on GitHub, a platform for version control and collaboration for open-source projects. Contributing to the VUI Guide’s content is possible by using GitHub’s collaboration features.",
  },
  {
    id: 2,
    to: "#write-a-blogpost",
    runner: "Share your knowledge",
    title: "Write a blog post",
    link: "Read how to submit a blog post",
    text:
      "Sharing your knowledge and writing a blog post is a great way to contribute to the VUI Guide and help others learn from your experiences and insights.",
  },
];

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
