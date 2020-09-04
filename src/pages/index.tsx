import React, { FC } from "react"
import { Link, PageProps, graphql } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Props = {
  cover: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  allApp: {
    nodes: {
      appId: string
      score: number
      title: string
      version: string
      url: string
      icon: string
      developer: string
      developerWebsite: string
    }[]
  }
}

const IndexPage: FC<PageProps<Props>> = ({
  data: {
    cover: {
      childImageSharp: { fluid: cover },
    },
    allApp: { nodes: apps },
  },
}) => {
  return (
    <>
      <SEO title="OmaSovellus" />

      <CoverContainer>
        <Cover fluid={cover} />
        <TextContainer>
          <H1>
            <Strong>oma</Strong>.wtf
          </H1>
          <P>Kaikki Oma-tuoteperheen tuotteet 📲</P>
        </TextContainer>
      </CoverContainer>

      <Layout>
        <Row>
          {apps.map(app => (
            <App key={app.appId}>
              <Icon src={app.icon} />
              <Column>
                <H3>{app.title}</H3>
                <Developer href={app.developerWebsite}>
                  {app.developer}
                </Developer>
              </Column>
            </App>
          ))}
        </Row>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    allApp {
      nodes {
        appId
        score
        title
        version
        url
        icon
        version
        developer
        developerWebsite
      }
    }

    cover: file(relativePath: { eq: "cover.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
const App = styled.div`
  transition: all 0.3s cubic-bezier(0.08, 0.52, 0.52, 1);
  cursor: pointer;
  border-radius: 8px;
  min-height: 130px;
  padding: 1rem;
  box-shadow: 0 0 0 1px #e2e8f0;
  display: flex;
  flex-direction: row;
  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  }
`

const Column = styled.div`
  padding-left: 1rem;
`

const TextContainer = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate3d(50%, -50%, 0);
`

const H1 = styled.h1`
  text-align: center;
  z-index: 10;
  font-size: 4rem;
  color: #545454;
  font-family: "Noto Sans JP", sans-serif;
`

const H3 = styled.h3`
  margin: 0 0 0.5rem 0;
`

const Icon = styled.img`
  height: 2.5rem;
  border-radius: 0.5rem;
  width: 2.5rem;
`

const Developer = styled.a`
  color: #545454;
  font-size: 1rem;
  text-decoration: none;
`

const Row = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 5rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 30em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 20em) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Cover = styled(Image)`
  margin-top: 5rem;
  width: 100%;
  height: 25rem;
  position: absolute;
`

const Strong = styled.strong`
  color: black;
`

const CoverContainer = styled.div`
  margin-top: 5rem;
  position: relative;
`

const P = styled.p`
  text-align: center;
`
