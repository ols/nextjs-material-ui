import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import image1 from '../assets/img/image1.webp'
import styles from '../assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Layout from '../components/Layout/Layout'

const useStyles = makeStyles(styles)

export default function Portfolio() {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const width = '100%'
  const height = '100%'
  return (
    <Layout>
      <div id="portfolio-page" className={classes.sectionsMix}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>{t('portfolio.head')}</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={4}>
              <h4>.</h4>
              <Image
                layout="responsive"
                alt="Image 1"
                src={image1}
                className={`${classes.imgRounded} ${classes.imgFluid}`}
                width={width}
                height={height}
              />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <h4>.</h4>
              <Image
                layout="responsive"
                alt="Image 2"
                src={image1}
                className={`${classes.imgRounded} ${classes.imgFluid}`}
                width={width}
                height={height}
              />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <h4>.</h4>
              <Image
                layout="responsive"
                alt="Image 3"
                src={image1}
                className={`${classes.imgRounded} ${classes.imgFluid}`}
                width={width}
                height={height}
              />
            </GridItem>
          </GridContainer>
          <div className={classes.space50} />
        </div>
      </div>
    </Layout>
  )
}
