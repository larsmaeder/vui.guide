import * as React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const CustomBreadcrumb = ({
  crumbs,
  crumbLabel: crumbLabelOverride,
  crumbLocationRef,
  disableLinks,
  hiddenCrumbs,
}) => {
  return (
    <Breadcrumb
      separator="/"
      borderTopLeftRadius="0"
      borderBottomLeftRadius="0"
    >
      {crumbs.map((crumb) => {
        const isCurrentPage = crumbLocationRef === crumb.pathname;
        if (hiddenCrumbs.includes(crumb.pathname) || isCurrentPage) {
          return null;
        }
        const label =
          crumbLabelOverride && crumbs.indexOf(crumb) === crumbs.length - 1
            ? crumbLabelOverride
            : crumb.crumbLabel;
        const linkProps = disableLinks.includes(crumb.pathname)
          ? {}
          : { as: GatsbyLink, to: crumb.pathname };
        return (
          <BreadcrumbItem key={crumb.pathname} isCurrentPage={isCurrentPage}>
            <BreadcrumbLink title={`Go to ${label}`} {...linkProps}>
              {label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

CustomBreadcrumb.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      crumbLabel: PropTypes.string.isRequired,
    })
  ),
  crumbLabel: PropTypes.string,
  crumbLocationRef: PropTypes.string.isRequired,
  disableLinks: PropTypes.arrayOf(PropTypes.string),
  hiddenCrumbs: PropTypes.arrayOf(PropTypes.string),
};

CustomBreadcrumb.defaultProps = {
  crumbs: [],
  crumbLabel: null,
  disableLinks: [],
  hiddenCrumbs: [],
};

export default CustomBreadcrumb;
