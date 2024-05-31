export default function ServiceCart(){
    return(
        <div className="somservice relative flex justify-center ">
        <h2 className="font-bold absolute left-[4rem] top-[8rem] text-[2rem]">숨고 인기 서비스</h2>
        <div className="servicecart  w-70rem flex justify-center">
            <ul className="servicecom absolute left-[4rem] top-[15rem] flex justify-center gap-[3rem] ml-10">
                <li className="h-[10rem] w-[14rem]" >
                    <img className="rounded-lg" src="https://dmmj3ljielax6.cloudfront.net/upload/service/e83966e9-77de-452c-a188-1e14d07eaee2.png?h=302&w=458&webp=1" alt="컴포1" />
                    피아노 레슨</li>
                    <li className="h-[10rem] w-[14rem]" >
                    <img className="rounded-lg" src="https://dmmj3ljielax6.cloudfront.net/upload/service/edfc1261-a293-4875-8024-99032b98daa5.png?h=302&w=458&webp=1" alt="컴포1" />
                    골프 레슨</li>
                    <li className="h-[10rem] w-[14rem]" >
                    <img className="rounded-lg" src="https://dmmj3ljielax6.cloudfront.net/upload/service/6a497fde-2ba4-4a59-977c-41ce3be83e08.png?h=302&w=458&webp=1" alt="컴포1" />
                    pt 레슨</li>
            </ul>
        </div>
        </div>
    )
} 