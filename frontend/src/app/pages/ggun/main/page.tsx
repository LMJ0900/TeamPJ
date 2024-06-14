import BottomCom from "@/components/common/module/ggun/main/bottomCom"
import CenterCom from "@/components/common/module/ggun/main/centerCom"
import Header from "@/components/common/module/ggun/main/header"
import LeftCom from "@/components/common/module/ggun/main/leftCom"
import RightCom from "@/components/common/module/ggun/main/rightCom"
import TopCom from "@/components/common/module/ggun/main/topCom"

export default function Main(){
    return(<>
        <div>
        <Header></Header>
        </div>
        <div className=" flex mt-8">
        <div className="animate-[TransleftTest_1s_ease-in-out_forwards]
        ">
        <LeftCom></LeftCom>
        </div>
        <div>
            <CenterCom></CenterCom>
            </div>
        <div className="flex flex-col">
        <div className="flex flex-row">
        <div className="animate-[TransTopTest_1.25s_ease-in-out_forwards] delay-75">
        <TopCom></TopCom>
        </div>
        <div className="animate-[TransRightTest_1.5s_ease-in-out_forwards]">
        <RightCom></RightCom>
        </div>
        </div>
        <div className="animate-[TransBottomTest_1.75s_ease-in-out_forwards]">
        <BottomCom></BottomCom>
        </div>
        </div>
        </div>
        
    </>)
}