function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(7);
 pScope.load_image("flower" , "png");
 pScope.load_image("car" , "png");
}

function setup_layers(pScope){
  new PLayer(null,107, 204, 242); // light blue 

  let insideBackground = new PLayer(insideGreen);
  insideBackground.mode(RING);
  insideBackground.set_boundary(0,400);

    var CentreImage = new PLayer(flower);
    CentreImage.mode(RING); 
    CentreImage.set_boundary( 0, 300 );

    var layer2 = new PLayer(car);
    layer2.mode( RING );
    layer2.set_boundary( 0, 400 );

    var layer3 = new PLayer(sun);
    layer3.mode (RING);
    layer3.set_boundary(0, 800);

}

function flower(x, y, animation, pScope){ 
  scale(1.4)
  if(animation.frame ==0)

  {
  pScope.draw_image("flower",x,y);
  }

}

function car(x, y, animation, pScope){
  scale(0.5);  
 // let angleOffset = (360 / SLICE_COUNT) / 7
 pScope.draw_image("car",0,-900-animation.wave()*40,20, 20);// creates wave
  
}

function sun(x,y,animation,pScope){ 

  fill(245, 239, 66);
  let ballSize  = 100 + (animation.wave(1)* 20)
  let bouce = 20* animation.wave()
  ellipse(600, 600+bouce ,170); 
  
}

function insideGreen (x,y,animation,pScope){
  pScope.fill_background(26, 145, 34);
}