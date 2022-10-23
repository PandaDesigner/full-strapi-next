import { Box, Container, Typography } from '@mui/material'
import theme from '../utils/theme'

const styles = {
  paperContainer: {
      backgroundImage: "url('../public/img/header.jpg')"
  }
};

const Header = () => {
return (

      <Box style={styles.paperContainer}>
        <Container>

          <Typography variant="h3" color="initial" color="primary" >desde header</Typography>
        </Container>
      </Box>



  )
}

export default Header