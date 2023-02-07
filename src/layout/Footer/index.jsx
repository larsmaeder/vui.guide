import * as React from "react";
import PropTypes from "prop-types";
import { Box, GridItem, Tooltip, Icon, Link, HStack } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { MdBugReport, MdEmail } from "react-icons/md";
import { Wrapper } from "../index";
import { Attribution } from "../../components";

const Footer = ({ attr }) => {
  const currentYear = new Date().getFullYear();
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
      <GridItem colSpan={3} color="gray.400">
        <HStack spacing={6}>
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
        <Box fontSize="sm" fontFamily="heading" mt={6}>
          Copyright © {currentYear}
          <br />
          VUI Guide All rights reserved
        </Box>
        {attr && <Attribution attr={attr} />}
      </GridItem>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  attr: PropTypes.array,
};

Footer.defaultProps = {
  attr: undefined,
};
