import React,{useContext} from 'react';
import{userContext,channelContext} from './ComponentHookA'

function ComponentC() {
    const user=useContext(userContext);
    const  channel=useContext(channelContext);
    return (
        <h1>
            {user}-{channel}
        </h1>
    )
}

export default ComponentC
