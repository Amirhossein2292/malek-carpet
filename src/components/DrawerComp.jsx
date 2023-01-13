import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

const navLinkItems = [
    {
        title: 'صفحه ی اصلی',
        path: '/'
    },
    {
        title: ' کلکسیون فرش ',
        path: '/کلکسیون-فرش'
    },
    {
        title: ' درباره ی ما ',
        path: '/درباره-ما'
    },
    
]

export default function DrawerComp() {

    const [open, setOpen] = useState(false)
    
  return (
    <>
        <Drawer 
            PaperProps={{
                sx: {backgroundColor: '#b0002f'}
            }} 
            anchor='right' 
            open={open} 
            onClose={() => setOpen(false)}
        >
            <List>
                {navLinkItems.map((item, index) => (
                    <ListItemButton component="a" href={item.path} key={index} divider>
                        <ListItemText sx={{ color: 'white', paddingX: '2rem'}}>{item.title}</ListItemText>
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
        <IconButton sx={{ color: 'white'}} onClick={() => setOpen(!open)}>
            <MenuRoundedIcon />
        </IconButton>
    </>
  )
}
