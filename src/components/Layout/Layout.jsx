/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import useTranslation from 'next-translate/useTranslation'
import styles from '../../assets/jss/nextjs-material-kit/pages/components'
import Header from '../Header/Header'
import HeaderLinks from '../Header/HeaderLinks'
import Footer from '../Footer/Footer'
import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'
import Parallax from '../Parallax/Parallax'

const useStyles = makeStyles(styles)

export default function Layout(props) {
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
                <h1
                  data-testid="page-header"
                  className={classes.title}
                >
                  {t('brand.head')}
                </h1>
                <h3 className={classes.subtitle}>
                  {t('brand.subtitle')}
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
