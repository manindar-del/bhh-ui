/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/order */

import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { primaryColors } from "../../mui-theme/_muiPalette";

import { SelectWrapper } from "@/styles/StyledComponents/SelectWrapper";
import SelectDropDownIcon from "../Icons/SelectDropDownIcon";
import { useState } from "react";

interface CustomSelectProps extends SelectProps {
  defaultText: string;
  isBorder?: boolean;
  customLabel: string;
}

export default function CustomSelect({
  defaultText,
  customLabel,
  ...props
}: CustomSelectProps) {
  const MenuProps = {
    PaperProps: {
      sx: {
        // bgcolor: "pink",
        "& .MuiList-root": {
          maxHeight: "300px",
          overflowY: "auto"
        }
      }
    }
  };
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <SelectWrapper>
      <Typography component="label" className="label_cus">{customLabel}</Typography>
      <FormControl fullWidth>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          label="Age"
          value={age}
          onChange={handleChange}
          IconComponent={(props) => (
            <IconButton {...props}>
              <SelectDropDownIcon IconColor={primaryColors?.black} />
            </IconButton>
          )}
          MenuProps={MenuProps}
        >
          <MenuItem className="menu_item" value="" sx={{ display: "none" }}>
            {defaultText}
          </MenuItem>
          {props?.children}
        </Select>
      </FormControl>
    </SelectWrapper>
  );
}
