import { Switch, Route } from "react-router-dom";

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <SignIn />
            </Route>
            <Route path="/SignUp">
                <SignUp />
            </Route>
        </Switch>
    );
}