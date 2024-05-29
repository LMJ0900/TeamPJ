
export default function Histoty(){
    return(<>
    <div className="my-20 ml-72 text-purple-200 text-3xl font-bold">거래내역</div>
    <hr className="my-8"/>
    <div className="ml-72"></div>
    <div className="ml-72">
    <table>
        <colgroup>
        <col className="col5"/>
        <col className="col6"/>
        <col className="col7"/>
        <col className="col8"/>
        <col className="col9"/>
        </colgroup>
        <tr>
            <th>거래날짜</th>
            <th>거래금액</th>
            <th>종목이름</th>
            <th>수익손실금액</th>
            <th>수익손실률</th>
        </tr>
        <tbody>
            <tr>
            <th>2024-05-29</th>
            <th>500000</th>
            <th>바이로메드</th>
            <th>+100000</th>
            <th>20%</th>
            </tr>
            <tr>
            <th>2024-05-29</th>
            <th>100000</th>
            <th>삼성전자</th>
            <th>+10000</th>
            <th>10%</th>
            </tr>
        </tbody>
    </table>
    </div>
    </>)
}