import React , {useState} from "react";

import { Button } from "antd";
import Icon from "@ant-design/icons"

import SearchBox from "components/shared-components/SearchBox";
import Filter from "components/shared-components/Filter";
import PageHeading from "components/shared-components/PageHeading/PageHeading";
import Export from "./Export-InquiryManagement";
import Modal from "components/UI/Modal";
import InquiryListTable from "./InquiryListTable";


import { InquiryManagementPageIcon , FilterIcon , ExportIcon} from "assets/svg/icon";


const InquiryList = () => {

  const [showExportOption, setShowExportOption] = useState(false);

  

  const exportHandler = () => {
    setShowExportOption((prev) => !prev);
  };

  

  const exportModal = (
    <Modal onclose={exportHandler}>
      <Export onClose={exportHandler} />
    </Modal>
  );

  




  return (
    <>
      {showExportOption && exportModal}
      <div>
        <PageHeading
          icon={InquiryManagementPageIcon}
          svg={InquiryManagementPageIcon}
          title="Inquiry Management / Inquiry List"
        />
      </div>
      <div className=" d-flex align-items-center">
        <SearchBox />
        <Filter>
          <Button className="d-flex align-items-center ml-2">
            {/* <img className="mr-2" src={FilterIcon} alt="filterIcon"></img> */}
            <Icon component={FilterIcon}/>
            Filters
          </Button>
        </Filter>

        <Button
          className="d-flex align-items-center ml-2"
          onClick={exportHandler}
        >
          {/* <img className="mr-2" src={exportIcon} alt="exportIcon"></img> */}
          <Icon component={ExportIcon}/>
          Export
        </Button>
      </div>
      <InquiryListTable/>

    </>
  );
};

export default InquiryList;
