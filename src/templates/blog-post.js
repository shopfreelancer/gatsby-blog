import React from 'react';
import { graphql, Link } from 'gatsby'

export default function Template({ data }) {
    const post = data.markdownRemark;

    return (
        <div>
            { post.frontmatter.title }
            <Link to="/blog">Zurück</Link>
            <div dangerouslySetInnerHTML={ { __html: post.html } }/>
        </div>
    )
}

export const postQuery = graphql`
  query($slug: String!){
    markdownRemark(fields: {slug: { eq: $slug }}) {
      html
      frontmatter {
          slug
          title
          author
          date
      }
    }
  }
  `
