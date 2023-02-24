import * as React from "react";
// import { Link as GatsbyLink } from "gatsby";
import { motion } from "framer-motion";
import {
  Button,
  ButtonGroup,
  Box,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  // UnorderedList,
  // ListItem,
} from "@chakra-ui/react";
import ChatBot from "react-simple-chatbot";

// TODO: create cards for the 3 different options to choose 

const AskForCookie = ({ onAcceptCookies, onDeclineCookies }) => {
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
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
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
          message: "There are several options available to you:",
          trigger: "3",
          hideInput: true,
        },
        {
          id: "3",
          component: (
            <Box pt={16}>
              <motion.div
                initial={{ opacity: 0, y: "0px" }}
                whileInView={{ opacity: 1, y: "-5px" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                  <Card>
                    <CardHeader>
                      <Heading size="md"> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>
                        View a summary of all your customers over the last
                        month.
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <Button>View here</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Heading size="md"> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>
                        View a summary of all your customers over the last
                        month.
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <Button>View here</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Heading size="md"> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>
                        View a summary of all your customers over the last
                        month.
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <Button>View here</Button>
                    </CardFooter>
                  </Card>
                </SimpleGrid>

                {/* <UnorderedList pt={4} spacing={1}>
                  <ListItem>
                    Read through the voice user interface guide
                  </ListItem>
                  <ListItem>
                    Learn more about the project and how you can contribute to
                    it
                  </ListItem>
                  <ListItem>
                    Share your knowledge and insights with the community by
                    writing a blog post for the VUI Guide
                  </ListItem>
                </UnorderedList> */}
              </motion.div>
            </Box>
          ),
          end: true,
          hideInput: true,
        },
        // {
        //   id: "4",
        //   component: (
        //     <Box>
        //       <motion.div
        //         initial={{ opacity: 0, y: "0px" }}
        //         whileInView={{ opacity: 1, y: "-5px" }}
        //         transition={{ duration: 0.4, delay: 0.2 }}
        //         viewport={{ once: true }}
        //       >
        //         <ButtonGroup
        //           pt={16}
        //           colorScheme="purple"
        //           size={{ base: "sm", sm: "md", md: "lg" }}
        //         >
        //           <Button as={GatsbyLink} to="/docs/">
        //             Read the Guide
        //           </Button>
        //           <Button as={GatsbyLink} to="/about/" variant="ghost">
        //             Learn more about it
        //           </Button>
        //         </ButtonGroup>
        //       </motion.div>
        //     </Box>
        //   ),
        //   hideInput: true,
        // },
      ]}
    />
  );
};

const CookieConsent = ({ cookies, setCookie, removeCookie }) => {
  const onAcceptCookies = () => {
    setCookie("consent", "accepted", { path: "/" });
  };
  const onDeclineCookies = () => {
    setCookie("consent", "declined", { path: "/" });
    removeCookie("_ga", { path: "/" });
    removeCookie("_ga_JBVJ2688BG", { path: "/" });
  };
  if (cookies.consent === undefined)
    return (
      <AskForCookie
        onAcceptCookies={onAcceptCookies}
        onDeclineCookies={onDeclineCookies}
      />
    );
  else return <Introduction />;
};

export default CookieConsent;
