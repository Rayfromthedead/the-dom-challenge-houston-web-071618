
// Iteration 

function _toConsumableArray(firstPassedArray){
  if(Array.isArray(firstPassedArray)){
    for(var i = 0, whatIsC = Array(firstPassedArray.length); i < firstPassedArray.length; i++)
    whatIsC[i] = firstPassedArray[i];
    return whatIsC;
  }
    return Array.from(firstPassedArray)
  }

// Timer

  var ticking = !0, timer=function(){
    return setInterval(function(){
      var counterA = document.getElementById("counter"),
      textInCountB = parseInt(counterA.innerText);
      counterA.innerText = textInCountB + 1
    },
     1e3)
  };


  interval=timer(),

  // Id's set to arrays

 minus=document.getElementById("-"),

 plus=document.getElementById("+"),

 heart=document.getElementById("<3"),

 pause=document.getElementById("pause"),

 commentForm=document.getElementsByTagName("form")[0];

//  Negative button -1

  minus.addEventListener("click",function(){
    var newCounterMinusA=document.getElementById("counter"), 
    changeInCounterB = parseInt(newCounterMinusA.innerText);
    newCounterMinusA.innerText=changeInCounterB - 1
  }),
//  Positive Butto +1

  plus.addEventListener("click",function(){
    var newCounterPlusA=document.getElementById("counter"),
    changeInCounterB = parseInt(newCounterPlusA.innerText);
    newCounterPlusA.innerText=changeInCounterB + 1
  }),
  
  // Hear LIKES! button : leaves like with #

  heart.addEventListener("click",function(){
    var heartCount = document.getElementById("counter"), 
    heartCountNumber = parseInt(heartCount.innerText), 
    classLikes = document.querySelector(".likes"), 
    likeLogger = void 0;
    if([].concat(_toConsumableArray(classLikes.children)).map(function(heartCount){
      return parseInt(heartCount.dataset.num)
    }).includes(heartCountNumber)){
      likeLogger = document.querySelector('[data-num="'+heartCountNumber+'"]'); 
    var timesLiked = parseInt(likeLogger.children[0].innerText); 
    likeLogger.innerHTML = "Me GUSTAH numbah " + heartCountNumber+" You should like more than <span>"+(timesLiked+1)+"</span> times"
    }
    else(likeLogger=document.createElement("li")).setAttribute("data-num",heartCountNumber), 
    likeLogger.innerHTML = "AHH numbah " +heartCountNumber + ".  Y you only like <span>1</span> time?!", 
    classLikes.appendChild(likeLogger)
  }),

  // Pause button. Stops timer and all actions. does not reset

  pause.addEventListener("click",function(){
    ticking ? (ticking = !1, clearInterval(interval), this.innerText="resume") : 
    (ticking = !0, interval = timer(),this.innerText="pause"),
    [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){
      "pause"!==a.id&&(a.disabled=!ticking)
     })
  }),

// Comment Form to leave comment on page

    commentForm.addEventListener("submit",function(valueImputForFunction){
      valueImputForFunction.preventDefault();
      var childrenOftheForm = this.children[0],
      makeMyValueString = childrenOftheForm.value ; childrenOftheForm.value = "";
      var classComments = document.querySelector(".comments"),
      createNewParagraphElement = document.createElement("p");
      createNewParagraphElement.innerText = makeMyValueString , classComments.appendChild(createNewParagraphElement)
    });
