import React, { useState } from "react";
import BackspaceIcon from '@mui/icons-material/Backspace';
import DoneIcon from '@mui/icons-material/Done';
import "./Locker.css";
function Locker() {

    const [value, setValue] = useState('')
    const clickScreen = (val)=>{
        setValue(value+val)
    }
    const clearScreen = () => {
        setValue("")
    }
    const enterPwd = () =>{
        if (value==="1234"){
            alert("success")
        }else{
            alert("Incorrect pin")
        }
        setValue("")
    }
  return (
    <div className="main-screen">
      <div className="locker">
        <div className="text">
          <input type="text" id="pwd" value={value}></input>
        </div>
        <div className="num-pad">
          <button onClick={() => clickScreen('7')} className="btn">
            7
          </button>
          <button onClick={() => clickScreen('8')} className="btn">
            8
          </button>
          <button onClick={() => clickScreen('9')} className="btn">
            9
          </button>
        </div>
        <div className="num-pad">
          <button onClick={() => clickScreen('4')} className="btn">
            4
          </button>
          <button onClick={() => clickScreen('5')} className="btn">
            5
          </button>
          <button onClick={() => clickScreen('6')} className="btn">
            6
          </button>
        </div>
        <div className="num-pad">
          <button onClick={() => clickScreen('1')} className="btn">
            1
          </button>
          <button onClick={() => clickScreen('2')} className="btn">
            2
          </button>
          <button onClick={() => clickScreen('3')} className="btn">
            3
          </button>
        </div>
        <div className="num-pad">
          <button onClick={clearScreen} className="btn"><BackspaceIcon style={{fontSize: "10px"}}/></button>
          <button onClick={() => clickScreen('0')} className="btn">
            0
          </button>
          <button onClick={enterPwd} className="btn"><DoneIcon style={{fontSize: "10px"}}/></button>
        </div>
      </div>
    </div>
  );
}

export default Locker;
