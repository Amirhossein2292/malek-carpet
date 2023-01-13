import { Stack, Box, useTheme, useMediaQuery, Tabs, Tab } from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import DrawerComp from './DrawerComp';
import SearchBar from './SearchBar'
import { navLinks } from '../datas/data';

export default function Navbar() {

  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  
  const theme= useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const isMatch2 = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{  background: '#64001b', top: '0', justifyContent: 'space-between'}}
    >
        {isMatch2 && <SearchBar  />}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', fontSize: '1.5rem'}}>
          <span style={{color: 'white'}}>فرش ملک</span>
        </Link>
        <Tabs
          sx={{ color: 'white', display: {xs: 'none', md: 'block'}, fontSize: '1.5rem'}}
          TabIndicatorProps={{style: {background: '#be996d'}}}
          textColor="inherit"
          indicatorColor='secondary'
          value={value}
          onChange={(e, val) => setValue(val)}
        >
          <Tab label="صفحه ی اصلی" to="/" component={Link} />
          <Tab label="کلکسیون فرش" to="/کلکسیون-فرش" component={Link} />
          <Tab label="ارتباط با ما" to="/درباره-ما" component={Link} />
        </Tabs>
        {isMatch && <DrawerComp />}
      </Stack>
  )
}
