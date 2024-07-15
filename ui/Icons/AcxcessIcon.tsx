import { CustomIconProps } from "@/interface/icons.interface";

export default function AcxcessIcon({
    IconColor,
    IconWidth,
    IconHeight
}: CustomIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={IconWidth || "40"} height={IconHeight || "40"} x="0" y="0" viewBox="0 0 512 512" ><g><path d="M230.091 404.998H45c-8.248 0-15-6.75-15-15v-195h270v66.712M74.999 194.998V127.5c0-49.441 40.559-90 90-90s90 40.559 90 90v29.998h30V127.5c0-65.999-54-120-120-120-30.228 0-57.936 11.332-79.094 29.953M74.953 48.407C56.333 69.565 45 97.271 45 127.5v67.498" fillRule="evenodd" clipRule="evenodd" fill="none" stroke={IconColor || "#ffffff"} strokeWidth="15.0001" strokeMiterlimit="22.9256" data-original="#000000" className="" /><path d="m138.483 273.481 21.213 21.214 31.82-31.82 21.214 21.213-53.034 53.033-42.426-42.427zM332 422v-21.072m45 0V422M354.5 294.499c24.75 0 45 20.25 45 45v22.5c0 24.75-20.25 45-45 45s-45-20.25-45-45v-22.5c0-24.75 20.249-45 45-45zM377 422c0 12.427-10.074 22.5-22.5 22.5-12.427 0-22.5-10.073-22.5-22.5" fillRule="evenodd" clipRule="evenodd" fill="none" stroke={IconColor || "#ffffff"} strokeWidth="15.0001" strokeMiterlimit="22.9256" data-original="#000000" className="" /><path d="M399.5 361.999c0-12.375-10.125-22.5-22.5-22.5h-45c-12.375 0-22.5 10.125-22.5 22.5" fillRule="evenodd" clipRule="evenodd" fill="none" stroke={IconColor || "#ffffff"} strokeWidth="15.0001" strokeMiterlimit="22.9256" data-original="#000000" className="" /><path d="M391.095 499.16a127.487 127.487 0 0 1-36.595 5.34C284.083 504.5 227 447.416 227 377s57.084-127.5 127.5-127.5S482 306.583 482 377c0 52.227-31.406 97.113-76.359 116.819" fillRule="evenodd" clipRule="evenodd" fill="none" stroke={IconColor || "#ffffff"} strokeWidth="15.0001" strokeMiterlimit="22.9256" data-original="#000000" className="" /><path d="m332 422-30 7.499c-16.001 4-30 13.505-30 30v14.716m165-.001v-14.716c0-16.5-13.998-26-30-30L377 422M262.5 224.997h15m-45 0h15" fillRule="evenodd" clipRule="evenodd" fill="none" stroke={IconColor || "#ffffff"} strokeWidth="15.0001" strokeMiterlimit="22.9256" data-original="#000000" className="" /></g></svg>
    )
}
