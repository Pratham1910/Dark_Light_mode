function darkMode(){
    let check = document.querySelector('#form');

    console.log(`This  is the ${check.checked}`);

    if(check.checked){
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }
}
document.querySelector('#form').addEventListener('change', darkMode);


function ContainerDarkMode(){
    let check = document.querySelector('#form2');
    let Childelement = document.querySelector('#childContainer')
    console.log(Childelement);
    

    console.log(`This  is the ${check.checked}`);

    if(check.checked){
        Childelement.classList.add('dark2')
    }else{
        Childelement.classList.remove('dark2')
    }
}
document.querySelector('#form2').addEventListener('change', ContainerDarkMode);
