import React from "react";
import SidenavStu from "../component/Sidebar/Sidenav";
import Navbar from "../component/Navbar/Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccordionDashstu from "../component/Accordion/AccordionDashstu";
import Footer from "../component/Footer/Footer";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import styles from "../assets/css/Dash.module.css";
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Face6Icon from '@mui/icons-material/Face6';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

export default function Home() {
    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: "flex" }}>
                <SidenavStu />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack spacing={2} direction="row">
                                <Card sx={{ minWidth: 49 + "%", height: 150 }} className={styles.gradient}>
                                    <CardContent>
                                        <div className={styles.iconstylewhite}>
                                            <WavingHandIcon />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                            Hello!
                                        </Typography>
                                        <Typography variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                            It's a website for young people!
                                            Get the information you want on this site!
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 49 + "%", height: 150 }} className={styles.gradient}>
                                    <CardContent>
                                        <div className={styles.iconstylewhite}>
                                            <Face6Icon />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                            Youth
                                        </Typography>
                                        <Typography variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                        Take advantage of the community and the policy collection chatbot!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
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
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 70 + "vh" }}>
                                <CardContent>
                                    <Carousel>
                                        <Paper>
                                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' ,height: '50%'}}>
                                                <a href="https://www.kinfa.or.kr" target="_blank" rel="noopener noreferrer">
                                                    <img src="https://data.polarishare.com/editor/2024/03/b4ad0369641842e884ee2fd89537a811.png" alt="청년도약계좌" style={{ width: 'auto', height: '70vh', objectFit: 'contain' }} />
                                                </a>
                                            </div>
                                        </Paper>
                                        <Paper>
                                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' ,height: '50%'}}>
                                                <a href="https://www.molit.go.kr/2024dreamaccount/main.jsp" target="_blank" rel="noopener noreferrer">
                                                    <img src="https://data.polarishare.com/editor/2024/03/1150bc3420ab468ea9da61e8ee0fb9da.png" alt="청년주택드림청약통장" style={{ width: 'auto', height: '70vh', objectFit: 'contain' }} />
                                                </a>
                                            </div>
                                        </Paper>
                                        <Paper>
                                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' ,height: '50%'}}>
                                                <a href="https://korea-pass.kr/" target="_blank" rel="noopener noreferrer">
                                                    <img src="https://data.polarishare.com/editor/2024/03/12f3a9dc9bc14a439f35de65c7c68108.png" alt="K-PASS" style={{ width: 'auto', height: '70vh', objectFit: 'contain' }} />
                                                </a>
                                            </div>
                                        </Paper>
                                        <Paper>
                                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' ,height: '50%'}}>
                                                <a href="https://www.q-net.or.kr/man001.do?gSite=Q" target="_blank" rel="noopener noreferrer">
                                                    <img src="https://data.polarishare.com/editor/2024/03/44bdf2668d1044e5a72a447e8aa4f084.png" alt="국가시험응시료" style={{ width: 'auto', height: '70vh', objectFit: 'contain' }} />
                                                </a>
                                            </div>
                                        </Paper>
                                        <Paper>
                                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' ,height: '50%'}}>
                                                <a href="https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004661" target="_blank" rel="noopener noreferrer">
                                                    <img src="https://data.polarishare.com/editor/2024/03/2047ee50b92d4c2ebac62c1f0ce907d9.png" alt="청년월세특별지원금" style={{width: 'auto', height: '70vh', objectFit: 'contain'}} />
                                                </a>
                                            </div>
                                        </Paper>
                                    </Carousel>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 69.5 + "vh" }}>
                                <CardContent>
                                    <div className={styles.paddingall}>
                                        <span className={styles.univercitytitle}>How Using?</span>
                                        <br />
                                    </div>
                                    <AccordionDashstu />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Footer />
                </Box>
            </Box>
        </>

    )
}