
const submitButton=document.getElementById('add');
submitButton.addEventListener("click",()=>{
    let inputVal=document.getElementById("field").value;



    const para = document.createElement("p");
    para.setAttribute("class","mypara")
    const deleteb= document.createElement("button");
    deleteb.setAttribute("class", "rem")

    deleteb.innerText='Delete';
    
    para.innerText = inputVal;


    const abc=document.querySelector(".parent")
// abc.appendChild(para)
// abc.appendChild(deleteb)
const na=document.createElement('div')
na.setAttribute("class","main")
na.appendChild(para)
na.appendChild(deleteb)

abc.appendChild(na)


    deleteb.addEventListener('click',()=>{
        para.remove();
        deleteb.remove();
        na.remove();
    })
    let fieldValue = document.getElementById("field");
       fieldValue.value=" ";
})

const removeButton=document.getElementById('rem')
removeButton.addEventListener('click',()=>{
    const deleteElement=document.getElementsByName('button');
    console.log(deleteElement);
})

