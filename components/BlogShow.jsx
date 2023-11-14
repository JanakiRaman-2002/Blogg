"use server"

import React from 'react'

async function findTheBlog(id) {
    console.log(id)
    const single = await prisma.Blog.findUnique({
        where: {
          id: id.id,
        },
      })

    return single;
}



const BlogShow = async ({id}) => {

    const blog = await findTheBlog({id})
  return (
    <div>
    <div className='justify-center items-center text-center flex flex-col'>
        <div>
            <h1 className='text-9xl z-0 text-center text-orange-800 outline-4 outline-orange-700 font-black'>{blog.title}</h1>
        </div>
        <div className='bg-stone-700 z-5 -mt-10 justify-center items-center text-center w-3/4 h-96 border-4 border-orange-800 rounded-lg '>
            <p className='text-2xl mx-4 my-4 text-center text-stone-400'>{blog.content}</p>
        </div>
        
    </div>
    <p className='text-xl text-center z-0  text-orange-800'>--- {blog.createdAt.toString().slice(0,15)} ---</p>
    
    
    </div>
  )
}

export default BlogShow