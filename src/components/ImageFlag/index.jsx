import * as React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const ImageFlag = ({ children, label, bg, color, ...props }) => {
  const content = React.useMemo(() => {
    return label !== null ? String(label) : "";
  }, [label]);
  return (
    <Box
      pos="relative"
      _after={{
        content: `"${content}"`,
        py: 1,
        px: 2,
        pos: "absolute",
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        fontFamily: "heading",
        fontSize: "xs",
        bg,
        color,
        borderRadius: 4,
      }}
    >
      {children}
    </Box>
  );
};

export default ImageFlag;

ImageFlag.propTypes = {
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ImageFlag.defaultProps = {
  label: null,
  children: null,
  bg: "gray.50",
  color: "gray.300",
  top: 0,
  right: 0,
};
