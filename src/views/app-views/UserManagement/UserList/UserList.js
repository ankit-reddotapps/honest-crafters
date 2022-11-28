import React, { useState , useEffect } from "react";
import { Button } from "antd";
import axios from "axios";

import UserManagementIcon from "../../../../assets/svg/usermManagementPage.svg";
import PageHeading from "components/shared-components/PageHeading/PageHeading";
import SearchBox from "./SearchBox";
import filterIcon from "../../../../assets/svg/filterIcon.svg";
import exportIcon from "../../../../assets/svg/exportIcon.svg";
import plusIcon from "../../../../assets/svg/plus.svg";
import UserListTable from "./UserListTable";
// import Actions from "./Actions";
import Filter from "./Filter";
import Modal from "components/UI/Modal";
import Export from "./Export-UserList";
import { Link , useRouteMatch  } from "react-router-dom";
import { set } from "lodash";

const UserList = () => {

  const match = useRouteMatch();

  const [showExportOption , setShowExportOption] = useState(false);

  const exportHandler = () => {
    setShowExportOption(prev => !prev);
  }

  const [Users , setUsers] = useState([]);
  const [error , setError] = useState();

  useEffect(() => {
    const getUsers = async() => {
      let response;
      try{
        response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/get-all-users`)
        if(response.data.success){
          setUsers(response.data.data);
        }
        else{
          throw new Error(response.data.message || "Something went Wrong");
        }
      }catch(err){
        setError(err.message);
      }
    }
    getUsers();
  } , [])

  const exportModal = (
    <Modal onclose={exportHandler}>
      
      <Export onClose={exportHandler}/>
    </Modal>
  )
  return (
    <React.Fragment>

      {showExportOption && exportModal}
      {/* Heading */}
      <div>
        <PageHeading
          icon={UserManagementIcon}
          title="User Management / User List"
        />
      </div>

      {/* buttons */}
      <div className="d-flex justify-content-between mb-3">
        <div className=" d-flex align-items-center justify-content-between">
          <SearchBox />
          <Filter>
            <Button className="d-flex align-items-center ml-2">
              <img className="mr-2" src={filterIcon} alt="filterIcon"></img>
              Filters
            </Button>
          </Filter>

          <Button className="d-flex align-items-center ml-2" onClick={exportHandler}>
            <img className="mr-2" src={exportIcon} alt="exportIcon"></img>Export
          </Button>
        </div>
        <div>
          <Link to="/app/user-management/add-new-staff">
          <Button
            className="d-flex align-items-center"
            type="primary"
            size="large"
          >
            <img className="mr-2" src={plusIcon} alt="plusIcon"></img>
            Add new
          </Button>
          </Link>
        </div>
      </div>

      {/* table */}
      <div>
        <UserListTable Users={Users} error={error} />
      </div>
    </React.Fragment>
  );
};

export default UserList;
