import { RouterProvider, createBrowserRouter } from "react-router"
import HeroSection from "../components/HeroSection";
import Register, {loader as registerLoader, action as registerAction} from "../components/Register";
import LoginPage, {loader as loginLoader, action as loginAction} from "../components/LoginPage";
import Admin from "../components/Admin";
import AdminGreetings from "../components/AdminGreetings";
import AdminRoot, {loader as adminRootLoader} from "../components/AdminRoot";
import AdminsActivities, {loader as adminsActivitiesLoader} from "../components/AdminsActivities";
import AdminsMeetings, {loader as adminsMeetingsLoader, action as adminsMeetingsAction} from "../components/AdminsMeetings";
import AdminLoginPage, {loader as adminLoginPageLoader, action as adminLoginPageAction} from "../components/AdminLoginPage";
import AdminRegistrationPage, {loader as adminRegistrationPageLoader, action as adminRegistrationPageAction} from "../components/AdminRegistrationPage";

import CustomerServices, {loader as customerServicesLoader} from "../components/CustomerServices";
import CustomerInfo, {loader as customerInfoLoader} from "../components/CustomerInfo";
import CustomerEnquiries, {loader as customerEnquiriesLoader} from "../components/CustomerEnquiries";
import CustomerSubmitEnquiriesOptionPage, {loader as customerSubmitEnquiriesOptionLoader} from "../components/CustomerSubmitEnquiriesOptionPage";
import CustomerDepositePage, {loader as customerDepositePageLoader, action as customerDepositePageAction} from "../components/CustomerDepositePage";
import CustomerWithdrawPage, {loader as customerWithdrawPageLoader, action as customerWithdrawPageAction} from "../components/CustomerWithdrawPage";

import EditCustomerInfo, {loader as editCustomerInfoLoader, action as editCustomerInfoAction} from "../components/EditCustomerInfo";
import InboxHelpCenter, {loader as inboxHelpCenterLoader, action as inboxHelpCenterAction} from "../components/InboxHelpCenter";
import UBA from "../components/UBA";


const routes = [
    {path: '/', element: <UBA />, children: [
        {path: '', element: <HeroSection />},
        {path: 'login', element: <LoginPage />, loader: loginLoader, action: loginAction},
        {path: 'register', element: <Register />, loader: registerLoader, action: registerAction},
        {path: 'admin', element: <Admin />, children: [
            {path: '', element: <AdminGreetings />},
            {path: 'activities', element: <AdminsActivities />, loader: adminsActivitiesLoader},
            {path: 'meetings', element: <AdminsMeetings />, loader: adminsMeetingsLoader, action: adminsMeetingsAction},
            {path: 'login', element: <AdminLoginPage />, loader: adminLoginPageLoader, action: adminLoginPageAction},
            {path: 'apply', element: <AdminRegistrationPage />, loader: adminRegistrationPageLoader, action: adminRegistrationPageAction},
            {path: 'root', element: <AdminRoot />, loader: adminRootLoader, children: [
                {path: 'users', element: null},
                {path: 'role/:id/update', element: null},

                {path: '*', element: null}
            ]},

            {path: '*', element: null}
        ]},

        {path: 'services', element: <CustomerServices />, loader: customerServicesLoader, children: [
            {path: '', element: <CustomerInfo />, loader: customerInfoLoader},

            {path: 'enquiries/:id', element: <CustomerEnquiries />, loader: customerEnquiriesLoader, children: [
                {path: '', element: <CustomerSubmitEnquiriesOptionPage />, loader: customerSubmitEnquiriesOptionLoader},
                {path: 'deposit', element: <CustomerDepositePage />, loader: customerDepositePageLoader, action: customerDepositePageAction},
                {path: 'withdraw', element: <CustomerWithdrawPage />, loader: customerWithdrawPageLoader, action: customerWithdrawPageAction}
            ]},

            {path: 'edit', element: <EditCustomerInfo />, loader: editCustomerInfoLoader, action: editCustomerInfoAction},
            
            {path: null, element: null}, 

            {path: 'inbox/center', element: <InboxHelpCenter />, loader: inboxHelpCenterLoader, action: inboxHelpCenterAction}
        ]},

        {path: '*', element: null}
    ]}
];


export default function App(){

    const router = createBrowserRouter(routes);

    return(
        <RouterProvider router={router} />
    )
};