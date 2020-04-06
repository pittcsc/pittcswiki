import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GroupLink = ({ name, href }) => (
  <div >
    <Link to={href}>{ name }</Link>
  </div>
)

const LinkGroup = ({header}) => (
  <div>
    <h3>{header}</h3>
  </div>
)



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ 
      display: 'flex', justifyContent: 'center'
      }}>
        Welcome to the Unoffical Pitt CS Wiki
    </h1>
    <hr/>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>

      <table >
        <tr>
          <td style={{
            verticalAlign: 'top',
            width: '33%'
          }}>
            <div>
              <h3>Classes</h3>
              <ul>
                <li><GroupLink name="Courses" href="courses" /></li>
                <li><GroupLink name="(In Dev:) Scheduling Classes"/></li>
              </ul>        
            </div>
          </td>
          <td style={{
            verticalAlign: 'top',
            width: '33%'
          }}>
            <div>
              <h3>Guides</h3>
              <ul>
                <li><GroupLink name="Resume" href="resume" /></li>
              </ul>
            </div>
          </td>
          <td style={{
            verticalAlign: 'top',
            width: '33%'
          }}>
            <div>
              <h3>Career</h3>
              <ul>
                <li><GroupLink name="(In Dev:) Getting an Interview" /></li>
                <li><GroupLink name="(In Dev:) Interview Prep" /></li>
                <li><GroupLink name="(In Dev:) Companies" /></li>
              </ul>
            </div>
          </td>
        </tr>
      </table>
    
    </div>
  </Layout>
)

export default IndexPage
