import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationIcon from "@mui/icons-material/Notifications";
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaddingIcon from '@mui/icons-material/Padding';

export const navigationMenu = [
    {
        title:"Home",
        key: "home",
        icon: <HomeIcon/>,
        path:"/home"
    },
    {
        title:"Explore",
        key: "explore",
        icon: <ExploreIcon/>,
        path:"/explore"
    },
    {
        title:"Notifications",
        key: "notifications",
        icon: <NotificationIcon/>,
        path:"/notifications"
    },
    {
        title:"Messages",
        key: "messages",
        icon: <MessageIcon/>,
        path:"/messages"
    },
    {
        title:"Lists",
        key: "lists",
        icon: <ListAltIcon/>,
        path:"/lists"
    },
    {
        title:"Communities",
        key: "communities",
        icon: <GroupIcon/>,
        path:"/communities"
    },
    {
        title:"Verified",
        key: "verified",
        icon: <VerifiedIcon/>,
        path:"/verified"
    },
    {
        title:"Profile",
        key: "profile",
        icon: <AccountCircleIcon/>,
        path:"/profile"
    },
    {
        title:"More",
        key: "more",
        icon: <PaddingIcon/>,
        path:"/more"
    }
]

