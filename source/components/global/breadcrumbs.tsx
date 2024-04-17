import React from 'react';
import Link from "next/link";
import {BreadcrumbArrow} from "@/source/constant/icons";

type Props = {
    list?:{
        title: string;
        href:string
    }[]
}
const Breadcrumbs = ({list}:Props) => {

    return (
        <>
            <div className="py-4 flex items-center ">
                <ul className="flex items-center flex-wrap gap-y-2">
                    <li className="inline-flex items-center">
                        <Link href="/" className="text-gray-600 hover:text-blue-500">
                            <svg className="w-5 h-auto fill-current  text-gray-400"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path
                                    d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/>
                            </svg>
                        </Link>

                       <BreadcrumbArrow/>
                    </li>
                    {
                        list?
                            list.map((item,i)=>{
                                return(
                                    <li key={i} className="inline-flex items-center">
                                        {
                                            list.length===i+1?
                                                <span className="text-sm text-gray-500">
                                                    {item.title}
                                                </span>
                                                :
                                                <Link href={item.href} className="text-sm text-blue-500 hover:text-blue-500">
                                                    {item.title}
                                                </Link>
                                        }

                                        {
                                            list.length==i+1?null
                                       : <BreadcrumbArrow/>
                                        }
                                    </li>
                                )
                            })
                            :null
                    }
                </ul>
            </div>
        </>
    );
};

export default Breadcrumbs;



