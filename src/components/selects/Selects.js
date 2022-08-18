import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={BoraBora} text='Nabran' />
                <SelectsImg bgImg={BoraBora2} text='Şəki' />
                <SelectsImg bgImg={Maldives} text='Quba' />
                <SelectsImg bgImg={Maldives2} text='Qusar' />
                <SelectsImg bgImg={Maldives3} text='Şuşa' />
                <SelectsImg bgImg={KeyWest} text='Kəlbəcər' />
            </div>

        </div>
    )
}

export default Selects
