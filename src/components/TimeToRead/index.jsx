import * as React from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdAccessTimeFilled } from "react-icons/md";

const TimeToRead = ({ time }) => {
  return (
    <Stat
      title="Time to read"
      fontFamily="heading"
      color="gray.500"
      display="flex"
      alignItems="center"
    >
      <StatLabel mr={2} display="flex">
        <Icon as={MdAccessTimeFilled} />
      </StatLabel>
      <StatNumber fontSize="xs" display="flex">
        {time}
      </StatNumber>
    </Stat>
  );
};

export default TimeToRead;
