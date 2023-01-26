import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { motion } from "framer-motion";
import { Button, ButtonGroup, Box, Text } from "@chakra-ui/react";
import ChatBot from "react-simple-chatbot";

const AskForCookie = ({ setCookie, removeCookie }) => {
  const handleCookieAccept = () => {
    setCookie("consent", "accepted", { path: "/" });
    console.log("Accepted");
  };
  const handleCookieDecline = () => {
    setCookie("consent", "declined", { path: "/" });
    removeCookie("_ga", { path: "/" });
    console.log("Declined");
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
                <Text fontSize="xl">
                  I use cookies to analyze website traffic and performance. I
                  never collect personal information from you.
                </Text>
                <ButtonGroup pt={6} colorScheme="purple" size="lg">
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
          message: "Hi, what do you want do to?",
          trigger: "2",
          hideInput: true,
        },
        {
          id: "2",
          component: (
            <Box>
              {console.log("completed")}
              <motion.div
                initial={{ opacity: 0, y: "0px" }}
                whileInView={{ opacity: 1, y: "-5px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ButtonGroup pt={16} colorScheme="purple" size="lg">
                  <Button as={GatsbyLink} to="/docs/">
                    Read Guide
                  </Button>
                  <Button variant="ghost">Learn more about</Button>
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
  setCookie("_ga", "FSJBFRFJB", { path: "/" });
  console.log(cookies._ga);
  if (cookies.consent === undefined)
    return <AskForCookie {...{ setCookie, removeCookie }} />;
  else return <Introduction />;
};

export default CookieConsent;
