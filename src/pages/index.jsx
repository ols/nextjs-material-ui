import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Quote from '../components/Typography/Quote'
import styles from '../assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle'
import Button from '../components/CustomButtons/Button'

const useStyles = makeStyles(styles)

export default function Index() {
  const { t } = useTranslation('common')
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>{t('header.about')}</h2>
          </div>
          <p>
            {t('about.bio.description')}
            <br />
            <br />
            {t('about.bio.description')}
          </p>
          <GridItem md={12} className={classes.textCenter}>
            <Link href="/about">
              <a href="/about" className={classes.link}>
                <Button color="primary" size="lg" simple>
                  {t('show.info')}
                </Button>
              </a>
            </Link>
          </GridItem>
          <div className={classes.title}>
            <h2>{t('review.head')}</h2>
            <GridContainer>
              <GridItem xs={12} sm={6}>
                <Quote
                  text={t('review.quote.text1')}
                  author={t('review.quote.author1')}
                />
              </GridItem>
              <GridItem xs={12} sm={6}>
                <Quote
                  text={t('review.quote.text2')}
                  author={t('review.quote.author2')}
                />
              </GridItem>
            </GridContainer>
          </div>
          <GridItem md={12} className={classes.textCenter}>
            <Link href="/review">
              <a href="/review" className={classes.link}>
                <Button color="primary" size="lg" simple>
                  {t('show.more')}
                </Button>
              </a>
            </Link>
          </GridItem>
        </div>
      </div>
    </Layout>
  )
}
