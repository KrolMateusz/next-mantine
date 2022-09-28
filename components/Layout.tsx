import React, { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { createStyles } from '@mantine/core'

export interface LayoutProps {
  children: ReactNode
}

const useStyles = createStyles((theme) => ({
  content: {
    marginTop: '56px',  // zapisc jako zmienną wysokoć nawigacji, w devtoolsach jest to widoczne,
    marginLeft: '90px'  // zapisać jako zmienną szerokość nawigacji
  }
}))

const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles()

  return (
    <>
        <Header />
        <Sidebar />
        <div className={classes.content}>{children}</div>
    </>
  )
}

export default Layout