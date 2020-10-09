import React from 'react';
import ComponentB from './ComponentB';
export const userContext=React.createContext();
export const channelContext=React.createContext();
function ComponentHookA() {
    return (
        <div>
            <userContext.Provider value="Santhosh">
               <channelContext.Provider value="SanFransico Channel">
                   <ComponentB/>
               </channelContext.Provider>
            </userContext.Provider>
        </div>
    )
}

export default ComponentHookA
