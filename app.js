function tempCalc() {
    const  numberTemp= document.querySelector('#temp').value;
    //console.log(numberTemp);
    const  tempSelected = document.querySelector('#unit');
   const valueTemp = unit.options[tempSelected.selectedIndex].value;
   // console.log(valueTemp);
      const  celToFah=(cel)=>{
        let fehrenhiet = Math.round((cel *9/5) +32);
        return fehrenhiet;
      }
     const  fehToCel=(feh)=>{
        let celsius = Math.round((feh - 32) *5/9);
        return  celsius;
      }
    let result;

    if(valueTemp == 'cel'){
        result= celToFah(numberTemp);
        document.querySelector('#result').innerHTML = `${result} Fahrenhiet`;
} else{
    result = fehToCel(numberTemp);
    document.querySelector('#result').innerHTML = `${result} celsius`;
}
}
    