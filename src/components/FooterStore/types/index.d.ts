export interface FooterIcon {
    src: string,
    alt: string,
}

export interface FooterLink {
    title: string,
    links: {
        name: string,
        link: string
    }[]
}