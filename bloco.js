
var cnv= document.querySelector('canvas')
var ctx=cnv.getContext('2d')

let array=[
    'tile.png',
    'blocos/bloco1.png',
    'blocos/bloco2.png',
    'blocos/bloco3.png',
    'blocos/bloco4.png',
    'blocos/bloco5.png',
    'blocos/bloco6.png',
    'blocos/bloco7.png',
    'blocos/bloco8.png',
    'blocos/bloco9.png',
    'blocos/bloco10.png',
    'blocos/bloco11.png',
    'blocos/bloco12.png',
    'blocos/bloco13.png',
    'blocos/bloco14.png',
    'blocos/bloco15.png',
    'blocos/bloco16.png',
    'blocos/bloco17.png',
    'blocos/bloco18.png',
    'blocos/bloco19.png',
    'blocos/bloco20.png',
    'blocos/bloco21.png',
    'blocos/bloco22.png',
    'blocos/bloco23.png',
    'blocos/bloco24.png',
    'blocos/bloco25.png',
    'blocos/bloco26.png',
    'blocos/bloco27.png',
    'blocos/bloco28.png',
    'blocos/bloco29.png',
    'blocos/bloco30.png',
    'blocos/bloco31.png',

]
 var posiciao=0

var tela=new Image()
tela.src=array[posiciao]
var ceta=new Image()
ceta.src="blocos/icon.png"
var direita=new Image()
direita.src="blocos/icon.png"
var altoBaixo=new Image()
altoBaixo.src="blocos/alto-baixo.png"
var Baixo=new Image()
Baixo.src="blocos/alto-baixo.png"





let imgs=[
    'blocos/bl2.jpg',
    'blocos/bl3.jpg',
    'blocos/bl4.jpg',
    'blocos/bl5.jpg',
    'blocos/bl6.jpg',
    'blocos/bl7.jpg',
];





function update(){

}
var mouseX=2800
var mouseY=0
var vdd="false"
var maq=0
var muda=document.getElementById('img')



 anima=setInterval(() => {
   // alert("ok")
    if (maq==5) {
        maq=0
    } else {
        maq=maq+1
        
    }
    
    muda.src=imgs[maq]

}, 2000);
// alert("oi") 
function busca(){
   
    let modal=document.querySelector('#fade')
     modal.style.opacity=100;

    let select=document.querySelector('#options');
    let optionsvalue= select.options[select.selectedIndex];
    let value = optionsvalue.value;
    vdd="true"
    posiciao=value
    ctx.clearRect(0,0,4584,1022)        
    //cria obj, posiciao --> Xinicort,Yinicort,Lcort,Acort,posX,posY,Limag,Aimsg,
    tela.src=array[posiciao]
    ctx.drawImage(tela,mouseX,mouseY,700,350,0,0,700,350)
    ceta.src="blocos/icon.png"
    ctx.drawImage(ceta,32,15,12,15,15,150,18,15)
    direita.src="blocos/icon.png"
    ctx.drawImage(direita,32,0,12,15,680,150,18,15)
    altoBaixo.src="blocos/alto-baixo.png"
    ctx.drawImage(altoBaixo,29,13,20,15,330,0,30,20)
    ctx.drawImage(Baixo,29,0,20,15,330,320,30,20)
   
}

 let clienx=2800
 let clieny= 200
cnv.addEventListener('mousedown',(event)=>{
      if(vdd=="true"){
       // event.clientX
            
        if(event.clientX==888  ||event.clientX==889){
            clienx=clienx+ 100
            if(clienx==3806||clienx >3806){
        clienx=0
        }
        }
         //subir imagem valor Y
         if(event.clientY== 121 ||event.clientY==122){
            clieny=clieny- 10
            //if(clienx==3806||clienx >3806){
       // clienx=0
        //}
        }


        
        if(event.clientX==221||event.clientX==222||event.clientX==223){
            clienx=clienx-100
            if(clienx==0||clienx<0){
                clienx=3806
            }


            
        }
        if(event.clientY==430 ||event.clientY==431 ||event.clientY==432){
            clieny=clieny+ 10
            //if(clienx==3806||clienx >3806){
       // clienx=0
        //}
        }
          
           
            mouseX=clienx
            mouseY=clieny 
             

      console.log(event.clientY)

     
        }
            
   

            
    

})

//alert("ok")

function drawImage(){
    
    ctx.clearRect(0,0,4584,1022)
    //cria obj, posiciao --> Xinicort,Yinicort,Lcort,Acort,posX,posY,Limag,Aimsg,
    ctx.drawImage(tela,mouseX,mouseY,700,350,0,0,700,350)
    ctx.drawImage(direita,32,0,12,15,680,150,18,15)
    ctx.drawImage(ceta,32,15,12,15,15,150,18,15)
    ctx.drawImage(altoBaixo,29,13,20,15,330,0,30,20)
    ctx.drawImage(Baixo,29,0,20,15,330,320,30,20)


};




function fechar() {
    let modal=document.querySelector('#fade')
    modal.style.opacity=0;
    vdd="false"
    
}


function loop(){
    window.requestAnimationFrame(loop,cnv);
    drawImage()
    update()
    
}
loop();