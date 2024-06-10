export default function LoginBar(){
    return(<>
        <h2 className="mt-24 text-white text-[3rem]">Login</h2>
        <div className="mt-20 flex items-center flex-col gap-3">
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="id" name="id" id="id" placeholder="username" ></input>
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="password" name="id" id="id" placeholder="password" ></input>
        <button className="mt-24 border-white border-2 rounded-[20px] w-[7rem] h-[3rem] text-white font-semibold">Login in</button>
        </div>
    </>)
}