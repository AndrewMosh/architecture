import App from "@/components/App";
import React from "react";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Shop = React.lazy(() => import('@/pages/Shop/Shop'));


const routes = [
	{
	  path: "/",
	  element: <App />,
	  children: [
		  {
			  path: "/shop",
			  element: <Suspense fallback={<div>Loading...</div>}><Shop /></Suspense>
		  }
	  ]
	},
  ]

export const router = createBrowserRouter(routes);
export default routes