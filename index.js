 //button add function set
 document.getElementById('btn-add').addEventListener('click',function(){
   //console.log('click me')
   window.location.href ='bolg.html'

})
//function decleation for all card
function getInputFieldValueById(InputFieldId){
    const InputField = document.getElementById(InputFieldId);
    const InputFieldValue = InputField.value;
    const NewInputValue = parseFloat(InputFieldValue);
    InputField.value ='';
    return NewInputValue;
}
//serial Number 
let serial =0;

//card-first(1) start
document.getElementById('btn-first').addEventListener('click',function(){
    serial +=1;
    //get the data-1 form html using id
    const firstName = document.getElementById('first-name').innerText;
    const firstInput = getInputFieldValueById('first-input');
    const firstInputTwo = getInputFieldValueById('first-input-two');
    const total = 0.5 * parseFloat(firstInput) * parseFloat(firstInputTwo);
    resultData(firstName, total);
    console.log(firstInput,firstInputTwo);
    if(isNaN( firstInput,firstInputTwo)){
      alert('vaid number add');
      return;
    }
    
})
//card-second(2) start
document.getElementById('btn-second').addEventListener('click',function(){
    serial +=1;
    //get the data-2 form html using id
    const secondName = document.getElementById('second-name').innerText;
    const secondInput = getInputFieldValueById('second-Input');
    const secondInputTwo = getInputFieldValueById('second-Input-Two');
    const total = parseFloat(secondInput) * parseFloat(secondInputTwo);
    resultData(secondName, total);
})
 //card-thrid(3) start
 document.getElementById('btn-thrid').addEventListener('click',function(){
    serial +=1;
    //get the data-3 form html using id
    const thridName = document.getElementById('thrid-name').innerText;
    const thridInput = getInputFieldValueById('thrid-input');
    const thridInputTwo = getInputFieldValueById('thrid-input-two');
    const total = parseFloat(thridInput) * parseFloat(thridInputTwo);
    resultData(thridName, total);
 }) 
//card-four(4) start
 document.getElementById('btn-four').addEventListener('click',function(){
    serial +=1;
    //get the data-1 form html using id
    const fourName = document.getElementById('four-name').innerText;
    const fourInput = getInputFieldValueById('four-input');
    const fourtInputTwo = getInputFieldValueById('four-input-two');
    const total = 0.5 * parseFloat(fourInput) * parseFloat(fourtInputTwo);
    resultData(fourName, total);
    
})
 //card-five(5) start
 document.getElementById('btn-five').addEventListener('click',function(){
    serial +=1;
    //get the data-3 form html using id
    const fiveName = document.getElementById('five-name').innerText;
    const fiveInput = getInputFieldValueById('five-input');
    const fiveInputTwo = getInputFieldValueById('five-input-two');
    const total = 0.5 * parseFloat(fiveInput) * parseFloat(fiveInputTwo);
    resultData(fiveName, total);
 }) 
  //card-five(6) start
  document.getElementById('btn-six').addEventListener('click',function(){
    serial +=1;
    //get the data-3 form html using id
    const sixName = document.getElementById('six-name').innerText;
    const sixInput = getInputFieldValueById('six-input');
    const sixInputTwo = getInputFieldValueById('six-input-two');
    const total = 3.14 * parseFloat(sixInput) * parseFloat(sixInputTwo);
    resultData(sixName, total);
 }) 
//result function declearation
 function resultData(firstName, total){
    const tableContainer = document.getElementById('table-container');
    //created tr
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${serial} ${firstName}</td>
      <td>${total.toFixed(2)}cm<sup>2</sup></td>
      <td>
      <button class="bg-blue-500 btn lowercase px-2 " >
      convert to m<sup>2</sup>
      </button>
      </td>
    `;
    tableContainer.appendChild(tr);
 };

