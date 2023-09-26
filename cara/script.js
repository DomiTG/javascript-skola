const out = document.getElementById('out');
document.getElementById('button').addEventListener('click', function(){
    const input = document.getElementById('input').value;
    let output = "";
    for(let i = 0; i < input; i++){
        output += ".";
    }
    out.innerHTML = output;
});