import React from "react";
import SidenavStu from "../component/Sidebar/Sidenav";
import Navbar from "../component/Navbar/Navbar";
import Box from '@mui/material/Box';
import Chatbotscreen from "../component/ChatScreen/Chatbotscreen";
import AccordionDashstu from "../component/Accordion/AccordionDashstu";
import Footer from "../component/Footer/Footer";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import styles from "../assets/css/Dash.module.css";
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FAQ from "../component/FAQ/FAQ";


export default function chatbot() {
    return (
        <>
            <div className={styles.bgcolor}>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <SidenavStu />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <Card sx={{ height: 87 + "vh" }}>
                                    <CardContent>
                                        <Chatbotscreen />
                                    </CardContent>
                                </Card>
                                <Stack spacing={2} direction="row">
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={2}>
                                    <Card className={styles.gradientlight}>
                                        <Stack spacing={2} direction="row">
                                            <div className={styles.iconstylewhite}>
                                                <SchoolIcon />
                                            </div>
                                            <div className={styles.paddingall}>
                                                <span className={styles.univercitytitle}>University</span>
                                                <br />
                                                <span className={styles.univercitysubtitle}>WooSong Univ.</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card className={styles.gradientlight}>
                                        <Stack spacing={2} direction="row">
                                            <div className={styles.iconstylewhite}>
                                                <MenuBookIcon />
                                            </div>
                                            <div className={styles.paddingall}>
                                                <span className={styles.univercitytitle}>Lecture</span>
                                                <br />
                                                <span className={styles.univercitysubtitle}>Capstone Project</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card sx={{ height: 69.3 + "vh", display: 'flex', justifyContent: 'center' }}>
                                        <CardContent>
                                        <div className={styles.paddingall} style={{ textAlign: 'center' }}>
                                                <span className={styles.univercitytitle}>FAQ</span>
                                                <br />
                                            </div>
                                            <FAQ />
                                        </CardContent>
                                    </Card>
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