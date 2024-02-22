const Categories = () =>{
  return (
    <div className="pt-3 cursor-pointer pb-6 flex itmes-center space-x-12">
      <div className="pb-4 flex flex-col itmes-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <span className="text-xs">Beach</span>
      </div>
      <div className="pb-4 flex flex-col itmes-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <span className="text-xs">Villa</span>
      </div>
      <div className="pb-4 flex flex-col itmes-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <span className="text-xs">Cabins</span>
      </div>
      <div className="pb-4 flex flex-col itmes-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <span className="text-xs">Tiny homes</span>
      </div>
    </div>
  )
}

export default Categories
