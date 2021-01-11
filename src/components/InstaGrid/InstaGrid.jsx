/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react'
// import withInstagramFeed from 'origen-react-instagram-feed';
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'

const styles = () => ({
  wrapper: {},
  image: {
    width: '100%',
    height: '100%',
  },
})

const InstaGrid = ({ classes, media, account, status }) => (
  <Grid container spacing={32} className={classes.wrapper}>
    {media &&
      status === 'completed' &&
      media.map(
        ({ displayImage, id, postLink, accessibilityCaption }) => (
          <Grid item xs={12} sm={6} md={4} key={id || displayImage}>
            <ButtonBase
              href={
                postLink || `https://www.instagram.com/${account}/`
              }
            >
              <img
                src={displayImage}
                alt={accessibilityCaption || 'Instagram picture'}
                className={classes.image}
              />
            </ButtonBase>
          </Grid>
        ),
      )}
    {status === 'loading' && <p>loading...</p>}
    {status === 'failed' && <p>Check instagram here</p>}
  </Grid>
)

InstaGrid.defaultProps = {
  media: undefined,
}

export default InstaGrid
// export default compose(
//   withInstagramFeed,
//   withStyles(styles),
// )(InstaGrid);
