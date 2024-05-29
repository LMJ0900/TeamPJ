import "@/components/common/pages/account.css"

export default function Account(){
    return(<>
    <div className="my-20 ml-72 text-red-200 text-3xl font-bold">계좌정보</div>
    <hr className="my-8"/>
    <div className="ml-72">
    <table>
        <colgroup>
        <col className="col1"/>
        <col className="col2"/>
        <col className="col3"/>
        <col className="col4"/>
        </colgroup>
        <tr>
            <th>계좌별명</th>
            <th>계좌번호</th>
            <th>투자기간</th>
            <th>수익률</th>
        </tr>
        <tbody>
            <tr>
            <th>이민재</th>
            <th>51841001225619</th>
            <th>오늘</th>
            <th>300%</th>
            </tr>
            <tr>
            <th>홍길동</th>
            <th>51841001225619</th>
            <th>내일</th>
            <th>100%</th>
            </tr>
        </tbody>
    </table>
    </div>
    </>
    )
}