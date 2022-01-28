import React from 'react';
import { GiFeather } from 'react-icons/gi'
import {GiBrain} from 'react-icons/gi'
import { BsSoundwave } from 'react-icons/bs'
import { GiFox } from 'react-icons/gi'
import { GiDaggers } from 'react-icons/gi'
import AsideIcon from './AsideIcon'

const Aside = () => {

   

   return (
      <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col shadow-2xl p-2 text-center text-blue-400/70 bg-slate-300/0">

         <AsideIcon icon={<GiFeather size="40"/>}/>
         <AsideIcon icon={<BsSoundwave size="40"/>}/>
         <AsideIcon icon={<GiBrain size="40"/>}/>
         <AsideIcon icon={<GiFox size="40"/>}/>
         <AsideIcon icon={<GiDaggers size="40"/>}/>

      </div>
   )
}



export default Aside;