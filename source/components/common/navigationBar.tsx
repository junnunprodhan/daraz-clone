"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

type Props = {
    item: {title: string, href: string}
}
const NavigationBar = ({item}:Props) => {
    const pathname = usePathname()
    return (
        <>

                    <Link
                        className={`px-2 block py-2 ${item.href===pathname?"bg-teal-700":""} hover:bg-teal-700 text-white transition`}
                        href={item.href} >
                        <h4>{item.title}</h4>
                    </Link>
        </>
    );
};

export default NavigationBar;
