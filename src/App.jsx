import GlobalStyle  from './styles/global';

import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

export function App() {
    return (<>
        <GlobalStyle />
        
        <SignUp />
    </>)
}