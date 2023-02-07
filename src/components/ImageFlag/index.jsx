import * as React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const ImageFlag = ({ children, ...props }) => {
  return (
    <Box
      pos="relative"
      _after={{
        content: "'" + props.num + "'",
        py: 1,
        px: 2,
        pos: "absolute",
        top: 0,
        right: 0,
        fontFamily: "heading",
        fontSize: "xs",
        bg: props.bg,
        color: props.color,
        borderRadius: 4,
      }}
    >
      {children}
    </Box>
  );
};

export default ImageFlag;

ImageFlag.propTypes = {
  num: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
};

ImageFlag.defaultProps = {
  num: null,
  children: null,
  bg: "gray.50",
  color: "gray.300",
};
