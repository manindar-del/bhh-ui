import { CustomIconProps } from "@/interface/icons.interface";

export default function MenucloseIcons({
    IconColor,
    IconWidth,
    IconHeight
}: CustomIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width={IconWidth || "30"}
            height={IconHeight || "30"}
            x="0"
            y="0"
            viewBox="0 0 64 64"
        >
            <g>
                <path
                    fill={IconColor || "#ff5454"}
                    d="M50 8H14a6.005 6.005 0 0 0-6 6v36a6.005 6.005 0 0 0 6 6h36a6.005 6.005 0 0 0 6-6V14a6.005 6.005 0 0 0-6-6zm-6.59 32.59a1.994 1.994 0 1 1-2.82 2.82L32 34.83l-8.59 8.58a1.994 1.994 0 0 1-2.82-2.82L29.17 32l-8.58-8.59a1.994 1.994 0 0 1 2.82-2.82L32 29.17l8.59-8.58a1.994 1.994 0 0 1 2.82 2.82L34.83 32z"
                    opacity="1"
                    data-original={IconColor || "#ff5454"}
                ></path>
                <path
                    fill={IconColor || "#fff"}
                    d="M43.41 40.59a1.994 1.994 0 1 1-2.82 2.82L32 34.83l-8.59 8.58a1.994 1.994 0 0 1-2.82-2.82L29.17 32l-8.58-8.59a1.994 1.994 0 0 1 2.82-2.82L32 29.17l8.59-8.58a1.994 1.994 0 0 1 2.82 2.82L34.83 32z"
                    opacity="1"
                    data-original={IconColor || "#fff"}
                ></path>
            </g>
        </svg>
    );
}
