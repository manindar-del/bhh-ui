/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import { primaryColors } from "@/themes/_muiPalette";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// eslint-disable-next-line import/order
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/system";

import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import React, { forwardRef } from "react";

const CommonInputWrap = styled(Box)`
  .input_label {
    color: ${primaryColors.mainFontColor};
    margin: 0 0 8px;
    font-weight: 600;
    display: block;
  }
`;

const InputWrap = styled(TextField as any)`
  .MuiInputBase-adornedEnd {
    height: auto;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: var(--white);
    border-radius: 6px;
    padding: 6.5px 16px;
    border: 1px solid ${primaryColors?.disabledBg};
    background: ${primaryColors?.white};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
    min-width: 300px;
    @media (max-width: 600px) {
      padding: 5px 10px;
      min-width: 100%;
    }

    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="password"],
    input[type="search"],
    input[type="number"],
    input[type="tel"],
    input[type="range"],
    input[type="date"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="color"],
    textarea {
      color: ${primaryColors?.textPrimaryColor};
      border: 0;
      padding-left: 0;
      padding: 5px 0 ;
      &::placeholder {
        color: ${primaryColors?.mainFontColor};
        opacity: 1;
      }
      &:focus {
        border: 0;
        background: transparent;
      }
    }
    textarea {
      height: 125px !important;
   
    
    }
    &.Mui-error {
      input[type="text"],
      input[type="email"],
      input[type="url"],
      input[type="password"],
      input[type="search"],
      input[type="number"],
      input[type="tel"],
      input[type="range"],
      input[type="date"],
      input[type="month"],
      input[type="week"],
      input[type="time"],
      input[type="datetime"],
      input[type="datetime-local"],
      input[type="color"],
      textarea {
        border-color: ${primaryColors?.errorMain};
      }
    }
    .MuiOutlinedInput-notchedOutline {
      display: none;
      /* border-color: var(--primaryD3D7DF); */
    }
    #outlined-adornment-password {
      border: 0;
      padding: 0;
      height: 39px;
      font-size: 16px;
      &::placeholder {
        color: ${primaryColors?.mainFontColor};
        opacity: 1;
      }
    }
    button {
      background-color: transparent;
      color: var(--textPrimaryColor);
      padding: 0;
      &:focus {
        background-color: transparent;
        color: var(--textPrimaryColor);
      }
      &:hover {
        background-color: transparent;
        color: var(--textPrimaryColor);
      }
      img {
        position: static !important;
        transform: inherit !important;
        top: 0;
        left: 0;
        width: 20px;
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;

type InputFieldCommonProps = StandardTextFieldProps & {
  isPassword?: boolean;
  adorMentIcon?: JSX.Element;
  hasInputLabel?: boolean;
  inputLabel?: string;
};

const InputFieldCommon = forwardRef<HTMLInputElement, InputFieldCommonProps>(
  (
    { isPassword = false, adorMentIcon, hasInputLabel, inputLabel, ...others },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <CommonInputWrap>
        {hasInputLabel && (
          <FormLabel className="input_label">{inputLabel}</FormLabel>
        )}
        <InputWrap
          fullWidth
          variant="outlined"
          {...others}
          type={
            isPassword ? (showPassword ? "text" : "password") : others?.type
          }
          InputProps={{
            inputRef: ref,
            endAdornment: isPassword ? (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  disableRipple
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ) : (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  disableRipple
                >
                  {/* <SearchRoundedIcon/> */}
                  {adorMentIcon}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </CommonInputWrap>
    );
  }
);

export default InputFieldCommon;
