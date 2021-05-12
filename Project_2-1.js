
import React, {useState} from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [backgroundColor, setColor] = useState('black');
  const onClickEnter = () => {
    setMessage('신나는 출근~')
    setColor("Aqua")
  };
  const onClickLeave = () => 
  {
    setMessage('가벼운 퇴근~')
    setColor("green")
  };
  const onClickAdd = () =>
  {
    setMessage('즐거운 야근~')
    setColor("red")
  };
  const onClickClear = () =>
  {
    setMessage('')
    setColor('black')
  };
  
  return (
    <div>
    <button style = {{backgroundColor: "Aqua"}} onClick = {onClickEnter}> 출근! </button>
    <button style = {{backgroundColor: "green"}} onClick = {onClickLeave}> 퇴근! </button>
    <button style = {{backgroundColor: "red"}} onClick = {onClickAdd}> 야근! </button>
    <button style = {{backgroundColor: "white"}} onClick = {onClickClear}> 초기화! </button><br/>
    <span style={{backgroundColor, fontSize:20}}>{message}</span>
    </div>
  )
}
export default Say;
