var cnv= document.querySelector('canvas')
var ctx=cnv.getContext('2d')
let xtela=0

var tela= new Image()
tela.src="entrada16.jpg"

function update(){

}

function drawImage(){
    ctx.clearRect(0,0,910,480)
    //cria obj, posiciao --> Xinicort,Yinicort,Lcort,Acort,posX,posY,Limag,Aimsg,
    ctx.drawImage(tela,xtela,50,800,560,0,0,1500,1000)



};

let anima=setInterval(()=>{
    if(xtela==3600){
        xtela=0
    }else{
     xtela+=4
    }
       ctx.clearRect(0,0,910,480)
    
     // tela.src="tile.png";
    ctx.drawImage(tela,xtela,150,4584,1022,0,0,4584,1022)
  
  
      
},10);


function loop() {
    window.requestAnimationFrame(loop,cnv);
    update();
    drawImage();
    
}
loop();