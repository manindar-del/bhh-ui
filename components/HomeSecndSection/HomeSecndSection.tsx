import { homeBoutTxtProps } from "@/interface/commonAll.interfaces";
import assest from "@/json/assest";
import { listData } from "@/json/mock/homeabout.mock";
import { HomeSecndSectionWrapper } from "@/styles/StyledComponents/HomeSecndSectionWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import VideoPlayIcon from "@/ui/Icons/VideoPlayIcon";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import CmnHeader from "../CmnHeader/CmnHeader";

export default function HomeSecndSection({ title, titleStrong }: homeBoutTxtProps) {
  return (
    <HomeSecndSectionWrapper>
      <Box className="mainWrap_homeabt">
        <Container fixed>
          <Grid container spacing={{ lg: 3, xs: 2 }}>
            <Grid item lg={5} xs={12}>
              <Box className="textWrapper_mainInfo">
                <CmnHeader>
                  <Typography variant="h2">
                    {title}
                    <Typography variant="caption"> {titleStrong}</Typography>
                  </Typography>
                </CmnHeader>
                <List>
                  {listData.map((items, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ListItem disablePadding key={index}>
                      <Typography variant="body1">
                        {items.listTxt}
                      </Typography>
                    </ListItem>
                  ))}

                </List>
                <CustomButtonPrimary variant="contained" color="primary">
                  <Typography variant="body1">Learn More</Typography>
                </CustomButtonPrimary>
              </Box>
            </Grid>
            <Grid item lg={7} xs={12}>
              <Box className="imgWrap">
                <figure>
                  <Image
                    src={assest.homeMainImg}
                    alt=""
                    width={590}
                    height={292}
                  />
                </figure>
                <Button type="button" className="playBtn">
                  <VideoPlayIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </HomeSecndSectionWrapper>
  );
}
