import { notFound } from 'next/navigation';
import { getMatchedPost } from 'src/libs/post';
import convertMarkdownToHtml from '@libs/mdx';
import Link from 'next/link';

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
    <>
      <article className="text-black">
        <div className="xl:divide-y xl:divide-gray-200 ">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center ">
              <dl className="space-y-10">
                <div>
                  <dd className="text-base font-medium leading-6 "></dd>
                </div>
              </dl>
              <div>{title}</div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 ">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"></ul>
              </dd>
            </dl>

            <footer>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/`}
                  className="text-primary-100 hover:text-primary-600"
                  aria-label="Back to the blog"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>

      <div
        className="text-black"
        dangerouslySetInnerHTML={{
          __html: await convertMarkdownToHtml(content),
        }}
      />
    </>
  );
}
