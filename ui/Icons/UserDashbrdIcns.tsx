import { CustomIconProps } from "@/interface/icons.interface";

export default function UserDashbrdIcns({
  IconColor,
  IconWidth,
  IconHeight
}: CustomIconProps) {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={IconWidth || "26"}
      height={IconHeight || "26"} x="0" y="0" viewBox="0 0 462 462" >
      <g><path d="M231 229.91a72 72 0 1 1 72-72 72.08 72.08 0 0 1-72 72zm0-124a52 52 0 1 0 52 52 52.06 52.06 0 0 0-52-52zM356 376.09a10 10 0 0 1-10-10v-24.72a71.7 71.7 0 0 0-71.62-71.62h-86.76A71.7 71.7 0 0 0 116 341.37v24.72a10 10 0 0 1-20 0v-24.72a91.73 91.73 0 0 1 91.62-91.62h86.75A91.73 91.73 0 0 1 366 341.37v24.72a10 10 0 0 1-10 10z" fill={IconColor || "#000"} opacity="1" data-original={IconColor || "#000"}></path></g>
    </svg>
  );
}
