import {HomeFilled,ShoppingCartOutlined} from "@ant-design/icons";
import { click } from "@testing-library/user-event/dist/click";
import { Badge, Button, Drawer, Form, InputNumber, Menu, Table, Typography, Input, Checkbox, message } from "antd";
import Item from "antd/es/list/Item";
import useSelection from "antd/es/table/hooks/useSelection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../API";
import {Image} from "antd"

function AppHeader() {
  const navigate = useNavigate()
  
  const onMenuClick=(item)=>{
    navigate(`/${item.key}`)
  }
    return <div className="appHeader">
      <Image width={140} height={60} src="https://picsum.photos/200/300?random=1" />
        <Menu
        className="appMenu"
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label:<HomeFilled />,
            key:"",
          },
          {
            label:"Men",
            key:"men",
            children:[
                {
                    label:"Men's shirts",
                    key:"mens-shirts",
                },
                {
                    label:"Men's Shoes",
                    key:"mens-shoes",
                },
                {
                    label:"Men's Watches",
                    key:"mens-watches",
                },
            ],
          },
          {
            label:"Woman",
            key:"women",
            children:[
                {
                  label:"Woman's Dresses",
                  key:"womens-dresses",
                },
                {
                  label:"Woman's Shoes",
                  key:"womens-shoes",
                },
                {
                  label:"Woman's Watches",
                  key:"womens-watches",
                },
                {
                  label:"Woman's Bags",
                  key:"womens-bags",
                },
                {
                  label:"Woman's Jewellery",
                  key:"womens-jewellery",
                },
            ],
          },
          {
            label:"Fragrances",
            key:"fragrances",
          },
          {
            label:"Smart Phones",
            key:"smartphones",
          }
        ]} />
        <Typography.Title className="storeTitle">DStore</Typography.Title>
       <AppCart />
      </div>
}

function AppCart(){
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartItems, setCatItems] = useState([]);
  const [checkoutDrawerOpen, setcheckoutDrawerOpen] = useState(false);

  useEffect(() =>{
    getCart().then((res) =>{
      setCatItems(res.products)
    })
  }, []);
  const onConfirmOrder = (values) => {
    console.log({values});
    setCartDrawerOpen(false)
    setcheckoutDrawerOpen(false);
    message.success("Your order has been palced successfully")

  };
   
  return (
  <div>
    <Badge onClick={()=>{
      setCartDrawerOpen(true)
    }} className="shoppingCartIcon" count={cartItems.length}>
      <ShoppingCartOutlined></ShoppingCartOutlined>
    </Badge>
    <Drawer open={cartDrawerOpen} onClose={()=>{
      setCartDrawerOpen(false)
    }}
    title="Your Cart"
    contentWrapperStyle={{width:500}}
    >
      <Table 
      pagination={false}
      columns={[{
        title: 'Title',
        dataIndex: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        render:(value)=>{
          return <span>${value}</span>;
        }
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        render:(value, record)=>{
          return <InputNumber min={0} defaultValue={value} onChange={(value)=>{
            setCatItems(pre=> pre.map(cart=>{
              if(record.id === cart.id){
                cart.total = cart.price * value;
              }
              return cart
            }))
          }}
          >
          </InputNumber>
        }
      },
      {
        title: 'Total',
        dataIndex: 'total',
        render:(value)=>{
          return <span>${value}</span>;
        }
      },
      ]}
      dataSource={cartItems}
      summary={(data)=>{
        const total = data.reduce((pre,current)=>{
          return pre + current.total;
        }, 0);
      return <span>Total: ${total} </span>;
    }}
    />
    <Button onClick={()=>{
      setcheckoutDrawerOpen(true);
    }}
    type="primary"
    >
    Checkout Your Cart</Button>
  </Drawer>

  <Drawer open={checkoutDrawerOpen} 
  onClose={()=>{
    setcheckoutDrawerOpen(false)
  }}
  title="Confirm Order"
  >
    <Form onFinish={onConfirmOrder}>
      <Form.Item 
        rules={[
          {
            required: true,
            message: "Please enter full name",
          },
        ]}
      label="Full Name" name='fullname'>
        <Input placeholder="Enter full name" />
      </Form.Item>
      <Form.Item 
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter valid email address",
          },
        ]}
      label="Email" name='email'>
        <Input placeholder="Enter Email Address" />
      </Form.Item>
      <Form.Item 
        rules={[
          {
            required: true,
            message: "Please enter your address",
          },
        ]} 
      label="Address" name='address'>
        <Input placeholder="Enter Address details" />
      </Form.Item>
      <Form.Item> 
        <Checkbox defaultChecked disabled> 
          Cash On Delivery
        </Checkbox>
      </Form.Item>
      <Typography.Paragraph type="secondary">More option are coming soon</Typography.Paragraph>
    <Button type="primary" htmlType="submit">Confirm Order</Button>
    </Form>
  </Drawer>
  </div>
  );
}
export default AppHeader;