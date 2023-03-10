import { TopLevelBreadcrumb } from "@/components/BreadcrumbBar";
import Layout from "@/components/Layout";
import { type Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { PostCard } from "@/components/PostCard";

export function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });
  return { props: { posts } };
}

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Layout breadcrumbs={TopLevelBreadcrumb("Blog", "/blog")}>
      {/* <div className="mx-auto flex flex-col"> */}
      <div className="relative mx-auto divide-y-2 divide-gray-200">
        {/* <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </div> */}
        <div className="grid gap-16 pt-12">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
