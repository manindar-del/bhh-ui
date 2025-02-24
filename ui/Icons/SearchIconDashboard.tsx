import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function SearchIconDashboard({
    IconColor,
    IconWidth,
    IconHeight
}: CustomIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width={IconWidth || "18"}
            height={IconHeight || "18"}
            x="0"
            y="0"
            viewBox="0 0 512.392 512.392"
        >
            <g>
                <path
                    d="M211.196 422c-116.346 0-211-94.654-211-211S94.85 0 211.196 0s211 94.654 211 211-94.654 211-211 211zm0-382c-94.29 0-171 76.71-171 171s76.71 171 171 171 171-76.71 171-171-76.71-171-171-171zm295.143 466.534c7.81-7.811 7.81-20.475 0-28.285l-89.5-89.5c-7.811-7.811-20.475-7.811-28.285 0s-7.81 20.475 0 28.285l89.5 89.5c3.905 3.905 9.024 5.857 14.143 5.857s10.236-1.952 14.142-5.857z"
                    fill={IconColor || primaryColors?.footerBg}
                    opacity="1"
                    data-original={IconColor || primaryColors?.footerBg}
                ></path>
            </g>
        </svg>
    );
}
