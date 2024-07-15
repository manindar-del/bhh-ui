/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";

const DatepickerWrapper = styled(Box)`
  min-width: 220px;
  width: 100%;

  .cus_label{
     color: ${primaryColors.mainFontColor};
    margin: 0 0 15px;
    font-weight: 600;
    display: block;
  }

  .datepickerSectionWrap {
    position: relative;

    border-radius: 8px;

    fieldset {
      border-color: ${primaryColors.border_primary};
    }
    .MuiFormControl-root {
      width: 100%;
      .MuiFormLabel-root {
        color: ${primaryColors.textPrimaryColor};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        top: -3px;
        &.MuiFormLabel-filled {
          display: none;
        }
      }

      .MuiOutlinedInput-notchedOutline{
        display: none;
      }
      .MuiInputBase-root {
        border: 1px solid #DBE0E8;
        color: ${primaryColors.textPrimaryColor};
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        min-height: 48px;
        border-radius: 6px;
        input {
          border: none;

          padding: 10px 12.5px !important;
          padding-right: 0;
          
        }

        .MuiButtonBase-root {
          position: absolute;
          right: 15px;
          padding: 15px;
          width: auto;
          z-index: 100;
          background: url(${assest.datePickerIcon}) no-repeat 0 0;
          background-size: 100%;
          .MuiSvgIcon-root {
            display: none;
          }
        }
      }
    }

    .MuiIconButton-root {
      &:hover {
        background: none;
      }
    }
  }

  .abs_textField {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${primaryColors.white};
    z-index: 99;

    &.MuiFormControl-root {
      .MuiInputBase-root {
        input {
          background: url(/static/media/calendar.76ae0bfa8a0f53edac2f8208d3eb2680.svg)
            center right 14px no-repeat;
        }
      }
    }
  }
`;
interface DatePickerProps {
  label?: string;
  className?: string;
  typeTwo?: boolean;
  typeThree?: boolean;
  customLabel?: string;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

type DateTimeType = {
  hour: number;
  minute: number;
};

const TimeFormatReturn = ({ hour, minute }: DateTimeType) => {
  return ` ${hour > 12
    ? hour - 12 > 9
      ? hour - 12
      : `0${hour - 12}`
    : hour > 9
      ? hour
      : `0${hour}`
    } : ${minute > 9 ? minute : `0${minute}`} ${hour >= 12 ? `PM` : `AM`}
   `;
};

function Datepickersection({
  label,
  className,
  typeTwo,
  typeThree,
  customLabel
}: DatePickerProps) {
  const [value, setValue] = React.useState<Dayjs | null | any>(dayjs());
  const [SelectedDate, setSelectedDate] = useState(
    `${months[dayjs().month()]}, ${dayjs().year()}`
  );

  const [SelectedDateTime, setSelectedDateTime] = useState(
    `${daysOfWeek[dayjs().day()]} ${dayjs().date()} ${months[dayjs().month()]
    } ${dayjs().year()} , ${TimeFormatReturn({
      hour: dayjs().hour(),
      minute: dayjs().minute()
    })}`
  );

  // console.log(SelectedDate as any, "day");

  return (
    <DatepickerWrapper>
      <Typography component='label' className="cus_label">
        {customLabel}
      </Typography>
      <Box className={`datepickerSectionWrap ${className}`}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {typeThree ? (
            <>
              <DateTimePicker
                label={label}
                value={label ? null : value}
                ampm
                onChange={(newValue) => {
                  setValue(newValue);

                  setSelectedDateTime(
                    `${daysOfWeek[newValue!.day()]} ${newValue!.date()} ${months[newValue!.month()]
                    } ${newValue!.year()} , ${TimeFormatReturn({
                      hour: newValue!.hour(),
                      minute: newValue!.minute()
                    })}`
                  );
                }}
              />
              <TextField
                fullWidth
                value={SelectedDateTime}
                className="abs_textField"
              />
            </>
          ) : (
            <>
              <DatePicker

                label={label}
                value={label ? null : value}
                onChange={(newValue) => {
                  setValue(newValue);
                  setSelectedDate(
                    `${months[newValue!.month()]}, ${newValue!.year()}`
                  );
                }}
                views={typeTwo ? ["month", "year"] : ["year", "month", "day"]}
              />
              {typeTwo && (
                <TextField
                  fullWidth
                  value={SelectedDate}
                  className="abs_textField"
                />
              )}
            </>
          )}
        </LocalizationProvider>
      </Box>
    </DatepickerWrapper>
  );
}

export default Datepickersection;
