
import BlogShow from "../../../../components/BlogShow"
import React from 'react'
import { redirect } from 'next/navigation'


// function rickRoll() {
//   redirect('')
// }

const BlogView = ({ params }) => {
  return (
    <div className="mt-24">
    <BlogShow id={params.id} />
    <div className='items-center justify-center flex text-center mt-12'>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=XXOXBeMAOC1S6JNf" className='p-3  rounded-lg z-5 justify-center items-center text-center bg-orange-700'>Delete this</a>
    </div>
    </div>
  )
}

export default BlogView