
const arr = [];
const convertCamel = function(words){
    for(const n of words){
        let [name1, name2] = n.toLowerCase().trim().split("_");
        arr.push([name1, name2.replace(name2[0],name2[0].toUpperCase())].join('')); 
    }
    for(let i = 0; i<words.length;i++){
        console.log(`${arr[i]} ${'✅'.repeat(i+1)}`);
    }
};

const arr2 = ['undercore_Case',' first_Name','Some_Variable ','  calculate_AGE','delayed_departure'];


const textarea = document.createElement('textarea');
document.body.append(textarea);

const button = document.createElement('button');
button.textContent = 'Converter';
document.body.append(button);

button.textContent = 'Converter';

button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n'); // divide a entrada em linhas
  convertCamel(lines);
});