function page(){

    logo1=loadImage("Logo.png")
    logo=createSprite(windowWidth/2,windowHeight/2)
    logo.addImage("littlepoetrywala",logo1)
    logo.scale=0.45

}
 
function con(){
    if(frameCount%1===0){
        var confetti=createSprite(random(0,windowWidth),0,10,10)
        var select=Math.round(random(1,6))
        if(frameCount%0.25===0){
            if(select===1){
                confetti.shapeColor='red'
            }
            else if(select===2){
                confetti.shapeColor='blue'
            }
            else if(select===3){
                confetti.shapeColor='green'
            }
            else if(select===4){
                confetti.shapeColor='pink'
            }
            else if(select===5){
                confetti.shapeColor='white'
            }
            else{
                confetti.shapeColor="brown"
            }
        }
        confetti.velocityY=10
    }
}