import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function DashboardMenuIcon({
    IconColor,
    IconWidth,
    IconHeight
}: CustomIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width={IconWidth || "24"}
            height={IconHeight || "24"}
            x="0"
            y="0"
            viewBox="0 0 512 512"
        >
            <g>
                <path
                    d="M174 240H66c-36.393 0-66-29.607-66-66V66C0 29.607 29.607 0 66 0h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zM66 32c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34V66c0-18.748-15.252-34-34-34zM446 240H338c-36.393 0-66-29.607-66-66V66c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zM338 32c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34V66c0-18.748-15.252-34-34-34zM392 512c-66.168 0-120-53.832-120-120s53.832-120 120-120 120 53.832 120 120-53.832 120-120 120zm0-208c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zM174 512H66c-36.393 0-66-29.607-66-66V338c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zM66 304c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34V338c0-18.748-15.252-34-34-34z"
                    fill={IconColor || primaryColors?.footerBg}
                    opacity="1"
                    data-original={IconColor || primaryColors?.footerBg}
                ></path>
            </g>
        </svg>
    );
}
