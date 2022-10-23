import { ButtonGroup, Button, AppBar, Box, Toolbar } from "@mui/material";
import  Link from 'next/Link'
import Image from "next/future/image"
import logo from '../public/img/logo.svg'

const arrayLink = [
                    {name: 'Home', url:'/'},
                    {name: 'Nosotros', url:'/nosotros'},
                    {name:'Tienda Virtual', url:'/tienda'},
                    {name: 'Blog',  url:'/blog'},
                    {name:'Practica', url:'/practica'}
                  ];

const handelMenu = (arr) => arr.map(({name, url}) =>(
                    // eslint-disable-next-line react/jsx-key
                    <Button>
                        <Link href={url} underline="none">
                          {name}
                        </Link>
                    </Button> ))

const NavBar = () => {
  return (
    <AppBar component="nav" color="primary" display='flex' >
      <Toolbar >
      <Box edge="start" flexGrow={1}>
        <Image src={logo.src} width={150} height={40} alt='imagen logotipo' edge="start"/>
      </Box>
      <Box edge="end">
        <ButtonGroup variant="text" aria-label="text button group" color="inherit"  edge="end">
          {handelMenu(arrayLink)}
        </ButtonGroup>
      </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar