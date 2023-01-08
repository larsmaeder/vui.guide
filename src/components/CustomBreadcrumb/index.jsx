import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const CustomBreadcrumb = ({
  crumbs: autoGenCrumbs,
  crumbLabel: crumbLabelOverride,
  crumbLocationRef,
  disableLinks,
  hiddenCrumbs,
  ...rest
}) => {
  return (
    <Breadcrumb
      separator="/"
      borderTopLeftRadius="0"
      borderBottomLeftRadius="0"
      size="xs"
    >
      {autoGenCrumbs.map((c, i) => {
        const isCurrentPage = crumbLocationRef === c.pathname;
        if (hiddenCrumbs.includes(c.pathname) || isCurrentPage) {
          return null;
        }
        return (
          <BreadcrumbItem key={i + uuidv4} isCurrentPage={isCurrentPage}>
            <BreadcrumbLink
              as={GatsbyLink}
              to={c.pathname}
              title={
                "Go to " +
                (crumbLabelOverride && i === autoGenCrumbs.length - 1
                  ? crumbLabelOverride
                  : c.crumbLabel)
              }
            >
              {crumbLabelOverride && i === autoGenCrumbs.length - 1
                ? crumbLabelOverride
                : c.crumbLabel}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

CustomBreadcrumb.defaultProps = {
  crumbLabel: null,
  disableLinks: [],
  hiddenCrumbs: [],
};

export default CustomBreadcrumb;
