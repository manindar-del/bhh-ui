import assest from '@/json/assest';
import { DashboardBannerStyleWrapper } from '@/styles/StyledComponents/DashboardBannerStyleWrapper';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';
import Image from 'next/image';


const DashboardBanner = () => {
    return (
        <DashboardBannerStyleWrapper>
            <Box className="DashboardBanner_left">
                <Typography variant='h1'>Good Morning, <Typography variant='caption'>Dr</Typography> </Typography>
                <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>
            </Box>
            <figure className='doctorImg'>
                <Image width={160} height={230} alt='' src={assest.doctorImg_dash} />
            </figure>
        </DashboardBannerStyleWrapper>
    )
}

export default DashboardBanner