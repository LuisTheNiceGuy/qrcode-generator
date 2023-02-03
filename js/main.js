const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) =>{
    e.prevenDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url,size);

    if(url === ''){
        alert('O campo da URL esta vazio, digite uma URL por favor')
    }else{
        showSpinner();
    }
};

const showSpinner = () =>{
    document.getElementById('spinner').style.display = 'block';
}
const hideSpinner = () =>{
    document.getElementById('spinner').style.display = 'none';
}

hideSpinner();
//parei em: 22:48
form.addEventListener('submit', onGenerateSubmit);