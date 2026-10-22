import { blogPosts } from "@/data/blog";
interface Params {
    slug: string;
}

const BlogPosts = async ({ params }: {params: Promise<Params>}) => {
    const { slug } = await params;
    const post = blogPosts.find((post) => post.slug === slug);
    if (!post) {
        return (
            <div className="text-white text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Blog Post Not Found
                </h1>
            </div>
        );
    }
    return (
        <div className="text-white text-center">
            <h1 className="text-3xl font-bold mb-4">
                {post.title}
            </h1>
            <p>This is content for the blog post.</p>
            <p className="text-lg text-gray-300 mb-6">
                {post.date}
            </p>
            <div className="border-2 border-white p-10 rounded-2xl bg-amber-700 mt-4">
                <p>{post.content}</p>
            </div>
        </div>
    )
}
export default BlogPosts;