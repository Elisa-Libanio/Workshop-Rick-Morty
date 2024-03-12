const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const image = document.getElementById('image');
const content = document.getElementById('content');
const contentName = document.getElementById('contentName');
const checkbox = document.getElementById('status'); 
const checkbox1 = document.getElementById('name'); 


const fetchApi = (value) => {
    const resultado = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((response)=> response.json())
    .then((data) => {
        console.log(data, "console de data")
        console.log(data.name,"acessando uma chave do objeto")
        return data
    });

     return resultado
    // console.log(resultado,"console de resultado")
}
checkbox1.addEventListener('change', async (event) => {
    event.preventDefault();
    const result = await fetchApi(characterId.value);
    console.log(result, "resultado checkbox")

    if (checkbox1.checked) {
        return content.textContent = JSON.stringify(result.name, undefined, 2);
    } else {
        return console.log('Not found');
    }
});
//     content.textContent = `${JSON.stringify(resultado.status, undefined, 2)}`;
//     console.log(resultado.status,"resultado checkbox")
// })
//chamada de exemplo da api 
// fetchApi(5)
// btnGo.addEventListener('click', (event) => {
//     event.preventDefault();
//     const resultado = fetchApi(characterId.value);
//     content.innerHTML = JSON.stringify(resultado.name);
// });

//explicação do async e await no evento do botao
// btnGo.addEventListener('click', async (event) => {
//     event.preventDefault();
//     const resultado = await fetchApi(characterId.value);
//     content.textContent = `${JSON.stringify(resultado.status, undefined, 2)}`;
//     contentName.textContent = `${JSON.stringify(resultado.name)}`;
//     image.src = `${resultado.image}`;
//     console.log(image);
    
    
// });






// const checkBox = async (value) => {
//     const resultado = fetchApi(value);
//     const filtrar = resultado.filter(()=> {
//         return document.getElementById('status').checked
//     })
// }



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
    if(characterId.value === ''){
        return content.innerHTML = 'É necessário fazer um filtro.';
      }
    
    const resultado = await fetchApi(characterId.value);
    // content.textContent = `${JSON.stringify(resultado.status, undefined, 2)}`;
    content.textContent = `${JSON.stringify(constroiResultado(resultado), undefined, 2)}`;
    image.src = `${resultado.image}`;
    // console.log(constroiResultado(resultado,"teste resultado"))
    
    
});