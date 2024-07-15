import Seo from "@/components/Seo/Seo";
import useOnlineStatus from "@/hooks/useDetectOnline";
import { DashboardWrapperStyle } from '@/styles/StyledComponents/DashboardWrapperStyle';
import { primaryColors } from "@/themes/_muiPalette";
import { Backdrop, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DasboardHeader from "../DasboardHeader/DasboardHeader";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";

interface wrapperProps {
    children: JSX.Element | JSX.Element[];
}


export default function DashboardWrapper(props: wrapperProps) {
    const { children } = props;

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const router = useRouter();

    const routerText = router.pathname.split("");

    routerText.shift();
    const favText = routerText.join("").toString().toUpperCase();
    const projectName = "Bright Heart";

    useOnlineStatus();
    const [menuOpen, setMenuOpen] = useState(false)
    const handelMenuOpen = () => {
        setMenuOpen(true)
    }
    return (
        <DashboardWrapperStyle>
            <Seo
                title={
                    router.pathname === "/"
                        ? `${projectName}`
                        : `${projectName} || ${favText}`
                }
                canonical=""
                description=""
                url=""
                image=""
            />

            <DashboardSidebar menuActive={menuOpen === true ? "active" : ""} closeProps={setMenuOpen} />


            <DasboardHeader handelOpen={handelMenuOpen} />
            <Box className="body_dashboard">{children}</Box>



            <Backdrop
                sx={{
                    color: `${primaryColors?.white}`,
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </DashboardWrapperStyle>
    )
}
