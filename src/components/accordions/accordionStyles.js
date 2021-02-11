import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  accordionSummary: {
    backgroundColor: '#F0F9FF',
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'Rubik',
  },
  content: {
    paddingTop: '10px',
    fontFamily: 'Rubik',
    color: '#5A5A5A',
    width: '100%',
  },
}))

export { useStyles }
