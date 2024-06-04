import React from "react";
import SidenavStu from "../component/Sidebar/Sidenav";
import Navbar from "../component/Navbar/Navbar";
import Box from '@mui/material/Box';
import Footer from "../component/Footer/Footer";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import styles from "../assets/css/Dash.module.css";
import Button from '@mui/material/Button';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import Typography from '@mui/material/Typography';
import Write from "../component/PostBoard/Write";


export default function Community() {
    return (
        <>
            <div className={styles.bgcolor}>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <SidenavStu />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={13}>
                            <Card sx={{ height: 87 + "vh", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <CardContent>
                                        <Write />
                                    </CardContent>
                                </Card>
                                <Stack spacing={2} direction="row">
                                </Stack>
                            </Grid>
                        </Grid>
                        <Footer />
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>

    )
}