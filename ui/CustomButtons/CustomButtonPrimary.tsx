import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButtonWrapper = styled(Button)`
  display: flex;
  padding: 16px 44px;
  border-radius: 8px;
  min-width: 194px;
  justify-content: center;
  align-items: center;
  @media(max-width: 599px){
    padding: 12px 30px;
    min-width: 150px;
  }
  &.Mui-disabled {
    background-color: ${primaryColors?.disabledBg};
    border: 1px solid ${primaryColors?.disabledBg};

    p {
      color: ${primaryColors?.white};
    }
    img {
      filter: contrast(0);
    }
  }
  &.smallButton {
    padding: 4px 16px;
    width: auto;
  }

  &.MuiButton-outlinedInfo {
    p {
      color: ${primaryColors?.primary1};
    }
    &:hover{
      p{
        color: ${primaryColors?.white};
      }
    }
  }
  p {
    font-size: 16px;
    font-weight: 600;
    color: ${primaryColors?.white};
  }
  span {
    div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
  /* img {
    width: 24px;
  } */
`;

interface CustomButtonprops extends ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  buttonType?: "small" | "large";
}

const CustomButtonPrimary = ({
  children,
  className,
  buttonType,
  ...others
}: CustomButtonprops) => {
  return (
    <CustomButtonWrapper
      className={`${buttonType === "small" && "smallButton"} ${className || ""
        }`}
      {...others}
    >
      {children}
    </CustomButtonWrapper>
  );
};

export default CustomButtonPrimary;
