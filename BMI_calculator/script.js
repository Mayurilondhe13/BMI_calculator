const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();//to stop the data which is going to server after inputting in form

    const height=parseInt(document.querySelector('#height').value);
    console.log(height);
    const weight=parseInt(document.querySelector('#weight').value);
    console.log(weight);
    const result=document.querySelector('.result')
    console.log(result);
    const guide=document.querySelector('.guide');
    // const btn=document.querySelector('.button')
    
    if(height==='' || height<0 || isNaN(height)){
        console.log(height);
       result.innerHTML=`Please enter valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please enter valid weight ${weight}`
     }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        // btn.innerHTML=`BMI:  ${bmi}`;
        console.log(bmi);
        result.innerHTML=`Your BMI is <span>${bmi}</span>`;

        
        if(bmi<18.6){
            guide.innerHTML=`You are under weight`
            
        }
        else if(24.9>bmi>18.6){
            guide.innerHTML=`Your weight is normal `
        }
        else {
            guide.innerHTML=`Your weight is grater than normal weight`
        }
    }
   
})
