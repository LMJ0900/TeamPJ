import Test111 from "@/components/common/module/Test";
import { Search } from "@mui/icons-material";

export default function Main(){
    return(<>
    <Test111/>
    <span className="inline-block bg-purple-300 box-border w-32 h-16 ml-10 mt-10 rounded-[20px]">로고</span>
    <span className="ml-96">
    <Search />
    </span>
    </>)
}