/* eslint-disable react/require-default-props */
import React from 'react'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'
import classNames from 'classnames'
import { List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../assets/jss/nextjs-material-kit/components/footerStyle'

const useStyles = makeStyles(styles)

export default function Footer(props) {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const { whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/music"
                className={classes.block}
                target="_self"
              >
                {t('header.music')}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/performance"
                className={classes.block}
                target="_self"
              >
                {t('header.performance')}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/portfolio"
                className={classes.block}
                target="_self"
              >
                {t('header.portfolio')}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/review"
                className={classes.block}
                target="_self"
              >
                {t('header.review')}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/about"
                className={classes.block}
                target="_self"
              >
                {t('header.about')}
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy;
          {1900 + new Date().getYear()}
          {` Wibert Stur`}
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
}
