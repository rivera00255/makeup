import { Data } from 'src/data';
import Order from 'src/entity/Order';
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
  //   console.log(orderList);
  return (
    <div css={StyledOrderInfo}>
      <table>
        <thead>
          <tr>
            <td>No.</td>
            <td>주문내역</td>
            <td>주문일</td>
            <td>상태</td>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
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
