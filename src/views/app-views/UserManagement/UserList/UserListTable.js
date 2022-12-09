import React, { useState, useEffect } from "react";

import { Table, Space , Typography} from "antd";
import _ from "lodash"

import avatar from "assets/Avatar2.png"
import Actions from "./Actions";

const {Text} = Typography

const columns = [
  {
    title: "User Id",
    dataIndex: "userId",
  },
  {
    title: "User Name",
    dataIndex: "userName",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,

    render: (item) => {
      const {image , name} = item;
      return (
        <Space size={40}>
          <img src={image}/>
          <Text>{name}</Text>
        </Space>
      )}
  },
  {
    title: "Role",
    dataIndex: "role",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Email Id",
    dataIndex: "emailId",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Nationality",
    dataIndex: "nationality",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <Actions />,
  },
];



const data2 = [
  {
    key: 1,
    userId: "HC-12345",
    userName: {image: avatar , name: "John Smith"},
    role: "Manager",
    phoneNumber: "+65 123456789",
    emailId: "johnsmith@gmail.com",
    nationality: "Singaporean",
    gender: "Male",
    action: "",
  },
];
for (let i = 2; i <= 10; i++) {
  data2.push({
    key: i,
    userId: "HC-123456",
    image: "",
    userName: {image: avatar , name: "John Smith"},
    role: "Manager",
    phoneNumber: "+65 123456789",
    emailId: "johnsmith@gmail.com",
    nationality: "Singaporean",
    gender: "Male",
    action: "",
  });
}

const UserListTable = (props) => {
  const { Users, error } = props;

   const loadedUsers = Users.map((item , index) => {
    return {
      key: index,
      userId: item.userId,
      image: "",
      userName: {image: avatar , name: item.fullname},
      role: _.startCase(item.role),
      phoneNumber: item.phone,
      emailId: item.email,
      nationality: item.nationality,
      gender: item.gender,
      
    };
  });

  let data = loadedUsers;

  console.log(data.length);

  if(data.length === 0){
    data = data2;
  }





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

export default UserListTable;
