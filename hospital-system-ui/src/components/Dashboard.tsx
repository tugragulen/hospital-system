import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import {MenuOptionModel} from "../models/Models";
import Hospital from "../pages/hospital/Hospital";
import Patient from "../pages/patient/Patient";

const drawerWidth = 240;


const menuOptions: MenuOptionModel[] = [
    {
        id: 1,
        name: "Hasta Kayıt",
        component: <Patient/>,
        icon: <PersonAddAltOutlinedIcon/>
    },
    {
        id: 2,
        name: "Hastane Kayıt",
        component: <Hospital/>,
        icon: <LocalHospitalOutlinedIcon/>
    }

]

export default function Dashboard() {
    const [activePage, setActivePage] = useState<MenuOptionModel>(menuOptions[0]);

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx=
                {{
                    background: 'rgba(239,58,58)',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Hasta & Hastane Kayıt Sistemi
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        background: 'rgb(229,225,225)',
                        boxSizing: 'border-box'
                    },
                }}
            >
                <Toolbar/>
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        {menuOptions.map((option) => (
                            <ListItem key={option.id} disablePadding
                                      sx={{
                                          bgcolor: activePage.id === option.id ? "rgb(241,118,118)" : ""
                                      }}
                            >
                                <ListItemButton onClick={() => setActivePage(option)}>
                                    <ListItemIcon>
                                        {option.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={option.name}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                {activePage.component}
            </Box>
        </Box>
    );
}
