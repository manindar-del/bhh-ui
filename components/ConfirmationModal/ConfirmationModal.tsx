import assest from '@/json/assest';
import { ConfirmationModalWrap } from '@/styles/StyledComponents/ConfirmationModalWrap';
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary';
import MuiModalWrapper from '@/ui/Modal/MuiModalWrapper';
import { Button, List, ListItem, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Image from 'next/image';
import React from 'react';

export default function ConfirmationModal() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <>
      <ConfirmationModalWrap>
        <Box className="wrapper_btnModalWrap">
          <Container fixed>
            <List>
              <ListItem disablePadding>
                <Button type='button' onClick={handleClickOpen}>Request To Provider</Button>
              </ListItem>
              <ListItem disablePadding>
                <Button type='button' onClick={handleClickOpen2}>Request To Staff</Button>
              </ListItem>
              <ListItem disablePadding>
                <Button type='button' onClick={handleClickOpen3}>Waiting For Confirmation</Button>
              </ListItem>
            </List>
          </Container>
        </Box>
      </ConfirmationModalWrap>
      <MuiModalWrapper open={open}
        onClose={handleClose} className="comnModal_wrap" title={''}>
        <Box className="commn_modalWrap">
          <Typography variant='body1' className='modalTitle'>Provider Information</Typography>
          <figure><Image src={assest.doctorImg} alt='' width={300} height={200} /></figure>
          <List>
            <ListItem disablePadding><Typography variant='body1'>Name: </Typography> <Typography variant='caption'>Dr. John Doe</Typography></ListItem>
            <ListItem disablePadding><Typography variant='body1'>Specialist: </Typography> <Typography variant='caption'>Heart</Typography></ListItem>
            <ListItem disablePadding><Typography variant='body1'>Working: </Typography> <Typography variant='caption'>St. John Hospital California</Typography></ListItem>
          </List>
          <Box className="btnWrap">
            <CustomButtonPrimary variant='contained' color='primary'>
              <Typography variant='body1'>Accept</Typography>
            </CustomButtonPrimary>
            <CustomButtonPrimary variant='outlined' color='info'>
              <Typography variant='body1'>Reject</Typography>
            </CustomButtonPrimary>
          </Box>
        </Box>
      </MuiModalWrapper>
      <MuiModalWrapper open={open2}
        onClose={handleClose2} className="comnModal_wrap" title={''}>
        <Box className="commn_modalWrap">
          <Typography variant='body1' className='modalTitle'>Staff Information</Typography>
          <figure><Image src={assest.staffImg1} alt='' width={300} height={200} /></figure>
          <List>
            <ListItem disablePadding><Typography variant='body1'>Name: </Typography> <Typography variant='caption'>Mr. Tom Miller</Typography></ListItem>
            <ListItem disablePadding><Typography variant='body1'>Working: </Typography> <Typography variant='caption'>St. John Hospital California</Typography></ListItem>
          </List>
          <Box className="btnWrap">
            <CustomButtonPrimary variant='contained' color='primary'>
              <Typography variant='body1'>Accept</Typography>
            </CustomButtonPrimary>
            <CustomButtonPrimary variant='outlined' color='info'>
              <Typography variant='body1'>Reject</Typography>
            </CustomButtonPrimary>
          </Box>
        </Box>
      </MuiModalWrapper>
      <MuiModalWrapper open={open3}
        onClose={handleClose3} className="comnModal_wrap" title={''}>
        <Box className="commn_modalWrap">
          <Typography variant='body1' className='modalTitle'>Your Estimated Wait time</Typography>
          <Box className="clockImg_img"><Image src={assest.clockMain} alt='' width={200} height={200} /></Box>
          <Typography variant='body1' className='confirmText'>Please wait few minutes for your confirmation</Typography>
        </Box>
      </MuiModalWrapper>
    </>
  )
}
