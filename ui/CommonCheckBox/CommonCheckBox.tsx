import { CustomCheckBoxProps } from '@/interface/commonAll.interfaces';
import { primaryColors } from '@/themes/_muiPalette';
import styled from '@emotion/styled';
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export const CommonCheckBoxWrap = styled(Box)`
    .MuiFormControlLabel-label{
        font-weight: 600;
        color: ${primaryColors.black};
        font-size: 16px;
    }
`

export default function CommonCheckBox({ labelText, ...props }: CustomCheckBoxProps) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <CommonCheckBoxWrap>
            <FormControlLabel control={<Checkbox {...label} {...props} />} label={labelText} />
        </CommonCheckBoxWrap>
    )
}
