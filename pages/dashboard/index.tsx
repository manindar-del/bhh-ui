/* eslint-disable react/no-array-index-key */
import CommonDashBoardCard from '@/components/CommonDashBoardCard/CommonDashBoardCard'
import DashBoardTable from '@/components/DashBoardTable/DashBoardTable'
import DashboardBanner from '@/components/DashboardBanner/DashboardBanner'
import { cardDataList } from '@/json/mock/dashboardListcard.mock'
import DashboardWrapper from '@/layout/DashboardWrapper/DashboardWrapper'
import { Box } from '@mui/system'

export default function index() {
    return (
        <DashboardWrapper>
            <Box>
                <DashboardBanner />
            </Box>

            <Box className="wrapper_mainCard">
                <Box className="all_listCard">
                    {cardDataList.map((item, index) => (
                        <Box className="listWrapper_single" key={index}><CommonDashBoardCard bgColor={item.bgColor} title={item.title} subHeadng={item.subHeadng} IconPath={item.IconPath} /></Box>
                    ))}
                </Box>
            </Box>
            <Box>
                <DashBoardTable />
            </Box>
        </DashboardWrapper>
    )

}
