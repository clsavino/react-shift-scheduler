var React = require("react");
var router = require("react-router");
var Route = router.Route;
var Router = router.Router;

var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

// landing components
var Main = require("../components/Main");
var Login = require("../components/children/Login");
var Register = require("../components/children/Register");
// manager components
>>>>>>> styling and manager routes
var Manager = require("../components/Manager");
var ManagerHome = require("../components/children/ManagerHome");
// manager - employee management components
var ManagerEmployeeAdd = require("../components/children/ManagerEmployeeAdd");
var ManagerEmployeeUpdate = require("../components/children/ManagerEmployeeUpdate");
var ManagerEmployeeRemove = require("../components/children/ManagerEmployeeRemove");
// manager - schedule components
var ManagerSchedulesView = require("../components/children/ManagerSchedulesView");
var ManagerSchedulesEdit = require("../components/children/ManagerSchedulesEdit");
var ManagerSchedulesReport = require("../components/children/ManagerSchedulesReport");
// manager - billing components
var ManagerBillingCreate = require("../components/children/ManagerBillingCreate");
var ManagerBillingView = require("../components/children/ManagerBillingView");
// employee components
var Employee = require("../components/Employee");
var EmployeeHome = require("../components/children/EmployeeHome");
// employee - info components
// employee - schedule components

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <IndexRoute component={Login} />
    </Route>
    <Route path="manager" component={Manager}>
        <Route path="employeeAdd" component={ManagerEmployeeAdd} />
        <Route path="employeeUpdate" component={ManagerEmployeeUpdate} />
        <Route path="employeeRemove" component={ManagerEmployeeRemove} />
        <Route path="schedulesView" component={ManagerSchedulesView} />
        <Route path="schedulesEdit" component={ManagerSchedulesEdit} />
        <Route path="schedulesReport" component={ManagerSchedulesReport} />
        <Route path="billingCreate" component={ManagerBillingCreate} />
        <Route path="billingView" component={ManagerBillingView} />
        <IndexRoute component={ManagerHome} />
    </Route>
    <Route path="employee" component={Employee}>
        <IndexRoute component={EmployeeHome} />
    </Route>
  </Router>
);
