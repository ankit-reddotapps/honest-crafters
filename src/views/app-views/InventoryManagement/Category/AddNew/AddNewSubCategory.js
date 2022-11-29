import React from "react";

import { Tabs, Button, Row, Col , Table , Card , List , Divider , Typography} from "antd";
import Icon from "@ant-design/icons";

import { InventoryManagementPageIcon } from "assets/svg/icon";
import PageHeading from "components/shared-components/PageHeading/PageHeading";
import { ActivePurchaseOrdersIcon, ActiveQuotationsIcon } from "views/app-views/InventoryManagement/TabIcons";
import UploadBox from "components/shared-components/UploadBox";


import classes from "./AddNewCategory.module.css";
import AddNewSubCategoryForm from "./AddNewSubCategoryForm";
import { TagIcon } from "../../SvgIcons";


const {Title , Text} = Typography



const content = (
  <React.Fragment>
    <Row gutter={20}>
      <Col span={16}>
        <AddNewSubCategoryForm/>
      </Col>
      <Col span={8}>
        <UploadBox
          title="Attachments"
          text={`Drag & drop files here or Choose Files`}
          hint="Files supported:jpg,png,jpeg,etc"
        />
      </Col>
    </Row>

    

    <div className={`d-flex justify-content-end ${classes.actions}`}>
      <Button>Back</Button>
      <Button>Clear All</Button>

      <Button type="primary" className={classes.save_btn}>
        Save
      </Button>
    </div>
  </React.Fragment>
);

const AddNewCategory = () => {
  return (
    <React.Fragment>
      <PageHeading
        title="Inventory Management / Subcategory / Add New Subcategory"
        svg={InventoryManagementPageIcon}
      />
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: (
              <div className="d-flex align-items-center">
                <Icon component={TagIcon} />
                Sub Category Details
              </div>
            ),
            children: content,
          },
        ]}
      />
    </React.Fragment>
  );
};

export default AddNewCategory;
