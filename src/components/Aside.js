import React from 'react';
import { GiFeather } from 'react-icons/gi'
import {GiBrain} from 'react-icons/gi'
import { BsSoundwave } from 'react-icons/bs'
import { GiFox } from 'react-icons/gi'
import { GiDaggers } from 'react-icons/gi'
import AsideIcon from './AsideIcon'

const Aside = () => {
   const feather = 'Feather';
   const soundWave = 'SoundWave';
   const brains = 'Brains';
   const fox = 'Fox';
   const daggers = 'Daggers';
   

   return (
      <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col shadow-2xl p-2 text-center text-blue-500/90 bg-slate-300/0">

         <AsideIcon icon={<GiFeather size="40"/>} text={feather}/>
         <AsideIcon icon={<BsSoundwave size="40"/>} text={soundWave}/>
         <AsideIcon icon={<GiBrain size="40"/>} text={brains}/>
         <AsideIcon icon={<GiFox size="40"/>} text={fox}/>
         <AsideIcon icon={<GiDaggers size="40"/>} text={daggers}/>

      </div>
   )
}



export default Aside;