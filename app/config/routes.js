var React = require("react");
var router = require("react-router");
var Route = router.Route;
var Router = router.Router;

var browserHistory = router.browserHistory;
var IndexRoute = router.IndexRoute;

// landing components
var Main = require("../components/Main");
var Login = require("../components/children/Login");
var Register = require("../components/children/Register");
// manager components
var Manager = require("../components/Manager");
var ManagerHome = require("../components/children/ManagerHome");
var ManagerEmployeeAll = require("../components/children/ManagerEmployeeAll");
var ManagerSchedulesCreate = require("../components/children/ManagerSchedulesCreate");
// employee components
var Employee = require("../components/Employee");
var EmployeeHome = require("../components/children/EmployeeHome");

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <IndexRoute component={Login} />
        <Route path="manager" component={Manager}>
            <Route path="employeeAll" component={ManagerEmployeeAll} />
            <Route path="schedulesCreate" component={ManagerSchedulesCreate} />
            <IndexRoute component={ManagerHome} />
        </Route>
        <Route path="employee" component={Employee}>
            <IndexRoute component={EmployeeHome} />
        </Route>
    </Route>
  </Router>
);