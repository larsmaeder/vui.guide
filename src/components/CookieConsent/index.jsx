import * as React from "react";
import { instanceOf } from "prop-types";
import { motion } from "framer-motion";
import { Button, ButtonGroup, Box } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { useCookies, withCookies, Cookies } from "react-cookie";

const Typer = () => {
  const [isComplete, setIsComplete] = React.useState(false);
  const init = (typewriter) => {
    typewriter
      .pauseFor(500)
      .typeString("Hi im Vox. Seems like it's your first time here.")
      .start()
      .callFunction(() => setIsComplete(!isComplete));
  };
  return (
    <>
      <Typewriter
        onInit={init}
        options={{
          loop: false,
          delay: 1,
        }}
      />
      {isComplete ? (
        <>
        {console.log("completed")}
        <motion.div
          initial={{ opacity: 0, y: "0px" }}
          whileInView={{ opacity: 1, y: "-5px" }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Box>Do you want Cookies?</Box>
          <ButtonGroup pt={16} colorScheme="purple" size="lg">
            <Button>Accept Cookie</Button>
            <Button>Decline Cookie</Button>
          </ButtonGroup>
        </motion.div>
        </>
      ) : (
        console.log("not completed")
      )}
    </>
  );
};

const CookieConsent = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["consent"]);
  setCookie("consent", "decline", { path: "/" });
  const handleCookieAccept = () => {
    setCookie("consent", "accept", { path: "/" });
    console.log("Accepted");
  };
  const handleCookieDecline = () => {
    setCookie("consent", "decline", { path: "/" });
    console.log("Declined");
    removeCookie("_ga");
  };
  return (
    <>
      <Typer />
    </>
  );
};

/* {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: "0px" }}
            whileInView={{ opacity: 1, y: "-5px" }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <ButtonGroup pt={16} colorScheme="purple" size="lg">
              <Button>Read Guide</Button>
              <Button variant="ghost">Learn more</Button>
            </ButtonGroup>
          </motion.div>
        )} */
//   else
//     return (
//       <>
//         <Typewriter
//           onInit={init}
//           options={{
//             loop: false,
//           }}
//         />
//         {/* {isComplete && (
// <motion.div
//   initial={{ opacity: 0, y: "0px" }}
//   whileInView={{ opacity: 1, y: "-5px" }}
//   transition={{ duration: 0.4 }}
//   viewport={{ once: true }}
// >
//   <Box>Do you want Cookies?</Box>
//   <ButtonGroup pt={16} colorScheme="purple" size="lg">
//     <Button onClick={() => handleCookieAccept}>Accept Cookie</Button>
//     <Button onClick={() => handleCookieDecline}>
//       Decline Cookie
//     </Button>
//   </ButtonGroup>
// </motion.div>
//         )} */}
//       </>
//     );

CookieConsent.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
};

export default withCookies(CookieConsent);
