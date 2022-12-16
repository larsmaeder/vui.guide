import * as React from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  // BreadcrumbSeparator,
} from "@chakra-ui/react";

const CustomBreadcrumb = ({
  crumbs: autoGenCrumbs,
  crumbLabel: crumbLabelOverride,
  crumbSeparator,
  crumbLocationRef,
  // disableLinks,
  hiddenCrumbs,
  // ...rest
}) => {
  return (
    <Breadcrumb separator={crumbSeparator} fontFamily="heading">
      {autoGenCrumbs.map((c, i) => {
        if (hiddenCrumbs.includes(c.pathname)) {
          return null;
        }
        const isCurrentPage = crumbLocationRef === c.pathname;
        return (
          <BreadcrumbItem key={i + uuidv4} isCurrentPage={isCurrentPage}>
            <BreadcrumbLink as={Link} to={c.pathname}>
              {crumbLabelOverride && i === autoGenCrumbs.length - 1
                ? crumbLabelOverride
                : c.crumbLabel}
            </BreadcrumbLink>
            {/* {isCurrentPage ? <BreadcrumbSeparator /> : null} */}
          </BreadcrumbItem>

          // <React.Fragment key={i + uuidv4}>
          //   {!disableLinks.includes(c.pathname) && (
          //     <BreadcrumbItem>
          //       <BreadcrumbLink as={Link} to={c.pathname} isCurrentPage>
          //         {crumbLabelOverride && i === autoGenCrumbs.length - 1
          //           ? crumbLabelOverride
          //           : c.crumbLabel}
          //       </BreadcrumbLink>
          //     </BreadcrumbItem>
          //   )}
          //   {/* returns disabled breadcrumbs if they are defined in the passed props */}
          //   {disableLinks.includes(c.pathname) && (
          //     <BreadcrumbItem color="gray.400">
          //       <BreadcrumbLink
          //         sx={{
          //           textDecoration: "none !important",
          //           cursor: "initial",
          //         }}
          //       >
          //         {crumbLabelOverride && i === autoGenCrumbs.length - 1
          //           ? crumbLabelOverride
          //           : c.crumbLabel}
          //       </BreadcrumbLink>
          //     </BreadcrumbItem>
          //   )}
          //   {i === autoGenCrumbs.length - 1 ? null : <BreadcrumbSeparator />}
          // </React.Fragment>
        );
      })}
    </Breadcrumb>
  );
};

CustomBreadcrumb.defaultProps = {
  crumbSeparator: " / ",
  crumbLabel: null,
  // disableLinks: [],
  hiddenCrumbs: [],
};

export default CustomBreadcrumb;
