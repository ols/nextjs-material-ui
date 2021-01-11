import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle'
import Layout from '../components/Layout/Layout'

const useStyles = makeStyles(styles)

export default function About() {
  const { t } = useTranslation('common')
  const classes = useStyles()
  return (
    <Layout>
      <div id="about-page" className={classes.sectionsMix}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>{t('about.bio.head')}</h2>
          </div>
          <p>{t('about.bio.description')}</p>
        </div>
      </div>
    </Layout>
  )
}
