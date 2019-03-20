import App from "../view/App"
import Home from "../view/Home/home"

//初始化时，重定向到首页
let firstRouter = true;
function redirectToIndex(nextState, replaceState) {
    if(firstRouter){
        firstRouter = false;

        replaceState({
            nextPathname: nextState.location.pathname
        }, '/home/home')
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
                        cb(null, require('../view/Index').default)
                    }, 'Index')
                }
            },
            {
                path: "demo",
                getComponent: (location, cb) => {
                    require.ensure([], (require) => {
                        cb(null, require('../view/demo/demo').default)
                    }, 'demo')
                }
            }
        ]
    }

];

export default routes;
