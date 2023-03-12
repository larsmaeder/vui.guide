import * as React from "react";
import PropTypes from "prop-types";
import { IconButton, Tooltip, useToast, useClipboard } from "@chakra-ui/react";
import { MdOutlineLink, MdInfo, MdError } from "react-icons/md";
import Toast from "../Toast";

const CopyURL = ({ url, standalone }) => {
  const toast = useToast();
  const id = `id-${url}`;
  const { onCopy, hasCopied } = useClipboard(url);
  const handleCopyURL = React.useCallback(() => {
    try {
      onCopy();
      if (!toast.isActive(id) && !hasCopied) {
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
      if (!toast.isActive(id) && !hasCopied) {
        toast({
          id,
          position: "top",
          duration: 4000,
          render: () => (
            <Toast
              title="Error copying link"
              description="Sorry, we could not copy the page link to your clipboard."
              colorScheme="red"
              id={id}
              size="sm"
              icon={MdError}
            />
          ),
        });
      }
    }
  }, [onCopy, hasCopied, id, toast]);
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
        onClick={handleCopyURL}
        colorScheme="blackAlpha"
        sx={{
          borderTopRightRadius: !standalone && 0,
          borderBottomRightRadius: !standalone && 0,
        }}
      />
    </Tooltip>
  );
};

CopyURL.propTypes = {
  url: PropTypes.string.isRequired,
  standalone: PropTypes.bool,
};

CopyURL.defaultProps = {
  standalone: false,
};

export default CopyURL;
