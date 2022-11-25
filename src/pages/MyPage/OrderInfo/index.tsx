import { useState } from 'react';
import { Data } from 'src/data';
import * as XLSX from 'xlsx';
import StyledOrderInfo from './StyledOrderInfo';

// mock order data
const getRandomOrder = () => Data[Math.floor(Math.random() * 3)];

const getRandomDate = (start: Date, end: Date) => {
  const startDate = start.getTime();
  const endDate = end.getTime();

  return new Date(startDate + Math.random() * (endDate - startDate));
};

// mock order list
const orderList = Array(20)
  .fill(0)
  .map((_, i: number) => ({
    id: 20 - i,
    createdAt: getRandomDate(new Date(2022, 1, 1), new Date()),
    order: getRandomOrder(),
  }));

const OrderInfo = () => {
  // const [orders, setOrders] = useState(orderList);

  const downloadExcel = (data: any) => {
    const list = data.reduce(
      (acc: any, cur: any) => [
        ...acc,
        {
          주문일: cur.createdAt.toLocaleDateString(),
          주문상태: cur.order.status.value,
          주문내역: `${cur.order.order[0].name}(${cur.order.order[0].orderCount}개) \$${cur.order.order[0].orderPrice}`,
        },
      ],
      []
    );
    const file = XLSX.utils.json_to_sheet(list);
    const book = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, file, 'xls');
    XLSX.writeFile(book, `list_${new Date().toLocaleDateString().replaceAll('.', '_')}.xlsx`);
  };
  // console.log(orders);

  return (
    <div css={StyledOrderInfo}>
      <div className="list-nav">
        {/* <div className="button-wrapper">
          <button>전체보기</button>
          <button>결제완료</button>
          <button>배송중</button>
          <button>배송완료</button>
        </div> */}
        <button className="download-button" onClick={() => downloadExcel(orderList)}>
          Excel 다운로드
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <td>주문내역</td>
            <td>주문일</td>
            <td>상태</td>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr key={order.id}>
              <td className="order">
                {order.order.order.map((item) => (
                  <div key={item.id}>
                    <div className="col">
                      <img src={item.api_featured_image} alt={item.name} />
                    </div>
                    <div className="col">
                      <div>
                        <p>{item.brand}</p>
                        <p>{item.category}</p>
                      </div>
                      <div style={{ fontWeight: '700' }}>{item.name}</div>
                      <div>$ {item.price}</div>
                    </div>
                  </div>
                ))}
              </td>
              <td>{order.createdAt.toLocaleDateString()}</td>
              <td>{order.order.status.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderInfo;
