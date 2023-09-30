camera=document.getElementById("camera");
Webcam.set({
width:500,
height:200,
image_format:"jpg",
jpg_quality:200
}) 
Webcam.attach(camera)