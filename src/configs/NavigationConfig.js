import dashboardIcon from "../assets/speed_black_24dp.svg";
import Icon from "@ant-design/icons"

import { APP_PREFIX_PATH } from "configs/AppConfig";

import {
  DashboardIcon,
  UserManagementIcon,
  AccountManagementIcon,
  InquiryManagementIcon,
  ItemAndServicesIcon,
  DeliveryManagementIcon,
  InventoryManagementIcon,
  FinanceManagementIcon,
  ReportIcon,
} from "./svgIcons";



// const dashBoardNavTree = [
//   {
//     key: "dashboard",
//     path: `${APP_PREFIX_PATH}`,
//     title: "Dashboard",
//     // icon: <Icon component={dashboardIcon}/>,
//     icon: DashboardIcon,
//     breadcrumb: false,
//     submenu: [],
//   },

// ]

const dashBoardNavTree = [
  {
    key: "d",
    // path: `${APP_PREFIX_PATH}/dashboard`,
    path: "",
    title: " ",
    icon: "",
    breadcrumb: false,
    submenu: [
      {
        key: "dashboard",
        // path: `${APP_PREFIX_PATH}/dashboard`,
        path: `${APP_PREFIX_PATH}/dashboard/finance`,
        title: "Dashboard",
        icon: DashboardIcon,
        breadcrumb: false,
        submenu: [
          {
            key: "finance",
            path: `${APP_PREFIX_PATH}/dashboard/finance`,
            title: "Finance",
            
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "sales",
            path: `${APP_PREFIX_PATH}/dashboard/sales`,
            title: "Sales",
            
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "inventory",
            path: `${APP_PREFIX_PATH}/dashboard/inventory`,
            title: "Inventory",
            
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "user-management",
        path: `${APP_PREFIX_PATH}/user-management`,
        title: "User Management",
        icon: UserManagementIcon,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "account-management",
        path: `${APP_PREFIX_PATH}/account-management`,
        title: "Account Management",
        icon: AccountManagementIcon,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "inquiry-management",
        path: `${APP_PREFIX_PATH}/inquiry-management`,
        title: "Inquiry Management",
        icon: InquiryManagementIcon,
        breadcrumb: false,
        submenu: [
          {
            key: "inquiry-list",
            path: `${APP_PREFIX_PATH}/inquiry-management/inquiry-list`,
            title: "Inquiry List",
            
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "chats",
            path: `${APP_PREFIX_PATH}/inquiry-management/chats`,
            title: "Chats",
           
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "items-and-services",
        path: `${APP_PREFIX_PATH}/items-and-services`,
        title: "Items & Services",
        icon: ItemAndServicesIcon,
        breadcrumb: false,
        submenu: [
          {
            key: "quotations",
            path: `${APP_PREFIX_PATH}/items-and-services/quotations`,
            title: "Quotations",
            
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "invoices",
            path: `${APP_PREFIX_PATH}/items-and-services/invoices`,
            title: "Invoices",
            
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "qc-items",
            path: `${APP_PREFIX_PATH}/items-and-services/qc-items`,
            title: "QC Items",
            
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "items-inventory",
            path: `${APP_PREFIX_PATH}/items-and-services/items-inventory`,
            title: "Items Inventory",
            
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "inventory-management",
        path: `${APP_PREFIX_PATH}/inventory-management`,
        title: "Inventory Management",
        icon: InventoryManagementIcon,
        breadcrumb: false,
        submenu: [
          {
            key: "parts-and-materials",
            path: `${APP_PREFIX_PATH}/inventory-management/parts-and-materials`,
            title: "Parts and Materials",
            
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "category",
            path: `${APP_PREFIX_PATH}/inventory-management/category`,
            title: "Categories",
            
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "vecdors",
            path: `${APP_PREFIX_PATH}/inventory-management/vendors`,
            title: "Vendors",
            
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "stock",
            path: `${APP_PREFIX_PATH}/inventory-management/stock`,
            title: "Stock",
            
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "delivery-management",
        path: `${APP_PREFIX_PATH}/delivery-management`,
        title: "Delivery Management",
        icon: DeliveryManagementIcon,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "finance-management",
        path: `${APP_PREFIX_PATH}/finance-management`,
        title: "Finance Management",
        icon: FinanceManagementIcon,
        breadcrumb: false,
        submenu: [
          {
            key: "invoices",
            path: `${APP_PREFIX_PATH}/finance-management/invoices`,
            title: "Invoices",
            
            breadcrumb: false,
            submenu: []
          },
          {
            key: "payments",
            path: `${APP_PREFIX_PATH}/finance-management/payments`,
            title: "Payments",
            
            breadcrumb: false,
            submenu: []
          },
        ],
      },
      {
        key: "reports",
        path: `${APP_PREFIX_PATH}/reports`,
        title: "Reports",
        icon: ReportIcon,
        breadcrumb: false,
        submenu: [
          {
            key: "salesReport",
            path: `${APP_PREFIX_PATH}/reports/sales-report`,
            title: "Sales Report",
            
            breadcrumb: false,
            submenu: []
          },
          {
            key: "financialReport",
            path: `${APP_PREFIX_PATH}/reports/financial-report`,
            title: "Finanical Report",
            
            breadcrumb: false,
            submenu: []
          },
          {
            key: "customerReport",
            path: `${APP_PREFIX_PATH}/reports/customer-report`,
            title: "Customer Report",
            
            breadcrumb: false,
            submenu: []
          },
          {
            key: "operationalReports",
            path: `${APP_PREFIX_PATH}/reports/operationalReports`,
            title: "Operational Reports",
            
            breadcrumb: false,
            submenu: []
          }
        ],
      },
    ],
  },
];

// const dashBoardNavTree = [
//   {
//     key: "dashboard",
//     // path: `${APP_PREFIX_PATH}/dashboard`,
//     path: `${APP_PREFIX_PATH}/dashboard/finance`,
//     title: "Dashboard",
//     icon: DashboardIcon,
//     breadcrumb: false,
//     submenu: [
//       {
//         key: "finance",
//         path: `${APP_PREFIX_PATH}/dashboard/finance`,
//         title: "Finance",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "sales",
//         path: `${APP_PREFIX_PATH}/dashboard/sales`,
//         title: "Sales",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "inventory",
//         path: `${APP_PREFIX_PATH}/dashboard/inventory`,
//         title: "Inventory",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//     ],
//   },
//   {
//     key: "user-management",
//     path: `${APP_PREFIX_PATH}/user-management`,
//     title: "User Management",
//     icon: UserManagementIcon,
//     breadcrumb: false,
//     submenu: [],
//   },
//   {
//     key: "account-management",
//     path: `${APP_PREFIX_PATH}/account-management`,
//     title: "Account Management",
//     icon: AccountManagementIcon,
//     breadcrumb: false,
//     submenu: [],
//   },
//   {
//     key: "inquiry-management",
//     path: `${APP_PREFIX_PATH}/inquiry-management`,
//     title: "Inquiry Management",
//     icon: InquiryManagementIcon,
//     breadcrumb: false,
//     submenu: [
//       {
//         key: "inquiry-list",
//         path: `${APP_PREFIX_PATH}/inquiry-management/inquiry-list`,
//         title: "Inquiry List",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "chats",
//         path: `${APP_PREFIX_PATH}/inquiry-management/chats`,
//         title: "Chats",
       
//         breadcrumb: false,
//         submenu: [],
//       },
//     ],
//   },
//   {
//     key: "item-and-services",
//     path: `${APP_PREFIX_PATH}/item-and-services`,
//     title: "Item & Services",
//     icon: ItemAndServicesIcon,
//     breadcrumb: false,
//     submenu: [
//       {
//         key: "quotations",
//         path: `${APP_PREFIX_PATH}/item-and-services/quotations`,
//         title: "Quotations",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "invoices",
//         path: `${APP_PREFIX_PATH}/item-and-services/invoices`,
//         title: "Invoices",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "qc-items",
//         path: `${APP_PREFIX_PATH}/item-and-services/qc-items`,
//         title: "QC Items",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "items-inventory",
//         path: `${APP_PREFIX_PATH}/item-and-services/items-inventory`,
//         title: "Items Inventory",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//     ],
//   },
//   {
//     key: "inventory-management",
//     path: `${APP_PREFIX_PATH}/inventory-management`,
//     title: "Inventory Management",
//     icon: InventoryManagementIcon,
//     breadcrumb: false,
//     submenu: [
//       {
//         key: "parts-and-materials",
//         path: `${APP_PREFIX_PATH}/inventory-management/parts-ans-materials`,
//         title: "Parts and Materials",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "categories",
//         path: `${APP_PREFIX_PATH}/inventory-management/categories`,
//         title: "Categories",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "vecdors",
//         path: `${APP_PREFIX_PATH}/inventory-management/vendors`,
//         title: "Vendors",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//       {
//         key: "stock",
//         path: `${APP_PREFIX_PATH}/inventory-management/stock`,
//         title: "Stock",
        
//         breadcrumb: false,
//         submenu: [],
//       },
//     ],
//   },
//   {
//     key: "delivery-management",
//     path: `${APP_PREFIX_PATH}/delivery-management`,
//     title: "Delivery Management",
//     icon: DeliveryManagementIcon,
//     breadcrumb: false,
//     submenu: [],
//   },
//   {
//     key: "finance-management",
//     path: `${APP_PREFIX_PATH}/finance-management`,
//     title: "Finance Management",
//     icon: FinanceManagementIcon,
//     breadcrumb: false,
//     submenu: [
//       {
//         key: "invoices",
//         path: `${APP_PREFIX_PATH}/finance-management/invoices`,
//         title: "Invoices",
        
//         breadcrumb: false,
//         submenu: []
//       },
//       {
//         key: "payments",
//         path: `${APP_PREFIX_PATH}/finance-management/payments`,
//         title: "Payments",
        
//         breadcrumb: false,
//         submenu: []
//       },
//     ],
//   },
//   {
//     key: "reports",
//     path: `${APP_PREFIX_PATH}/reports`,
//     title: "Reports",
//     icon: ReportIcon,
//     breadcrumb: false,
//     submenu: [
//       {
//         key: "salesReport",
//         path: `${APP_PREFIX_PATH}/reports/sales-report`,
//         title: "Sales Report",
        
//         breadcrumb: false,
//         submenu: []
//       },
//       {
//         key: "financialReport",
//         path: `${APP_PREFIX_PATH}/reports/financial-report`,
//         title: "Finanical Report",
        
//         breadcrumb: false,
//         submenu: []
//       },
//       {
//         key: "customerReport",
//         path: `${APP_PREFIX_PATH}/reports/customer-report`,
//         title: "Customer Report",
        
//         breadcrumb: false,
//         submenu: []
//       },
//       {
//         key: "operationalReports",
//         path: `${APP_PREFIX_PATH}/reports/operationalReports`,
//         title: "Operational Reports",
        
//         breadcrumb: false,
//         submenu: []
//       }
//     ],
//   }
// ]


// const dashBoardNavTree = [
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
// 			},
//       {
//         key: 'new-component-key',
// 		path: '',
// 		title: 'myNewComponent',
// 		icon: DashboardOutlined,
// 		breadcrumb: false,
//     submenu: [
//       {
//         key: 'new-component-key',
// 		path: '',
// 		title: 'myNewComponent',
// 		icon: DashboardOutlined,
// 		breadcrumb: false,
//     submenu: []
//       }
//     ]
//       }
// 		]
// 	}
// ]

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
