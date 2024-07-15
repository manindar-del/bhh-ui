import { CustomIconProps } from "@/interface/icons.interface";

export default function VideoPlayIcon({
  IconColor,
  IconWidth,
  IconHeight
}: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "30"}
      height={IconHeight || "30"}
      viewBox="0 0 130 130"
      fill="none"
    >
      <g clip-path="url(#clip0_412_3307)">
        <path
          d="M54.1667 54.094C54.1667 50.9361 57.6543 49.0235 60.3171 50.7212L77.4224 61.6271C79.8886 63.1995 79.8886 66.8004 77.4224 68.3727L60.3171 79.2786C57.6543 80.9763 54.1667 79.0637 54.1667 75.9058V54.094ZM49.4808 30.9953C46.8179 29.3007 43.3333 31.2136 43.3333 34.3699V95.6299C43.3333 98.7862 46.8179 100.699 49.4808 99.0045L97.6137 68.3746C100.084 66.8027 100.084 63.1971 97.6137 61.6253L49.4808 30.9953Z"
          fill={IconColor || "#fff"}
        />
      </g>
      <defs>
        <clipPath id="clip0_412_3307">
          <rect width="130" height="130" fill={IconColor || "#fff"} />
        </clipPath>
      </defs>
    </svg>
  );
}
