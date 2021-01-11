/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useTranslation from 'next-translate/useTranslation'
import Header from '../components/Header/Header'
import HeaderLinks from '../components/Header/HeaderLinks'
import Footer from '../components/Footer/Footer'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Parallax from '../components/Parallax/Parallax'
import styles from '../assets/jss/nextjs-material-kit/pages/components'

const useStyles = makeStyles(styles)

export default function NotFound(props) {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      <Header
        brand={t('brand.head')}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax image={require('assets/img/nextjs_header.webp')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>404</h1>
                <h3 className={classes.subtitle}>{t('notfound')}</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  )
}
