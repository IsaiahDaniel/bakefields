import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { useContext } from "react";
import { OrderContext } from "../../context/ordersContext/OrderContext";
import Spinner from "../../components/Spinner/Spinner";

const Orders = () => {
  const { getOrder, orders, isLoading } = useContext(OrderContext);

  // const PRODUCTS_LIST = [
  //   {
  //     id: "1",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/sport-1.jpg"),
  //   },
  //   {
  //     id: "2",
  //     price: "6.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/sport-2.jpg"),
  //   },
  //   {
  //     id: "3",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/sport-3.jpg"),
  //   },
  //   {
  //     id: "4",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/sport-4.jpg"),
  //   },
  //   {
  //     id: "5",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/sport-5.jpg"),
  //   },
  //   {
  //     id: "6",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/children-1.jpg"),
  //   },
  //   {
  //     id: "6",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/children-2.jpg"),
  //   },
  //   {
  //     id: "7",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/children-3.jpg"),
  //   },
  //   {
  //     id: "8",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/children-4.jpg"),
  //   },
  //   {
  //     id: "9",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/children-5.jpg"),
  //   },
  //   {
  //     id: "10",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/children-6.jpg"),
  //   },
  //   {
  //     id: "11",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/birthday-1.jpg"),
  //   },
  //   {
  //     id: "12",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/birthday-2.jpg"),
  //   },
  //   {
  //     id: "13",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/birthday-3.jpg"),
  //   },
  //   {
  //     id: "14",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/birthday-4.jpg"),
  //   },
  //   {
  //     id: "15",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/birthday-5.jpg"),
  //   },
  //   {
  //     id: "16",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/birthday-6.jpg"),
  //   },
  //   {
  //     id: "17",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/birthday-7.jpg"),
  //   },
  //   {
  //     id: "18",
  //     price: "2.99",
  //     title: "New Cake",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
  //     image: require("../../assets/categories/birthday-1.jpg"),
  //   },
  // ];

  useEffect(() => {
    getOrder();
    // eslint-disable-next-line
  }, [isLoading]);

  return (
    <>
      <div className="mx-auto container mt-10 mb-10 p-5 md:p-5">
        <div className="flex-col md:flex-row md:flex items-start">
          <div className="flex-1">
            <Sidebar />
          </div>
          <div className="flex-col items-start w-full">
            <h2 className="text-4xl mb-6 text-center mt-5 md:p-0">
              Your Orders
            </h2>
            {/* <div className="grid grid-cols-2 gap-8 p-5 md:p-0 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
              {PRODUCTS_LIST.map((product) => (
                <div className="mb-10" key={product.id}>
                  <Product product={product} key={product.id} />
                </div>
              ))}
            </div> */}
            { isLoading && <Spinner /> }
            { orders.length === 0 && <p className="text-center">You dont have orders yet!</p> }
            <div className="grid grid-cols-2 gap-8 p-5 md:p-0 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
              { orders.length > 0 && orders?.map((order) => (
                <div className="mb-10" key={order._id}>
                  <div className="shadow-lg md:justify-start justify-center">
                    <img
                      src={order.image}
                      alt={order.name}
                      // style={{ width: "270px", height: "270px" }}
                      className="object-cover w-full"
                    />
                  </div>
                  <h3 className="font-bold">Quantity: {order.quantity}</h3>
                  <h3 className="font-bold">Flavour: {order.flavour}</h3>
                  <h3>Price: &#8358;{order.price}</h3>
                  <h3>Message: {order.message}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
