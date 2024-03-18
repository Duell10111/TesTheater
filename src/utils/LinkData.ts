

export interface LinkData {
    name: string;
    iconName: string;
    url: string;
}

export const data : LinkData[] = [
    {
        name: "Prime Video",
        iconName: "prime.png",
        url: "https://www.primevideo.com/"
    }
]

export function getYoutubeUrl(url: string) {
    return "https://www.youtube.com/redirect?q=" + url
}
