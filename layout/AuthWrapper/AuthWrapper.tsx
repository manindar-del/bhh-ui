import { authProps } from '@/interface/commonAll.interfaces';
import assest from '@/json/assest';
import { AuthWrapperStyle } from '@/styles/StyledComponents/AuthWrapperStyle';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from 'next/image';
import Link from 'next/link';

export default function AuthWrapper({ children, headingText, hasSubText, headerRight, isHeaderRight, subText }: authProps) {
    return (
        <AuthWrapperStyle className="auth_main">
            <Box className="auth_left">

                <Box className="auth_left_inner">
                    <Box className="auth_header">
                        <Link href="/" className="logo">
                            <Image
                                src={assest.logoNew}
                                width={384}
                                height={109}
                                alt="Logo"
                            />
                        </Link>
                        {isHeaderRight && <Box className="header_right">{headerRight}</Box>}
                    </Box>
                    <Box className="auth_sec">
                        <Box className="auth_content">
                            <Box className="heading">
                                <Typography variant="h1" className="main_head">
                                    {headingText}
                                </Typography>
                                {hasSubText && (
                                    <Typography variant="body1">{subText}</Typography>
                                )}
                            </Box>

                            {children}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="auth_right">
                <Image
                    src={assest.doctorImg}
                    alt="auth_main"
                    width={810}
                    height={1215}
                />
            </Box>
        </AuthWrapperStyle>
    )
}
