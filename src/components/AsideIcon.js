import React from 'react';

const AsideIcon = ({icon, text = ''}) => (
   <div className="m-auto border-y-2 p-3 rounded-3xl hover:animate-bounce hover:cursor-pointer transition-all group hover:text-blue-700/100">
      {icon}
      <span className="absolute w-auto p-2 m-2 min-w-max left-17 rounded-md shadow-md text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
         {text}
      </span>
   </div>
)

export default AsideIcon;