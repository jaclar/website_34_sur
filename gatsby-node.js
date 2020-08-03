const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    const slug = node.fields.slug;
    let component = path.resolve(`./src/templates/generic.js`);

    if (slug.split(`/`)[1] === `articulos`) {
      component = path.resolve(`./src/templates/article.js`);
    }

    createPage({
      path: slug,
      component,
      context: {
        slug,
      },
    })
  })
}
