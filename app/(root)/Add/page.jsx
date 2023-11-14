"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createBlog } from '../../../actions/AddBlog'


const page = () => {
    
    const [head, setHead] = useState("New Blogg")
    function handleTitle(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === "title") {
            if (value === ''){
                setHead("ungoppana title kudupan?")
            }else{
                setHead(value)
            }
            
        }
    }
  return (
    <>
    <div className='text-9xl font-black text-orange-800 mt-12 items-center'>{head}</div>
    <div className='ml-12'>
    <form action={createBlog} className='flex gap-2 flex-col p-10'>
        <h1 className='text-3xl font-bold text-stone-700 mt-4'>What's this about?</h1>
        <input className="w-8/12 h-12 bg-stone-800 text-stone-500 text-2xl font-bold rounded-lg text-center" onChange={handleTitle} type="text" name='title'/>
        <h1 className='text-3xl font-bold mt-4 text-stone-700'>Tell me about it</h1>
        <textarea className="w-8/12 bg-stone-800 mt-2 text-stone-500 text-2xl rounded-lg" name="content" rows="5" cols="30"></textarea>
        <div className='flex flex-row gap-5 my-5'>
            <Link className='p-3 rounded-lg bg-orange-700 hover:bg-green-500 hover:duration-200' href="..">Nah, screw it</Link>
            <button className='p-3 rounded-lg z-5 bg-orange-700 hover:translate-x-24 ' type='submit'>Upload</button>
        </div>
    </form>
    </div>
    </>
  )
}

export default page