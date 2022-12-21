import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { RichTextComponents } from "./RichTextComponents";

type Props = {
  posts: Post[];
}

function BlogList({posts}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
      {posts.map((item) => (
        <div key={item._id} className="flex flex-col group cursor-pointer">
          <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 
          transition-transform duration-200 ease-out">
            <Image 
              className="object-cover object-center"
              src={urlFor(item.mainImage).url()}
              alt={item.title}
              fill
            />
          </div>
          <p className="text-center my-4">{item.title}</p>
          <div className="text-center mb-4">
            {item.categories.map((category) => (
              <div key={item._id}>{category.title}</div>
            ))}
          </div>
          <PortableText value={item.body} components={RichTextComponents} />
        </div>
      ))}
    </div>
  )
}

export default BlogList