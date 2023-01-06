import * as React from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { MdAccessTimeFilled } from "react-icons/md";

const TimeToRead = ({ time }) => {
  return (
    <Stat
      title="Time to read"
      fontFamily="heading"
      alignItems="center"
      color="gray.500"
      display="inline-block"
    >
      <StatLabel mr={2} display="inline-block">
        <MdAccessTimeFilled />
      </StatLabel>
      <StatNumber fontSize="xs" display="inline-block">
        {time}
      </StatNumber>
    </Stat>
  );
};

export default TimeToRead;
