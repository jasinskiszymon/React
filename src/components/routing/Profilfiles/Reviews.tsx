import React, {FC, useState} from 'react'
import styled from 'styled-components';
import Pen from '../../../icon/face2.png';
import Check from '../../../icon/face2.png';

const InternalReviewsWrapper = styled.div`
    width: 90%;
    padding-bottom: 30px;
    position: relative;
    margin-top: 40px;
   
    h1{
        font-size: 23px;
        margin-bottom: 15px;
        font-weight: bold;
        color: green;
    }
    table{
        width: 90%;
        margin: 30px auto 20px;
        border-collapse: collapse;
        color: black;
         font-size: 25px;

    }
    th{
        border-bottom: 1px solid lightgrey;
        text-align: left;
        padding-bottom: 10px;
        font-size: 25px;
    }
    td{
        font-size: 18px;
        padding-top: 10px;
    }
    p{
        float: left;
        font-size: 20px;
    }
    input, select{
        border: 1px solid lightgrey;
        outline: none;
        border-radius: 5px;
        padding-left: 5px;
    }
    
`;
 
let TitleOfTable = ['Name', 'Entity', 'Location', 'Expertise', 'Date']
let CountrysArray = ['Select country', 'Poland', 'Italy', 'Germany', 'USA', 'Spain', 'France'];

interface ValueEdit{
    isOpen: boolean;
}
export const Reviews: FC<ValueEdit> = (props) =>{
    let [nameOne, setNameOne] = useState('Operation Tiber');
    let [nameTwo, setNameTwo] = useState('Op. Prometeo');
    let [nameThree, setNameThree] = useState('Op. Latandre');
    let [entityOne, setEntityOne] = useState('BMW M3');
    let [entityTwo, setEntityTwo] = useState('Audi A6');
    let [entityThree, setEntityThree] = useState('Fiat 500');
    let [locationOne, setLocationOne] = useState('USA');
    let [locationTwo, setLocationTwo] = useState('Germany');
    let [locationThree, setLocationThree] = useState('Spain');
    let [expertiseOne, setExpertiseOne] = useState('#Tax');
    let [expertiseTwo, setExpertiseTwo] = useState('#M&A');
    let [expertiseThree, setExpertiseThree] = useState('#Social');
    let [dateOne, setDateOne] = useState('2018-01-20');
    let [dateTwo, setDateTwo] = useState('2019-02-18');
    let [dateThree, setDateThree] = useState('2019-02-18');
    return(
        <InternalReviewsWrapper>
            <h1>Internal Reviews</h1>
        <table>
            <tr>
                {TitleOfTable.map(TitleOfTable => <th>{TitleOfTable}</th>)}
            </tr>
            <tr>
                <td>{props.isOpen == false? nameOne : <input type='text' value={nameOne} onChange={(e)=>setNameOne(e.target.value)}/>}</td>
                <td>{props.isOpen == false? entityOne : <input type='text' value={entityOne} onChange={(e)=>setEntityOne(e.target.value)}/>}</td>
                <td>{props.isOpen == false? locationOne : <select onChange = {e => setLocationOne(e.target.value)}>{CountrysArray.map(CountrysArray => <option>{CountrysArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? expertiseOne : <input type='text' value={expertiseOne} onChange={(e)=>setExpertiseOne('#'+e.target.value)}/>}</td>
                <td>{props.isOpen == false? dateOne : <input type='date' value={dateOne} onChange={(e)=>setDateOne(e.target.value)}/>}</td>
            </tr>
            <tr>
                <td>{props.isOpen == false? nameTwo : <input type='text' placeholder={nameTwo} onChange={(e)=>setNameTwo(e.target.value)}/>}</td>
                <td>{props.isOpen == false? entityTwo: <input type='text' placeholder={entityTwo} onChange={(e)=>setEntityTwo(e.target.value)}/>}</td>
                <td>{props.isOpen == false? locationTwo : <select onChange = {e => setLocationTwo(e.target.value)}>{CountrysArray.map(CountrysArray => <option>{CountrysArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? expertiseTwo : <input type='text' placeholder={expertiseTwo} onChange={(e)=>setExpertiseTwo('#'+e.target.value)}/>}</td>
                <td>{props.isOpen == false? dateTwo : <input type='date' value={dateTwo} onChange={(e)=>setDateTwo(e.target.value)}/>}</td>
            </tr>
            <tr>
                <td>{props.isOpen == false? nameThree : <input type='text' placeholder={nameThree} onChange={(e)=>setNameThree(e.target.value)}/>}</td>
                <td>{props.isOpen == false? entityThree : <input type='text' placeholder={entityThree} onChange={(e)=>setEntityThree(e.target.value)}/>}</td>
                <td>{props.isOpen == false? locationThree : <select onChange = {e => setLocationThree(e.target.value)}>{CountrysArray.map(CountrysArray => <option>{CountrysArray}</option>)}</select>}</td>
                <td>{props.isOpen == false? expertiseThree : <input type='text' placeholder={expertiseOne} onChange={(e)=>setExpertiseThree('#'+e.target.value)}/>}</td>
                <td>{props.isOpen == false? dateThree : <input type='date' value={dateThree} onChange={(e)=>setDateThree(e.target.value)}/>}</td>
            </tr>
        </table>
        <p>See more Reviews</p> 
        </InternalReviewsWrapper>
    );
};