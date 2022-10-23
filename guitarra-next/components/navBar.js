import { ButtonGroup, Button, AppBar, Box, Toolbar } from "@mui/material";
import  Link from 'next/Link'
import Image from "next/future/image"
import logo from '../public/img/logo.svg'

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>

      <Box flexGrow={1}>
        <Image src={logo.src} width={300} height={40}/>
      </Box>
      <Box>
        <ButtonGroup variant="text" aria-label="text button group" color="inherit">
          <Button>
            <Link href="/" underline="none">
            inicio
            </Link>
          </Button>
          <Button>
          <Link href="/nosotros" underline="none">
            Nosotros
            </Link>
          </Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar