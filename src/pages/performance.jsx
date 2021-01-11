import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useTranslation from 'next-translate/useTranslation'
// import ReactPlayer from 'react-player/youtube'
import Layout from '../components/Layout/Layout'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import styles from '../assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle'

const useStyles = makeStyles(styles)

export default function Performance() {
  const { t } = useTranslation('common')
  const classes = useStyles()
  return (
    <Layout>
      <div id="performance-page" className={classes.sectionsMix}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>{t('performance.watch')}</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <h4>{t('performance.head1')}</h4>
              {/* <ReactPlayer width="100%" controls={false} url="..." /> */}
            </GridItem>
          </GridContainer>
          <div className={classes.space50} />
        </div>
      </div>
    </Layout>
  )
}
