import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMatchedPost } from '@/utils/post';

interface ParamType {
  params: {
    slug: string[];
  };
}

export default async function Post({ params }: ParamType) {
  const { slug } = params;

  const post = await getMatchedPost(slug);

  if (!post) return notFound();

  const {
    frontMatter: { title },
    content,
  } = post;

  return (
    <div className="w-[100%] text-black flex flex-col jusify-center items-center">
      <div className="w-[100%] pt-6 xl:pb-6 xl:divide-y xl:divide-gray-500">
        <div className="space-y-1 text-center ">{title}</div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            ></svg>
          </span>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
          space.
        </p>
      </div>

      <div className="prose prose-pink">
        <MDXRemote source={content} />
      </div>
    </div>
  );
}
