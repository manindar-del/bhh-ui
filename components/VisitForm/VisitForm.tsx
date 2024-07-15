/* eslint-disable mui-path-imports/mui-path-imports */
import { cmnformProps } from '@/interface/commonAll.interfaces'
import { CmnFormWrapper } from '@/styles/StyledComponents/CmnFormWrapper'
import InputFieldCommon from '@/ui/CommonInput/CommonInput'
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary'
import Datepickersection from '@/ui/Datepicker/Datepickersection'
import CustomSelect from '@/ui/Filter/CustomSelect'
import { Box, Container, Grid, MenuItem, Typography } from '@mui/material'
import { useState } from 'react'

export default function VisitForm({ onNextStep }: cmnformProps) {
  const [nextStep, setNextStep] = useState(1)

  const handleNextStep = () => {
    setNextStep(nextStep + 1)
    onNextStep(nextStep + 1)

  }
  return (
    <CmnFormWrapper>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Box>
              <InputFieldCommon
                type="text"
                placeholder="Enter Your Name"
                hasInputLabel
                inputLabel="Name"
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <Datepickersection customLabel='Date Of Birth' />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <InputFieldCommon
                type="text"
                placeholder="Enter Your Subscriber"
                hasInputLabel
                inputLabel="Subscriber"
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <CustomSelect defaultText="Reason for visit" customLabel="Reason for visit">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </CustomSelect>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <CustomSelect defaultText="Reason for visit" customLabel="Speciality">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </CustomSelect>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <CustomSelect defaultText="Reason for visit" customLabel="Special Considerations">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </CustomSelect>
            </Box>
          </Grid>
          <Grid item xs={12} >
            <Box>
              <InputFieldCommon
                type="text"
                placeholder="Enter Your Notes"
                hasInputLabel
                inputLabel="Additional Notes"
                multiline
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className='btn_center'>
              <CustomButtonPrimary variant="contained" color="primary" onClick={handleNextStep}>
                <Typography variant="body1">Next</Typography>
              </CustomButtonPrimary>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </CmnFormWrapper>
  )
}
