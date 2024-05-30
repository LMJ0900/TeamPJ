export default function Searchbar() {
    return(
        <>
        <div className="flex justify-center">
         <input
      className=" w-[30rem] h-[3rem] rounded-lg border-none focus:bg-white outline-1 focus:outline-black bg-gray-300 text-black outline-none"
      name="search"
      placeholder="어떤 서비스가 필요하세요?"
      type="search"
    />
        </div>
        </>
    )
}