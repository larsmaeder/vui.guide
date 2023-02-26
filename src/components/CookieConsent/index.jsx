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
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ChatBot from "react-simple-chatbot";
import Wrapper from "../../layout/Wrapper";
import { useCookies } from "react-cookie";

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
        <Card variant="outline">
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
  return (
    <ChatBot
      hideHeader={true}
      width="100%"
      height="auto"
      hideBotAvatar={true}
      hideUserAvatar={true}
      className="default"
      steps={steps}
    />
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
    />
  );
};

const CookieConsent = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "consent",
    "_ga",
    "_ga_JBVJ2688BG",
  ]);
  const [optIn, setOptIn] = React.useState(cookies.consent === "accepted");
  const onAcceptCookies = () => {
    setOptIn(true);
    setCookie("consent", "accepted", { path: "/" });
  };
  const onDeclineCookies = () => {
    setOptIn(false);
    setCookie("consent", "declined", { path: "/" });
    removeCookie("_ga", { path: "/" });
    removeCookie("_ga_JBVJ2688BG", { path: "/" });
  };
  const stepsAskForCookies = [
    {
      id: "1",
      message: "Hi, I’m Vox.",
      trigger: "2",
      hideInput: true,
    },
    {
      id: "2",
      message: "It seems like we don’t know each other yet.",
      trigger: "3",
      hideInput: true,
    },
    {
      id: "3",
      message:
        "To ensure I provide you with the best experience, I need your permission to use cookies.",
      trigger: "4",
      hideInput: true,
    },
    {
      id: "4",
      message: "May I use cookies on your device?",
      trigger: "5",
      hideInput: true,
    },
    {
      id: "5",
      component: (
        <motion.div
          initial={{ opacity: 0, y: "0px", width: "100%" }}
          whileInView={{ opacity: 1, y: "-5px" }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Wrapper grid fluid gutters={false} pb={0} pt={12}>
            <GridItem colSpan="3">
              <Text>
                I use cookies to analyze website traffic and performance. I
                never collect personal information from you.
              </Text>
              <ButtonGroup
                pt={6}
                colorScheme="purple"
                size={{ base: "sm", sm: "md", md: "lg" }}
              >
                <Button onClick={onAcceptCookies}>Accept Cookies</Button>
                <Button variant="ghost" onClick={onDeclineCookies}>
                  Decline Cookies
                </Button>
              </ButtonGroup>
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
  return optIn ? (
    <Introduction steps={stepsIntroduction} />
  ) : (
    <AskForCookies steps={stepsAskForCookies} />
  );
};

export default CookieConsent;
