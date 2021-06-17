import React, {FC, useState} from 'react'
import styled from 'styled-components';
//Styled Import

const AmountOfFeesWrapper = styled.div`
    width: 90%;
    margin-top: 60px;
    position: relative;

    h1{
        color: green;
        font-size: 24px;
        margin-bottom: 15px;
    }
    table{
        margin: 30px auto 20px;
        border-collapse: collapse;
        
        font-weight: 600;
    }
    th{
        width: 200px;
        border-bottom: 1px solid black;
        text-align: left;
        padding-bottom: 10px;
        text-align: center;
    }
    tr{
        text-align: center;
    }
    td{
        font-size: 20px;
        padding-top: 10px;
    }
    p{
        float: left;
        color: gray;
        font-size: 20px;
        font-weight: 600;
    }
    input, select{
        width: 140px;
        margin: 0 5px;
        border: 2px solid black;
        outline: none;
        border-radius: 5px;
        padding-left: 5px;
    }
    div{
        display: flex;
        justify-content: center;
        input{
            width: 80px;
            text-align: center;
        }
        select{
            width: 70px;
        }
    }
`;
let TitleOfTable = [{Id: 1, Title: 'Year'}, {Id: 2, Title: 'Cost center'}, {Id: 3, Title: 'Total amount'}, {Id: 4, Title: 'Law firm'}];
let YearsArray: string[] = [];
for (let index = 0; index < 10; index++) {
    YearsArray.push(((new Date().getFullYear()) - index).toString());
}
let CurrencyArray = ['€', '$', '₤', '¥', 'PLN'];

interface ValueEdit{
    isOpen: boolean;
}
export const Amont: FC<ValueEdit> = (props) =>{
    let [yearThree, setYearThree] = useState('2019');
    let [yearFour, setYearFour] = useState('2020');
    let [yearFive, setYearFive] = useState('2021');
    let [costThree, setCostThree] = useState('CS 47');
    let [costFour, setCostFour] = useState('CS 153');
    let [costFive, setCostFive] = useState('CS 32');
    let [totalThree, setTotalThree] = useState(10500);
    let [currencyThree, setCurrencyThree] = useState('€');
    let [totalFour, setTotalFour] = useState(18500);
    let [currencyFour, setCurrencyFour] = useState('€');
    let [totalFive, setTotalFive] = useState(15500);
    let [currencyFive, setCurrencyFive] = useState('€');
    let [lawThree, setLawThree] = useState('Linklaters');
    let [lawFour, setLawFour] = useState('Linklaters');
    let [lawFive, setLawFive] = useState('Linklaters');
    return(
        <AmountOfFeesWrapper>
            <h1>Amount of fees</h1>
        <table>
            <thead>
                <tr>
                    {TitleOfTable.map(TitleOfTable => <th key={TitleOfTable.Id}>{TitleOfTable.Title}</th>)}
                </tr>
            </thead>
            <tbody>
               
                <tr>
                    <td>{props.isOpen === false? yearThree :  <select onChange={(e)=>setYearThree(e.target.value)}>{YearsArray.map(YearsArray => <option key={YearsArray}>{YearsArray}</option>)}</select>}</td>
                    <td>{props.isOpen === false? costThree :  <input type='text' placeholder={costThree} onChange={(e)=>setCostThree(e.target.value)}/>}</td>
                    <td>{props.isOpen === false? (totalThree+currencyThree)  : <div><input type='number' value={totalThree} onChange={(e)=>setTotalThree(parseFloat(e.target.value))}/><select onChange={(e)=>setCurrencyThree(e.target.value)}>{CurrencyArray.map(CurrencyArray => <option key={CurrencyArray}>{CurrencyArray}</option>)}</select></div>}</td>
                    <td>{props.isOpen === false? lawThree : <input type='text' placeholder={lawThree} onChange={(e)=>setLawThree(e.target.value)}/>}</td>
                </tr>
                <tr>
                    <td>{props.isOpen === false? yearFour :  <select onChange={(e)=>setYearFour(e.target.value)}>{YearsArray.map(YearsArray => <option key={YearsArray}>{YearsArray}</option>)}</select>}</td>
                    <td>{props.isOpen === false? costFour : <input type='text' placeholder={costFour} onChange={(e)=>setCostFour(e.target.value)}/>}</td>
                    <td>{props.isOpen === false? (totalFour+currencyFour)  : <div><input type='number' value={totalFour} onChange={(e)=>setTotalFour(parseFloat(e.target.value))}/><select onChange={(e)=>setCurrencyFour(e.target.value)}>{CurrencyArray.map(CurrencyArray => <option key={CurrencyArray}>{CurrencyArray}</option>)}</select></div>}</td>
                    <td>{props.isOpen === false? lawFour : <input type='text' placeholder={lawFour} onChange={(e)=>setLawFour(e.target.value)}/>}</td>
                </tr>
                <tr>
                    <td>{props.isOpen === false? yearFive :  <select onChange={(e)=>setYearFive(e.target.value)}>{YearsArray.map(YearsArray => <option key={YearsArray}>{YearsArray}</option>)}</select>}</td>
                    <td>{props.isOpen === false? costFive : <input type='text' placeholder={costFive} onChange={(e)=>setCostFive(e.target.value)}/>}</td>
                    <td>{props.isOpen === false? (totalFive+currencyFive) : <div><input type='number' value={totalFive} onChange={(e)=>setTotalFive(parseFloat(e.target.value))}/><select onChange={(e)=>setCurrencyFive(e.target.value)}>{CurrencyArray.map(CurrencyArray => <option key={CurrencyArray}>{CurrencyArray}</option>)}</select></div>}</td>
                    <td>{props.isOpen === false? lawFive : <input type='text' placeholder={lawFive} onChange={(e)=>setLawFive(e.target.value)}/>}</td>
                </tr>
            </tbody>
        </table>
        </AmountOfFeesWrapper>
    );
};