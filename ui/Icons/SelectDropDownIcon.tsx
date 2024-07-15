import { CustomIconProps } from "@/interface/icons.interface";

export default function SelectDropDownIcon({
  IconColor,
  IconWidth,
  IconHeight
}: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={IconWidth || "20"}
      height={IconHeight || "20"}
      x="0"
      y="0"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          d="m21.707 8.207-9 9a.997.997 0 0 1-1.414 0l-9-9a.999.999 0 1 1 1.414-1.414L12 15.086l8.293-8.293a.999.999 0 1 1 1.414 1.414z"
          fill={IconColor || "#DBE0E8"}
          opacity="1"
          data-original={IconColor || "#DBE0E8"}
        />
      </g>
    </svg>
  );
}
