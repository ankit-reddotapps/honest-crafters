import React , {useState} from 'react'

import {Table , Button, Tag} from 'antd';
import Icon from '@ant-design/icons'

import { WhatsappIcon } from 'assets/svg/icon';

import Actions from './Actions';

const columns = [
  {
    title: 'Inquiry Id',
    dataIndex: 'inquiryId',
  },
  {
    title: 'User Name',
    dataIndex: 'userName',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.userName - b.userName,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.phoneNuber - b.phoneNuber,
  },
  {
    title: 'Email Id',
    dataIndex: 'emailId',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.emailId - b.emailId,
   
  },
  
  {
    title: 'Date of Inquiry',
    dataIndex: 'dateOfInquiry',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.dateOfInquiry - b.dateOfInquiry,

    
  },
  
  {
    title: 'Assigned To',
    dataIndex: 'assignedTo',
  },
  {
    title: 'Inquiry Chanel',
    dataIndex: 'inquiryChanel',
    render: (icon) => {
      return(
      <span className='d-flex justify-content-center'>
        <Icon component={icon}/>
        </span>
        )
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    

    render: (status) => {
      return(
      <span>
        <Tag color="green" key={status}>
          {status}
        </Tag>
        </span>
        )
    }

  },
  {
    title:"Action",
    dataIndex: "action",
    render: () => {
      return (
        <Actions/>
      )
    }
  }
    
    
];

const data = [
  {
    key: 1,
    inquiryId: "HC-123456",
    userName: "John Smith",
    phoneNumber: "+65 123456789",
    emailId: "johnsmith@gmail.com",
    dateOfInquiry: "20/08/22",
    assignedTo: "Wade Warren",
    inquiryChanel: WhatsappIcon,
    status: "closed",

  }
];
for(let i = 2 ; i <= 7 ; i++){
  data.push(
    {
      key: 1,
      inquiryId: "HC-123456",
      userName: "John Smith",
      phoneNumber: "+65 123456789",
      emailId: "johnsmith@gmail.com",
      dateOfInquiry: "20/08/22",
      assignedTo: "Wade Warren",
      inquiryChanel: WhatsappIcon,
      status: "closed",
  
    }
  )
}

const InquiryListTable = () => {
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
    <div className='mt-3'>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} className="w-100"/>
    </div>
  )
}

export default InquiryListTable