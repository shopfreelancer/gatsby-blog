import React from 'react'
import { graphql, Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import {
    Container,
    Row,
    Col
} from 'reactstrap';


const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Blog" keywords={ [`reisen`, `japan`, `tokio`] }/>
        <h1>Blog</h1>
        <Container fluid>
            { data.allMarkdownRemark.edges.map(({ node }) => (

                <Row key={ node.id } class="row row_blog mb-3 pb-2">
                    <Col xs="12" sm="4">
                        <img src={node.frontmatter.image} alt="" />
                    </Col>
                    <Col xs="12" sm="8">
                        <h3>
                            <Link to={ node.fields.slug }>
                                { node.frontmatter.title }{ " " }
                            </Link>
                        </h3>
                        <p>{ node.excerpt }</p>
                        <span className="posted-on">Veröffentlicht am <b>{ node.frontmatter.date }</b></span>
                    </Col>
                </Row>
            )) }
        </Container>
    </Layout>
)

export default IndexPage

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
            image
          }
          excerpt
          fields {           
            slug          
            }
        }
      }
    }
  }
  `