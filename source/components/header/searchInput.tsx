"use client"
import React, {useState} from 'react';
import TextInput from "@/source/components/global/textInput";
import Button from "@/source/components/global/button";
import {useRouter} from "next/navigation";

const SearchInput = () => {
    const router =useRouter()
    const [input, setInput] = useState('');

    function goto(){
       if(input.trim().length){
           router.push(`/search?query=${input}`)
       }
    }
    return (
        <div className="flex h-full w-full items-center">
            <div className="flex w-full">
                <TextInput
                    onKeyUp={(e)=>{
                        if (e.key==="Enter" && input.trim().length){
                            goto()
                        }
                    }}
                    onChange={(e)=>setInput(e.target.value)}
                    className="text-base rounded-l-sm bg-slate-200 sm:py-2 py-[6px] px-5"
                    placeholder="Search in daraz..."
                />
                <Button
                    onClick={goto}
                    className="text-white  bg-primary px-5 rounded-r-sm"
                    title={<i className="bi bi-search"></i>}
                />
            </div>
        </div>
    );
};

export default SearchInput;
