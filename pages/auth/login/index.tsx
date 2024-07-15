import AuthWrapper from "@/layout/AuthWrapper/AuthWrapper";
import CommonCheckBox from "@/ui/CommonCheckBox/CommonCheckBox";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import CheckedIcon from "@/ui/Icons/CheckedIcon";
import UncheckedIcon from "@/ui/Icons/UncheckedIcon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Index() {
    return (
        <AuthWrapper headingText="Log In" hasSubText subText="Log in to your account">
            <Box className="auth_sec_main">

                <Box className="form_group">
                    <InputFieldCommon
                        type="text"
                        placeholder="Enter Your Email"
                        hasInputLabel
                        inputLabel="Email"
                    />
                </Box>

                <Box className="form_group">
                    <InputFieldCommon
                        type="password"
                        hasInputLabel
                        inputLabel="Desired Password"
                        isPassword

                    />
                </Box>
                <Box className="remember_group form_group">
                    <Box className="left">
                        <CommonCheckBox labelText="Remember Me" checkedIcon={<CheckedIcon />} icon={<UncheckedIcon />} />
                    </Box>
                    <Link href="/auth/forgot-password/" className="forgot_password">
                        Forgot Password?
                    </Link>
                </Box>

                <Box className="form_group btn_group">
                    <CustomButtonPrimary
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        <Typography variant="body1">Login</Typography>
                    </CustomButtonPrimary>
                </Box>

            </Box>
        </AuthWrapper>
    )
}
