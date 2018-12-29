/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages/blog` })
        createNodeField({ node, name: `slug`, value: slug, })
    }
}
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: {
                        // Data passed to context is available
                        // in page queries as GraphQL variables.
                        slug: node.fields.slug,
                    },
                })
            })
            resolve()
        })
    })
    }
//
// /*
// const path = require('path')
//
// exports.createPages = ({ boundActionCreators, graphql }) => {
//     const { createPage } = boundActionCreators;
//
//     const postTemplate = path.resolve('src/templates/blog-post.js');
//
//     return graphql(
//         `
//           query BlogIndexQuery {
//             allMarkdownRemark {
//               totalCount
//               edges {
//                 node {
//                   id
//                   frontmatter {
//                     title
//                     path
//                     date(formatString: "DD MMMM, YYYY")
//                   }
//                   excerpt
//                 }
//               }
//             }
//           }
//         `
//     ).then(res=>{
//         if(res.errors){
//             return Promise.reject(res.errors);
//         }
//
//         res.data.allMarkdownRemark.edges.foreach( ({node}) => {
//             console.log(node.frontmatter.path);
//             createPage({
//                 path: node.frontmatter.path,
//                 component: postTemplate
//             })
//         })
//     })
// }
// */