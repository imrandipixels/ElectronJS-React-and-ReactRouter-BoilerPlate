import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from './loader'

const HomePage = lazy(() => import("./Home"));
const LoginPage = lazy(() => import("./Login/index"));


export default function Routes(){

	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/login' component={LoginPage} />
			</Switch>
		</Suspense>
	);
}
