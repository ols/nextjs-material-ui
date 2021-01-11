import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle'
import Layout from '../components/Layout/Layout'
// import ReactSoundCloud from '../components/SoundCloud/ReactSoundCloud'

const useStyles = makeStyles(styles)

export default function Portfolio() {
  const { t } = useTranslation('common')
  const classes = useStyles()
  return (
    <Layout>
      <div id="music-page" className={classes.sectionsMix}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>{t('music.listen')}</h2>
            <p>{/* <ReactSoundCloud /> */}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
