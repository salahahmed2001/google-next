import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
import React,{Suspense} from "react";


export default async function ImageSearchPage({searchParams}) { 
  const startIndex= searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KAY}
&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`);
  if (!response.ok) throw new Error('Something went wrong');
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>
          No results found for {searchParams.searchTerm}
        </h1>
        <p className='text-lg'>
          Try searching the web or images for something else
          <Link href='/' className='text-blue-500'>
            Home
          </Link>
        </p>
      </div>
    </Suspense>
    );
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="">
      {results && <ImageSearchResults results={data} />}
    </div>
  </Suspense>
  )
}
