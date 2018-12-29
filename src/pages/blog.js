import React from 'react'
import { graphql, Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
              <h3>
                  <Link to={node.frontmatter.path}>
                  {node.frontmatter.title}{" "}
                  <span>
                      — {node.frontmatter.date}</span>
                  </Link>
              </h3>
              <p>{node.excerpt}</p>
          </div>
      ))}
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
  `