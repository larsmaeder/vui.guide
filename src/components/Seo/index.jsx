import * as React from "react";
import PropTypes from "prop-types";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

const Seo = ({ title, description, canonical, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    canonical: canonical || siteUrl + pathname,
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />
      {children}
    </>
  );
};

export default Seo;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  pathname: PropTypes.string,
  children: PropTypes.node,
};
