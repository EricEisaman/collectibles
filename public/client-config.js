window.config = {
 gameName:"Collectibles",
 // https://emojipedia.org/  leave as "" if you want no emoji
 emoji:"💫",
 // https://www141.lunapic.com/editor/  http://icoconvert.com/
 favicon:"https://cdn.glitch.com/684a531a-502e-4b52-a097-a4bc6aaed6cb%2Fstar.ico",
 theme:{
  // https://fonts.google.com/ examples: Kirang Haerang, Megrim, Permanent Marker, Orbitron, Monoton
  fontFamily:"Cabin Sketch",
  fontColor:"#063684",
  formColor:"#f7d85d",
  overlayColor:"rgba(226, 204, 136, 0.8)",
  fontSize:2
 },
 avatar:{
  models:["https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fthing-idle.glb?1532828880828",
          "https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fowl.glb?1532839615976",
          "https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fgreeny_animated.glb?1537474053675",
          "https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fred_thing.glb?1537622937733"],
  buttonFaces: ["https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fweebs.png?1532833980859",
          "https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fowl.png?1532839076824",
          "https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fgreeny_btn.png?1537463045668",
          "https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fred_thing.png?1537622885960"],
  buttonColor: '#fff',
  speed: 140
 },
 sounds:{
  playerJoined: {url:'https://cdn.glitch.com/264357be-a97e-43ca-8194-b6020c6fd45e%2Fdoorbell.mp3'},
  playerLeft: {url:'https://cdn.glitch.com/3294c4a3-a3d8-412f-a31e-1e03d1cd1cbd%2Fplayer-leave.mp3?1532440646173'},
  yay: {url:'https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fyay.mp3?1538839840045',loop:false,volume:0.8}
 },
 msg:{
  color: "#063684"
 },
 // https://github.com/feiss/aframe-environment-component
 environment:{
  preset:"default",
  seed:0.3,
  shadow:true,
  playArea:1, 
  shadow:true,
  shadowSize:10,
  dressing:"",
  dressingAmount:10, 
  dressingColor:"",
  dressingScale:15,
  dressingVariance:"20 30 40",
  dressingUniformScale:false,
  fog:0, 
  flatShading:false,
  skyType:"", 
  horizonColor:"", 
  skyColor:"",
  ground:"",
  groundYScale:5,
  groundTexture:"",
  groundColor:"",
  groundColor2:"",
  grid:"",
  gridColor:"",
  lighting:"",
  lightPosition:""
 },
 //Soundcloud track numbers from share/embed code
 bgm:{
  songs: [326544627],
  volume: 0.1,
  playAll: true,
  initialDelay: 5000
 },
 releasePointerLockOnUI: true,
 //SEE REF. http://keycode.info/
 keys:{
  toggleUI:'Equal',
  nextSong:'KeyP',
  toggleMute:'Digit0',
  toggleCursor:'KeyC'
 },
 //Run printVoices() in the game browser console
 voice:{
   name:'Serena',
   // from 0.1 to 10
   rate: 1,
   // from 0 to 2
   pitch: 1,
   // from 0 to 1
   volume: 1,
   // delay in milliseconds 
   welcomeDelay: 2000
 },
 physics:{
   //This gravity affects the players
   gravity: -9.8,
   maxGrabDistance: 40,
   //These objects are not affected by gravity or collisions, but you can grab and move them
   // https://github.com/aframevr/aframe/blob/master/docs/components/geometry.md
   // These objects require a unique name.
   objects:[
      
    ]
 },
 collectibles:{
   threshold:3,
   itemDefs:[
     {type:'clock',scale:'0.1 0.1 0.1',rotation:'0 0 0',positions:['0 0 -95','-20 0 -25'],
      url:'https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fclock.glb?1538858467717',
      objectSound:{url:'https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Ftick_tock.mp3?1538858557825',volume:1},
      collectSound:{url:'https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fyay.mp3?1538839840045',volume:1},
      callback:'addPoint'
     }  
   ]
 },
 thruster:{
   innerColor: "orange",
   outerColor: "white"
 },
 mobile:{
   thruster_icon: "https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fjump_fly_btn.png",
   joystick_outer_color: "rgba(5, 31, 101, 0.2)",
   joystick_inner_color: "rgba(5, 31, 101, 0.4)"
 },
 vr: false
}