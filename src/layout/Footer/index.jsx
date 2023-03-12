import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  GridItem,
  Tooltip,
  Icon,
  Link,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  VStack,
} from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { MdBugReport, MdEmail } from "react-icons/md";
import { Wrapper } from "../index";
import { Attribution } from "../../components";

const Footer = ({ imageAttributions }) => {
  return (
    <Wrapper
      as="footer"
      position="relative"
      bg="gray.100"
      pt={{ base: 24, md: 32 }}
      pb={{ base: 32, md: 40 }}
      _before={{
        content: "''",
        h: { base: 8, md: 16 },
        w: "full",
        position: "absolute",
        left: 0,
        top: 0,
        bg: "white",
        borderTopRadius: 0,
        borderBottomRadius: 16,
        boxShadow: "xl",
      }}
    >
      <GridItem colSpan={3}>
        <HStack spacing={6} color="gray.400">
          <Tooltip
            aria-label="Click to open GitHub Repository"
            label="Open GitHub Repository"
            placement="top-start"
          >
            <Link
              isExternal
              href="https://github.com/larsmaeder/vui.guide"
              color="inherit"
              h={6}
            >
              <Icon boxSize={6} as={GoMarkGithub} />
            </Link>
          </Tooltip>
          <Tooltip
            aria-label="Click to contact VUI Guide"
            label="Contact"
            placement="top-start"
          >
            <Link href="mailto:hello@vui.guide" color="inherit" h={6}>
              <Icon boxSize={6} as={MdEmail} />
            </Link>
          </Tooltip>
          <Tooltip
            aria-label="Click to report a bug"
            label="Report a bug"
            placement="top-start"
          >
            <Link
              isExternal
              href="https://github.com/larsmaeder/vui.guide/issues"
              color="inherit"
              h={6}
            >
              <Icon boxSize={6} as={MdBugReport} />
            </Link>
          </Tooltip>
        </HStack>
        <VStack
          align="flex-start"
          fontSize="xs"
          fontFamily="heading"
          mt={6}
          color="gray.400"
          spacing={0}
        >
          <Box>
            VUI Guide is licensed under the <Link fontSize="inherit" href="https://github.com/larsmaeder/vui.guide/blob/master/LICENSE" isExternal>MIT License</Link>.
          </Box>
          <Box>
            All graphics and content, unless otherwise noted, are licensed under a <Link fontSize="inherit" href="https://creativecommons.org/licenses/by-sa/4.0/" isExternal>Creative Commons Attribution-ShareAlike 4.0 International License</Link>.
          </Box>
        </VStack>

        {imageAttributions && (
          <Attribution imageAttributions={imageAttributions} />
        )}
        <LinkBox mt={12} display="inline-block">
          <Image
            mb={2}
            width={20}
            src="https://www.netlify.com/v3/img/components/netlify-dark.svg"
            alt="Deploys by Netlify"
          />
          <LinkOverlay href="https://www.netlify.com" isExternal>
            <Box fontSize="xs" fontFamily="heading" color="font">
              This site is powered by Netlify.
            </Box>
          </LinkOverlay>
        </LinkBox>
      </GridItem>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  imageAttributions: PropTypes.array,
};

Footer.defaultProps = {
  imageAttributions: undefined,
};
