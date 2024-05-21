import ApllicantProfile from "./ApllicantProfile";
import Applications from "./Applications";
import ListJob from "./ListJob";


const ApplicantRoutes = [
  { path: '/applicant/ListJob', element: <ListJob/> },
  { path: '/applicant/ApllicantProfile', element: <ApllicantProfile/> },
  { path: '/applicant/Applications', element: <Applications/> },
  
];

export default ApplicantRoutes;