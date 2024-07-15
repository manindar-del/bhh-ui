import { CustomIconProps } from "@/interface/icons.interface";

export default function DashbrdIcon4({
    IconColor,
    IconWidth,
    IconHeight
}: CustomIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width={IconWidth || "50"}
            height={IconHeight || "50"}
            x="0"
            y="0"
            viewBox="0 0 32 32"
        >
            <g>
                <circle
                    cx="13.832"
                    cy="6.69"
                    r="5.69"
                    fill={IconColor || "#1a3187"}
                    opacity="1"
                    data-original={IconColor || "#1a3187"}
                ></circle>
                <path
                    d="M19.712 19.07c.79-.32 1.63-.5 2.52-.53 1.742-2.944-4.378-5.403-6.66-5.21h-3.48c-4.84 0-8.78 3.95-8.78 8.79v1.17a4.49 4.49 0 0 0 4.49 4.49h6.03c.37 0 .71-.1 1-.29a8.95 8.95 0 0 1-.08-1.15c-.042-3.18 2.028-6.164 4.96-7.27zM27.672 21.9c-.71-.38-1.62-.26-2.21.35l-4.07 4.22-1.37-1.35c-.74-.72-1.93-.7-2.65.04-.73.74-.71 1.93.03 2.65l2.73 2.66c.35.34.82.53 1.31.53h.02c.5-.01.98-.21 1.32-.57l5.38-5.57c.26-.28.43-.61.5-.95v-.03c.1-.59-.08-1.22-.55-1.67-.13-.13-.28-.23-.44-.31z"
                    fill={IconColor || "#1a3187"}
                    opacity="1"
                    data-original={IconColor || "#1a3187"}
                ></path>
            </g>
        </svg>
    );
}
