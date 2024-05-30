import Header from "@/components/common/module/soomgo/header"
import Searchbar from "@/components/common/module/soomgo/searchbar"
import Cartegori from "@/components/common/module/soomgo/cartegori"
import Banner from "@/components/common/module/soomgo/banner"

export default function Soomgo(){
    return(
        <div className="lg:max-desktop:ml-[10vw] lg:max-desktop:mr-[10vw] desktop:ml-[20vw] desktop:mr-[20vw]">
            <Header/>
            <h2 className="mt-48 flex justify-center text-2xl font-bold">1,000가지 생활서비스를 단 한곳에서</h2>
            <div className="py-10">
            <Searchbar/>
            </div>
            <Cartegori/>
            <div>
            <Banner/>
            </div>
        </div>
    )
}