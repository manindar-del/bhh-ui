/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable mui-path-imports/mui-path-imports */
import { cmnformProps } from '@/interface/commonAll.interfaces'
import { CmnFormWrapper } from '@/styles/StyledComponents/CmnFormWrapper'
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary'

import CustomSelect from '@/ui/Filter/CustomSelect'
import { Box, Container, Grid, MenuItem, Typography } from '@mui/material'
import { useState } from 'react'




export default function CareForm({ onNextStep }: cmnformProps) {

  const [nextStep, setNextStep] = useState(0)

  const handleNextStep = () => {
    setNextStep(nextStep + 1)
    onNextStep(nextStep + 1)

  }

  return (
    <CmnFormWrapper>
      <Container fixed>
        <Grid container spacing={{ lg: 3, xs: 2 }}>

          <Grid item xs={12}>
            <Box>
              <CustomSelect defaultText="Select Item" customLabel="Select type of case">
                <MenuItem value={10}>Telehealth</MenuItem>
                <MenuItem value={20}>In-Person</MenuItem>

              </CustomSelect>
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
