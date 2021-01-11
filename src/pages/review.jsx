import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle'
import Quote from '../components/Typography/Quote'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Layout from '../components/Layout/Layout'

const useStyles = makeStyles(styles)

export default function Review() {
  const { t } = useTranslation('common')
  const classes = useStyles()
  return (
    <Layout>
      <div id="review-page" className={classes.sectionsMix}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>{t('review.head')}</h2>
          </div>
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
      </div>
    </Layout>
  )
}
