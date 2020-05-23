function preload(){
   loadAssets();
}

// 1 hour = 90 seconds;

function setup() {
  cnv = createCanvas(800, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  scene = "main_menu"
  timer = 0;
  night = 1;
  power = 100
  powerTimer = 0;
  currentCamera = "1A";
  button1_door_state = false;
  button1_light_state = false;
  button2_door_state = false;
  button2_light_state = false;
  phoneRang = false;
  phoneGuyTalked = false; 
  powerUsage = 0;
  
  freddyJumpscare = false;
  bonnieJumpscare = false;
  chicaJumpscare = false;
  foxyJumpscare = false;
  foxyCoveOpen = false;
  foxyMove = 0;
  
  foxyAnimationTimer = 0;
  foxyAnimationState = false;
  
  customNight = false;
  
  freddyLocation = "1A";
  chicaLocation = "1A";
  bonnieLocation = "1A";
  foxyLocation = "1C";
  
  freddyDifficulty = 0;
  bonnieDifficulty = 0;
  chicaDifficulty = 0;
  foxyDifficulty = 0;
  
  freddyJumpTimer = 0;
  chicaJumpTimer = 0;
  bonnieJumpTimer = 0;
  foxyJumpTimer = 0;
  
  freddyTimeSpent = 0;
  chicaTimeSpent = 0;
  bonnieTimeSpent = 0;
  
  moveTimeFreddy = 5;
  moveTimeChica = 5;
  moveTimeBonnie = 5;
  moveTimeFoxy = 7;
  
  nigga_imprisoned = true;
  Allah = true;
  
  freddyMoveTimer = 0;
  chicaMoveTimer = 0;
  bonnieMoveTimer = 0;
  foxyMoveTimer = 0;
  
  jumpscareTimer = 0;
  noPowerTimer = 0;
  
  foxyRunning = false
  
  winTimer = 0;
  
  difficulty = 0;
  
  randomJump = 20 - difficulty;
  
  nightTimer = 0;
  nightHour = 0;
  
  
}

function draw() {
  background(255);
  scene_menu();
  scene_gameEntrance();
  scene_game();
  scene_gameCamera();
  scene_win();
  gameUpdates();
  fnadKing();
  scene_jumpscare();
  noPower();
  customNightMenu();
}

function scene_menu(){
  
  if (scene != "main_menu" && scene != "customNightMenu" && menu_music.isPlaying()) {menu_music.stop()}
  if (scene != "main_menu") {return}; 
    
  image(main_menu,0,0,800,600);
  if (!menu_music.isPlaying()) {menu_music.play()};
                             
}
  
function scene_gameEntrance(){
  
  if (scene != "gameEntrance") {return}; 
                                

  
  if (bonnie_jumpscare.isPlaying()) (bonnie_jumpscare.stop());
  if (freddy_jumpscare.isPlaying()) (freddy_jumpscare.stop());
  if (chica_jumpscare.isPlaying()) (chica_jumpscare.stop());
                                
  timer += 1
                                
  if (timer > 150){
    scene = "game"
  }

  background(0)
  textSize(32);
  fill(255);
  textAlign(CENTER)                            
  if (!customNight) {text("Night "+night,width/2,height/2);}
  if (customNight) {text("Night 6",width/2,height/2)}
                                
  
                                
}
  
function scene_game(){
  
  if (scene != "game") {return}
  
  image(office,0,0,800,600)

                        
  if (phoneguy_1.isPlaying() || phoneguy_2.isPlaying()|| phoneguy_3.isPlaying()|| phoneguy_4.isPlaying()|| phoneguy_5.isPlaying() || phoneguy_6.isPlaying()){
    textSize(20);
    noFill();
    color(255);
    stroke(255);
    rect(10,10,100,40);
    textAlign(LEFT)
    text("skip call",20,30);
    fill(255);
  }
          

  if (button1_door_state == true) {button1 = button1_door_on} else {button1 = button1_door_off}
  if (button1_light_state == true) {button2 = button1_light_on} else {button2 = button1_light_off}
  if (button2_door_state == true) {button3 = button2_door_on} else {button3 = button2_door_off}
  if (button2_light_state == true) {button4 = button2_light_on} else {button4 = button2_light_off}
    
  image(button1,-20,100,80,200);
  image(button2,-30,300,100,200);
  image(button3, 735,100,80,180);
  image(button4,735,280,80,180);
                        
  if (button1_light_state) {image(lightLeft,50,50,100,600)}
  if (button2_light_state) {image(lightRight,650,50,100,600)}
                        
  // bazinga
                        
  if (button1_light_state && freddyLocation == "left") {image(freddy,40,200,100,600)}
  if (button1_light_state && bonnieLocation == "left") {image(bonnie,20,0,200,600)}
  if (button1_light_state && chicaLocation == "left") {image(chica,0,100,200,600)}
                        
  if (button2_light_state && freddyLocation == "right") {image(freddy,650,200,100,600)}
  if (button2_light_state && bonnieLocation == "right") {image(bonnie,600,0,200,600)}
  if (button2_light_state && chicaLocation == "right") {image(chica,600,100,200,600)}
                        
  if (button1_door_state) {image(door1,0,0,200,600)}
  if (button2_door_state) {image(door2,550,0,240,600)}
  
                        
  image(button,400,550); 
                                       
  textAlign(LEFT)
  textSize(20);
  text ("power:"+power+"%",10,580)
  textSize(32)
  if (nightHour == 0) {text("12 AM",660,32)} else {text(nightHour+" AM",660,32)}
                        
}
  
function scene_gameCamera(){
  
  if (scene != "gameCamera") {return}
  
  if (currentCamera == "1A") {cameraImage = cam_1A}
  if (currentCamera == "1B") {cameraImage = cam_1B} 
  if (currentCamera == "7") {cameraImage = cam_7} 
  if (currentCamera == "6") {cameraImage = cam_6} 
  if (currentCamera == "4A") {cameraImage = cam_4A} 
  if (currentCamera == "4B") {cameraImage = cam_4B} 
  if (currentCamera == "2A") {cameraImage = cam_2A} 
  if (currentCamera == "2B") {cameraImage = cam_2B} 
  if (currentCamera == "3") {cameraImage = cam_3} 
  if (currentCamera == "1C") {
    if (foxyCoveOpen) {cameraImage = cam_1C_1} else {cameraImage = cam_1C_0}
  } 
  if (currentCamera == "5") {cameraImage = cam_5} 
  
  image(cameraImage,0,0,800,600)
                              
  if (currentCamera == "1A"){
    if (freddyLocation == "1A"){
      image(freddy,450,100,300,600) 
    }
    if (bonnieLocation == "1A"){
      image(bonnie,200,-80,400,700) 
    }
    if (chicaLocation == "1A"){
      image(chica,10,150,300,600);
    }
  }
                              
  if (currentCamera == "1B"){
    if (freddyLocation == "1B"){
      image(freddy,450,100,300,600) 
    }
    if (bonnieLocation == "1B"){
      image(bonnie,200,-80,400,700) 
    }
    if (chicaLocation == "1B"){
      image(chica,10,150,300,600);
    }
  }
                              
  if (currentCamera == "7"){
    if (freddyLocation == "7"){
      image(freddy,450,100,300,600) 
    }
    if (bonnieLocation == "7"){
      image(bonnie,200,-80,400,700) 
    }
    if (chicaLocation == "7"){
      image(chica,10,150,300,600);
    }
  }
                              
  // if (currentCamera == "6"){
  //   if (freddyLocation == "6"){
  //     image(freddy,450,100,300,600) 
  //   }
  //   if (bonnieLocation == "6"){
  //     image(bonnie,200,-80,400,700) 
  //   }
  //   if (chicaLocation == "6"){
  //     image(chica,10,150,300,600);
  //   }
  // }
                              
  if (currentCamera == "4A"){
    if (freddyLocation == "4A"){
      image(freddy,450,100,300,600) 
    }
    if (bonnieLocation == "4A"){
      image(bonnie,200,-80,400,700) 
    }
    if (chicaLocation == "4A"){
      image(chica,10,150,300,600);
    }
  }
                              
  if (currentCamera == "4B"){
    if (freddyLocation == "4B"){
      image(freddy,450,100,300,600) 
    }
    if (bonnieLocation == "4B"){
      image(bonnie,200,-80,400,700) 
    }
    if (chicaLocation == "4B"){
      image(chica,10,150,300,600);
    }
  }
                              
  if (currentCamera == "2A"){
    if (freddyLocation == "2A"){
      image(freddy,450,100,300,600) 
    }
    if (bonnieLocation == "2A"){
      image(bonnie,200,-80,400,700) 
    }
    if (chicaLocation == "2A"){
      image(chica,10,150,300,600);
    }
    if (foxyCoveOpen){
      if (foxyAnimationState) {image(foxy,450-floor(foxyMove/10),50+floor(foxyMove))}
      if (!foxyAnimationState) {image(foxy2,450-floor(foxyMove/10),50+floor(foxyMove))}
    }
  }
                              
  if (currentCamera == "2B"){
    if (freddyLocation == "2B"){
      image(freddy,450,100,300,600) 
    }
    if (bonnieLocation == "2B"){
      image(bonnie,200,-80,400,700) 
    }
    if (chicaLocation == "2B"){
      image(chica,10,150,300,600);
    }
  }
                              
  if (currentCamera == "3"){
    if (freddyLocation == "3"){
      image(freddy,450,100,300,600) 
    }
    if (bonnieLocation == "3"){
      image(bonnie,200,-80,400,700) 
    }
    if (chicaLocation == "3"){
      image(chica,10,150,300,600);
    }
  }
                              
  if (currentCamera == "5"){
    if (freddyLocation == "5"){
      image(freddy,450,100,300,600) 
    }
    if (bonnieLocation == "5"){
      image(bonnie,200,-80,400,700) 
    }
    if (chicaLocation == "5"){
      image(chica,10,150,300,600);
    }
  }                                      
                              
  image(cam_map,400,300,400,300)
  image(button,20,550)
  
}
  
function keyPressed(){
  if (keyCode == 83){
    nightTimer += 2000;
  }
  
  
  
}
  
function mouseClicked(){
  
  console.log("X:"+mouseX+" Y:"+mouseY);
  
  
  
  if (scene == "gameEntrance"){
    timer += 150; 
  }
  
  if (scene == "main_menu"){
    if (selectionBox(88,319,306,373)){
      scene = "gameEntrance"
      clickSound.play()
    }
    if (selectionBox(88,375,310,431)){
      scene = "customNightMenu"; 
      clickSound.play()
    }
  }
  
  if (scene == "customNightMenu"){
    if (selectionBox(50,500,350,590)){
      scene = "main_menu";      
      clickSound.play()
    }
    
    if (selectionBox(450,500,750,590)){
      scene = "gameEntrance"; 
      customNight = true;
      clickSound.play()
    }
    
    
    // MOVE ATTEMPT CD
    
    if (selectionBox(40,195,105,265)){
      moveTimeFreddy--;
      clickSound.play()
    }
    
    if (selectionBox(115,195,190,265)){
      moveTimeFreddy++; 
      clickSound.play()
    }
    
    if (selectionBox(40+190,195,105+190,265)){
      moveTimeBonnie--;
      clickSound.play()
    }
    
    if (selectionBox(115+190,195,190+190,265)){
      moveTimeBonnie++; 
      clickSound.play()
    }
    
    if (selectionBox(40+190*2,195,105+190*2,265)){
      moveTimeChica--;
      clickSound.play()
    }
    
    if (selectionBox(115+190*2,195,190+190*2,265)){
      moveTimeChica++; 
      clickSound.play()
    }
    
    if (selectionBox(40+190*3,195,105+190*3,265)){
      moveTimeFoxy--;
      clickSound.play()
    }
    
    if (selectionBox(115+190*3,195,190+190*3,265)){
      moveTimeFoxy++; 
      clickSound.play()
    }
    
    // DIFFICULTY 

    if (selectionBox(40,195+70,105,265+70)){
      freddyDifficulty--;
      clickSound.play()
    }
    
    if (selectionBox(115,195+70,190,265+70)){
      freddyDifficulty++; 
      clickSound.play()
    }
    
    if (selectionBox(40+190,195+70,105+190,265+70)){
      bonnieDifficulty--;
      clickSound.play()
    }
    
    if (selectionBox(115+190,195+70,190+190,265+70)){
      bonnieDifficulty++; 
      clickSound.play()
    }
    
    if (selectionBox(40+190*2,195+70,105+190*2,265+70)){
      chicaDifficulty--;
      clickSound.play()
    }
    
    if (selectionBox(115+190*2,195+70,190+190*2,265+70)){
      chicaDifficulty++; 
      clickSound.play()
    }
    
    if (selectionBox(40+190*3,195+70,105+190*3,265+70)){
      foxyDifficulty--;
      clickSound.play()
    }
    
    if (selectionBox(115+190*3,195+70,190+190*3,265+70)){
      foxyDifficulty++; 
      clickSound.play()
    }
    
    if (freddyDifficulty < 0) {freddyDifficulty = 0}
    if (freddyDifficulty > 20) {freddyDifficulty = 20}
    
    if (bonnieDifficulty < 0) {bonnieDifficulty = 0}
    if (bonnieDifficulty > 20) {bonnieDifficulty = 20}
    
    if (chicaDifficulty < 0) {chicaDifficulty = 0}
    if (chicaDifficulty > 20) {chicaDifficulty = 20}
    
    if (foxyDifficulty < 0) {foxyDifficulty = 0}
    if (foxyDifficulty > 20) {foxyDifficulty = 20}
    
    if (freddyDifficulty == 1 && bonnieDifficulty == 9 && chicaDifficulty == 8 && foxyDifficulty == 7){
      foxyJumpscare = true;
      scene = "jumpscare" 
    }
    
    if (freddyDifficulty == 6 && bonnieDifficulty == 9 && chicaDifficulty == 6 && foxyDifficulty == 9){
      foxyJumpscare = true;
      scene = "jumpscare" 
    }
    
  }
  
  if (scene == "game"){
    if (selectionBox(0,500,800,600)){
      scene = "gameCamera"
      cameraLong.play();
    }
    
    if (selectionBox(313,199,346,234)){
        honk.play();
    }
    
    if (selectionBox(484,216,524,297)){
        salt_scream.play(); 
    } 
    
    if (selectionBox(0,232,48,290)){
      button1_door_state = !button1_door_state 
      fnaf_door.play()
    }
    
    if (selectionBox(0,300,52,350)){
      button1_light_state = !button1_light_state 
      clickSound.play()
    }

    if (selectionBox(743,221,790,271)){
      button2_door_state = !button2_door_state 
      fnaf_door.play()
    }
    
    if (selectionBox(745,275,790,329)){
      button2_light_state = !button2_light_state 
      clickSound.play()
    }
    
    if (selectionBox(10,8,111,49) && phoneguy_1.isPlaying()){
      phoneguy_1.stop(); 
    }

    if (selectionBox(10,8,111,49) && phoneguy_2.isPlaying()){
      phoneguy_2.stop(); 
    }
    
    if (selectionBox(10,8,111,49) && phoneguy_3.isPlaying()){
      phoneguy_3.stop(); 
    }
    
    if (selectionBox(10,8,111,49) && phoneguy_4.isPlaying()){
      phoneguy_4.stop(); 
    }
    
    if (selectionBox(10,8,111,49) && phoneguy_5.isPlaying()){
      phoneguy_5.stop(); 
    }
    
    if (selectionBox(10,8,111,49) && phoneguy_6.isPlaying()){
      phoneguy_6.stop(); 
    }
    
  }
  
  if (scene == "gameCamera"){
  
    if (selectionBox(530,308,584,341)){
      currentCamera = "1A" 
      clickSound.play()
    }
    
    if (selectionBox(513,354,564,383)){
      currentCamera = "1B" 
      clickSound.play()
    }
    
    if (selectionBox(414,380,464,404)){
      currentCamera = "5" 
      clickSound.play()
    }
    
    if (selectionBox(479,415,540,445)){
      currentCamera = "1C" 
      clickSound.play()
    }
    
    if (selectionBox(452,493,504,524)){
      currentCamera = "3" 
      clickSound.play()
    }
    
    if (selectionBox(531,508,584,539)){
      currentCamera = "2A" 
      clickSound.play()
    }
    
    if (selectionBox(530,542,584,566)){
      currentCamera = "2B" 
      clickSound.play()
    }
    
    if (selectionBox(630,510,686,539)){
      currentCamera = "4A" 
      clickSound.play()
    }
    
    if (selectionBox(630,542,685,570)){
      currentCamera = "4B" 
      clickSound.play()
    }
    
    if (selectionBox(723,482,774,511)){
      currentCamera = "6" 
      clickSound.play()
    }
    
    if (selectionBox(728,376,785,408)){
      currentCamera = "7" 
      clickSound.play()
    }
    
    if (selectionBox(0,520,450,600)){
      scene = "game"    
      if (cameraLong.isPlaying()) {cameraLong.stop()}
      cameraShort.play();
    }
    
  }
  
}
  
function selectionBox(x1,y1,x2,y2){
  if (mouseX > x1 && mouseY > y1 && mouseX < x2 && mouseY < y2){
    return true
  } else return false
}
  
function scene_win(){
  
  if (scene != "win") {return}
  
    if (phoneguy_1.isPlaying()){
      phoneguy_1.stop(); 
    }

    if (phoneguy_2.isPlaying()){
      phoneguy_2.stop(); 
    }
    
    if (phoneguy_3.isPlaying()){
      phoneguy_3.stop(); 
    }
    
    if (phoneguy_4.isPlaying()){
      phoneguy_4.stop(); 
    }
    
    if (phoneguy_5.isPlaying()){
      phoneguy_5.stop(); 
    }
    
    if (phoneguy_6.isPlaying()){
      phoneguy_6.stop(); 
    }
  
  if (office_noises.isPlaying()) {office_noises.stop()}
  
  
  background(255)
  textSize(50)
                       
  text("you won",0,0)
  image(sixAM,0,0,800,600);
  
  if (winTimer == 0) {sixAMsound.play()}
  if (winTimer == 360) {YAY.play()}
                       
  winTimer++;
  if (winTimer > 10*60){
    night++
    reset();
  }
  
}
  
function gameUpdates(){
  if (!(scene == "game" || scene == "gameCamera")) {return}
  
  if (!office_noises.isPlaying()) {office_noises.play()}
  
  nightTimer++
  nightHour = floor(nightTimer / (60*85))
  
  if (nightHour == 6) {scene = "win"}
                                                    
  
                                                    
  powerTimer += 1
  if (powerTimer > (400 - (powerUsage*55))){  
    powerTimer = 0;
    power--;
  }
                                                    
  if (power < 0) {scene = "noPower"}
                                                    
  if (foxyMove > 700){
    
    if (button1_door_state){
      foxyMove = 0
      foxyCoveOpen = false;
      foxyRunning = false;
      foxy_door.setVolume(1);
      foxy_door.play();
      foxyMoveTimer = 0;
    } else {
      foxyJumpscare = true
      scene = "jumpscare"
    }
    
    
  }
                                                    
  if (freddyLocation == "left"){
    freddyTimeSpent++;
    if (!button1_door_state) {freddyJumpTimer++}
    
    if (freddyJumpTimer > 240){
      freddyJumpscare = true;
      scene = "jumpscare";
    }
    
    if (freddyTimeSpent > 600){
      freddyLocation = "1B"
      freddyTimeSpent = 0;
      freddyJumpTimer = 0;
    }
  }
                                                    
  if (freddyLocation == "right"){
    freddyTimeSpent++;
    if (!button2_door_state) {freddyJumpTimer++}
    
    if (freddyJumpTimer > 240){
      freddyJumpscare = true;
      scene = "jumpscare";
    }
    
    if (freddyTimeSpent > 600){
      freddyLocation = "1B"
      freddyTimeSpent = 0;
      freddyJumpTimer = 0;
    }
  }
                                                    
  if (bonnieLocation == "left"){
    bonnieTimeSpent++;
    if (!button1_door_state) {bonnieJumpTimer++}
    
    if (bonnieJumpTimer > 240){
      bonnieJumpscare = true;
      scene = "jumpscare";
    }
    
    if (bonnieTimeSpent > 600){
      bonnieLocation = "1B"
      bonnieTimeSpent = 0;
      bonnieJumpTimer = 0;
    }
  }
                                                    
  if (bonnieLocation == "right"){
    bonnieTimeSpent++;
    if (!button2_door_state) {bonnieJumpTimer++}
    
    if (bonnieJumpTimer > 240){
      bonnieJumpscare = true;
      scene = "jumpscare";
    }
    
    if (bonnieTimeSpent > 600){
      bonnieLocation = "1B"
      bonnieTimeSpent = 0;
      bonnieJumpTimer = 0;
    }
  }
                                                    
  if (chicaLocation == "left"){
    chicaTimeSpent++;
    if (!button1_door_state) {chicaJumpTimer++}
    
    if (chicaJumpTimer > 240){
      chicaJumpscare = true;
      scene = "jumpscare";
    }
    
    if (chicaTimeSpent > 600){
      chicaLocation = "1B"
      chicaTimeSpent = 0;
      chicaJumpTimer = 0;
    }
  }
                                                    
  if (chicaLocation == "right"){
    chicaTimeSpent++;
    if (!button2_door_state) {chicaJumpTimer++}
    
    if (chicaJumpTimer > 240){
      chicaJumpscare = true;
      scene = "jumpscare";
    }
    
    if (chicaTimeSpent > 600){
      chicaLocation = "1B"
      chicaTimeSpent = 0;
      chicaJumpTimer = 0;
    }
  }
                                                    
  powerUsage = 1;
  if (button1_door_state) {powerUsage++}
  if (button1_light_state) {powerUsage++}
  if (button2_door_state) {powerUsage++}
  if (button2_light_state) {powerUsage++}

  if (scene == "gameCamera") {powerUsage++}
                                                    
  for (var i = 0; i < powerUsage; i++){
    fill(powerUsage*50,255 - powerUsage*35,0)
    rect(10+i*12,530,10,15) 
    fill(255)
  }
  
                        
  if (phoneRang == false){
    phonering.play()
    phonering.setVolume(0.1);
    phoneRang = true;
  }
                        
  if (phoneRang && !phoneGuyTalked && !phonering.isPlaying()){
    if (!customNight){
      if (night == 1){phoneguy_1.play();}
      if (night == 2){phoneguy_2.play();}
      if (night == 3){phoneguy_3.play();}
      if (night == 4){phoneguy_4.play();}
      if (night == 5){phoneguy_5.play();}
      phoneGuyTalked = true;
    } else {
      phoneguy_6.play();
      phoneGuyTalked = true;
    }

  }
                                                    
  freddyMoveTimer++
  bonnieMoveTimer++
  chicaMoveTimer++
  foxyMoveTimer++
                                                    
  if (foxyRunning) {foxyMove += 1 + foxyDifficulty / 15};
  if (foxyRunning) {foxyAnimationTimer++}
  if (foxyAnimationTimer > 15 - foxyDifficulty / 15){
    foxyAnimationState = !foxyAnimationState; 
    foxyAnimationTimer = 0
  }

                                                    
  if (foxyMoveTimer / 60 > moveTimeFoxy){
    if (attemptJump(20 - foxyDifficulty) && !foxyRunning){
      foxyRunning = true; 
      foxyCoveOpen = true;
    } else {
      foxyMoveTimer = 0; 
    }
  }
                                                    
  if (freddyMoveTimer / 60 > moveTimeFreddy)
  {
    if (attemptJump(20 - freddyDifficulty)){
      if (freddyLocation == "1A") {
        freddyLocation = "1B";
        freddyMoveTimer = 0
        return
      }
      if (freddyLocation == "1B") {
        freddyLocation = random(["5","1C","7"])
        freddyMoveTimer = 0;
        return
      }  
      if (freddyLocation == "5") {
        freddyLocation = "1C"
        freddyMoveTimer = 0;
        return
      }
      if (freddyLocation == "1C") {
        freddyLocation = random(["3","2A"])
        freddyMoveTimer = 0;
        return
      }  
      if (freddyLocation == "3") {
        freddyLocation = "2A"
        freddyMoveTimer = 0;
        return
      }  
      if (freddyLocation == "2A") {
        freddyLocation = "2B"
        freddyMoveTimer = 0;
        return
      }  
      if (freddyLocation == "2B") {
        freddyLocation = "left"
        freddyMoveTimer = 0;
        return
      }  
      if (freddyLocation == "7") {
        freddyLocation = "6"
        freddyMoveTimer = 0;
        return
      }  
      if (freddyLocation == "4A") {
        freddyLocation = "4B"
        freddyMoveTimer = 0;
        return
      }  
      if (freddyLocation == "4B") {
        freddyLocation = "right"
        freddyMoveTimer = 0;
        return
      }  
      if (freddyLocation == "6") {
        freddyLocation = "4A"
        freddyMoveTimer = 0;
        return
      }    
    } else {freddyMoveTimer = 0}
  }
                                                    
if (bonnieMoveTimer / 60 > moveTimeBonnie)
  {
    if (attemptJump(20 - bonnieDifficulty)){
      if (bonnieLocation == "1A") {
        bonnieLocation = random(["1B","7"]);
        bonnieMoveTimer = 0;
        return
      }
      if (bonnieLocation == "1B") {
        bonnieLocation = random(["5","1C","7"])
        bonnieMoveTimer = 0;
        return
      }  
      if (bonnieLocation == "5") {
        bonnieLocation = "1C"
        bonnieMoveTimer = 0;
        return
      }
      if (bonnieLocation == "1C") {
        bonnieLocation = random(["3","2A"])
        bonnieMoveTimer = 0;
        return
      }  
      if (bonnieLocation == "3") {
        bonnieLocation = "2A"
        bonnieMoveTimer = 0;
        return
      }  
      if (bonnieLocation == "2A") {
        bonnieLocation = "2B"
        bonnieMoveTimer = 0;
        return
      }  
      if (bonnieLocation == "2B") {
        bonnieLocation = "left"
        bonnieMoveTimer = 0;
        return
      }  
      if (bonnieLocation == "7") {
        bonnieLocation = "6"
        bonnieMoveTimer = 0;
        return
      }  
      if (bonnieLocation == "4A") {
        bonnieLocation = "4B"
        bonnieMoveTimer = 0;
        return
      }  
      if (bonnieLocation == "4B") {
        bonnieLocation = "right"
        bonnieMoveTimer = 0;
        return
      }  
      if (bonnieLocation == "6") {
        bonnieLocation = "4A"
        bonnieMoveTimer = 0;
        return
      }    
    } else {bonnieMoveTimer = 0}
  }
                                                    
  if (chicaMoveTimer / 60 > moveTimeChica)
  {
    if (attemptJump(20 - chicaDifficulty)){
      if (chicaLocation == "1A") {
        chicaLocation = "1B";
        chicaMoveTimer = 0;
        return
      }
      if (chicaLocation == "1B") {
        chicaLocation = random(["5","1C","7"])
        chicaMoveTimer = 0;
        return
      }  
      if (chicaLocation == "5") {
        chicaLocation = "1C"
        chicaMoveTimer = 0;
        return
      }
      if (chicaLocation == "1C") {
        chicaLocation = random(["3","2A"])
        chicaMoveTimer = 0;
        return
      }  
      if (chicaLocation == "3") {
        chicaLocation = "2A"
        chicaMoveTimer = 0;
        return
      }  
      if (chicaLocation == "2A") {
        chicaLocation = "2B"
        chicaMoveTimer = 0;
        return
      }  
      if (chicaLocation == "2B") {
        chicaLocation = "left"
        chicaMoveTimer = 0;
        return
      }  
      if (chicaLocation == "7") {
        chicaLocation = "6"
        chicaMoveTimer = 0;
        return
      }  
      if (chicaLocation == "4A") {
        chicaLocation = "4B"
        chicaMoveTimer = 0;
        return
      }  
      if (chicaLocation == "4B") {
        chicaLocation = "right"
        chicaMoveTimer = 0;
        return
      }  
      if (chicaLocation == "6") {
        chicaLocation = "4A"
        chicaMoveTimer = 0;
        return
      }    
    } else {chicaMoveTimer = 0}
  }
            
  

  
}
  
function attemptJump(odd){
  if (floor(random(0,odd)) == 0) {return true} else {return false} 
}
        
function fnadKing(){

  if (scene != "fnadKing") {return}
  
  background(0);
  fill(255);
  text("ur the fnad king",100,100);
}
  
function scene_jumpscare(){
  if (scene != "jumpscare") {return} 
  
  jumpscareTimer++
  
  if (phoneguy_1.isPlaying()) {phoneguy_1.stop()}
  if (phoneguy_2.isPlaying()) {phoneguy_2.stop()}
  if (phoneguy_3.isPlaying()) {phoneguy_3.stop()}
  if (phoneguy_4.isPlaying()) {phoneguy_4.stop()}
  if (phoneguy_5.isPlaying()) {phoneguy_5.stop()}
  if (phoneguy_6.isPlaying()) {phoneguy_6.stop()}
                             
  if (freddyJumpscare) {
    image(office,0,0,800,600)
    image(freddy,-100,0,1000,1000);
    if (!freddy_jumpscare.isPlaying()) {freddy_jumpscare.play()}
    if (jumpscareTimer > 240){
      reset();
      scene = "gameEntrance"
    }
  }
                             
  if (bonnieJumpscare) {
    image(office,0,0,800,600)
    image(bonnie,-250,-460,1500,1500); 
    if (!bonnie_jumpscare.isPlaying()){bonnie_jumpscare.play()}
    if (jumpscareTimer > 150){
      reset();
      scene = "gameEntrance"
    }
  }
                             
  if (chicaJumpscare) {
    image(office,0,0,800,600)
    image(chica,-100,0,1000,1000);
    if (!chica_jumpscare.isPlaying()){chica_jumpscare.play()}
    if (jumpscareTimer > 180){
      reset();
      scene = "gameEntrance"
    }
  }
                             
  if (foxyJumpscare) {
    image(office,0,0,800,600)
    image(foxy,-100,0,1000,1000);
    if (!foxy_jumpscare.isPlaying()){foxy_jumpscare.play()}
    if (jumpscareTimer > 100){
      reset();
      scene = "gameEntrance"
    }
  }
                             
                             
  
}


  
function reset(){
  
  if (!customNight){
    
    if (night == 1){
      
      moveTimeFreddy = 5;
      moveTimeBonnie = 3;
      moveTimeChica = 4;
      moveTimeFoxy = 5;
      
      freddyDifficulty = 0;
      bonnieDifficulty = 5;
      chicaDifficulty = 3;
      foxyDifficulty = 0;
    
    }

    if (night == 2){
      
      moveTimeFreddy = 5;
      moveTimeBonnie = 3;
      moveTimeChica = 3;
      moveTimeFoxy = 5;
      
      freddyDifficulty = 0;
      bonnieDifficulty = 8;
      chicaDifficulty = 6;
      foxyDifficulty = 4;
    
    }
    
    if (night == 3){
      
      moveTimeFreddy = 3;
      moveTimeBonnie = 2;
      moveTimeChica = 3;
      moveTimeFoxy = 4;
      
      freddyDifficulty = 10;
      bonnieDifficulty = 12;
      chicaDifficulty = 10;
      foxyDifficulty = 8;
    
    }
    
    if (night == 4){
      
      moveTimeFreddy = 3;
      moveTimeBonnie = 2;
      moveTimeChica = 3;
      moveTimeFoxy = 4;
      
      freddyDifficulty = 12;
      bonnieDifficulty = 15;
      chicaDifficulty = 15;
      foxyDifficulty = 12;
    
    }
    
    if (night == 5){
      
      moveTimeFreddy = 5;
      moveTimeBonnie = 5;
      moveTimeChica = 5;
      moveTimeFoxy = 2;
      
      freddyDifficulty = 18;
      bonnieDifficulty = 16;
      chicaDifficulty = 16;
      foxyDifficulty = 15;
    
    }
    
  }
  
  nightTimer = 0;
  power = 100
  nightHour = 0;
 powerTimer = 0;
  currentCamera = "1A";
  freddyLocation = "1A";
  bonnieLocation = "1A";
  chicaLocation = "1A";
  button1_door_state = false;
  button1_light_state = false;
  button2_door_state = false;
  button2_light_state = false;
  phoneRang = false;
  phoneGuyTalked = false; 
  timer = 0;
   freddyJumpTimer = 0;
   chicaJumpTimer = 0;
   bonnieJumpTimer = 0;
   freddyMoveTimer = 0;
  chicaMoveTimer = 0;
   bonnieMoveTimer = 0;
  scene = "gameEntrance"
  winTimer = 0;
  jumpscareTimer = 0;
  noPowerTimer = 0;
  foxyRunning = false;
  foxyCoveOpen = false;
  foxyMove = false
  foxyMoveTimer = 0;
  foxyJumpTimer = 0;
}
  
function noPower(){
  if (scene != "noPower") {return}
  image(office_noPower,0,0,800,600);
  if (office_noises.isPlaying()) {office_noises.stop()}
  noPowerSong.setVolume(0.2);
  if (!noPowerSong.isPlaying()) {noPowerSong.play();}
  noPowerTimer ++
                           
                           
  if (noPowerTimer > 52*20){
    image(freddy,40,200,100,600) 
  }
                           
  if (noPowerTimer > 52*60){
    image(freddy,-100,0,1000,1000); 
  }
                           
  if (noPowerTimer > 53*60){  
    reset()
    office_noises.stop();
    scene = "gameEntrance"
  }
                             
}
  
function customNightMenu(){
  if (scene != "customNightMenu") {return}
  background(0);
  textSize(24);
  image(freddypfp,40,40);
  image(bonniepfp,230,40);
  image(chicapfp,230+190,40);
  image(foxypfp,230+190+190,40);
                                   
  textAlign(CENTER);
  fill(255);
  text("<   "+moveTimeFreddy+"   >",110,250);
  text("<   "+moveTimeBonnie+"   >",110+190,250);
  text("<   "+moveTimeChica+"   >",110+190*2,250);
  text("<   "+moveTimeFoxy+"   >",110+190*3,250);
  text("Move attempt cooldown in seconds:",400,220);
  text("difficulty:",400,285);
  text("<   "+freddyDifficulty+"   >",110,320);
  text("<   "+bonnieDifficulty+"   >",110+190,320);
  text("<   "+chicaDifficulty+"   >",110+190*2,320);
  text("<   "+foxyDifficulty+"   >",110+190*3,320);     
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(450,500,300,90);
  rect(50,500,300,90);
  textSize(50)
  text("RETURN",200,560);
  text("PLAY",600,560);
  strokeWeight(1);
}
