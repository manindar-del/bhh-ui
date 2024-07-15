import { CustomIconProps } from "@/interface/icons.interface";

export default function BackIcon({
    IconColor,
    IconWidth,
    IconHeight
}: CustomIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={IconWidth || "20"} height={IconHeight || "20"} x="0" y="0" viewBox="0 0 512 512"  ><g><path d="M390.627 54.627 189.255 256l201.372 201.373a32 32 0 1 1-45.254 45.254l-224-224a32 32 0 0 1 0-45.254l224-224a32 32 0 0 1 45.254 45.254z" fill={IconColor || "#7c7c7c"} opacity="1" data-original={IconColor || "#7c7c7c"} /></g></svg>
    )
}
