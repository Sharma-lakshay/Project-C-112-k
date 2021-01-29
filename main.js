Webcam.set({
    width: 300, 
    height: 300,
    image_format: "png",
    png_quality: 90,
    constrains:{
        facingMode: "enviroment"
    }
});

camera= document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML= '<img id="captured_image" src="' + data_uri + '"/>';
});
}

console.log("ml5 version", ml5.version);

classifier= ml5.imageClassifier("MobileNet", modelLoaded);
classifier1= ml5.imageClassifier("Wolfram", modelLoaded1);


function modelLoaded(){
    console.log("Model Loaded");
}

function modelLoaded1(){
    console.log("Model Loaded");
}

function check(){
    img= document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function check1(){
    img= document.getElementById("captured_image");
    classifier.classify(img, gotResult1);
}

function gotResult(error,results){
    if(error) {
        console.error(error);
    }

    else{
       console.log(results);
       document.getElementById("object_name").innerHTML= results[0].label;
    }
}


function gotResult1(error,results){
    if(error) {
        console.error(error);
    }

    else{
       console.log(results);
       document.getElementById("object_name").innerHTML= results[0].label;
    }
}

