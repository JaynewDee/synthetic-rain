import React from 'react';
import { FiAward } from 'react-icons/fi'

const Aside = () => {
   return (
      <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col shadow-2xl p-2 text-center text-blue-400/70 bg-slate-300/20">

         <AsideIcon icon={FiAward}/>

      </div>
   )
}

const AsideIcon = ({icon}) => (
   <div>
      {icon}
   </div>
)

export default Aside;