import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { PTOContainer, PTOH1, PTOWrapper, PTOCard, PTOIcon, PTOH2, PTOP  } from './PTOElements'

const PTO = () => {
    return (
        <PTOContainer>
            <PTOH1>Features</PTOH1>
            <PTOWrapper>
                <PTOCard>
                    <PTOIcon src={Icon1}/>
                    <PTOH2>Edit</PTOH2>
                    <PTOP>When you had a slight error in data input and you need to edit it!!!</PTOP>

                </PTOCard>
                <PTOCard>
                    <PTOIcon src={Icon2}/>
                    <PTOH2>Add</PTOH2>
                    <PTOP>When you need to add more employee's to the list!!!</PTOP>
                    
                </PTOCard>
                <PTOCard>
                    <PTOIcon src={Icon3}/>
                    <PTOH2>Delete</PTOH2>
                    <PTOP>When you want to clear up some space!!!</PTOP>
                </PTOCard>
            </PTOWrapper>
        </PTOContainer>
    )
}

export default PTO
