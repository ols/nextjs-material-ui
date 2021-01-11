/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import LanguageIcon from '@material-ui/icons/Language'
import { IconFlagUS } from 'material-ui-flags'
import Image from 'next/image'
import {
  faCompactDisc,
  faVideo,
  faImages,
  faPenFancy,
  faInfoCircle,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faSoundcloud,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useTranslation from 'next-translate/useTranslation'
import Hidden from '@material-ui/core/Hidden'
import flagSE, { padEnd } from '../../assets/img/flag-swedish.webp'
import Button from '../CustomButtons/Button'
import styles from '../../assets/jss/nextjs-material-kit/components/headerLinksStyle'
import CustomDropdown from '../CustomDropdown/CustomDropdown'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const { t, lang } = useTranslation('common')
  const router = useRouter()
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/music" as="/music">
          <Button
            color="transparent"
            target="_self"
            className={classes.navLink}
          >
            <FontAwesomeIcon
              className={classes.socialIcons}
              icon={faCompactDisc}
            />
            {t('header.music')}
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/performance" as="/performance">
          <Button
            color="transparent"
            target="_self"
            className={classes.navLink}
          >
            <FontAwesomeIcon
              className={classes.socialIcons}
              icon={faVideo}
            />
            {t('header.performance')}
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/portfolio" as="/portfolio">
          <Button
            color="transparent"
            target="_self"
            className={classes.navLink}
          >
            <FontAwesomeIcon
              className={classes.socialIcons}
              icon={faImages}
            />
            {t('header.portfolio')}
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/review" as="/review">
          <Button
            color="transparent"
            target="_self"
            className={classes.navLink}
          >
            <FontAwesomeIcon
              className={classes.socialIcons}
              icon={faPenFancy}
            />
            {t('header.review')}
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/about" as="/about">
          <Button
            color="transparent"
            target="_self"
            className={classes.navLink}
          >
            <FontAwesomeIcon
              className={classes.socialIcons}
              icon={faInfoCircle}
            />
            {t('header.about')}
          </Button>
        </Link>
      </ListItem>
      <Hidden smDown>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="mail"
            title={t('header.tooltip.email')}
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="mailto:wibert@wibertstur.se"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <FontAwesomeIcon
                className={classes.socialIcons}
                icon={faEnvelope}
              />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title={t('header.tooltip.twitter')}
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/wibertstur"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <FontAwesomeIcon
                className={classes.socialIcons}
                icon={faTwitter}
              />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title={t('header.tooltip.facebook')}
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/wibertstur/"
              target="_blank"
              className={classes.navLink}
            >
              <FontAwesomeIcon
                className={classes.socialIcons}
                icon={faFacebook}
              />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title={t('header.tooltip.instagram')}
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/wibertstur.se/"
              target="_blank"
              className={classes.navLink}
            >
              <FontAwesomeIcon
                className={classes.socialIcons}
                icon={faInstagram}
              />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText=""
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={LanguageIcon}
            dropdownList={[
              lang !== 'en' && (
                <Link href={`${router.route}`} locale="en">
                  <Button
                    color="transparent"
                    target="_self"
                    className={classes.navLink}
                  >
                    <IconFlagUS />
                    {` English`}
                  </Button>
                </Link>
              ),
              lang !== 'sv' && (
                <Link href={`${router.route}`} locale="sv">
                  <Button
                    color="transparent"
                    target="_self"
                    className={classes.navLink}
                  >
                    <Image src={flagSE} width="16px" height="16px" />
                    {` Swedish`}
                  </Button>
                </Link>
              ),
            ]}
          />
        </ListItem>
      </Hidden>
      <Hidden mdUp>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText=""
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={LanguageIcon}
            dropdownList={[
              lang !== 'en' && (
                <Link href={`${router.route}`} locale="en">
                  <Button
                    color="transparent"
                    target="_self"
                    className={classes.navLink}
                  >
                    <IconFlagUS />
                    {` English`}
                  </Button>
                </Link>
              ),
              lang !== 'sv' && (
                <Link href={`${router.route}`} locale="sv">
                  <Button
                    color="transparent"
                    target="_self"
                    className={classes.navLink}
                  >
                    <Image src={flagSE} width="16px" height="16px" />
                    {` Swedish`}
                  </Button>
                </Link>
              ),
            ]}
          />
        </ListItem>
        <ListItem>
          <Tooltip
            id="mail"
            title={t('header.tooltip.email')}
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="mailto:wibert@wibertstur.se"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <FontAwesomeIcon
                className={classes.socialIcons}
                icon={faEnvelope}
              />
            </Button>
          </Tooltip>
          <Tooltip
            id="instagram-twitter"
            title={t('header.tooltip.twitter')}
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/wibertstur"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <FontAwesomeIcon
                className={classes.socialIcons}
                icon={faTwitter}
              />
            </Button>
          </Tooltip>
          <Tooltip
            id="instagram-facebook"
            title={t('header.tooltip.facebook')}
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/wibertstur/"
              target="_blank"
              className={classes.navLink}
            >
              <FontAwesomeIcon
                className={classes.socialIcons}
                icon={faFacebook}
              />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem>
          <Tooltip
            id="instagram-tooltip"
            title={t('header.tooltip.instagram')}
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/wibertstur/"
              target="_blank"
              className={classes.navLink}
            >
              <FontAwesomeIcon
                className={classes.socialIcons}
                icon={faInstagram}
              />
            </Button>
          </Tooltip>
        </ListItem>
      </Hidden>
    </List>
  )
}
