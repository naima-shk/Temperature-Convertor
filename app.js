const tempCalc= () =>{
    let   numberTemp= document.getElementById('temp').value;
    //console.log(numberTemp);
    let  tempSelected = document.getElementById('unit').value;
   let  valueTemp = unit.options[tempSelected.selectedIndex].value;
    //console.log(valueTemp);
      function celToFah(cel){
        let fehrenhiet = Math.round((cel *9/5) +32);
        return fehrenhiet;
      }
      function fehToCel(feh){
        let celsius = Math.round((feh - 32) *5/9);
        return  celsius;
      }
    let result;

    if(valueTemp == 'cel'){
        result= celToFah(numberTemp);
        document.getElementById('result').innerHTML = `${result} Fahrenhiet`;
} else{
    result = fehToCel(numberTemp);
    document.getElementById('result').innerHTML = `${result} celsius`;
}
}
    