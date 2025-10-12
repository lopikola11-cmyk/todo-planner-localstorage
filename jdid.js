function renderFunction() {
  
   Html2='';
   Html='';
  for (let i = 0; i < displayArray.length; i++) {

     const element=`<div class="div div${i}"> <p>${displayArray[i].firstvalue}<p>`+ `<p>${displayArray[i].secondvalue}<p>` + `<button class="deleteButton-${i} delete" 
     >delete</button> </div>`;

    Html=Html+element;     
    Html2=Html2+Html;
    Html='';
    htmlOnScreen.innerHTML = Html2;
  };
  for (let i = 0; i < displayArray.length; i++) {
    document.querySelector(`.deleteButton-${i}`).addEventListener('click',()=>{ 
      document.querySelector(`.div${i}`).remove();
      
      displayArray.splice(i,1);
      localStorage.setItem('displayArray',JSON.stringify(displayArray));
renderFunction();
      
      console.log(displayArray);
    });
  };
};

let Html='';
let Html2=''||JSON.parse(localStorage.getItem('Html2'));
let displayArray=JSON.parse(localStorage.getItem('displayArray'))||[];

let htmlOnScreen=document.querySelector('.Html-Generated');
let submitedValue=document.querySelector('.input-Text');
let submitedDate=document.querySelector('.input-Date');

let button=document.querySelector('.submit');

button.addEventListener('click',()=>{ 
  let Html2='';

displayArray.push({firstvalue:submitedValue.value,secondvalue:submitedDate.value});
console.log(displayArray);

localStorage.setItem('displayArray',JSON.stringify(displayArray));
renderFunction();
submitedValue.value='';
submitedDate.value='';

for (let i = 0; i < displayArray.length; i++) {

  const element=`<div class="div div${i}"> <p>${displayArray[i].firstvalue}<p>`+ `<p>${displayArray[i].secondvalue}<p>` + `<button class="deleteButton-${i} delete" 
 >delete</button> </div>`;

  Html=Html+element;     
  Html2=Html2+Html;
  Html='';
};
htmlOnScreen.innerHTML = Html2;

for (let i = 0; i < displayArray.length; i++) {

  document.querySelector(`.deleteButton-${i}`).addEventListener('click',()=>{ 
    document.querySelector(`.div${i}`).remove();
    displayArray.splice(i,1);
    localStorage.setItem('displayArray',JSON.stringify(displayArray));
    renderFunction();
    console.log(displayArray);
  }); 
};
  }
);




    


    