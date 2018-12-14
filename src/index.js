import timer from './timer.js';
import './styles.css';

function component() {

  var element = document.createElement('div');
  element.setAttribute('class','parent')

  var time=document.createElement('input');
  time.setAttribute('id','sec');
  time.setAttribute('type','number');

  var alert=document.createElement('input');
  alert.setAttribute('id','mess');

  var start_b=document.createElement('button');
  start_b.setAttribute('id','start');
  start_b.setAttribute('class','button'); 
  start_b.innerHTML='Start';

  var stop_b=document.createElement('button');
  stop_b.setAttribute('id','stop');
  stop_b.setAttribute('class','button');
  stop_b.innerHTML='Stop';

  var pause_b=document.createElement('button');
  pause_b.setAttribute('id','pause');
  pause_b.setAttribute('class','button');
  pause_b.innerHTML='Pause';

  var reset_b=document.createElement('button');
  reset_b.setAttribute('id','reset');
  reset_b.setAttribute('class','button');
  reset_b.innerHTML='Reset';

  var show=document.createElement('p');
  show.innerHTML=0;
  show.setAttribute('class','show');
  show.setAttribute('id','show');

  var buttons1=document.createElement('div');
  buttons1.setAttribute('class','buttons');

  var buttons2=document.createElement('div');
  buttons2.setAttribute('class','buttons');
  
  element.appendChild(buttons1);
  buttons1.appendChild(start_b);
  buttons1.appendChild(pause_b);
  buttons1.appendChild(time);
  element.appendChild(buttons2);
  buttons2.appendChild(stop_b);
  buttons2.appendChild(reset_b);
  buttons2.appendChild(alert);
  element.appendChild(show);
  return element;
}

let element = component();
document.body.appendChild(element);
