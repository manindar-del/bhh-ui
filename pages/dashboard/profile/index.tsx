import assest from "@/json/assest";
import DashboardWrapper from "@/layout/DashboardWrapper/DashboardWrapper";
import { ProfileWrapper } from "@/styles/StyledComponents/ProfileWrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import EditPenIcon from "@/ui/Icons/EditPenIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";

export default function index() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editImg, setEditImg] = useState(false)
    const handelChange = () => {
        setEditImg(true)
    }
    return (
        <DashboardWrapper>
            <ProfileWrapper>
                <Typography variant="h2" className="titleProfile">Profile Details</Typography>
                <Box className="wrapper_upload">
                    <Box className="wrapper_uploadImg">
                        {editImg === true ?
                            (
                                <figure><Image src={assest.doctorImg_dash} alt="" width={250} height={250} /></figure>
                            ) : (
                                <figure><Image src={assest.story_img} alt="" width={250} height={250} /></figure>
                            )
                        }

                        <input type="file" onChange={handelChange} />
                        <Button className="editBtn" type="button"><EditPenIcon /></Button>
                    </Box>
                </Box>
                <Box className="profile_image_row" />


                <Box className="form_sec">
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                            <Box>
                                <InputFieldCommon
                                    type="text"
                                    placeholder="Enter Your First Name"
                                    hasInputLabel
                                    inputLabel="First Name"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box>
                                <InputFieldCommon
                                    type="text"
                                    placeholder="Enter Your Last Name"
                                    hasInputLabel
                                    inputLabel="Last Name"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box>
                                <InputFieldCommon
                                    type="email"
                                    placeholder="Enter Your Email"
                                    hasInputLabel
                                    inputLabel="Enter Email"
                                />
                            </Box>
                        </Grid>


                        <Grid item xs={12}>
                            <Stack direction='row' justifyContent='center' className="btn_holder">
                                <CustomButtonPrimary variant="contained" color="primary" >
                                    <Typography variant="body1">Save Changes</Typography>
                                </CustomButtonPrimary>
                                <CustomButtonPrimary variant="outlined" color="info" >
                                    <Typography variant="body1">Discard</Typography>
                                </CustomButtonPrimary>
                            </Stack>


                        </Grid>
                    </Grid>
                </Box>
            </ProfileWrapper>
        </DashboardWrapper>
    )
}
