import {useContext } from 'react';
import { sharedData } from './App';

function UserInfo()
{
    const user=useContext(sharedData);
    return (
        <div>
            <b>Welcome Mr/Mrs</b>{user}
            </div>
    )
}

export default UserInfo;