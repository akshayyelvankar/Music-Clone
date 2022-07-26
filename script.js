/* Initialize Variable*/
let songIndex=0;
let audioElement=new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progressbar')
let gif= document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Let Me Love You",filePath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Let Me Love You",filePath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songName:"Let Me Love You",filePath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songName:"Let Me Love You",filePath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songName:"Let Me Love You",filePath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songName:"Let Me Love You",filePath:"songs/6.mp3",coverpath:"covers/6.jpg"},
]
   songItems.forEach((element,i)=>{
       console.log(element,i);
       element.getElementsByTagName("img")[0].src=songs[i].coverpath;
       element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
   })
// audioElement.play();
//Handle Play/Paus click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0
    }
})

//Listen Event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //upadte Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})
       const makeAllPlays=()=>{
     Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');
     })
 }

 Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
     element.addEventListener('click',(element)=>{
        makeAllPlays();
        index=parseInt(element.target.id)
        element.target.classList.remove('fa-play-circle');
        element.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
     })
 })