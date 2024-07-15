import { menuOpenProps } from '@/interface/commonAll.interfaces'
import assest from '@/json/assest'
import { DasboardHeaderWrapper } from '@/styles/StyledComponents/DasboardHeaderWrapper'
import InputFieldCommon from '@/ui/CommonInput/CommonInput'
import DashboardMenuIcon from '@/ui/Icons/DashboardMenuIcon'
import LogoutIcons from '@/ui/Icons/LogoutIcons'
import MenucloseIcons from '@/ui/Icons/MenucloseIcons'
import NotificationIcon from '@/ui/Icons/NotificationIcon'
import SearchIconDashboard from '@/ui/Icons/SearchIconDashboard'
import UserDashbrdIcns from '@/ui/Icons/UserDashbrdIcns'
import { Button, Typography } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box } from '@mui/system'
import Image from 'next/image'
import React, { useState } from 'react'

export default function DasboardHeader({ handelOpen }: menuOpenProps) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [searchOpen, setSearchOpen] = useState(false)
  const handelSearchOpen = () => {
    setSearchOpen(!searchOpen)
  }

  return (
    <DasboardHeaderWrapper>
      <Box className="wrapper_headerWrap">
        <Box className="wrapper_allHeader">
          <Box className="menuOpenBtn">
            <Button type='button' onClick={handelOpen}><DashboardMenuIcon /></Button>
          </Box>
          <Box className="wrapper_left">
            <Typography variant='body1'>Hello,</Typography>
            <Typography variant='body1' className='titleName'>Smith Deringer</Typography>
          </Box>
          <Box className="wrapper_allItems">
            <Box className="searchMobile_open">
              <Button type='button' onClick={handelSearchOpen}><SearchIconDashboard /></Button>
            </Box>
            <Box className={searchOpen === true ? "active wrapper_search" : "wrapper_search"}>
              <InputFieldCommon type='text' placeholder='Search here' />
              <i><SearchIconDashboard /></i>
              <Button type='button' className='cloneSearch_btn' onClick={handelSearchOpen}><MenucloseIcons /></Button>
            </Box>
            <Button type="button" className='notificationBtn'><NotificationIcon /></Button>
            <Box className="profileDrop_down">
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Image src={assest.story_img} alt='' width={35} height={35} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',

                }}
                className="menuList_profile"
              >
                <MenuItem onClick={handleClose}><i><UserDashbrdIcns /></i>Profile</MenuItem>
                <MenuItem onClick={handleClose}><i><LogoutIcons /></i>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
    </DasboardHeaderWrapper >
  )
}
