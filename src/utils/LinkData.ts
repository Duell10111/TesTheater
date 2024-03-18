import _ from "lodash";


export interface LinkData {
    id: string;
    name: string;
    iconName: string;
    url: string;
    locale?: string; // To be used for standard locale selection
}

export const data : LinkData[] = [
    {
        id: "prime",
        name: "Prime Video",
        iconName: "prime.png",
        url: "https://www.primevideo.com/"
    },
    {
        id: "plex",
        name: "Plex",
        iconName: "plex.png",
        url: "https://app.plex.tv/"
    },
    {
        id: "paramountplus",
        name: "Paramount Plus",
        iconName: "paramountplus.png",
        url: "https://www.paramountplus.com/"
    },
    {
        id: "disneyplus",
        name: "Disney Plus",
        iconName: "disneyplus.png",
        url: "https://www.disneyplus.com/"
    },{
        id: "dazn",
        name: "DAZN",
        iconName: "dazn.png",
        url: "https://www.dazn.com/"
    },{
        id: "magentasport",
        name: "Magenta Sport",
        iconName: "magentasport.svg",
        url: "https://magentasport.de/"
    },{
        id: "ard",
        name: "ARD",
        iconName: "ard.png",
        url: "https://www.ardmediathek.de/"
    },{
        id: "zdf",
        name: "ZDF",
        iconName: "zdf.svg",
        url: "https://www.zdf.de/"
    },{
        id: "zattoo",
        name: "Zattoo",
        iconName: "zattoo.svg",
        url: "https://zattoo.com/"
    },{
        id: "wow",
        name: "WOW",
        iconName: "wow.svg",
        url: "https://www.wowtv.de/"
    },{
        id: "appletv",
        name: "Apple TV",
        iconName: "appletvplus.png",
        url: "https://tv.apple.com/"
    }
]

export const dataGrouped = _.chunk(data, 6)

export function getYoutubeUrl(url: string) {
    return "https://www.youtube.com/redirect?q=" + url
}
