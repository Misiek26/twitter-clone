import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";
import PropTypes from "prop-types";
import TweetCard from "../HomeSection/TweetCard";

const Profile = () => {

    const [tabValue, setTabValue] = useState(0);

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`profile-tabpanel-${index}`}
                aria-labelledby={`profile-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    }

    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `profile-tab-${index}`,
            'aria-controls': `profile-tabpanel-${index}`,
        };
    }

    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    const handleOpenProfileModel = () => {
        console.log("open profile model");
    }

    const handleFollowUser = () => {
        console.log("follow user");
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)

        if (newValue === 3) {
            console.log("likes tweets")
        }

        else if (newValue === 0) {
            console.log("users tweets")
        }
    }

    return (
        <div>
            <section className="bg-white z-50 flex items-center sticky top-0 bg-opacity-95">
                <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack} />
                <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Jan Kowalski</h1>
            </section>

            <section>
                <img className="w-[100%] h-[15rem] object-cover" src="https://media.istockphoto.com/id/2156656406/photo/tashkent-city-park.jpg?b=1&s=612x612&w=0&k=20&c=Jls5sSeLwc5RgezoD51XJOreQWYyOEWQn3z-Fw_99Z0=" alt="" />
            </section>

            <section className="pl-6">
                <div className="flex justify-between items-start mt-5 h-[5rem]">
                    <Avatar
                        className="transform -translate-y-24"
                        alt="Jan Kowalski"
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                        sx={{ width: "10rem", height: "10rem", /*border:"4px solid white"*/ }}
                    />

                    {true ? (<Button onClick={handleOpenProfileModel}
                        variant="contained" sx={{ borderRadius: "20px" }}>Edit Profile
                    </Button>) :

                        (<Button onClick={handleFollowUser}
                            variant="contained" sx={{ borderRadius: "20px" }}>{true ? "Follow" : "Unfollow"}
                        </Button>)}
                </div>

                <div>
                    <div className="flex items-center">
                        <h1 className="font-bold text-lg">Jan Kowalski</h1>
                        {true && (<img
                            className="ml-2 w-5 h-5"
                            src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                            alt="" />)}
                    </div>
                    <h1 className="text-gray-500">@jankowalski</h1>
                </div>

                <div className="mt-2 space-y-3">
                    <p>Hello. I'm Jan Kowalski, you will find Twitter full stack project on my GitHub.</p>
                    <div className="py-1 flex space-x-5">
                        <div className="flex items-center text-gray-500">
                            <BusinessCenterIcon />
                            <p className="ml-2">Cybersecurity</p>
                        </div>

                        <div className="flex items-center text-gray-500">
                            <LocationOnIcon />
                            <p className="ml-2">Poland</p>
                        </div>

                        <div className="flex items-center text-gray-500">
                            <CalendarMonthIcon />
                            <p className="ml-2">Joined May 2025</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-5">
                        <div className="flex items-center space-x-1 font-semibold">
                            <span>190</span>
                            <span className="text-gray-500">Following</span>
                        </div>

                        <div className="flex items-center space-x-1 font-semibold">
                            <span>590</span>
                            <span className="text-gray-500">Followers</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tabValue} onChange={handleTabChange} aria-label="profile tabs">
                            <Tab label="Tweets" {...a11yProps(0)} />
                            <Tab label="Replies" {...a11yProps(1)} />
                            <Tab label="Media" {...a11yProps(2)} />
                            <Tab label="Likes" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={tabValue} index={0}>
                        {[1,1,1,1].map((item) => <TweetCard/>)}
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={1}>
                        users replies
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={2}>
                        Media
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={3}>
                        Likes
                    </CustomTabPanel>
                </Box>
            </section>
        </div>
    )
}

export default Profile