import App from "@/components/App";
import React from "react";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Admin = React.lazy(() => import('@/pages/Admin/Admin'));

const routes = [
	{
	  path: "/",
	  element: <App />,
	  children: [
		  {
			  path: "/admin",
			  element: <Suspense fallback={<div>Loading...</div>}><Admin /></Suspense>
		  }
	  ]
	},
  ]

export const router = createBrowserRouter(routes);
export default routes