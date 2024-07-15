import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";


export const CommomTableWrapper = styled(Box)`
    .commmon_table_wrapper{
        padding: 0 15px;
        border-radius: 15px;
        box-shadow: none;
        table{
            th{
                font-weight: 600;
                white-space: nowrap;
                font-size: 15px;
            }
            th,td{
                color: ${primaryColors.mainFontColor};
            }
            td{
                color: ${primaryColors.black};
                font-weight: 600;
                white-space: nowrap;
            }

            .person_details{
                display: flex;
                align-items: center;
                .image{
                    img{
                        border-radius: 6px;
                    }
                }
                p{
                    margin-left: 10px;
                    font-weight: 600;
                    color: ${primaryColors.black};
                    font-size: 14px;
                }
            }

            .MuiChip-root{
                &.matched{
                    background: rgba(240,237,245,.6);
                    .MuiChip-label{
                        color: #a696ca;
                    }
                }
                &.no_match{
                     background: rgba(255,240,239,.6);
                    .MuiChip-label{
                        color: #ffaca5;
                    }
                }
                &.accepted{
                    background: rgba(229,248,245,.6);
                    .MuiChip-label{
                        color: #86ddcf;
                    }
                }
            }
        }
    }
`