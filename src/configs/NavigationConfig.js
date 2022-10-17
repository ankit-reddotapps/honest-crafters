import { 
  DashboardOutlined,
  UserOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

// const dashBoardNavTree = [{
//   key: 'home',
//   path: `${APP_PREFIX_PATH}/home`,
//   title: 'home',
//   icon: DashboardOutlined,
//   breadcrumb: false,
//   submenu: []
// }]

const dashBoardNavTree = [{
  key: 'dashboard',
  path: `${APP_PREFIX_PATH}/dashboard`,
  title: 'Dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
      {
        key: 'finance',
        path: `${APP_PREFIX_PATH}/dashboard/finance`,
        title: 'Finance',
        icon: "",
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'sales',
        path: `${APP_PREFIX_PATH}/dashboard/sales`,
        title: 'Sales',
        icon: "",
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'inventory',
        path: `${APP_PREFIX_PATH}/dashboard/inventory`,
        title: 'Inventory',
        icon: "",
        breadcrumb: false,
        submenu: []
      }

  ]
},
{
  key: 'user-management',
  path: `${APP_PREFIX_PATH}/user-management`,
  title: 'User Management',
  icon: UserOutlined,
  breadcrumb: false,
  submenu: []
},
{
  key: 'account-management',
  path: `${APP_PREFIX_PATH}/account-manageent`,
  title: 'Account Management',
  icon: UserOutlined,
  breadcrumb: false,
  submenu: []
},
{
  key: 'inventory-management',
  path: `${APP_PREFIX_PATH}/inventory-management`,
  title: 'Inventory Management',
  icon: QuestionCircleOutlined ,
  breadcrumb: false,
  submenu: []
}
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
