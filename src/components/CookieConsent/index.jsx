import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { motion } from "framer-motion";
import {
  Button,
  ButtonGroup,
  Box,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import ChatBot from "react-simple-chatbot";

const AskForCookie = ({ setCookie, removeCookie }) => {
  const handleCookieAccept = () => {
    setCookie("consent", "accepted", { path: "/" });
  };
  const handleCookieDecline = () => {
    setCookie("consent", "declined", { path: "/" });
    // removeCookie("_ga", { path: "/" });
    // removeCookie("_ga_XXXXXXXX", { path: "/" });
  };
  return (
    <ChatBot
      hideHeader={true}
      width="100%"
      height="auto"
      hideBotAvatar={true}
      hideUserAvatar={true}
      className="default"
      steps={[
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
            <Box mt={12}>
              <motion.div
                initial={{ opacity: 0, y: "0px" }}
                whileInView={{ opacity: 1, y: "-5px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Text fontSize={{ base: "sm", sm: "md", md: "lg", xl: "xl" }}>
                  I use cookies to analyze website traffic and performance. I
                  never collect personal information from you.
                </Text>
                <ButtonGroup
                  pt={6}
                  colorScheme="purple"
                  size={{ base: "sm", sm: "md", md: "lg" }}
                >
                  <Button onClick={handleCookieAccept}>Accept Cookies</Button>
                  <Button variant="ghost" onClick={handleCookieDecline}>
                    Decline Cookies
                  </Button>
                </ButtonGroup>
              </motion.div>
            </Box>
          ),
          end: true,
          hideInput: true,
        },
      ]}
    />
  );
};

const Introduction = () => {
  return (
    <ChatBot
      hideHeader={true}
      width="100%"
      height="auto"
      hideBotAvatar={true}
      hideUserAvatar={true}
      className="default"
      steps={[
        {
          id: "1",
          message: "Welcome to VUI Guide.",
          trigger: "2",
          hideInput: true,
        },
        {
          id: "2",
          message: "You have several options to choose from:",
          trigger: "3",
          hideInput: true,
        },
        {
          id: "3",
          trigger: "4",
          component: (
            <Box>
              <motion.div
                initial={{ opacity: 0, y: "0px" }}
                whileInView={{ opacity: 1, y: "-5px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <UnorderedList
                  fontSize={{ base: "sm", sm: "md", md: "lg", xl: "xl" }}
                  pt={4}
                  spacing={1}
                >
                  <ListItem>
                    You can read through the voice user interface guide
                  </ListItem>
                  <ListItem>
                    You can learn more about the project and how you can help
                    and make meaningful changes to the platform.
                  </ListItem>
                  <ListItem>
                    You can also write a blog post for the VUI Guide to share
                    your knowledge and insights with the community.
                  </ListItem>
                </UnorderedList>
              </motion.div>
            </Box>
          ),
          hideInput: true,
        },
        {
          id: "4",
          component: (
            <Box>
              <motion.div
                initial={{ opacity: 0, y: "0px" }}
                whileInView={{ opacity: 1, y: "-5px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ButtonGroup
                  pt={16}
                  colorScheme="purple"
                  size={{ base: "sm", sm: "md", md: "lg" }}
                >
                  <Button as={GatsbyLink} to="/docs/">
                    Read the Guide
                  </Button>
                  <Button as={GatsbyLink} to="/about/" variant="ghost">
                    Learn more about it
                  </Button>
                </ButtonGroup>
              </motion.div>
            </Box>
          ),
          end: true,
          hideInput: true,
        },
      ]}
    />
  );
};

const CookieConsent = ({ cookies, setCookie, removeCookie }) => {
  if (cookies.consent === undefined)
    return <AskForCookie {...{ setCookie, removeCookie }} />;
  else return <Introduction />;
};

export default CookieConsent;
