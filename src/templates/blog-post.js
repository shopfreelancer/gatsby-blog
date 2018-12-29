import React from 'react';
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default function Template({ data }) {

    const post = data.markdownRemark;

    return (
        <Layout>
            <h1>{ post.frontmatter.title }</h1>
            <div dangerouslySetInnerHTML={ { __html: post.html } }/>
        </Layout>
    )
}

export const postQuery = graphql`
  query($slug: String!){
    markdownRemark(fields: {slug: { eq: $slug }}) {
      html
      frontmatter {
          title
          author
          date
      }
    }
  }
  `
