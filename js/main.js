const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) =>{
    e.preventDefault();
    clearUI();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if(url === ''){
        alert('O campo da URL esta vazio, digite uma URL por favor')
    }else{
        showSpinner();

        setTimeout(() => {
            hideSpinner();   
            
            genereteQRcode(url, size);
            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50)
        }, 1000);
    }
};

const genereteQRcode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text:url,
        width:size,
        height:size,
    });
};

const showSpinner = () =>{
    document.getElementById('spinner').style.display = 'block';
}
const hideSpinner = () =>{
    document.getElementById('spinner').style.display = 'none';
}

const clearUI = () => {
    qr.innerHTML= '';
    const saveLink = document.getElementById('save-Link');
    if (saveLink)
        saveLink.remove();
};
const createSaveBtn = (saveUrl) =>{
    const link = document.createElement('a');
    link.id = 'save-Link';
    link.classList= 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download ='qrcode';
    link.innerHTML = 'Salvar imagem';
    document.getElementById('generated').appendChild(link);
};
    

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);