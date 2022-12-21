import { groq } from "next-sanity";
import PreviewSuspense from "../../components/PreviewSuspense";
import { previewData } from "next/headers";
import { client } from "../../lib/sanity.client";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq `
  *[_type=='post'] {
    ...,
    categories[]->
  } | order(_createdAt desc)
`;

async function HomePage() {
  if(previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query);
  //console.log(posts);

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  )
}

export default HomePage