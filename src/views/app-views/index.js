import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import Finance from "./Dashboard/Finance";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        
        
        <Route path={`${APP_PREFIX_PATH}/dashboard/finance`} component={lazy(() => import(`./Dashboard/Finance`))}/>
    
        <Route path={`${APP_PREFIX_PATH}/dashboard/sales`} component={lazy(() => import(`./Dashboard/Sales`))} />
        <Route path={`${APP_PREFIX_PATH}/dashboard/inventory`} component={lazy(() => import(`./Dashboard/Inventory`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/dashboard/finance`} />
        
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);