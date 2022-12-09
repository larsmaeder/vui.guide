const path = require("path");
const readingTime = require(`reading-time`);
const docsTemplate = path.resolve(`./src/templates/docs.jsx`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);
  data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: `${docsTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
