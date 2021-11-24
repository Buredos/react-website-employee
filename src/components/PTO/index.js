import React from 'react'
import Icon1 from '../../images/png1.png'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { PTOContainer, PTOH1, PTOWrapper, PTOCard, PTOIcon, PTOH2, PTOP  } from './PTOElements'

const PTO = () => {
    return (
        <PTOContainer>
            <PTOH1>PTO Categories</PTOH1>
            <PTOWrapper>
                <PTOCard>
                    <PTOIcon src={Icon1}/>
                    <PTOH2>Annual Leave</PTOH2>
                    <PTOP>When you need time off for some family business</PTOP>

                </PTOCard>
                <PTOCard>
                    <PTOIcon src={Icon2}/>
                    <PTOH2>Sick Leave</PTOH2>
                    <PTOP>When you're sick and you need to take  leave</PTOP>
                    
                </PTOCard>
                <PTOCard>
                    <PTOIcon src={Icon3}/>
                    <PTOH2>Bereavement Leave</PTOH2>
                    <PTOP>When you want to take leave but also get paid!!!</PTOP>
                    
                </PTOCard>
            </PTOWrapper>
        </PTOContainer>
    )
}

export default PTO
