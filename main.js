var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();


function start()  {
    recognition.start();

}



recognition.onresult=function(event)    {
console.log(event);
var content=event.results[0][0].transcript;
if(content=="selfie"){
    speak();
}


}


Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:99
});


function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 3 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);

    Webcam.attach("#camera");
    setTimeout(function()
    {
        img_id="selfie1";
        take_snapshot();
        speak_data="taking your selfie in 4 seconds";
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    
    },3000);

    setTimeout(function()
    {
        img_id="selfie2";
        take_snapshot();
        speak_data="taking your selfie in 5 seconds";
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    
    },4000);


setTimeout(function()
    {
        img_id="selfie3";
        take_snapshot();
        speak_data="taking your selfie in 6 seconds";
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    
    },5000);


    setTimeout(function()
    {
        img_id="selfie4";
        take_snapshot();
        speak_data="taking your selfie in 6 seconds";
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    
    },6000);


    setTimeout(function()
    {
        img_id="selfie6";
        take_snapshot();
        speak_data="taking your selfie in 5 seconds";
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    
    },7000);


}




function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

    });

}



