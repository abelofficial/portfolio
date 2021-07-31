import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  greyContainer: {
    padding: theme.spacing(2),
    backgroundColor: grey[200],
    borderRadius: theme.shape.borderRadius
  },
  pageContainer: {
    padding: theme.spacing(5),
    width: '100vw',
    minHeight: '100vh',
    margin: 'auto'
  }
}));

export default useStyles;
