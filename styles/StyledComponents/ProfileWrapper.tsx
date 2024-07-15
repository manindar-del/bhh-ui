import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ProfileWrapper = styled(Box)`
background: ${primaryColors.white};
box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
border-radius: 20px;
padding: 40px;
@media(max-width: 599px){
    padding: 20px;
}
.titleProfile{
    padding-bottom: 10px;
    color: ${primaryColors.primary1};
    font-weight: 600;
}
.wrapper_upload{
    position: relative;
    margin-bottom: 30px;
    .wrapper_uploadImg{
        max-width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.01);
        border-radius: 50%;
        height: 250px;
        position: relative;
        @media(max-width: 599px){
            height: 180px;
            max-width: 180px;
        }
        &:hover{
            .editBtn{
                background: ${primaryColors.colord92b2f};
            }
        }
        figure{
            width: 100%;
            height: 100%;
            margin-bottom: 0;
            line-height: 0;
            font-size: 0;
            img{
                width: 100%;
                border-radius: 50%;
                object-fit: cover;
                height: 250px;
                object-position: top;
                @media(max-width: 599px){
                    height: 180px;
                }
            }
        }
        input{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            font-size: 0;
            appearance: none;
            cursor: pointer;
            z-index: 1;
            opacity: 0;
        }
        .editBtn{
            background: ${primaryColors.primary1};
            width: 35px;
            height: 35px;
            min-width: auto;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            position: absolute;
            right: 10px;
            bottom: 20px;
            transition: 0.3s ease-in-out;
            &:hover{
                background: ${primaryColors.black};
            }
        }
    }
}
.btn_holder{
    @media(max-width: 599px){
        flex-wrap: wrap;
    }
        button{
            &:not(:last-child){
                margin-right: 15px;
                @media(max-width: 599px){
                margin-right: 0;
                margin-bottom: 15px;
            }
            }
            @media(max-width: 599px){
                width: 100%;
            }
        }
    }

`