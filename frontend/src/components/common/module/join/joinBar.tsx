export default function JoinBar(){
    return(<>
        <h2 className="mt-24 text-white text-[3rem]">Join</h2>
        <div className="mt-10 flex items-center flex-col gap-3">
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="id" name="id" id="id" placeholder="username" ></input>
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="password" name="id" id="id" placeholder="password" ></input>
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="name" name="name" id="name" placeholder="name" ></input>
        <input className="border-b-2 bg-inherit w-[16rem] h-[3rem]" type="phone" name="phone" id="phone" placeholder="010-****-****" ></input>
        <button type="submit" className="mt-14 border-white border-2 rounded-[20px] w-[7rem] h-[3rem] text-white font-semibold">Join</button>
        </div>
    </>)
}