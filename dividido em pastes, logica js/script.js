const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const image = document.getElementById('img');
const content = document.getElementById('content');


//demonstrando o retorno da api e a formatação json
const fetchApi = (value) => {
    const resultado = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((response)=> response.json())
    .then((data) => {
        console.log(data, "console de data")
    })
    console.log(resultado,"console de resultado")
}
fetchApi(1)
// criar um array com as chaves

const keys = ['name','status','species',
'gender','origin','image','episode'];

const constroiResultado = (resultado) => {
    const resultadoFinal = {};
    keys.map((key) => document.getElementById(key))
    .map((element)=> {
        element.checked && (resultadoFinal[element.name] = resultado[element.name]);
    });
    return resultadoFinal;
}

btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const resultado = await fetchApi(characterId.value);
    // content.textContent = `${JSON.stringify(resultado.status, undefined, 2)}`;
    image.src = `${resultado.image}`;
    console.log(constroiResultado(resultado))
    
    
});