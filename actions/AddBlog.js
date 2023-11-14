'use server'
import { redirect } from "next/navigation"

export async function createBlog(data) {
    const title = data.get("title")?.valueOf()
    const content = data.get("content")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid title")
    }

    await prisma.Blog.create({data: {title, content}})
    redirect("/")

}