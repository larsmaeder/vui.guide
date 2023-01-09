import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { IconButton, Tooltip, useToast } from "@chakra-ui/react";
import { MdOutlineLink } from "react-icons/md";
import Toast from "../Toast";

const CopyURL = ({ url, standalone }) => {
  // hooks
  const toast = useToast();
  // generate unique Id
  let id = uuidv4();
  // check Id and close Toast if matching
  function closeToast() {
    if (id) {
      toast.close(id);
    }
  }
  function copyLink() {
    // using the Clipboard API to copy the current page's link to the clipboard
    navigator.clipboard.writeText(url);
    // generate Toast with unique IdRef
    if (!toast.isActive(id)) {
      toast({
        id,
        position: "top",
        duration: 4000,
        render: () => (
          <Toast
            title="Ready to share!"
            description="We’ve copied the page link to your clipboard."
            closeFunc={closeToast}
          />
        ),
      });
    }
  }
  const standaloneBoolean = () => {
    if (!standalone) {
      return 0;
    }
  };
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
        onClick={copyLink}
        variant="outline"
        borderTopRightRadius={standaloneBoolean}
        borderBottomRightRadius={standaloneBoolean}
      />
    </Tooltip>
  );
};

export default CopyURL;
