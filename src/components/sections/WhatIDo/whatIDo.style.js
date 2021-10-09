import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@keyframes slide': {
    from: {
      transform: 'translateX(-30%)'
    },
    to: {
      transform: 'translateX(40%)'
    }
  },
  container: {
    padding: theme.spacing(3)
  },
  section: {
    padding: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    opacity: 0.4,
    filter: 'blur(0.1rem)'
  },
  slideAnim: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2]
  },

  frameworkContainer: {
    marginRight: theme.spacing(4),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: `$slide 1500ms ${theme.transitions.easing.easeInOut} 100ms infinite alternate`
  }
}));

export default useStyles;
