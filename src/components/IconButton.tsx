"use client"

import NextImage from "next/image";
import Image from 'react-bootstrap/Image';

import {getYoutubeUrl, LinkData} from "@/utils/LinkData";
import Link from "next/link";
import {Card} from "react-bootstrap";

interface Props {
    data: LinkData;
}

export default function IconButton({data}: Props) {

    return(
        <Link href={getYoutubeUrl(data.url)}>
            <Card bg={"dark"} text={"light"} border={"light"} body style={{height: "100%", minWidth: "112px"}}>
                    <Card.Img
                        variant="top" src={"/TesTheater/icons/" + data.iconName}
                        alt={data.name}
                        style={{height: "50px", objectFit: "contain"}}
                        sizes={"100px"}
                        // as={NextImage}
                    />
                <Card.Title style={{textAlign: "center", marginTop: 15}}>{data.name}</Card.Title>
            </Card>
        </Link>
    )
}
