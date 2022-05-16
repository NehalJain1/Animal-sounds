function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/gz0t5pWdh/model.json",loadedmodel);
}
//--------------------------------------------------------------

function loadedmodel() {
    console.log("Model has loaded");
    classifier.classify(getresult);
}
//--------------------------------------------------------------

bg_noise = 0;
dog = 0;
cat = 0;
cow = 0;
tiger = 0;
goat = 0;
bird = 0;
//--------------------------------------------------------------

function getresult(error,result) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("times_label").innerHTML = "Times detected - "+ bg_noise;
        document.getElementById("detected_label").innerHTML = "Detected sound of - "+result[0].label;
//--------------------------------------------------------------
    red = Math.floor((Math.random() * 255)+1);
    blue= Math.floor((Math.random() * 255)+1);
   green= Math.floor((Math.random() * 255)+1);
   document.getElementById("times_label").style.color = "rgb("+red+","+green+","+blue+")"
   document.getElementById("detected_label").style.color = "rgb("+red+","+green+","+blue+")"

   gif = document.getElementById("animal");
//--------------------------------------------------------------

   if (result[0].label == "Barking") {
    gif.src = "dog-barking-unscreen.gif";
    dog = dog + 1
    document.getElementById("times_label").innerHTML = "Times detected - "+ dog;
  }
  //---\\
  else if (result[0].label == "Mooing") {
    gif.src = "cow.gif";
    cow = cow + 1
    document.getElementById("times_label").innerHTML = "Times detected - "+ cow;
}
//---\\
else if (result[0].label == "Roar") {
    gif.src = "tiger.gif";
    tiger = tiger + 1
    document.getElementById("times_label").innerHTML = "Times detected - "+ tiger;
}
//---\\
else if (result[0].label == "Meowing") {
    gif.src = "NAk7.gif";
    cat = cat + 1
    document.getElementById("times_label").innerHTML = "Times detected - "+ cat;
}
//---\\
else if (result[0].label == "Bleet") {
    gif.src = "goat.gif";
    goat = goat + 1
    document.getElementById("times_label").innerHTML = "Times detected - "+ goat;
}
//---\\
else {
    gif.src = "bird-unscreen.gif";
    bird = bird + 1
    document.getElementById("times_label").innerHTML = "Times detected - "+ bird;
}
  }
}

