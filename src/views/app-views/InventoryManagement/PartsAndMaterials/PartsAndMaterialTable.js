import React, { useState } from "react";

import { Table, Button, Tag , Typography } from "antd";


import SprayPaintImg from "assets/SprayPaint.png"

import Actions from "./Actions";

const {Text} = Typography;

const columns = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name - b.name,
    render: (item) => {
      const { text, image } = item;
      return (
        <div className="d-flex">
          <img src={image} className="mr-3" />
          <Text>{text}</Text>
        </div>
      );
    },
  },
  {
    title: "Category",
    dataIndex: "category",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.category - b.category,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.brand - b.brand,
  },
  {
    title: "Last Purchase",
    dataIndex: "lastPurchase",
  },
  {
    title: "Qty",
    dataIndex: "qty",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.qty - b.qty,
  },
  {
    title: "Price/Unit",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  
  {
    title: "Status",
    dataIndex: "status",

    render: (status) => {
      const color = status === "Out of Stock" ? "volcano" : "green";
      return (
        <span>
          <Tag color={color} key={status}>
            {status}
          </Tag>
        </span>
      );
    },
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <Actions />,
  },
];

const data = [
  {
    key: 1,
    id: "SP1234",
    name: {text: "Spray Paint" , image: SprayPaintImg},
    category: "Colours",
    brand: "ABC Shine",
    lastPurchase: "20/08/2022",
    qty: "20",
    price: "S$120.23",
    status: "Out of Stock",
  },
];
for (let i = 2; i <= 5; i++) {
  data.push({
    key: i,
    id: "SP1234",
    name: {text: "Spray Paint" , image: SprayPaintImg},
    category: "Colours",
    brand: "ABC Shine",
    lastPurchase: "20/08/2022",
    qty: "20",
    price: "S$120.23",
    status: "In Stock",
  });
}

const PartsAndMaterialsTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const selectChangeHandler = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: selectChangeHandler,
  };
  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default PartsAndMaterialsTable;
