const SearchFilters = () => {
  return (
      <div className="h-[48px] lg:h-[64] flex flex-row items-center justify-between border rounded-full">
        <div className="hidden lg:block">
          <div className="flex flex-row items-center justify-between">
            <div className="w-[250px] h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Search..</p>
              <p className="text-xm">Wanted location</p>
            </div>
            <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Check in</p>
              <p className="text-xm">Add dates</p>
            </div>
            <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Check out</p>
              <p className="text-xm">Add dates</p>
            </div>
            <div className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Who</p>
              <p className="text-xm">Add gusts</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="cursor-pointer p-2 bg-djbnb hover:bg-djbnb-dark transition rounded-full text-white">
          <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

          </div>
        </div>
      </div>
  )
}

export default SearchFilters