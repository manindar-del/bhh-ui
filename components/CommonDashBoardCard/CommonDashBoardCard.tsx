import { cardListDashbrdProps } from '@/interface/commonAll.interfaces'
import { CommonDashBoardCardWrapper } from '@/styles/StyledComponents/CommonDashBoardCardWrapper'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function CommonDashBoardCard({ bgColor, title, subHeadng, IconPath }: cardListDashbrdProps) {
    return (
        <CommonDashBoardCardWrapper>
            <Box className="cardMainWrap">
                <i style={{ background: bgColor }}>{IconPath}</i>
                <Typography variant='body1'>{title}</Typography>
                <Typography variant='h4'>{subHeadng}</Typography>
            </Box>
        </CommonDashBoardCardWrapper>
    )
}
