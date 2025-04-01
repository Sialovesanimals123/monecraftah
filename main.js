var canvas=new fabric.Canvas("my_canvas")
canvas.selection = false;

var player_x = 100;
var player_y = 100;

var block_width = 30;
var block_height = 30;
var player_object = ""
var block_object = ""


function player_update(){
    fabric.Image.fromURL("assets/playerskins/frog.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x,
            selectable: false
        });
        canvas.add(player_object)
    })
}

function newblocks(block_name){
    fabric.Image.fromURL(block_name,function(Img){
        block_object = Img;
        block_object.scaleToHeight(block_height);
        block_object.scaleToWidth(block_width);
        block_object.set({
            top:player_y,
            left:player_x ,
            selectable: false 
        })
        canvas.add(block_object)

    } )
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keyPressed = e.keyCode;

    //+ key
    if(keyPressed ==187){
        block_width= block_width+10;
        block_height= block_height+10;
    }
    //- key
    if(keyPressed ==189){
        block_height= block_height-10;
        block_width= block_width-10;
    }



    if(keyPressed == 38){
        up();
    }
    if(keyPressed == 40){
        down();
    }
    if(keyPressed == 37){
        left();
    }
    if(keyPressed == 39){
        right();
    }
    // a- babycat
    if(keyPressed == 65){
        newblocks("assets/blocks/pets/babycat.png")
    }
    //b - beepet
    if(keyPressed == 66){
        newblocks("assets/blocks/pets/beepet.png")    
    }
    //c-bluelotl
    if(keyPressed == 67){
        newblocks("assets/blocks/pets/bluelotl.png")
    }

    //d-catpet
    if(keyPressed == 68){
        newblocks("assets/blocks/pets/catpet.png")
    }    

    //e-clownpet
    if(keyPressed == 69){
        newblocks("assets/blocks/pets/clownpet.png")
    }    
    

    //f-cyanlotl
    if(keyPressed == 70){
        newblocks("assets/blocks/pets/cyanlotl.png")
    }    
    
    //g - dogbrownpet
    if(keyPressed == 71){
        newblocks("assets/blocks/pets/dogbrownpet.png")
    }  

    //h- dragon
    if(keyPressed == 72){
        newblocks("assets/blocks/pets/dragon.png")
    }  

    //i- fullchicken
    if(keyPressed == 73){
        newblocks("assets/blocks/pets/fullchicken.png")
        
    }  

    //j- fullfox
    if(keyPressed == 74){
        newblocks("assets/blocks/pets/fullfox.png")
    }  

    //k- fullpig
    if(keyPressed == 75){
        newblocks("assets/blocks/pets/fullpig.png")
    }  

    //l- Planda
    if(keyPressed == 76){
        newblocks("assets/blocks/pets/Panda.png")
    }  

    //m- petdog
    if(keyPressed == 77){
        newblocks("assets/blocks/pets/petdog.png")
    }  

    //n- pinklotl
    if(keyPressed == 78){
        newblocks("assets/blocks/pets/pinklotl.png")
    }  
    
    //o- sheeppet
    if(keyPressed == 79){
        newblocks("assets/blocks/pets/sheeppet.png")
    }  

    //p - yellowslimepet
    if(keyPressed == 80){
        newblocks("assets/blocks/pets/yellowslimepet.png")
    }  

    //q - sky
    if(keyPressed == 81){
        newblocks("assets/blocks/sky.png")
    }  

    //r - stone
    if(keyPressed == 82){
        newblocks("assets/blocks/brown.png")
    }  

    //s - style
    if(keyPressed == 83){
        newblocks("assets/blocks/dark_green.png")
    }  

    //t - trunk
    if(keyPressed == 84){
        newblocks("assets/blocks/light_green.png")
    }  

    //u - unique
    if(keyPressed == 85){
        newblocks("assets/blocks/lightblue.png")
    }  

    //v -  wall
    if(keyPressed == 86){
        newblocks("assets/blocks/magc.png")
    }  

    //w - wotuh
    if(keyPressed == 87){
        newblocks("assets/blocks/pinkleaves.png")
    }  

    //x - yellow_wall
    if(keyPressed == 88){
        newblocks("assets/blocks/purplediamond.png")
    }  


    //y - yellowc
    if(keyPressed == 89){
        newblocks("assets/blocks/redc.png")
    }  



    //z - roof
    if(keyPressed == 90){
        newblocks("assets/blocks/roof.png")
    }  

    //0 - redc
    if(keyPressed == 48){
        newblocks("assets/blocks/sky.png")
    }  

    //1 - purplediamond
    if(keyPressed == 49){
        newblocks("assets/blocks/stone.png")
    }  

    //2 - pinkleaves
    if(keyPressed == 50){
        newblocks("assets/blocks/style.png")
    }  

    //3 -  magc
    if(keyPressed == 51){
        newblocks("assets/blocks/trunk.png")
    }  

    //4 - lightblue
    if(keyPressed == 52){
        newblocks("assets/blocks/unique.png")
    }  

    //5 - light_green
    if(keyPressed == 53){
        newblocks("assets/blocks/wall.png")
    }  

    //6 - dark_green
    if(keyPressed == 54){
        newblocks("assets/blocks/wotuh.png")
    }  

    //7 - brown
    if(keyPressed == 55){
        newblocks("assets/blocks/yellow_wall.png")
    }  

    //8 - yellowc
    if(keyPressed == 56){
        newblocks("assets/blocks/yellowc.png")
    }  
    


    
    
}


function up(){
    if(player_y >= 0){
        player_y = player_y - block_height;
        canvas.remove(player_object)
        player_update()
    }
   
}

function down(){
    if(player_y <= 520){
        player_y = player_y + block_height;
        canvas.remove(player_object)
        player_update()
    }
}

function left(){
    if(player_x >=0){ 
        player_x = player_x - block_width;
        canvas.remove(player_object)
        player_update()
    }
}

function right(){
    if(player_x <=930){
        player_x = player_x + block_width;
        canvas.remove(player_object)
        player_update()
    }
}

function save(){ 

    var dataURL = canvas.toDataURL({
        format:'png',
        quality:1
    })
    var link = document.createElement('a');
    link.href=dataURL;
    link.download="ferriswheel.png";
    link.click()


}

function clearing(){
   
    canvas.clear()
    window.location.reload()
}

function undo(){

    var objects= canvas.getObjects();
    if(objects.length >0){
        var lastblock = objects[objects.length-1];
        canvas.remove(lastblock);
    }
}