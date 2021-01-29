import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

function Navbar() {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    return (
        <div>
            <h1>{data.site.siteMetadata.title}</h1>
            <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Contact"> Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
