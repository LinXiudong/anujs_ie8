import App from "./view/App"
import Home from "./view/Home"

//初始化时，重定向到首页
let routesFisrt = true;
function redirectToIndex(nextState, replaceState) {
    if(routesFisrt){
        routesFisrt = false;

        replaceState({
            nextPathname: nextState.location.pathname
        }, '/home/index')
    }
}

const routes = [
    {
        onEnter: redirectToIndex,
        path: "/",
        component: App,
    },
    {
        path: "/home",
        component: Home,
        childRoutes: [
            {
                path: "index",
                getComponent: (location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('./view/Index').default)
                    }, 'Index')
                }
            }
        ]
    }

];

export default routes;
