import dashboardIcon from "../assets/speed_black_24dp.svg";

import {
  DashboardOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

import { DashboardIcon } from "assets/Icons/DashboardIcon";

// const dashBoardNavTree = [
//   {
//     key: "dashboard",
//     path: `${APP_PREFIX_PATH}`,
//     title: "Dashboard",
//     icon: dashboardIcon,
//     breadcrumb: false,
//     submenu: [],
//   },

// ]

const dashBoardNavTree = [
  {
    key: "dashboard",
    path: `${APP_PREFIX_PATH}/dashboard`,
    title: "Dashboard",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "finance",
    path: `${APP_PREFIX_PATH}/dashboard/finance`,
    title: "Finance",
    icon: "",
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "sales",
    path: `${APP_PREFIX_PATH}/dashboard/sales`,
    title: "Sales",
    icon: "",
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "inventory",
    path: `${APP_PREFIX_PATH}/dashboard/inventory`,
    title: "Inventory",
    icon: "",
    breadcrumb: false,
    submenu: [],
  },

  {
    key: "user-management",
    path: `${APP_PREFIX_PATH}/user-management`,
    title: "User Management",
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "account-management",
    path: `${APP_PREFIX_PATH}/account-manageent`,
    title: "Account Management",
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "inventory-management",
    path: `${APP_PREFIX_PATH}/inventory-management`,
    title: "Inventory Management",
    icon: QuestionCircleOutlined,
    breadcrumb: false,
    submenu: [],
  },
]



const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;

// import { DashboardOutlined } from '@ant-design/icons'

// const navigationConfig = [
//   {
// 		key: 'new-component-key',
// 		path: '',
// 		title: 'myNewComponent',
// 		icon: DashboardOutlined,
// 		breadcrumb: false,
// 		submenu: [
// 			{
// 				key: 'new-component-child-key',
// 				path: '',
// 				title: 'myNewComponentFirstLevel',
// 				icon: DashboardOutlined,
// 				breadcrumb: true,
// 				submenu: [
// 					{
// 						key: 'new-component-child-key-1',
// 						path: '/app/new-component-path-1',
// 						title: 'myNewComponentSecondLevelOne',
// 						icon: DashboardOutlined,
// 						breadcrumb: true,
// 						submenu: []
// 					},
// 					{
// 						key: 'new-component-child-key-2',
// 						path: '/app/new-component-path-2',
// 						title: 'myNewComponentSecondLevelTwo',
// 						icon: DashboardOutlined,
// 						breadcrumb: true,
// 						submenu: []
// 					}
// 				]
// 			}
// 		]
// 	}
// ]

// export default navigationConfig;
