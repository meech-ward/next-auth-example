export default function PostActions() {
  return (
    <div className="flex -ml-2">
      <div className="hover:cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 flex justify-center items-center h-9 w-9 rounded-full transition-all fill-none dark:stroke-white stroke-black relative -top-px">
        <svg
          className="w-6 h-6 stroke-2 relative top-px"
          aria-label="Like"
          viewBox="0 0 26 26"
          role="img"
        >
          <title>Like</title>
          <path d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z"></path>
        </svg>
      </div>
      <div className="hover:cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 flex justify-center items-center h-9 w-9 rounded-full transition-all fill-none dark:stroke-white stroke-black">
        <svg className="w-6 h-6 stroke-2" aria-label="Comment" role="img" viewBox="0 0 24 24">
          <title>Comment</title>
          <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"></path>
        </svg>
      </div>
      <div className="hover:cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 flex justify-center items-center h-9 w-9 rounded-full transition-all fill-none dark:stroke-white stroke-black">
        <svg
          className="w-6 h-6 stroke-0 dark:fill-white fill-black"
          aria-label="Repost"
          role="img"
          viewBox="0 0 24 24"
        >
          <title>Repost</title>
          <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path>
        </svg>
      </div>

      <div className="hover:cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 flex justify-center items-center h-9 w-9 rounded-full transition-all fill-none dark:stroke-white stroke-black relative -top-[1.5px]">
        <svg
          className="w-6 h-6 stroke-2 relative top-[2px]"
          aria-label="Comment"
          role="img"
          viewBox="0 0 24 24"
        >
          <title>Share</title>
          <line x1="22" x2="9.218" y1="3" y2="10.083"></line>
          <polygon points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"></polygon>
        </svg>
      </div>
    </div>
  )
}
