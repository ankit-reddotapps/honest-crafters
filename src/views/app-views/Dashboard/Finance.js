import React from "react";

import dasboardIcon from "../../../assets/dashboard-icon.svg";
import DataDisplayWidget from "components/shared-components/DataDisplayWidget";
import { Typography } from "antd";
import Chart from "./Chart";

import {
  DashboardOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  BarChartOutlined,
} from "@ant-design/icons";


const { Title } = Typography;

const Finance = () => {
  // console.log(DashboardOutlined);
  return (
    <>
      {/* Heading */}
      <div className="d-flex">
        <span className="mr-1">
          <img src={dasboardIcon} alt="dashboard Icon"></img>
        </span>
        <Title level={4} className="font-weight-bold">
          Dashboard
        </Title>
      </div>
      {/* Heading */}




      {/* Main */}
      <div className="d-flex justify-content-between">




        {/* {Left Side} */}
        <div className="mr-2 w-50">
          <div className="w-100">
            <DataDisplayWidget
              // icon={<BarChartOutlined />}
              value="$24.780"
              title="Revenue"
              text="Compare to last year (2021)"
              color="cyan"
              size={"lg"}
              avatarSize={50}
              vertical={true}
              alignItems="start"
            />
          </div>
          <div className="w-100">
            <DataDisplayWidget
              // icon={<BarChartOutlined />}
              value="$24.780"
              title="Sales"
              text="Compare to last year (2021)"
              color="cyan"
              size={"lg"}
              avatarSize={50}
              vertical={true}
              alignItems="start"
            />
          </div>
          <div className="w-100">
            <DataDisplayWidget
              // icon={<BarChartOutlined />}
              value="$24.780"
              title="Expenses"
              text="Compare to last year (2021)"
              color="cyan"
              size={"lg"}
              avatarSize={50}
              vertical={true}
              alignItems="start"
            />
          </div>
        </div>
        {/* {Left side end} */}





        {/* {Right side} */}
        <div className="d-flex ml-2">
          <div>
            <div style={{ width: 300 }} className="mr-4">
              <DataDisplayWidget
                icon={<BarChartOutlined />}
                value="$37,212"
                title="Net Profit"
                color="cyan"
                size={"md"}
                avatarSize={100}
                vertical={true}
                alignItems="center"
              />
            </div>
            <div style={{ width: 300 }}>
              <DataDisplayWidget
                icon={<BarChartOutlined />}
                value="$37,212"
                title="Net Profit"
                color="cyan"
                size={"md"}
                avatarSize={100}
                vertical={true}
                classes="my-card"
                alignItems="center"
              />
            </div>
          </div>
          <div>
            <div style={{ width: 300 }} className="mr-4">
              <DataDisplayWidget
                icon={<BarChartOutlined />}
                value="$37,212"
                title="Net Profit"
                color="cyan"
                size={"md"}
                avatarSize={100}
                vertical={true}
                alignItems="center"
              />
            </div>
            <div style={{ width: 300 }}>
              <DataDisplayWidget
                icon={<BarChartOutlined />}
                value="$37,212"
                title="Net Profit"
                color="cyan"
                size={"md"}
                avatarSize={100}
                vertical={true}
                classes="my-card"
                alignItems="center"
              />
            </div>
          </div>
        </div>
        {/* {Right side end} */}




      </div>

      {/* {Main end} */}


      <div>
        <Chart/>
      </div>

      
    </>
  );
};

export default Finance;
