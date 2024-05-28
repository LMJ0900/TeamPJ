export default function Card() {
    return(<>
    <div className="flex flex-col gap-2 mt-4">
    <div className="m-0  px-6 py-4 w-full max-w-md bg-white shadow border-t-4 border-amber-600 rounded">
        <header className="border-b grid grid-cols-2 pb-2"> 
            <div className='text-base leading-7'>
                <p className='text-xs font-semibold text-amber-700 uppercase'>DOE - Silver Fox </p>
                <p  className='text-md text-gray-500'> CAGE 001 </p>
            </div>
             <div className='text-base leading-7'>
                <p className='text-xs font-semibold text-amber-700 uppercase'>BUCK - Califonian </p>
                <p  className='text-md text-gray-500'> CAGE 002 </p>
            </div>
        </header>
        <div className="w-full grid grid-cols-2 pt-4">            
            <div className='text-base leading-7'>
                <p className='text-xs font-semibold text-amber-700 uppercase'> BREEDING DATE </p>
                <p  className='text-md text-gray-500'>12/12/2023 </p>
            </div>    
            <div className='text-base leading-7'>
                <p className='text-xs font-semibold text-amber-700 uppercase'>EXPECTED DATE </p>
                <p  className='text-md text-gray-500'>01/01/2024 </p>
            </div>              
        </div>
    </div>
</div>
    </>)
}