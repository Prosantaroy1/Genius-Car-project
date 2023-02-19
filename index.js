//function decleation for all card
function getInputFieldValueById(InputFieldId){
    const InputField = document.getElementById(InputFieldId);
    const InputFieldValue = InputField.value;
    const NewInputValue = parseInt(InputFieldValue);
    InputField.value ='';
    return NewInputValue;
}
//serial Number 
let serial =0;

//card-first(1) start
document.getElementById('btn-first').addEventListener('click',function(){
    serial +=1;
    //get the data form html using id
    const firstName = document.getElementById('first-name').innerText;
    const firstInput = getInputFieldValueById('first-input');
    const firstInputTwo = getInputFieldValueById('first-input-two');
    const total = 0.5 * parseFloat(firstInput) * parseFloat(firstInputTwo);
    resultData(firstName, total);
    
})
//card-second(2) start
document.getElementById('btn-second').addEventListener('click',function(){
    serial +=1;
    //get the data form html using id
    const secondName = document.getElementById('second-name').innerText;
    const secondInput = getInputFieldValueById('second-Input');
    const secondInputTwo = getInputFieldValueById('second-Input-Two');
    const total = parseFloat(secondInput) * parseFloat(secondInputTwo);
    resultData(secondName, total);
})
   
//result function declearation
 function resultData(firstName, total){
    const tableContainer = document.getElementById('table-container');
    //created tr
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${serial} ${firstName}</td>
      <td>${total}cm<sup>2</sup></td>
      <button class="bg-blue-500 btn  border-0 m">convert to m<sup>2</sup></button>
    `;
    tableContainer.appendChild(tr);
 };