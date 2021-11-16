let buttonRatio, valueOfL, valueOfD, valueOfB, slendernessRatio;

function getButtonValue(e){
  document.querySelectorAll('.options').forEach((btn)=>{
    if(btn.id == event.target.id){
      btn.classList.add('clicked')
    }
    else{
      btn.classList.remove('clicked')
    }
  })
  buttonRatio = parseFloat(e.value)
  console.log(buttonRatio)
}

addEventListener('load', ()=>{
  document.querySelector('[vol]').value = "";
  document.querySelector('[vod]').value = "";
  document.querySelector('[vob]').value = "";
})

function calculations(){
    valueOfL = parseFloat(document.querySelector('[vol]').value)
    valueOfD = parseFloat(document.querySelector('[vod]').value)
    valueOfB = parseFloat(document.querySelector('[vob]').value)
    let effectiveL = parseFloat(buttonRatio * valueOfL);
    let radiusOfGyration = parseFloat(valueOfB/Math.sqrt(12));
    slendernessRatio = parseFloat(effectiveL/radiusOfGyration).toFixed(2);
    if(isNaN(slendernessRatio)){
      document.querySelector('.answers').innerHTML = `0.00`
    }
    else{
      document.querySelector('.answers').innerHTML = `${slendernessRatio}`;
    }
}

setInterval(calculations, 1)

calculations();



document.querySelector('.reset').addEventListener('click', ()=>{
  document.querySelector('[vol]').value = "";
  document.querySelector('[vod]').value = "";
  document.querySelector('[vob]').value = "";
  document.querySelectorAll('button').forEach((e)=>{
    e.classList.remove('clicked')
  })
})



document.querySelector('.mode-change').addEventListener('click', ()=>{
  document.querySelector('body').classList.toggle('dark');
  document.querySelectorAll('.options').forEach((e)=>{
    e.classList.toggle('dark');
  });
  document.querySelector('.mode-change').classList.toggle('dark');
  document.querySelectorAll('label').forEach((e)=>{
    e.classList.toggle('dark');
  })
  document.querySelector('li').classList.toggle('dark');
})

