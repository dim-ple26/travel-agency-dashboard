// import { type RouteConfig, route } from "@react-router/dev/routes";


// export default [
//     route( path: 'dashboard', file: 'routes/admin/dashboard.tsx')
// ] satisfies RouteConfig;

import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
    layout( "routes/admin/admin-layout.tsx" , [
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('allusers', 'routes/admin/allusers.tsx')

    ]),
] satisfies RouteConfig;
