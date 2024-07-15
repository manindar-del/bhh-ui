import CommonCheckBox from '@/ui/CommonCheckBox/CommonCheckBox';
import Datepickersection from '@/ui/Datepicker/Datepickersection';
import CheckedIcon from '@/ui/Icons/CheckedIcon';
import UncheckedIcon from '@/ui/Icons/UncheckedIcon';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Dymmy() {
    return (
        <Box>
            <Container fixed>
                <Box>
                    <CommonCheckBox labelText="Remember Me" checkedIcon={<CheckedIcon />} icon={<UncheckedIcon />} />
                </Box>
                <Box>
                    <Datepickersection />
                </Box>
            </Container>
        </Box>
    )
}
