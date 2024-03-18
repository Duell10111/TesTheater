"use client"

import NextImage from "next/image";
import Image from 'react-bootstrap/Image';

import {getYoutubeUrl, LinkData} from "@/utils/LinkData";
import Link from "next/link";

interface Props {
    data: LinkData;
}

export default function IconButton({data}: Props) {

    return(
        <Link href={getYoutubeUrl(data.url)} passHref={true}>
            <Image src={"/TesTheater/icons/" + data.iconName} alt={data.name} rounded thumbnail />
        </Link>
    )
}
