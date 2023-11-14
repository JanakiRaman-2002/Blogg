import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Card from "../../components/Card"
import { prisma } from "../../db";
function getBlogs(){
  
  return prisma.Blog.findMany()
}
async function Home() {
  // await prisma.Blog.create({data: {title:"Test", content:"This is a test Blog"}});
  // await prisma.Blog.deleteMany();
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  console.log("USERRRRRRRRR",user.firstName)
  const blogs = await getBlogs();

  return (
    <>
    <p className="text-stone-700 text-2xl mt-16 text-center">{user.firstName}'s</p>
    <h1 className="text-9xl p-5 -mt-4 text-center text-stone-700 font-black transition-opacity ease-in duration-700">S<span className="text-orange-800">t</span>u<span className="text-orange-800">f</span>f</h1>
    <p className="text-center -mt-4 text-stone-700 mb-12">(jk, anyone can see anyone's)</p>
    <div className="flex justify-center items-center flex-wrap gap-8 ">
      {blogs.map(blog => (
        <Card key={blog.id} {...blog} />
      ))}
    </div> 
    
    </>
  )
}

export default Home;