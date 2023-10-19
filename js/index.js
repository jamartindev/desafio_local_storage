document.getElementById('buttonText').addEventListener('click', () => {
    let text = document.getElementById('inputText').value;
    localStorage.setItem('texto', text);

});

console.log(localStorage.getItem("texto"));

