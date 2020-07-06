import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FiActivity } from "react-icons/fi";


import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title} <FiActivity></FiActivity>
        </Link>
      </h1>
      <nav>
        <div className={headerStyles.navList}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              <h4 className={headerStyles.nav1}>HOME</h4>
            </Link>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              <h4 className={headerStyles.nav2}>BLOG</h4>
            </Link>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              <h4 className={headerStyles.nav3}>ABOUT</h4>
            </Link>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/projects"
            >
              <h4 className={headerStyles.nav4}>PROJECTS</h4>
            </Link>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              <h4 className={headerStyles.nav5}>CONTACT</h4>
            </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
