import React from 'react'
import { Redirect, Route , useRouteMatch } from 'react-router-dom'
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'
import UserList from './UserList/UserList';
import AddNewStaff from './AddNewStaff/AddNewStaff';


const UserManagement = () => {

  const match = useRouteMatch();
  return (
    <div>
      <Route path={`${APP_PREFIX_PATH}/user-management`} exact>
        <Redirect to={`${match.path}/user-list`}/>
      </Route>
      <Route path={`${match.path}/user-list`}>
        <UserList/>
      </Route>
      <Route path={`${match.path}/add-new-staff`}>
        <AddNewStaff/>
      </Route>
    </div>
  )
}

export default UserManagement