import { homeBannerProps } from "@/interface/commonAll.interfaces";
import { HomeBannerWrapper } from "@/styles/StyledComponents/HomeBannerWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Image from "next/image";

export default function HomeBanner({ title, subTitle, bannerImg, btnText }: homeBannerProps) {
  return (
    <HomeBannerWrapper>
      <Box className="wrapper_homeBanner">
        <Box className="wrapper_imgBanner">
          <figure>
            <Image src={bannerImg} alt="" width={1920} height={400} />
          </figure>
        </Box>
        <Container>
          <Box className="wrapper_textList">
            <Box className="textWrapper">
              <Typography variant="h1" className="titleBanner">
                {title}
              </Typography>
              <Typography variant="body1">
                {subTitle}
              </Typography>
              <CustomButtonPrimary variant="contained" color="primary">
                <Typography variant="body1">{btnText}</Typography>
              </CustomButtonPrimary>
            </Box>
            {/* <Box className="textWrapBox_right">
              <Box className="wrapper_BoxTw">
                <Box className="single_listBox">
                  <Box className="homeCardBox">
                    <Typography variant="body1">Your place in line</Typography>
                    <Typography variant="body1" className="numberTxt">
                      05
                    </Typography>
                  </Box>
                </Box>
                <Box className="single_listBox">
                  <Box className="homeCardBox">
                    <Typography variant="body1">Estimated wait time</Typography>
                    <Typography variant="body1" className="numberTxt">
                      07 min
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box> */}
          </Box>
        </Container>
      </Box>
    </HomeBannerWrapper>
  );
}
