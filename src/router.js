let routes = [];
let outlet;

const getRoute = () => {
    return location.hash.slice(1) || '';
}

const setRoute = (path) => {
    let selectedRoute;
    routes.find(route => {
        if (route.path === path) {
            location.hash = path;

            let page = new route.component();

            const app = document.getElementById(outlet);
            app.innerHTML = page.get;
        }
    });
}

const addRoutes = (paramRoutes, routeOutlet) => {
    routes = paramRoutes;
    outlet = routeOutlet;
    window.addEventListener("hashchange", initRoute());
}

const initRoute = () => {
    const route = location.hash.slice(1) || '';
    setRoute(route);
}

export {addRoutes, setRoute, getRoute}
