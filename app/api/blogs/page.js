import { getBlogs } from '../../../db/mongodb/blogs';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const {blogs, error} = await getBlogs();
            if (error) { throw new Error(error); }
            console.log(blogs, error.message);
            return res.status(200).json({blogs})
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }
    res.setHeader('Allow', 'GET');
    res.status(425).end("Not allowed, idk")
}

export default handler