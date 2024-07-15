import AuthWrapper from '@/layout/AuthWrapper/AuthWrapper'
import InputFieldCommon from '@/ui/CommonInput/CommonInput'
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary'
import BackIcon from '@/ui/Icons/BackIcon'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from 'next/link'

export default function Index() {
    return (
        <AuthWrapper headingText="Forgot Password"
            hasSubText
            subText="Please enter your email to reset your password.">
            <Box className="auth_sec_main">

                <Box className="form_group">
                    <InputFieldCommon
                        type="text"
                        placeholder="Enter Your Email"
                        hasInputLabel
                        inputLabel="Email"
                    />
                </Box>



                <Box className="form_group btn_group">
                    <CustomButtonPrimary
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        <Typography variant="body1">Submit</Typography>
                    </CustomButtonPrimary>
                </Box>

                <Box className="back_div">
                    <Link href='/auth/login'>
                        <BackIcon IconWidth='15' IconHeight='15' IconColor='#7c7c7c' />
                        Back to Login
                    </Link>
                </Box>

            </Box>
        </AuthWrapper>
    )
}
