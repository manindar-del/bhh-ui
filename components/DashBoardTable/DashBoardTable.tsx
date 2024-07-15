/* eslint-disable no-nested-ternary */
import assest from "@/json/assest";
import DotsIcon from "@/ui/Icons/DotsIcon";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import CommonTable from '../CommonTable/CommonTable';

export const DashBoardTableStyle = styled(Box)`
    padding: 30px 0;
`

function createData(

    personImage: JSX.Element,
    name: string,
    CC: string,
    phone: string,
    email: string,
    timeEntered: string,
    timeSeen: string,
    waitTime: string,
    providerStatus: string

) {
    return { name, personImage, CC, phone, email, timeEntered, timeSeen, waitTime, providerStatus };
}

const rows = [
    createData(
        <Image
            src={assest.tablePerson1}
            alt=""
            width={68}
            height={68}
        />
        ,
        'Joe Smith',
        'OUD',
        '707-654-3231',
        'jsmith@gmail.com',
        '8:56 AM',
        '8.57 AM',
        '01',
        'Matched'
    ),
    createData(
        <Image
            src={assest.tablePerson1}
            alt=""
            width={68}
            height={68}
        />
        ,
        'Jack Johnson',
        'Depression, Alcohol',
        '560-615-9931',
        'jjohn@gmail.com',
        '9:05 Am',
        '9:08 Am',
        '03',
        'No Match'
    ),
    createData(
        <Image
            src={assest.tablePerson1}
            alt=""
            width={68}
            height={68}
        />
        ,
        'Sally Main',
        'Anxiety, SUD',
        '530-454-6631',
        'smain@gmail.com',
        '9:07 Am',
        '9:08 Am',
        '01',
        'No Match'
    ),
    createData(
        <Image
            src={assest.tablePerson1}
            alt=""
            width={68}
            height={68}
        />
        ,
        'Jessy Maverick',
        'SUD',
        '707-314-8931',
        'meso@yahoo.com',
        '9:09 Am',
        '9:09 Am',
        '00',
        'Accepted'
    ),

];

export const tableHeads = [
    {
        text: "Name",
    },
    {
        text: 'CC',
    },
    {
        text: 'Phone',
    },
    {
        text: 'Email',
    },
    {
        text: 'Time Entered',
    },
    {
        text: 'Time Seen in VC',
    },
    {
        text: 'Wait Time',
    },
    {
        text: 'Provider Requested',
    },
    {
        text: 'Action'
    }
]

export default function DashBoardTable() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <DashBoardTableStyle>
            <CommonTable tableHeadRow={tableHeads}>
                {rows.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell >
                            <Box className="person_details">
                                <Box className="image">
                                    {row.personImage}
                                </Box>
                                <Typography variant="body1">
                                    {row.name}
                                </Typography>
                            </Box>
                        </TableCell>
                        <TableCell >{row.CC}</TableCell>
                        <TableCell >{row.phone}</TableCell>
                        <TableCell >{row.email}</TableCell>
                        <TableCell >{row.timeEntered}</TableCell>
                        <TableCell >{row.timeSeen}</TableCell>
                        <TableCell >{row.waitTime}</TableCell>
                        <TableCell >
                            <Chip className={
                                row.providerStatus === 'Matched' ? 'matched' :
                                    row.providerStatus === 'No Match' ? 'no_match' :
                                        row.providerStatus === 'Accepted' ? 'accepted' : ''
                            } label={row.providerStatus} />
                        </TableCell>
                        <TableCell>
                            <Box className="action">
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <DotsIcon />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}

                                >
                                    <MenuItem onClick={handleClose}>
                                        Request Match
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Remove From Queue
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Invite
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </TableCell>
                    </TableRow>
                ))}
            </CommonTable>
        </DashBoardTableStyle>

    )
}
