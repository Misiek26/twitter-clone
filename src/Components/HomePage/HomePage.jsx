import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import React from "react";
import RightPart from "../RightPart/RightPart";
import Profile from "../Profile/Profile";
import { Route, Routes } from "react-router";
import TwitDetails from "../TwitDetails/TwitDetails";

const HomePage = () =>{
    return(
        <Grid container size={{ xs:12 }} className='px-5 lg:px-36 justify-between'>
            <Grid size={{ xs:0, lg:2.5 }} className="hidden lg:block w-full relative">
                <Navigation/>
            </Grid>

            <Grid size={{ xs:12, lg:6 }} className="px-5 lg:px-9 hidden lg:block w-full relative">
                <Routes>
                    <Route path="/" element={<HomeSection/>}></Route>
                    <Route path="/home" element={<HomeSection/>}></Route>
                    <Route path="/profile/:id" element={<Profile/>}></Route>
                    <Route path="/twit/:id" element={<TwitDetails/>}></Route>
                </Routes>
                
            </Grid>

            <Grid size={{ xs:0, lg:3 }} className="hidden lg:block w-full relative">
                <RightPart/>
            </Grid>
        </Grid>
    )
}

export default HomePage