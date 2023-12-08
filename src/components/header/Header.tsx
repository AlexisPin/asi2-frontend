import { useState } from 'react';

import { AppBar } from '@mui/material';

export const Header = ({}) => {

    // Remplacer par un reducer
    const [isLogin, setIsLogin] = useState(false);

    const loginPart:JSX.Element = (
        <>
            {
                isLogin ?
                <div>
                    J.DOE
                </div>
                :
                <div onClick={() => {}}> 
                    Login
                </div>
            }
        </>
    )

    return (
        <AppBar
            position={'sticky'}
        >
            {loginPart}
        </AppBar>
    )
}

export default Header;