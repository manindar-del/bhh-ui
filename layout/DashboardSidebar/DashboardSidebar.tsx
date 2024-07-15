import { menuSidebarProps } from '@/interface/commonAll.interfaces'
import assest from '@/json/assest'
import { listDataMenu } from '@/json/mock/dashboardMenuList.mock'
import { DashboardSidebarWrapper } from '@/styles/StyledComponents/DashboardSidebarWrapper'
import MenucloseIcons from '@/ui/Icons/MenucloseIcons'
import { Button, List, ListItem } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from "next/router"
export default function DashboardSidebar({ menuActive, closeProps }: menuSidebarProps) {
    const router = useRouter();


    return (
        <DashboardSidebarWrapper className={menuActive === true ? "" : `${menuActive}`
        }>
            <Box className="mobileOverlay" onClick={closeProps} />
            <Box className="wrapper_sidebarMain">
                <Button type="button" className='menuClose_btn' onClick={closeProps}><MenucloseIcons /></Button>
                <Box className="topLogo">
                    <Link href='/'><Image src={assest.logoNew} alt='logo' width={256} height={72} /></Link>
                </Box>
                <Box className="innerWrapper_linkList">
                    <List>
                        {listDataMenu.map((item, index) => (
                            <ListItem disablePadding key={index}>
                                <Link href="/dashboard" className={router.pathname === item.linkPath ? "active" : ""}>{item.iconPath} {item.linkTxt}</Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </DashboardSidebarWrapper >
    )
}
