document.getElementById('buttonText').addEventListener('click',()=>{
    let input = document.getElementById('inputText').value;
    localStorage.setItem('dato',input);
    document.getElementById('inputText').value = ''

})