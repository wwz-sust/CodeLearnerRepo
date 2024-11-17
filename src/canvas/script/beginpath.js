import {$} from "./common";

function beginpath(){    
    const canvas = $("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(100, 100);
    ctx.lineTo(200, 250);
    ctx.closePath();
    ctx.stroke();
}



export default beginpath;
