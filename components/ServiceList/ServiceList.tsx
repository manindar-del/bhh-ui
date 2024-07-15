import { serviceTextProps } from "@/interface/commonAll.interfaces";

import { ServiceListData } from "@/json/mock/serviceListData.mock";
import { ServiceListStyledWrapper } from "@/styles/StyledComponents/ServiceListStyledWrapper";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import CmnHeader from "../CmnHeader/CmnHeader";




const ServiceList = ({ title, titleStrong, subText }: serviceTextProps) => {
    return (
        <ServiceListStyledWrapper>
            <Container fixed>
                <CmnHeader>
                    <Typography variant="h2">
                        {title}<Typography variant="caption"> {titleStrong}</Typography>
                    </Typography>
                    <Typography variant="body1">
                        {subText}
                    </Typography>
                </CmnHeader>
                <Box className="serviceList">
                    <Box className="serviceList_row">
                        {
                            ServiceListData.map((item, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <Box key={index} className="serviceList_col">
                                    <figure>
                                        {item.icon}
                                    </figure>
                                    <Typography variant="h3">{item.title}</Typography>
                                </Box>

                            ))
                        }
                    </Box>
                </Box>

            </Container>
        </ServiceListStyledWrapper>
    )
}

export default ServiceList