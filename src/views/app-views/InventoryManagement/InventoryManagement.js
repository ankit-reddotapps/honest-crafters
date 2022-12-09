import React from "react";
import { Route , Redirect , useRouteMatch } from "react-router-dom";

import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'
import PartsAndMaterials from "./PartsAndMaterials/PartsAndMaterials";
import AddNewPartsAndMaterials from "./PartsAndMaterials/AddNewPartsAndMaterials";
import SprayPaints from "./PartsAndMaterials/SprayPaints/SprayPaints";
import AddNewPo from "./PartsAndMaterials/SprayPaints/AddNew/AddNewPo";
import AddNewQuotation from "./PartsAndMaterials/SprayPaints/AddNew/AddNewQuotation";
import Category from "./Category/Category";
import AddNewCategory from "./Category/AddNew/AddNewCategory";
import AddNewSubCategory from "./Category/AddNew/AddNewSubCategory"
import Vendors from "./Vendors/Vendors";
import AddNewVendor from "./Vendors/AddNew/AddNewVendor"
import VendorDetails from "./Vendors/VendorDetails/VendorDetails";
import CreatePo from "./Vendors/VendorDetails/CreatePo";
import Stock from "./Stock/Stock";



const InventoryManagement = () => {

  const match = useRouteMatch();
  return (
    <div>
      <Route path={`${APP_PREFIX_PATH}/inventory-management`} exact>
        <Redirect to={`${match.path}/parts-and-materials`} />
      </Route>
      <Route path={`${match.path}/parts-and-materials`} exact>
        <PartsAndMaterials/>
      </Route>
      <Route path={`${match.path}/parts-and-materials/add-new-parts-and-materials`} exact>
        <AddNewPartsAndMaterials/>
      </Route>
      <Route path={`${match.path}/parts-and-materials/spray-paints`} exact>
        <SprayPaints/>
      </Route>
      <Route path={`${match.path}/parts-and-materials/spray-paints/add-new-po`} exact>
        <AddNewPo/>
      </Route>
      <Route path={`${match.path}/parts-and-materials/spray-paints/add-new-quotation`} exact>
        <AddNewQuotation/>
      </Route>
      <Route path={`${match.path}/category`} exact>
        <Category/>
      </Route>
      <Route path={`${match.path}/category/add-new-category`} exact>
        <AddNewCategory/>
      </Route>
      <Route path={`${match.path}/category/add-new-sub-category`} exact>
        <AddNewSubCategory/>
      </Route>
      <Route path={`${match.path}/vendors`} exact>
        <Vendors/>
      </Route>
      
      <Route path={`${match.path}/vendors/add-new-vendor`} exact>
        <AddNewVendor/>
      </Route>
      <Route path={`${match.path}/vendors/vendor-details`} exact>
        <VendorDetails/>
      </Route>
      
      <Route path={`${match.path}/vendors/vendor-details/create-po`} exact>
        <CreatePo/>
      </Route>
      <Route path={`${match.path}/stock`} exact>
        <Stock/>
      </Route>
      
    </div>
  );
};

export default InventoryManagement;
