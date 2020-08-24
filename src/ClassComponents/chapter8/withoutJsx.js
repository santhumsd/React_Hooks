import  React, { createElement } from 'react';

const WithoutJsx=()=>{


    return React.createElement(
        'div',
         {id:"san",className:"san123"},
         React.createElement(
             'h1',
             null,
             "Hi this is Santhosh From WithoutJsx"
         )
    )
}
export default WithoutJsx;