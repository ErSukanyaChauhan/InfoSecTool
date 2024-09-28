import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Grid, TextField } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Navbar from '../Navbar/Navbar';
import "../ip/ipdetail.css";
import { FaSearch } from "react-icons/fa";
import { styled } from '@mui/material/styles';

// const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

// ];

const API_KEY = 'Anj637BlDTyMhOXjonqruz';
const processAPI = 'https://process.filestackapi.com';

const Ipdetail = ({ theme, setTheme }) => {
    const [ipAddress, setIPAddress] = useState('');
    const [ipAddressDetail, setIPAddressDetail] = useState();

    const agentRef = useRef(null);
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    const paperStyle = { padding: 20, height: '30vh', width: 443, margin: "150px auto" }

    async function getIpAddressDetail() {
        let API_KEY = 'at_ee0DbtYNoQyRDUn0Fipqwfau5tWzE';
        const response = await fetch(
            `https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=${API_KEY}&ipAddress=${ipAddress}`,
            {
                method: 'GET',

            }
        );
        const result = await response.json();
        setIPAddressDetail(result);
        console.log(result);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
         const url = `${processAPI}/${API_KEY}/urlscreenshot=delay:2200,mode:window,height:250/https://www.virustotal.com/gui/ip-address/${ipAddress}`;
        //const url2 = `${processAPI}/${API_KEY}/urlscreenshot=delay:2800,mode:window,height:250/https://www.abuseipdb.com/check/${ipAddress}`;
       setIPAddress(url);
        //setIPAddress(url2);
        getIpAddressDetail();
    };

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
            <Navbar />
            <div className='Search'>
                <div className='search-bar-container'>
                    <form onSubmit={handleSubmit} >
                        <div className='input-wrapper'>
                            <input placeholder='Enter IP' value={ipAddress} onChange={(e) => setIPAddress(e.target.value)} />
                            <Button className="Searchbutton" type="submit" ><FaSearch id="search-icon" /></Button>
                        </div>
                    </form>
                </div>
            </div >


            {/* For getting pdf */}
            {/* <div>
            <Button variant="contained" color="success" onClick={generatePDF}>PDF</Button>
        </div>
        <div ref={componentPDF} style={{ width: "100%" }}> */}

            <div className='headings'>
                <div className='subheading'>
                    <h2>IP Detail</h2>
                </div>
                <div className='subheading'>
                    <h2>Threat Feeds</h2>
                </div>
                <div className='subheading'>
                    <h2> </h2>
                </div>
            </div >

            <div className='containerIp'>
                <div style={{ width: "fit-content", marginLeft: "5%", marginTop: "27px" }}>
                    <TableContainer >
                        <Table sx={{ minWidth: "349px", border: "1px solid #ddd" }} >
                            <TableBody>
                                {ipAddressDetail &&
                                    <>
                                        <StyledTableRow >
                                            <TableCell align='center' className='tdline' component="td" scope="row">
                                                IP
                                            </TableCell>
                                            <TableCell align='center' className='tdline' component="td" scope="row">
                                                {ipAddressDetail?.ip}
                                            </TableCell>
                                        </StyledTableRow >
{/* 
                                        <StyledTableRow >
                                            <TableCell align='center' className='tdline' component="td" scope="row">
                                                Status
                                            </TableCell>
                                            <TableCell align='center' className='tdline' component="td" scope="row">
                                                {ipAddressDetail?.status}
                                            </TableCell>
                                        </StyledTableRow > */}
                                        <StyledTableRow >
                                            <TableCell align='center' className='tdline' component="td" scope="row">
                                                Country
                                            </TableCell>
                                            <TableCell align='center' className='tdline' component="td" scope="row">
                                                {ipAddressDetail?.location.country}
                                            </TableCell>
                                        </StyledTableRow >
                                        {/* <StyledTableRow>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                Country Code
                                            </TableCell>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                {ipAddressDetail.countryCode}
                                            </TableCell>
                                        </StyledTableRow> */}
                                        <StyledTableRow>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                Region
                                            </TableCell>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                {ipAddressDetail.location.region}
                                            </TableCell>
                                        </StyledTableRow>
                                        {/* <StyledTableRow>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                Region Name
                                            </TableCell>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                {ipAddressDetail.regionName}
                                            </TableCell>
                                        </StyledTableRow> */}
                                        <StyledTableRow>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                City
                                            </TableCell>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                {ipAddressDetail?.location.city}
                                            </TableCell>
                                        </StyledTableRow>
                                        {/* <StyledTableRow>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                Zip
                                            </TableCell>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                {ipAddressDetail.zip}
                                            </TableCell>
                                        </StyledTableRow> */}
                                        <StyledTableRow>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                Timezone
                                            </TableCell>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                {ipAddressDetail.location.timezone}
                                            </TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                ISP
                                            </TableCell>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                {ipAddressDetail.isp}
                                            </TableCell>
                                        </StyledTableRow>
                                        {/* <StyledTableRow>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                Org
                                            </TableCell>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                {ipAddressDetail?.org}
                                            </TableCell>
                                        </StyledTableRow> */}
                                        {/* <StyledTableRow>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                Proxy
                                            </TableCell>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                {ipAddressDetail?.proxy ? "true" : "false"}
                                            </TableCell>
                                        </StyledTableRow> */}
                                        {/* <StyledTableRow>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                Reverse
                                            </TableCell>
                                            <TableCell align='center' style={{ border: "1px solid #ddd" }} component="td" scope="row">
                                                {ipAddressDetail.reverse &&
                                                    ipAddressDetail.reverse  
                                                }
                                                Not Found
                                            </TableCell>
                                        </StyledTableRow> */}
                                    </>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div >
                {/* Screenshot of reputation */}
                <div className="screenshotcontainer" style={{ width: "fit-content", marginLeft: "5%", marginTop: "27px" }}>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="thumbnail">
                                {ipAddress &&
                                    <img className="img-responsive" src={ipAddress} style={{
                                        width: "691px",
                                        height: "200px"
                                    }}
                                    />
                                }

                            </div>
                        </div>
                    </div>

                </div>


            </div>

            {/* </div> */}


        </>
    );
};



export default Ipdetail;
