import * as React from "react";
import { motion } from "framer-motion";
import { theme, pageGap, pageWidth } from "../theme";
import {
  chakra,
  ChakraProvider,
  Grid,
  GridItem,
  Flex,
  Box,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { Logo, Navigation, DelayedComponents } from "../components";
import Typewriter from "typewriter-effect";

// const components = [One, Two];
// const delay = 1000;

const Index = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const [comp, setComp] = React.useState(0);
  const sentences = ["Hello world 1!", "Hello world 2!"];
  const [isComplete, setIsComplete] = React.useState(false);
  const handleAnimationComplete = () => {
    setIsComplete(!isComplete);
  };
  const [isMounted, setIsMounted] = React.useState(false);
  const handleClick = () => {
    setIsMounted(!isMounted);
  };
  const ComponentSelector = ({ components, selectedIndex }) => {
    console.log(sentences);
    console.log(comp);
    const SelectedComponent = components[selectedIndex];

    // console.log(comp);
    // setIsComplete(false);
    // console.log(comp);
    return <SelectedComponent />;
  };
  const One = () => {
    return <div>1</div>;
  };

  const Two = () => {
    return (
      <ButtonGroup pt={16} colorScheme="purple" size="lg" mb="2000px">
        <Button onClick={() => setIsComplete(false)}>Read Guide</Button>
        <Button variant="ghost">Learn more</Button>
      </ButtonGroup>
    );
  };
  const components = [One, Two, One, One];
  return (
    <ChakraProvider theme={theme}>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Navigation crumbs={crumbs} />
      <Flex justify="center" paddingX={pageGap}>
        <Box w={pageWidth}>
          <Box pt={12} pb={32} w="full">
            <Logo />
          </Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={12}>
            <GridItem colSpan={3}>
              <Box as="main">
                <SkipNavContent />

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
                    options={{
                      // cursor: "_",
                      loop: false,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(500)
                        .typeString(sentences[comp])
                        // .typeString("Hello World!")
                        // .callFunction(handleAnimationComplete)
                        .start()
                        .callFunction(() => {
                          setComp(comp + 1);
                          handleAnimationComplete();
                        });
                    }}
                  />
                  {isComplete && (
                    <motion.div
                      initial={{ opacity: 0, y: "0px" }}
                      whileInView={{ opacity: 1, y: "-5px" }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <ComponentSelector
                        components={components}
                        selectedIndex={comp}
                      />
                    </motion.div>
                  )}
                </chakra.div>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
