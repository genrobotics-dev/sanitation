import Image from "next/image";
import Link from "next/link";
import { client } from "../../../../prismicio";
import * as prismic from "@prismicio/client";

// Default items per page
const ITEMS_PER_PAGE = 6;

export default async function BlogsPage({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || "1");

  // Fetch blogs with pagination from Prismic
  const response = await client.get({
    predicates: [prismic.predicate.at("document.type", "blogs")],
    orderings: [{ field: "document.last_publication_date", direction: "desc" }],
    pageSize: ITEMS_PER_PAGE,
    page: currentPage,
  });

  const blogs = response.results.map((b) => ({
    id: b.id,
    uid: b.uid,
    title: b.data.title[0]?.text || "Untitled",
    summary: b.data.summary || "",
    image: b.data.image?.url,
    last_publication_date: b.last_publication_date,
  }));

  const totalPages = response.total_pages;

  const blogsData = await client.getAllByType("blogs");

  return (
    <section className="blogs max-w-6xl mx-auto px-6 py-16">
      {blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16">
          <h2 className=" text-xl mt-6">No posts yet,</h2>
          <p className=" mt-2">
            but exciting articles are on the way. Keep an eye out!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="flex flex-col bg-[#f6f6f6] justify-between rounded-xl p-6 border border-yellow/30 transition duration-300 hover:shadow-lg hover:shadow-yellow/40 h-full"
            >
              <div className="flex flex-col gap-1">
                {blog.image && (
                  <Link
                    href={`/blogs/${blog.uid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Go to blog: ${blog.title}`}
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover rounded-2xl cursor-pointer"
                    />
                  </Link>
                )}
                <h4 className="font-semibold text-lg sm:text-xl leading-tight">
                  <Link
                    href={`/blogs/${blog.uid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left text-black"
                    style={
                      {
                        textDecoration: "none",
                        fontWeight: "600"
                      }
                    }
                    aria-label={`Go to blog: ${blog.title}`}
                  >
                    {blog.title}
                  </Link>
                </h4>
                <p className="text-sm mb-4">
                  {blog.summary.slice(0, 250)}...
                </p>
              </div>

              <div className="mt-auto w-fit">
                <Link
                  href={`/blogs/${blog.uid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center text-sm font-medium text-black bg-[#FCD901] px-3 py-2 rounded-md hover:bg-[#FFE63D] transition"
                  style={
                    {
                      textDecoration: "none"
                    }
                  }
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href={`/blogs?page=${currentPage - 1}`}
            className={`rounded ${currentPage === 1 ? "opacity-50 pointer-events-none" : ""}`}
          >
            Prev
          </Link>

          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={i}
              href={`/blogs?page=${i + 1}`}
              className={`px-4 py-2 rounded-full ${currentPage === i + 1
                ? "bg-[#FCD901] text-black"
                : "bg-gray-700 text-white"
                }`}
            >
              {i + 1}
            </Link>
          ))}

          <Link
            href={`/blogs?page=${currentPage + 1}`}
            className={`rounded ${currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}`}
          >
            Next
          </Link>
        </div>
      )}
    </section>
  );
}
