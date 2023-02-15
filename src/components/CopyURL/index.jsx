import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { IconButton, Tooltip, useToast } from "@chakra-ui/react";
import { MdOutlineLink, MdInfo, MdError } from "react-icons/md";
import Toast from "../Toast";

const CopyURL = ({ url, standalone }) => {
  const toast = useToast();
  let id = uuidv4();
  async function writeClipURL() {
    const type = "text/plain";
    const blob = new Blob([url], { type });
    try {
      await navigator.clipboard.write([new ClipboardItem({ [type]: blob })]);
      if (!toast.isActive(id)) {
        toast({
          id,
          position: "top",
          duration: 4000,
          render: () => (
            <Toast
              title="Ready to share!"
              description="We’ve copied the page link to your clipboard."
              colorScheme="green"
              id={id}
              size="sm"
              icon={MdInfo}
            />
          ),
        });
      }
    } catch (err) {
      if (!toast.isActive(id)) {
        toast({
          id,
          position: "top",
          duration: 4000,
          render: () => (
            <Toast
              title="Something went wrong!"
              description="The page link could not be copied to your clipboard."
              colorScheme="red"
              id={id}
              size="sm"
              icon={MdError}
            />
          ),
        });
      }
    }
  }
  return (
    <Tooltip
      aria-label="Click to copy page link"
      label="Copy page link"
      placement="top-start"
    >
      <IconButton
        aria-label="Copy page link"
        icon={<MdOutlineLink />}
        size="md"
        onClick={writeClipURL}
        variant="outline"
        borderTopRightRadius={!standalone && 0}
        borderBottomRightRadius={!standalone && 0}
      />
    </Tooltip>
  );
};

export default CopyURL;
