const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const docs = result.data.allMdx.edges
  docs.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`./src/templates/layout-docs.js`),
      context: { id: node.id },
    })
  })
}
