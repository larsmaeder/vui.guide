import * as React from "react";
import { motion } from "framer-motion";
import { chakra, Button, ButtonGroup, Box, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const AskForCookie = ({ setCookie, removeCookie }) => {
  const handleCookieAccept = () => {
    setCookie("consent", "accepted", { path: "/" });
    console.log("Accepted");
  };
  const handleCookieDecline = () => {
    setCookie("consent", "declined", { path: "/" });
    console.log("Declined");
    removeCookie("_ga");
  };
  const [isComplete, setIsComplete] = React.useState(false);
  const init = (typewriter) => {
    typewriter
      .pauseFor(1500)
      .typeString("Hi, I am Vox.")
      .pauseFor(1000)
      .pasteString("<br>")
      .typeString("It seems like we don’t know each other yet.")
      .pauseFor(500)
      .typeString(" I like cookies, do you?")
      .callFunction(() => setIsComplete(!isComplete))
      .start();
  };
  return (
    <>
      <chakra.div
        color="font.100"
        fontSize={{
          base: "4xl",
          sm: "5xl",
          md: "6xl",
          xl: "8xl",
        }}
      >
        <Typewriter
          onInit={init}
          options={{
            loop: false,
            delay: 30,
          }}
        />
      </chakra.div>
      {isComplete ? (
        <Box mt={12}>
          {console.log("completed")}
          <motion.div
            initial={{ opacity: 0, y: "0px" }}
            whileInView={{ opacity: 1, y: "-5px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Text fontSize="xl">
              I collect cookies to analyze website traffic and performance. I
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
      ) : (
        console.log("not completed")
      )}
    </>
  );
};

const Introduction = () => {
  const [isComplete, setIsComplete] = React.useState(false);
  const init = (typewriter) => {
    typewriter
      .pauseFor(1000)
      .typeString("What would you like to do?")
      .start()
      .callFunction(() => setIsComplete(!isComplete));
  };
  return (
    <>
      <chakra.div
        color="font.100"
        fontSize={{
          base: "4xl",
          sm: "5xl",
          md: "6xl",
          xl: "8xl",
        }}
      >
        <Typewriter
          onInit={init}
          options={{
            loop: false,
            delay: 16,
          }}
        />
      </chakra.div>
      {isComplete ? (
        <Box>
          {console.log("completed")}
          <motion.div
            initial={{ opacity: 0, y: "0px" }}
            whileInView={{ opacity: 1, y: "-5px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ButtonGroup pt={16} spacing={6} colorScheme="purple" size="lg">
              <Button>Read Guide</Button>
              <Button variant="link">Learn more about</Button>
            </ButtonGroup>
          </motion.div>
        </Box>
      ) : (
        console.log("not completed")
      )}
    </>
  );
};

const CookieConsent = ({ cookies, setCookie, removeCookie }) => {
  console.log(cookies.consent);
  if (cookies.consent === "accepted") return <Introduction />;
  else return <AskForCookie {...{ setCookie, removeCookie }} />;
};

export default CookieConsent;
