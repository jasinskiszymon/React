import React, {FC, useState} from 'react'

import styled from 'styled-components';
import Pen from '../../../icon/pencil.png';
export const SkillsInfoWrapper = styled.div`
    width: 90%;
    font-size: 21px;
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
    #expertise, #specialties, #admission-to-practice-law, #countries{
        margin: 15px;
        h2{
            
            color: gray;
            margin: 5px 0;
            font-size: 21px;
        }
        p{
            height: 25px;
            display: inline-block;
            font-size: 21px;
            padding: 4px 5px;
            margin-right: 10px;
            border-radius: 5px;
            background-color: #e2e4ff;
            color: black;
        }
        select{
            font-size: 17px;
            height: 25px;
            margin-right: 10px;
            border-radius: 10px;
            outline: none;
            background-color: #e2e4ff;
            
        }
    }
`;



interface ValueEdit{
    setEditValue: (isEditOpen: boolean) => void;
}

export const Skill: FC<ValueEdit> = (props) => {


    let ExpertiseArray = ['Choose one', 'Client service', 'Corporate training', 'Financial analysis', 'Menagement skills', 'Project menagment'];
    let SpecialitiesArray = ['Choose one', 'Design patterns, modeling tools', 'Testing framworks', 'Skills using PHP', 'BS/BA in Design', 'Mobile and web QA'];
    let AdmissionArray = ['Choose one', 'Paris bar association', 'Berlin bar association', 'Praha bar association', 'Barcelona bar association', 'Mediolan bar association', 'Rome bar association'];
    let CountrysArray = ['Choose one', 'Poland', 'Russia', 'USA', 'China', 'Japan', 'Turkey'];
    let [isEdit, showEdit] = useState(false);
    props.setEditValue(isEdit);
    let [expertiseValue, setExpertiseValue] = useState('Client service')
    let [specialtiesValue, setSpecialtiesValue] = useState('Design patterns, modelling tools')
    let [specialtiesValue2, setSpecialtiesValue2] = useState('Testing framworks')
    let [admissionValue, setAdmissionValue] = useState('Paris bar association')
    let [admissionValue2, setAdmissionValue2] = useState('Barcelona bar association')
    let [countryValue, setCountryValue] = useState('Poland')
    return(
        <SkillsInfoWrapper>
            <img className = 'edit' src = {Pen} onClick={() => {showEdit(!isEdit)}}/>
            <div id = 'expertise'>
                <h2>Expertise</h2>
                {isEdit == false? <p>{expertiseValue}</p>: 
                <select onChange = {e => setExpertiseValue(e.target.value)}>
                    {ExpertiseArray.map(ExpertiseArray => <option>{ExpertiseArray}</option>)}
                </select>
                }
            </div>
            <div id = 'specialties'>
                <h1>Specialities</h1>
                {isEdit == false?
                <div>
                    <p>{specialtiesValue}</p>
                    <p>{specialtiesValue2}</p>
                </div>
                :
                <div>
                    <select onChange = {e => setSpecialtiesValue(e.target.value)}>
                        {SpecialitiesArray.map(SpecialitiesArray => <option>{SpecialitiesArray}</option>)}
                    </select>
                    <select onChange = {e => setSpecialtiesValue2(e.target.value)}>
                        {SpecialitiesArray.map(SpecialitiesArray => <option>{SpecialitiesArray}</option>)}
                    </select>
                </div>
                }
            </div>
            <div id = 'admission-to-practice-law'>
                <h2>Admission to practice law</h2>
                {isEdit == false?
                <div>
                    <p>{admissionValue}</p>
                    <p>{admissionValue2}</p>
                </div>
                :
                <div>
                    <select onChange = {e => setAdmissionValue(e.target.value)}>
                        {AdmissionArray.map(AdmissionArray => <option>{AdmissionArray}</option>)}
                    </select>
                    <select onChange = {e => setAdmissionValue2(e.target.value)}>
                        {AdmissionArray.map(AdmissionArray => <option>{AdmissionArray}</option>)}
                    </select>
                </div>
                }
            </div>
            <div id = 'countries'>
                <h2>Countries</h2>
                {isEdit == false? <p>{countryValue}</p>:
                <select onChange = {e => setCountryValue(e.target.value)}>
                    {CountrysArray.map(CountrysArray => <option>{CountrysArray}</option>)}
                </select>
                }
            </div>
        </SkillsInfoWrapper>
    )
}




