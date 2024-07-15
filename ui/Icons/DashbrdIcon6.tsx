import { CustomIconProps } from '@/interface/icons.interface'

const DashbrdIcon6 = ({
    IconColor,
    IconWidth,
    IconHeight
}: CustomIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" version="1.1"
            width={IconWidth || "50"}
            height={IconHeight || "50"}
            x="0" y="0" viewBox="0 0 32 32" xmlSpace="preserve" className=""><g><path d="M27 6v1H1V6c0-1.654 1.346-3 3-3h1V2a1 1 0 1 1 2 0v1h6V2a1 1 0 1 1 2 0v1h6V2a1 1 0 1 1 2 0v1h1c1.654 0 3 1.346 3 3zm4 18a7 7 0 1 1-14.001-.001A7 7 0 0 1 31 24zm-3 0a1 1 0 0 0-1-1h-2v-2a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zM27 9v6.52a8.8 8.8 0 0 0-3-.52c-4.96 0-9 4.04-9 9 0 1.05.18 2.06.52 3H4c-1.65 0-3-1.35-3-3V9zM10 22a1 1 0 0 0-1-1H7a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1zm0-4a1 1 0 0 0-1-1H7a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1zm0-4a1 1 0 0 0-1-1H7a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1zm6 0a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1z" fill={IconColor || "#605bff"} opacity="1" data-original={IconColor || "#605bff"} className="" /></g></svg>
    )
}

export default DashbrdIcon6