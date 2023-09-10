import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  GridItem,
  Heading,
  Box,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ChatBot from "react-simple-chatbot";
import Wrapper from "../../layout/Wrapper";
import { useCookies } from "react-cookie";
import { MdInfoOutline } from "react-icons/md";
import { useEffect, useState } from "react";

const OptionsCard = React.memo(() => {
  const defaultOptions = [
    {
      title: "Explore the Guide",
      cta: "Explore",
      url: "/docs/",
    },
    {
      title: "Join the community",
      cta: "Contribute",
      url: "/about/#contribute-using-gitHub",
    },
    {
      title: "About the Guide",
      cta: "Learn more",
      url: "/about/",
    },
  ];
  return defaultOptions.map((options) => {
    const { title, cta, url } = options;
    return (
      <GridItem colSpan={{ base: 3, lg: 1 }}>
        <Card variant="vui">
          <CardBody>
            <Heading color="purple.600" size="lg" mt={0} mb={0}>
              {title}
            </Heading>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="purple"
              size={{ base: "sm", sm: "md", md: "lg" }}
              as={GatsbyLink}
              to={url}
            >
              {cta}
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    );
  });
});
const AskForCookies = ({ steps }) => {
  const [timeStamp, setTimeStamp] = useState("");
  useEffect(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const time = `${hours}:${minutes}`;
    setTimeStamp(time);
  }, []); // Empty dependency array ensures this runs only once when the component mounts.
  return (
    <>
      <Box fontFamily="heading" fontSize="xs" color="gray.400" ml="3" mb="3">
        {timeStamp} Orion:
      </Box>
      <ChatBot
        hideHeader={true}
        width="100%"
        height="auto"
        hideBotAvatar={true}
        hideUserAvatar={true}
        className="default"
        steps={steps}
        footerStyle={{
          display: "none",
        }}
      />
    </>
  );
};
const Introduction2 = () => {
  return (
    <Heading as="h1" size="2xl" color="purple.600" mt={0}>
      Welcome to VUI Guide
    </Heading>
  );
};
const Introduction = ({ steps }) => {
  return (
    <ChatBot
      hideHeader={true}
      width="100%"
      height="auto"
      hideBotAvatar={true}
      hideUserAvatar={true}
      className="default"
      steps={steps}
      footerStyle={{
        display: "none",
      }}
    />
  );
};
const CookieConsent = () => {
  const gaProperty = "JBVJ2688BG";
  const disableStr = `ga-disable-G-${gaProperty}`;
  const [cookies, setCookie, removeCookie] = useCookies([
    "consent",
    "_ga",
    "_ga_JBVJ2688BG",
  ]);
  const [optIn, setOptIn] = React.useState(cookies.consent);
  const gaOptIn = () => {
    setCookie("consent", "true", { path: "/", maxAge: "31536000" });
    setOptIn("true");
  };
  const gaOptOut = () => {
    setCookie("consent", "false", { path: "/", maxAge: "31536000" });
    removeCookie("_ga", { path: "/", domain: ".vui.guide" });
    removeCookie("_ga_JBVJ2688BG", { path: "/", domain: ".vui.guide" });
    document.cookie = `${disableStr}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/`;
    window[disableStr] = true;
    setOptIn("false");
  };
  const stepsAskForCookies = [
    {
      id: "1",
      message: "Hi, it seems like we don’t know each other yet.",
      trigger: "2",
      hideInput: true,
    },
    {
      id: "2",
      message:
        "To ensure I provide you with the best experience, I need your permission to use cookies.",
      trigger: "3",
      hideInput: true,
    },
    {
      id: "3",
      message: "May I use cookies on your device?",
      trigger: "4",
      hideInput: true,
    },
    {
      id: "4",
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
                <Button onClick={gaOptIn}>Accept Cookies</Button>
                <Button variant="ghost" onClick={gaOptOut}>
                  Decline Cookies
                </Button>
              </ButtonGroup>
              <Flex gap={1.5} pt={8} color="gray.400" w="md">
                <Icon boxSize={3} as={MdInfoOutline} mt={1} />
                <Box fontFamily="heading" fontSize="xs">
                  We use cookies to analyze experience, website traffic and
                  performance. We never collect personal information from you.
                </Box>
              </Flex>
            </GridItem>
          </Wrapper>
        </motion.div>
      ),
      end: true,
      hideInput: true,
    },
  ];
  const stepsIntroduction = [
    {
      id: "1",
      message: "Welcome to VUI Guide.",
      trigger: "2",
      hideInput: true,
    },
    {
      id: "2",
      message: "There are several options available to you:",
      trigger: "3",

      hideInput: true,
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
            <OptionsCard />
          </Wrapper>
        </motion.div>
      ),
      end: true,
      hideInput: true,
    },
  ];
  return optIn === undefined ? (
    <AskForCookies steps={stepsAskForCookies} />
  ) : (
    // <Introduction steps={stepsIntroduction} />
    <Introduction2></Introduction2>
  );
};

export default CookieConsent;
