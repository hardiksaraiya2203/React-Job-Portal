const RecruiterType = JSON.parse(localStorage.getItem('token')).type

export const navigationsForApllication =   [
  { name: 'Dashboard', path: 'dashboard/default', icon: 'dashboard' },
  { name: 'ListJob', path: '/applicant/ListJob', icon: 'assignment' },
  { name: 'Applicant Profile', path: '/applicant/ApllicantProfile', icon: 'account_box' },
  { name: 'Applications', path: '/applicant/Applications', icon: 'account_box' },
]
export const navigations =  RecruiterType == "recruiter"? [
  { name: 'Dashboard', path: 'dashboard/default', icon: 'dashboard' },
  { name: 'Create Job', path: '/Recruiter/CreateJob', icon: 'create' },
  { name: 'Profile', path: '/Recruiter/Profile', icon: 'account_box' },
  { name: 'List Jobs', path: '/Recruiter/Listjobs', icon: 'assignment' },
  { name: 'Employees', path: '/Recruiter/Employees', icon: 'group' },

] : navigationsForApllication 

