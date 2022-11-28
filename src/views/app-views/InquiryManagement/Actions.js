import React, { useState } from "react";
// import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import EllipsisDropdown from "components/shared-components/EllipsisDropdown/index";
import Modal from "components/UI/Modal";

import { Menu, Typography, Button } from "antd";
import Icon from "@ant-design/icons";

import {
  CrossIcon,
  ChangeAssigneeIcon,
  ReportEnquiryIcon,
  CreateQuotationIcon,
} from "./ActionsIcons";

import { InquiryIcon } from "./svgIcons";

const { Title, Text } = Typography;

const Actions = () => {
  const [showModal, setShowModal] = useState(false);

  const closeInquiryHandler = () => {
    setShowModal((prev) => !prev);
  };

  const closeInquiryModal = (
    <Modal>
      <div className="text-center">
        <Icon component={InquiryIcon} />
        <div>
          <Title>Close Inquiry</Title>
					<br/>
          <Text type="secondary">
            Are you sure you want to close enquiry id 123456?
          </Text>
          <div>
            <br />
            <br />
           

            <Button className="m-1 mr-3 " type="primary">
              Yes, Confirm
            </Button>

            <Button className="m-1" onClick={closeInquiryHandler}>
              No, Cancel
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );

  return (
    <>
      {showModal && closeInquiryModal}
      <EllipsisDropdown
        menu={
          <Menu>
            <Menu.Item  onClick={closeInquiryHandler}>
              <span className="d-flex align-items-center">
                <Icon className="mr-2" component={CrossIcon}  />
                Close Inquiry
              </span>
            </Menu.Item>
            <Menu.Item >
              <span className="d-flex align-items-center">
                <Icon className="mr-2" component={ChangeAssigneeIcon}  />
                Change Assignee
              </span>
            </Menu.Item >
            <Menu.Item >
              <span className="d-flex align-items-center">
                <Icon className="mr-2" component={ReportEnquiryIcon}  />
                Report Inquiry
              </span>
            </Menu.Item>
            <Menu.Item >
              <span className="d-flex align-items-center">
                <Icon className="mr-2" component={CreateQuotationIcon}  />
                Create Quotation
              </span>
            </Menu.Item>
          </Menu>
        }
      />
    </>
  );
};

export default Actions;
