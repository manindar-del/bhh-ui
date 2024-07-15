/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable mui-path-imports/mui-path-imports */
import { cmnformProps } from '@/interface/commonAll.interfaces'
import { CmnFormWrapper } from '@/styles/StyledComponents/CmnFormWrapper'
import CommonCheckBox from '@/ui/CommonCheckBox/CommonCheckBox'
import InputFieldCommon from '@/ui/CommonInput/CommonInput'
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary'

import CheckedIcon from '@/ui/Icons/CheckedIcon'
import UncheckedIcon from '@/ui/Icons/UncheckedIcon'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useState } from 'react'


export default function WaitForm({ onNextStep }: cmnformProps) {
  const [nextStep, setNextStep] = useState(2)

  const handleNextStep = () => {
    setNextStep(nextStep + 1)
    onNextStep(nextStep + 1)

  }
  return (
    <CmnFormWrapper>
      <Container fixed>
        <Typography variant='h2' className='form_heading'>
          Don&apos;t Want
          <Typography variant='caption'>
            to Wait?
          </Typography>
        </Typography>
        <Typography variant='body1' className='form_main_label'>
          Get a text or phone call when it&apos;s your turn.
        </Typography>
        <Grid container spacing={3}>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="checkbox_group">
              <CommonCheckBox labelText="Phone Call" checkedIcon={<CheckedIcon />} icon={<UncheckedIcon />} />
            </Box>
            <Box>
              <InputFieldCommon
                type="text"
                placeholder="Enter Your Phone Number"

              />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="checkbox_group">
              <CommonCheckBox labelText="Text" checkedIcon={<CheckedIcon />} icon={<UncheckedIcon />} />
            </Box>
            <Box className="textarea_wrap">
              <InputFieldCommon
                multiline

                type="text"
                placeholder="Enter Your Text"

              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className='btn_center'>
              <CustomButtonPrimary variant="contained" color="primary" onClick={handleNextStep}>
                <Typography variant="body1">Submit</Typography>
              </CustomButtonPrimary>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </CmnFormWrapper>
  )
}
