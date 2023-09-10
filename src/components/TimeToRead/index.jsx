import * as React from "react";
import PropTypes from "prop-types";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdOutlineAccessTime } from "react-icons/md";

const TimeToRead = ({ time }) => {
  return (
    <Stat
      title="Time to read"
      fontWeight="normal"
      fontFamily="heading"
      color="gray.500"
      display="inline-flex"
      alignItems="center"
    >
      <StatLabel mr={{ base: 0.5, md: 1 }} display="flex" fontWeight="inherit">
        <Icon
          boxSize={{ base: 3 }}
          as={MdOutlineAccessTime}
          aria-label="Time"
        />
      </StatLabel>
      <StatNumber
        fontSize={{ base: "xs", md: "sm" }}
        display="flex"
        fontWeight="inherit"
      >
        {time}
      </StatNumber>
    </Stat>
  );
};

export default TimeToRead;

TimeToRead.propTypes = {
  time: PropTypes.string.isRequired,
};

TimeToRead.defaultProps = {
  time: "Estimated time to read not available",
};
