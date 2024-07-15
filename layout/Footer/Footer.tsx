import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Link from "next/link";

const FooterWrap = styled(Box)`
  padding: 30px 0;
  background: ${primaryColors.footerBg};
  p{
    text-align: center;
    color: ${primaryColors.white};
    
    a{
      display: inline-block;
      margin-right: 10px;
      color: ${primaryColors.white};
      font-size: 16px;
      @media (max-width: 360px) {
        font-size: 15px;
        margin-right: 7px;
      }
    }
    span{
      position: relative;
      padding: 0 10px 0 15px;
      color: ${primaryColors.white};
      font-size: 16px;
      &:last-child{
        margin-right: 0;
      }
      @media (max-width: 360px) {
        font-size: 15px;
        padding: 0 7px 0 12px;
      }
      &::before{
        position: absolute;
        content: "";
        background: ${primaryColors.white};
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border-radius: 100%;

      }
    }
  }

`;

// const navItems = [
//   {
//     name: "home",
//     route: "/",
//   },
//   {
//     name: "About",
//     route: "/about",
//   },
//   {
//     name: "Products",
//     route: "/products",
//   },
//   {
//     name: "Package",
//     route: "/package",
//   },
//   {
//     name: "Contact",
//     route: "/contact",
//   },
// ];



const Footer = () => {
  // const navItems = [
  //   {
  //     name: "home",
  //     route: "/",
  //   },
  //   {
  //     name: "About",
  //     route: "/about",
  //   },
  //   {
  //     name: "Products",
  //     route: "/products",
  //   },
  //   {
  //     name: "Package",
  //     route: "/package",
  //   },
  //   {
  //     name: "Contact",
  //     route: "/contact",
  //   },
  // ];
  // const router = useRouter();
  return (

    <FooterWrap>
      <Container fixed>
        <Typography variant="body1">
          &copy; <Link href='#url'>BHH</Link>
          <Typography variant="caption">2024</Typography>
          <Typography variant="caption">All Rights Reserved</Typography>
        </Typography>
      </Container>
    </FooterWrap>

  );
};

export default Footer;
