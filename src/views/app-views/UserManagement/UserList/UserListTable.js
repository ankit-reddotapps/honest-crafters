import React , {useState , useEffect} from 'react'
import {Table , Button} from 'antd';
import Actions from './Actions';

const columns = [
  {
    title: 'User Id',
    dataIndex: 'userId',
  },
  {
    title: '',
    dataIndex: 'image',
  },
  {
    title: 'User Name',
    dataIndex: 'userName',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Email Id',
    dataIndex: 'emailId',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Nationality',
    dataIndex: 'nationality',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <Actions/>,
  },
];

const data = [
  {
    key: 1,
    userId: 'HC-12345',
    image: '',
    userName: 'John Smith',
    role: 'Manager',
    phoneNumber: '+65 123456789',
    emailId: 'johnsmith@gmail.com',
    nationality: 'Singaporean',
    gender: 'Male',
    action: ''

  }
];
for(let i = 2 ; i <= 10 ; i++){
  data.push({
    key: i,
    userId: 'HC-123456',
    image: '',
    userName: 'John Smith',
    role: 'Manager',
    phoneNumber: '+65 123456789',
    emailId: 'johnsmith@gmail.com',
    nationality: 'Singaporean',
    gender: 'Male',
    action: ''
  })
}

const UserListTable = (props) => {

  const {Users , error } = props

  const loadedUsers =   Users.map((item , index) => {
    return (
      {
        key: index,
        userId: item.userId,
        userName: item.fullname,
        emailId: item.email,
        phoneNumber: item.phone,
        nationality: item.nationality,
        gender: item.gender,

      }
      

      
    )
  })
  const [selectedRowKeys , setSelectedRowKeys] = useState([]);

  const selectChangeHandler = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: selectChangeHandler
  }
  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}

export default UserListTable