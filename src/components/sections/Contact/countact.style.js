import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: theme.spacing(15),
    // padding: `${theme.spacing(2)}px`
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  animSection: {
    position: 'relative'
  },
  textSlideShow: {
    width: '100%'
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  image: {
    boxShadow: theme.shadows[1]
  },
  info: {
    fontSize: '11px',

    textAlign: 'left'
  }
}));

export default useStyles;
