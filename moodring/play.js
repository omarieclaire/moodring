function windowOnLoad() {
  setTimeout(function () {
    document.body.classList.add("loaded");
    document.getElementById("hidden-main").classList.remove("hidden");
    //$('h1').css('color','#222222');
  }, 1000);

  ////////////////////////////
  ////// scrolltrigger ///////
  ////////////////////////////

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    toggleActions: "restart pause reverse pause", // onEntry onLeaving onReEntry onLeaveBack
    // markers: false
  });

  function pushStartLvlAway() {
    return gsap
      .timeline({ repeat: 0, repeatDelay: 1, paused: true })
      .to(
        ".beginLvlRow1",
        { scale: 0.4, opacity: 0, duration: 11, y: 200, ease: "slow" },
        0.4,
        "Start"
      )
      .to(
        "#beginLvlRow2",
        { scale: 0.4, opacity: 0, duration: 11, y: 100, ease: "slow" },
        0.4,
        "Start"
      );
  }
  const pushStartLvlAwayAni = pushStartLvlAway();

  function bringBack() {
    gsap.timeline({
      scrollTrigger: {
        trigger: "#beginLvl",
        start: "bottom top", //first value relates to the trigger element, the second to the scroller itsef (the viewport)
        end: "-=300", //"bottom center" means "when the bottom of the endTrigger hits the center of the scroller". "center 100px" means "when the center of the endTrigger hits 80% down from the top of the scroller"
        scrub: 3, // locks animation to scrollbar - can use 1, 2, 3 etc
        pinSpacing: false,
        onLeaveBack: function () {
          pushStartLvlAwayAni.reverse();
        },
      },
    });
  }
  bringBack();

  function spacer0Ani() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#beginLvl",
          start: "center center", //first value relates to the trigger element, the second to the scroller itsef (the viewport)
          end: "bottom top", //"bottom center" means "when the bottom of the endTrigger hits the center of the scroller". "center 100px" means "when the center of the endTrigger hits 80% down from the top of the scroller"
          scrub: 3, // locks animation to scrollbar - can use 1, 2, 3 etc
          pinSpacing: false,
        },
      })
      .from("#spacer0", { opacity: 0 });
  }

  function greenGlowAni() {
    gsap
      .timeline({
        scrollTrigger: {
          // markers: true,
          trigger: "#beginLvl",
          immediateRender: false,
          start: "bottom 80%", //animation starts at this point  - 20 px above the top of the trigger element
          endTrigger: "#plantLady",
          end: "bottom 100%",
          scrub: 6, // locks animation to scrollbar - can use 1, 2, 3 etc
          toggleActions: "restart pause reverse pause", // onEntry onLeaving onReEntry
          pinSpacing: false,
        },
      })
      .to("#greenGlow", { y: innerHeight * 0.7, rotate: 180, ease: "back(1)" });
  }

  function playerQuestionLvlAni() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#playerQuestionLvl",
          start: "top center", //animation starts at this point  - 20 px above the top of the trigger element
          end: "30%",
          scrub: 3, // locks animation to scrollbar - can use 1, 2, 3 etc
          pinSpacing: false,
        },
      })
      .from("#plantLady", {
        scale: 0.3,
        autoAlpha: 0,
        y: innerHeight * -0.1,
        ease: "back(2)",
      })
      .from("#whatDoYouSeek", { scale: 0.8, autoAlpha: 0, ease: "back(1)" })
      .from("#seekText", { scale: 0.8 });
  }
  function questions3LvlAni() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#spacer1",
          start: "top top", //animation starts at this point  - 20 px above the top of the trigger element
          end: "+=150",
          scrub: 5, // locks animation to scrollbar - can use 1, 2, 3 etc
          pinSpacing: false,
        },
      })
      // .from("#questionstxt1", { y: innerHeight, scale: 0.2, autoAlpha: 0 })
      .from("#greenSwimmer", {
        y: innerHeight * 0.275,
        scale: 0.2,
        autoAlpha: 0,
        rotate: 90,
      })
      .from("#questionstxt2", { scale: 0.2, autoAlpha: 0 });
  }

  function greenSwimmerFollowAni() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#questions3Lvl",
          start: "top top", //animation starts at this point  - 20 px above the top of the trigger element
          endTrigger: "#spacer2",
          end: "top top",
          scrub: 5, // locks animation to scrollbar - can use 1, 2, 3 etc
          pinSpacing: false,
        },
      })
      // .from("#questionstxt1", { y: innerHeight, scale: 0.2, autoAlpha: 0 })
      .to("#greenSwimmer", { y: 600, rotate: -90 });
  }

  function choiceAni(lvl, txt, image, runWhenComplete) {
    const clone = txt.cloneNode(true);
    function onComplete() {
      lvl.parentNode.appendChild(clone);
      lvl.remove();
    }
    gsap.to(image, { scale: 1.7, duration: 6 });
    gsap
      .timeline()
      .to(lvl, {autoAlpha: 0, onComplete: onComplete})
      .from(clone, {
        y: 200,
        scale: 0.8,
        duration: 9,
        autoAlpha: 1,
        ease: "back(1)",
        onComplete: runWhenComplete
        // toggleClass: glowAndScale
      });
  }

  function blueSwimmerEnterAni(lvl, txt, image, runWhenComplete) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#spacer5",
          start: "top top", //first value relates to the trigger element, the second to the scroller itsef (the viewport)
          // endtrigger: "#poemLvl",
          end: "top center",
          scrub: 5, // locks animation to scrollbar - can use 1, 2, 3 etc
          pinSpacing: false,
        },
      })
      .from("#questionstxt", { scale: 0.4, autoAlpha: 0, ease: "back(1)" })
      .from("#blueSwimmer", {
        y: 50,
        scale: 0.4,
        autoAlpha: 0,
        rotate: 180,
        ease: "back(1)",
      });
  }

  function blueSwimmerFallAni() {
    gsap
      .timeline({
        scrollTrigger: {
          immediateRender: false,
          trigger: "#spacer5",
          start: "center top", //first value relates to the trigger element, the second to the scroller itsef (the viewport)
          endTrigger: "#displayQuestionRow",
          end: "top center",
          scrub: 7, // locks animation to scrollbar - can use 1, 2, 3 etc
          pinSpacing: false,
        },
      })
      .to("#blueSwimmer", { y: innerHeight * 2, rotate: -360, ease: "back(1)" });
    // .to("#blueSwimmer", { y: 750, rotate: -90 });
  }
  
  function blueSwimmerFinalFallAni() {
    gsap
      .timeline({
        scrollTrigger: {
          immediateRender: false,
          trigger: "#spacer7",
          start: "top bottom", //first value relates to the trigger element, the second to the scroller itsef (the viewport)
          endTrigger: "#musicBtnContainer1",
          end: "center center",
          scrub: 5, // locks animation to scrollbar - can use 1, 2, 3 etc
          pinSpacing: false,
        },
      })
      .to("#blueSwimmer", { y: innerHeight * 3, rotate: -620, scale: .25, opacity: 0});
    // .to("#blueSwimmer", { y: 750, rotate: -90 });
  }


  function displayEndPoem() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#spacer6",
          start: "top bottom", //first value relates to the trigger element, the second to the scroller itsef (the viewport)
          // endTrigger: "poemLvl",
          // end: "bottom top",
          end: innerHeight * 1.5,
          scrub: 4, // locks animation to scrollbar - can use 1, 2, 3 etc
          pinSpacing: false,
        },
      })
      .from("#poemLine1", { y: 50, autoAlpha: 0, scale: 0.8 })
      .from("#poemLine2", { y: 50, autoAlpha: 0, scale: 0.8 })
      .from("#poemLine3", { y: 50, autoAlpha: 0, scale: 0.8 });
    // .from("#finalplantLady", { y: 40, autoAlpha: 0, scale: 0.2 });
  }

  function doNothing() {
    //nothing at all
  }

  ////////////////////////////
  ////////// MUSIC ///////////
  ////////////////////////////

  const songMap = {
    chaos: {
      artist: "Klapshmock!",
      title: "Attack Zone X",
      file: "AttackZoneX.mp3",
    },
    calm: {
      artist: "Deidre",
      title: "Numb",
      file: "Numb.mp3",
    },
    forest: {
      artist: "Mas Aya",
      title: "Pasiva/Activa",
      file: "PasivaActiva.mp3",
    },
    meadow: {
      artist: "Orchidae",
      title: "Love (bedroom version)",
      file: "Love.mp3",
    },
    morning: {
      artist: "Century Egg",
      title: "I Will Make Up a Method",
      file: "IWillMakeUpaMethod.mp3",
    },
    night: {
      artist: "SlowPitchSound",
      title: "You Betta Change ft. Distant Dust",
      file: "YouBettaChangefeaturingDistantDust.mp3",
    },
    unfold: {
      artist: "Melody McKiver & Thomas Goguelin",
      title: "Berlinale Duet",
      file: "BerlinaleDuet.mp3",
    },
    cycle: {
      artist: "Bucko Art Machine",
      title: "PRO TESTING (3AM edit)",
      file: "Pro.mp3",
    },
  };

  const backgroundMusic = new Audio("./sounds/backgroundMusic.mp3");
  backgroundMusic.load();
  backgroundMusic.loop = true;

  const beginSound = new Audio("./sounds/beginSound.mp3");
  beginSound.preload = 'auto';
  beginSound.load();
  const genSound = new Audio("./sounds/genSound.mp3");
  genSound.preload = 'auto';
  genSound.load();
  const sendSound = new Audio("./sounds/sendSound.mp3");
  sendSound.preload = 'auto';

  function playSound(audio) {
    var currSong = audio.cloneNode();
    currSong.play();
  }

  function playBackgroundMusic(audio) {
    audio.play();
  }
  

  var muted = false;
  var muteBtn = document.getElementById("muteBtn"); // get the button
  muteBtn.addEventListener("click", muteBtnHandler); // add an eventlistener to the enter button
  function muteBtnHandler(event) {
    if (muted == true) {
      playBackgroundMusic(backgroundMusic);
      muteBtn.style.background =
        "url('images/ui/mute.png') no-repeat center center / contain";
    } else {
      backgroundMusic.pause();
      muteBtn.style.background =
        "url('images/ui/unMute.png') no-repeat center center / contain";
    }
    muted = !muted;
  }

  function fadeSound() {
    if (backgroundMusic.volume > 0.01) {
      backgroundMusic.volume = Math.max(0, backgroundMusic.volume - 0.07);
      setTimeout(fadeSound, 800);
      console.log("fademusic")
    } else {
      backgroundMusic.pause();
      console.log("pausemusic")
    }
  }

  ////////////////////////////
  ////// music player ///////
  ////////////////////////////

  (function (d) {
    "use strict";

    function makeAudioBtn(id, containerId, audioPlayerId) {
      var test = true;
      var btn = d.querySelector(id);
      var btnContainer = d.querySelector(containerId);
      btnContainer.classList.remove("hide");

      var audioPlayer = d.querySelector(audioPlayerId);
      audioPlayer.classList.add("remove");

      function changeSVG() {
        btn.classList.remove("pause");
        test = true;
      }
      btn.addEventListener(
        "click",
        function () {
          if (test === true) {
            musicBtnContainer1.classList.add("musicBtnContainerPlaying");
            musicBtnContainer1.classList.add("spin");
            btn.classList.add("pause");
            backgroundMusic.pause();

            test = false;
            audioPlayer.volume = 0.9;
            audioPlayer.play();
          } else {
            musicBtnContainer1.classList.remove("musicBtnContainerPlaying");
            musicBtnContainer1.classList.remove("spin");

            changeSVG();
            audioPlayer.pause();
          }
        },
        false
      );

      audioPlayer.addEventListener(
        "ended",
        function () {
          changeSVG();
          audioPlayer.load();
        },
        false
      );
    }

    var btn1 = makeAudioBtn("#musicBtn1", "#musicBtnContainer1", "#player1");
  })(document);

  ////////////////////////////
  ////////// TRACERY /////////
  ////////////////////////////

  // http://www.crystalcodepalace.com/traceryTut.html

  var story = {
    sentence: [
      '<span id="poemLine1">You are #q1#. You #q2#. You #q3#.</span><br><span id="poemLine2">What is at the bottom for you, #playerAdj# seeker?</span><br><span id="poemLine3">What would it mean to find #itemSought#?</span>',
      // "What is at the bottom, #playerAdj# seeker? #playerDesc.capitalize# #playerVerb# in #natureDesc# #natureNoun.s#. Reaching #q2#, forever #q1#wards. "
    ],
    playerAdj: [
      // "watchful",
      "thoughtful",
      "curious",
      "resolute",
      "dearest",
      "gentle",
      "silent",
    ],
    playerVerb: [
      "watching",
      "waiting",
      "emerging",
      "inviting",
      "blooming",
      "limitless",
      "reaching",
      "awaiting",
      "eternal",
    ],
    natureDesc: [
      "limitless",
      "reaching",
      "inviting",
      "awaiting",
      "still",
      "infinite",
      "eternal",
    ],

    //up down
    q1: [],

    //dark joy out inner
    q2: [],
    // forest Meadow morning Night unfold Cyle chaos calm
    q3: [],
    itemSought: [],
  };

  function generateTracery() {
    var grammar = tracery.createGrammar(story);
    var result = grammar.flatten("#sentence#");
    document.getElementById("generatorTxt").innerHTML = result;
  }

  ////////////////////////////
  ///////// player //////////
  ////////////////////////////

  var playerState = {
    level: "none",
    itemSought: "peace",
    q1: undefined,
    q2: undefined,
    q3: undefined,
    song: undefined,
  };

  ////////////////////////////
  /////// get elements ///////
  ////////////////////////////

  const beginLvl = document.getElementById("beginLvl");
  const playerQuestionLvl = document.getElementById("playerQuestionLvl");
  const questions3Lvl = document.getElementById("questions3Lvl");
  const choice1Lvl = document.getElementById("choice1Lvl");
  const upLvl = document.getElementById("upLvl");
  const downLvl = document.getElementById("downLvl");
  const darkLvl = document.getElementById("darkLvl");
  const joyLvl = document.getElementById("joyLvl");
  const outLvl = document.getElementById("outLvl");
  const inLvl = document.getElementById("inLvl");
  const findSongLvl = document.getElementById("findSongLvl");
  const poemLvl = document.getElementById("poemLvl");
  const lastLvl = document.getElementById("lastLvl");
  const bottomLvl = document.getElementById("bottomLvl");
  const creditsLvl = document.getElementById("creditsLvl");

  const spacer0 = document.getElementById("spacer0");
  const spacer1 = document.getElementById("spacer1");
  const spacer2 = document.getElementById("spacer2");
  const spacer3 = document.getElementById("spacer3");
  const spacer4 = document.getElementById("spacer4");
  const spacer5 = document.getElementById("spacer5");
  const spacer6 = document.getElementById("spacer6");
  const spacer7 = document.getElementById("spacer7");

  // get all the links
  const upLink = document.getElementById("upLink");
  const downLink = document.getElementById("downLink");
  const darkLink = document.getElementById("darkLink");
  const joyLink = document.getElementById("joyLink");
  const chaosLink = document.getElementById("chaosLink");
  const calmLink = document.getElementById("calmLink");
  const forestLink = document.getElementById("forestLink");
  const meadowLink = document.getElementById("meadowLink");
  const outLink = document.getElementById("outLink");
  const inLink = document.getElementById("inLink");
  const morningLink = document.getElementById("morningLink");
  const nightLink = document.getElementById("nightLink");
  const unfoldLink = document.getElementById("unfoldLink");
  const cycleLink = document.getElementById("cycleLink");
  // get all the images
  const upImg = document.getElementById("upImg");
  const downImg = document.getElementById("downImg");
  const darkImg = document.getElementById("darkImg");
  const joyImg = document.getElementById("joyImg");
  const chaosImg = document.getElementById("chaosImg");
  const calmImg = document.getElementById("calmImg");
  const forestImg = document.getElementById("forestImg");
  const meadowImg = document.getElementById("meadowImg");
  const outImg = document.getElementById("outImg");
  const inImg = document.getElementById("inImg");
  const morningImg = document.getElementById("morningImg");
  const nightImg = document.getElementById("nightImg");
  const unfoldImg = document.getElementById("unfoldImg");
  const cycleImg = document.getElementById("cycleImg");

  var learnMoreBtn = document.getElementById("learnMoreBtn");
  var seatedLadyL = document.getElementById("seatedLadyL");
  var seatedLadyLHvr = document.getElementById("seatedLadyLHvr");
  var startOverBtn = document.getElementById("startOverBtn");
  var seatedLadyC = document.getElementById("seatedLadyC");
  var seatedLadyCHvr = document.getElementById("seatedLadyCHvr");
  var creditsBtn = document.getElementById("creditsBtn");
  var seatedLadyR = document.getElementById("seatedLadyR");
  var seatedLadyRHvr = document.getElementById("seatedLadyRHvr");

  // set invisible
  playerQuestionLvl.style.display = "none";
  questions3Lvl.style.display = "none";
  choice1Lvl.style.display = "none";
  upLvl.style.display = "none";
  downLvl.style.display = "none";
  darkLvl.style.display = "none";
  joyLvl.style.display = "none";
  outLvl.style.display = "none";
  inLvl.style.display = "none";
  findSongLvl.style.display = "none";
  poemLvl.style.display = "none";
  lastLvl.style.display = "none";
  bottomLvl.style.display = "none";
  creditsLvl.style.display = "none";

  spacer0.style.display = "none";
  spacer1.style.display = "none";
  spacer2.style.display = "none";
  spacer3.style.display = "none";
  spacer4.style.display = "none";
  spacer5.style.display = "none";
  spacer6.style.display = "none";
  spacer7.style.display = "none";
  muteBtn.style.display = "none";

  ////////////////////////////
  /////// scroll arrow ///////
  ////////////////////////////

  function displayScrollArrow(parent) {
    const arrowDiv = document.createElement("div");
    arrowDiv.classList.add("arrow");
    arrowDiv.id = "arrow";
    const currentDiv = document.getElementById(parent);
    // console.log(parent);
    currentDiv.appendChild(arrowDiv);

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    for (var i = 0; i < 3; i++) {
      const chevron = document.createElement("div");
      chevron.classList.add("chevron");
      containerDiv.appendChild(chevron);
    }
    arrowDiv.appendChild(containerDiv);
  }

  ////////////////////////////
  ////// button town  ///////
  ////////////////////////////

  var beginBtn = document.getElementById("beginBtn"); // get the button
  beginBtn.addEventListener("click", beginBtnHandler); // add an eventlistener to the enter button
  function beginBtnHandler(event) {
    // set the begin to visible when you click on the enter button
    window.location.hash = "question"; // transport down the page
    playerQuestionLvl.style.display = "grid";
    spacer0.style.display = "grid";
    muteBtn.style.display = "block";
    playSound(beginSound);
    playBackgroundMusic(backgroundMusic);
    beginBtn.classList.add("fade");
    setTimeout(function () {
      displayScrollArrow("beginBtnArrowDiv");
    }, 6000);
    // setTimeout(function(){
    //   beginBtn.innerHTML = "scroll down";
    //   beginBtn.classList.add("beginBtnToScroll");
    //   beginBtn.classList.remove("fade");
    // }, 10000);
    document.getElementById("beginLvlRow2").classList.remove("pulse");
    // setTimeout(function(){
    //   displayScrollArrow("beginLvlRow3");
    // }, 1000);
    pushStartLvlAwayAni.play();
    greenGlowAni();
    spacer0Ani();
    playerQuestionLvlAni();
    // var input = document.getElementById('seekText');
    // input.focus();
  }

  const seekText = document.getElementById("seekText");
  const seekBtn = document.getElementById("seekBtn");
  seekBtn.style.opacity = 0.19;

  function showSeekBtn() {
    gsap.to("#seekBtn", { opacity: 1, duration: 0.25 });
  }

  setTimeout(function () {
    showSeekBtn();
  }, 10000);

  seekText.addEventListener("keyup", showSeekBtn);

  seekBtn.addEventListener("click", seekBtnHandler); // add an eventlistener to the  button
  function seekBtnHandler(event) {
    if (seekText.value !== "") {
      playerState.itemSought = seekText.value;
      story.itemSought.push(seekText.value);
    } else {
      playerState.itemSought = "peace";
      story.itemSought.push("peace");
    }
    playSound(sendSound);
    // seekBtn.innerHTML = "received";
    document.getElementById("whatDoYouSeek").innerHTML =
      "dive deeper,<br>seeker";
    seekBtn.classList.add("fade");
    seekText.classList.add("fade");
    setTimeout(function () {
      displayScrollArrow("seekBtnArrowDiv");
    }, 4000);
    questions3Lvl.style.display = "grid";
    spacer1.style.display = "grid";
    spacer2.style.display = "grid";
    choice1Lvl.style.display = "grid";

    // setTimeout(function () {
    // }, 5000);
    // displayPlayerQuestion();
    questions3LvlAni();
    // choice1Ani();
    greenSwimmerFollowAni();
  }

  var findSongBtn = document.getElementById("findSongBtn");
  findSongBtn.addEventListener("click", findSongBtnHandler);
  function findSongBtnHandler(event) {
    fadeSound();
    playSound(sendSound);

    findSongBtn.classList.add("fade");
    setTimeout(function () {
      displayScrollArrow("findSongBtnArrowDiv");
    }, 3000);

    spacer6.style.display = "grid";
    poemLvl.style.display = "grid";
    blueSwimmerFallAni();
    generateTracery();
    displayEndPoem();

    setTimeout(function () {
      lastLvl.style.display = "grid";
      spacer7.style.display = "grid";
      bottomLvl.style.display = "grid";
      blueSwimmerFinalFallAni();
    }, 500);

    setTimeout(function () {
      displayScrollArrow("poemLine3");
    }, 20000);
  }

  ////////////////////////////
  ////// render song  ///////
  ///////////////////////////

  function renderSong(playerState) {
    if (playerState.q3 === undefined) {
      return;
    }
    var song = songMap[playerState.q3];
    // console.log(`the song is: ${JSON.stringify(song)}`);

    var audioSrc = document.getElementById("audioSource");
    audioSrc.setAttribute("src", `sounds/${song.file}`);

    var artistText = document.getElementById("artist");
    artistText.textContent = song.artist;

    var titleText = document.getElementById("title");
    titleText.textContent = song.title;

    // force the browser to refresh the audio source
    var audio = document.getElementById("player1");
    audio.load();
  }

  ////////////////////////////
  ////// final images  ///////
  ///////////////////////////

  // draws the final images based on playerState
  function renderplayerState(playerState) {
    var finalImageRow = document.getElementById("finalImageRow");
    // clear images inside <div> so you can add new ones
    // finalImageRow.innerHTML = "";

    if (playerState.q1 !== undefined) {
      const img = document.createElement("img");
      img.setAttribute("src", `images/choices/lowerSize/${playerState.q1}.gif`);
      img.setAttribute("class", "finalImage");
      // finalImageRow.appendChild(img);
    }

    if (playerState.q2 !== undefined) {
      const img = document.createElement("img");
      img.setAttribute("src", `images/choices/lowerSize/${playerState.q2}.gif`);
      img.setAttribute("class", "finalImage");
      // finalImageRow.appendChild(img);
    }

    if (playerState.q3 !== undefined) {
      const img = document.createElement("img");
      img.setAttribute("src", `images/choices/lowerSize/${playerState.q3}.gif`);
      img.setAttribute("class", "finalImage");
      // finalImageRow.appendChild(img);
    }
    // console.log("render player state");
  }

  ////////////////////////////
  ////// link handler  ///////
  ///////////////////////////

  // called when the links are clicked
  function makeLinkHandler(
    link,
    stateKey,
    chosenValue,
    unchosenValue,
    level,
    spacer,
    scrollTriggerFun
  ) {
    function linkHandler(event) {
      event.preventDefault();
      playSound(genSound);

      const chosenImageId = chosenValue + "Img";
      const chosenImageDOM = document.getElementById(chosenImageId);
      chosenImageDOM.classList.remove("cursorHand");

      const chosenTextId = stateKey + "Text";
      const textDom = document.getElementById(chosenTextId);

      const chosenTextPhrase = chosenValue + "Link";
      const textPhrase = document.getElementById(chosenTextPhrase);
      const clonedTextPhrase = textPhrase.cloneNode(true);

      function scrollTriggerCallback() {
        console.log("Scroll Trigger callback");

      }
      // textDom.innerHTML = textPhrase.innerHTML;

        //textDom.classList.add("glow");

        // function whenDone() {
        //   textDom.parentElement.appendChild(clonedTextPhrase);
        //   textDom.remove();
        // }
        // gsap
        //   .timeline()
        //   .to(textDom, { autoAlpha: 0, ease: "back(1)", onComplete: whenDone , duration: 3})
        //   .to(clonedTextPhrase, { autoAlpha: 1, ease: "back(1)", duration: 3});

      scrollTriggerFun(textDom, textPhrase, chosenImageDOM, doNothing);
      const unchosenImageId = unchosenValue + "Img";
      const unchosenImageDOM = document.getElementById(unchosenImageId);
      unchosenImageDOM.classList.remove("cursorHand");
      unchosenImageDOM.classList.add("fade");
      
      link.style.display = "grid";
      spacer.style.display = "grid";

      playerState[stateKey] = chosenValue;
      // story[stateKey] = chosenValue;

      setTimeout(function () {
        displayScrollArrow(stateKey);
      }, 10000);

      ////////////////////////////
      /////// ?????? town  ////////
      ////////////////////////////

      // console.log(JSON.stringify(playerState));
      if (level === 1) {
        playerState.q1 = chosenValue;
        story.q1.push(textPhrase.innerHTML);
        // only re-render if they've answered all the questions
        renderplayerState(playerState);
        renderSong(playerState);
      } else if (level === 2) {
        playerState.q2 = chosenValue;
        story.q2.push(textPhrase.innerHTML);

        renderplayerState(playerState);
        renderSong(playerState);
      } else if (level === 3) {
        blueSwimmerEnterAni();
        playerState.q3 = chosenValue;
        story.q3.push(textPhrase.innerHTML);

        renderplayerState(playerState);
        renderSong(playerState);
      }
    }
    return linkHandler;
  }

  ////////////////////////////
  /////// hover town  ////////
  ////////////////////////////

  function hoverOnChosenImg(chosenImg, chosenPhrase) {
    var hoverOnImg = gsap.to(chosenImg, {
      scale: 1.4,
      duration: 6,
      paused: true,
    });
    var hoverOnLink = gsap.to(chosenPhrase, { y: -0.5, paused: true });
    function imgChoiceHoverAni() {
      hoverOnLink.play();
      hoverOnImg.play();
      chosenPhrase.classList.add("highlight");
      chosenImg.classList.add("highlight");
    }
    chosenImg.addEventListener("mouseenter", imgChoiceHoverAni);
    function imgRemoveChoiceHoverAni() {
      hoverOnLink.reverse();
      hoverOnImg.reverse();
      chosenPhrase.classList.remove("highlight");
      chosenImg.classList.remove("highlight");
    }
    chosenImg.addEventListener("mouseleave", imgRemoveChoiceHoverAni);
    const returnObj = {
      hoverOnImgGsap: hoverOnImg,
      hoverOnTxtGsap: hoverOnLink,
      mouseEnterFun: imgChoiceHoverAni,
      mouseleaveFun: imgRemoveChoiceHoverAni,
    };
    return returnObj;
  }

  function hoverOnChosenTxt(chosenTxt, chosenImg) {
    var hoverOnImg = gsap.to(chosenImg, {
      scale: 1.4,
      duration: 6,
      paused: true,
    });
    var hoverOnTxt = gsap.to(chosenTxt, { y: -0.5, paused: true });
    function txtChoiceHoverAni() {
      hoverOnImg.play();
      hoverOnTxt.play();
      chosenImg.classList.add("highlight");
      chosenTxt.classList.add("highlight");
    }
    chosenTxt.addEventListener("mouseenter", txtChoiceHoverAni);
    function txtChoiceHoverRemoveAni() {
      hoverOnImg.reverse();
      hoverOnTxt.reverse();
      chosenImg.classList.remove("highlight");
      chosenTxt.classList.remove("highlight");
    }
    chosenTxt.addEventListener("mouseleave", txtChoiceHoverRemoveAni);
    const returnObj = {
      hoverOnImgGsap: hoverOnImg,
      hoverOnTxtGsap: hoverOnTxt,
      mouseEnterFun: txtChoiceHoverAni,
      mouseleaveFun: txtChoiceHoverRemoveAni,
    };
    return returnObj;
  }

  function hoverHandlers(chosenImg, chosenPhrase) {
    const hoverOnImgValues = hoverOnChosenImg(chosenImg, chosenPhrase);
    const hoverOnTxtValues = hoverOnChosenTxt(chosenPhrase, chosenImg);
    const returnObj = {
      hoverOnImgValues: hoverOnImgValues,
      hoverOnTxtValues: hoverOnTxtValues,
    };
    return returnObj;
  }

  function setupLvlHandlers(
    chosenDest,
    unChosenDest,
    stateKey,
    chosenValue,
    unChosenValue,
    level,
    spacer,
    scrollTriggerFun,
    chosenPhrase,
    chosenImg,
    unChosenPhrase,
    unChosenImg
  ) {
    const chosenHandler = makeLinkHandler(
      chosenDest,
      stateKey,
      chosenValue,
      unChosenValue,
      level,
      spacer,
      scrollTriggerFun
    );
    const unChosenHandler = makeLinkHandler(
      unChosenDest,
      stateKey,
      unChosenValue,
      chosenValue,
      level,
      spacer,
      scrollTriggerFun
    );

    const chosenHoverObjs = hoverHandlers(chosenImg, chosenPhrase);
    const unChosenHoverObjs = hoverHandlers(unChosenImg, unChosenPhrase);

    /////////////////////////////
    ///// kill animations  //////
    ////////////////////////////

    function killAllAnimations() {
      chosenHoverObjs.hoverOnImgValues.hoverOnImgGsap.kill();
      chosenHoverObjs.hoverOnImgValues.hoverOnTxtGsap.kill();
      chosenHoverObjs.hoverOnTxtValues.hoverOnImgGsap.kill();
      chosenHoverObjs.hoverOnTxtValues.hoverOnTxtGsap.kill();

      unChosenHoverObjs.hoverOnImgValues.hoverOnImgGsap.kill();
      unChosenHoverObjs.hoverOnImgValues.hoverOnTxtGsap.kill();
      unChosenHoverObjs.hoverOnTxtValues.hoverOnImgGsap.kill();
      unChosenHoverObjs.hoverOnTxtValues.hoverOnTxtGsap.kill();

      chosenImg.removeEventListener(
        "mouseenter",
        chosenHoverObjs.hoverOnImgValues.mouseEnterFun
      );
      chosenImg.removeEventListener(
        "mouseleave",
        chosenHoverObjs.hoverOnImgValues.mouseleaveFun
      );
      chosenPhrase.removeEventListener(
        "mouseenter",
        chosenHoverObjs.hoverOnTxtValues.mouseEnterFun
      );
      chosenPhrase.removeEventListener(
        "mouseleave",
        chosenHoverObjs.hoverOnTxtValues.mouseleaveFun
      );

      unChosenImg.removeEventListener(
        "mouseenter",
        unChosenHoverObjs.hoverOnImgValues.mouseEnterFun
      );
      unChosenImg.removeEventListener(
        "mouseleave",
        unChosenHoverObjs.hoverOnImgValues.mouseleaveFun
      );
      unChosenPhrase.removeEventListener(
        "mouseenter",
        unChosenHoverObjs.hoverOnTxtValues.mouseEnterFun
      );
      unChosenPhrase.removeEventListener(
        "mouseleave",
        unChosenHoverObjs.hoverOnTxtValues.mouseleaveFun
      );

      chosenPhrase.removeEventListener("click", chosenHandler);
      unChosenPhrase.removeEventListener("click", unChosenHandler);
      chosenImg.removeEventListener("click", chosenHandler);
      unChosenImg.removeEventListener("click", unChosenHandler);
    }

    // once: true tells the browser to unregister the handler after it's clicked
    chosenPhrase.addEventListener("click", chosenHandler, { once: true });
    chosenPhrase.addEventListener("click", killAllAnimations);

    unChosenPhrase.addEventListener("click", unChosenHandler, { once: true });
    unChosenPhrase.addEventListener("click", killAllAnimations);

    chosenImg.addEventListener("click", chosenHandler, { once: true });
    chosenImg.addEventListener("click", killAllAnimations);

    unChosenImg.addEventListener("click", unChosenHandler, { once: true });
    unChosenImg.addEventListener("click", killAllAnimations);
  }

  //creates and runs a function makeLinkHandler which returns a function
  setupLvlHandlers(
    upLvl,
    downLvl,
    "upOrDown",
    "up",
    "down",
    1,
    spacer3,
    choiceAni,
    upLink,
    upImg,
    downLink,
    downImg
  );
  setupLvlHandlers(
    darkLvl,
    joyLvl,
    "darkOrJoy",
    "dark",
    "joy",
    2,
    spacer4,
    choiceAni,
    darkLink,
    darkImg,
    joyLink,
    joyImg
  );
  setupLvlHandlers(
    findSongLvl,
    findSongLvl,
    "chaosOrCalm",
    "chaos",
    "calm",
    3,
    spacer5,
    choiceAni,
    // blueSwimmerAni,
    chaosLink,
    chaosImg,
    calmLink,
    calmImg
  );
  setupLvlHandlers(
    findSongLvl,
    findSongLvl,
    "forestOrMeadow",
    "forest",
    "meadow",
    3,
    spacer5,
    choiceAni,
    // blueSwimmerAni,
    forestLink,
    forestImg,
    meadowLink,
    meadowImg
  );
  setupLvlHandlers(
    outLvl,
    inLvl,
    "outOrIn",
    "out",
    "in",
    2,
    spacer4,
    choiceAni,
    outLink,
    outImg,
    inLink,
    inImg
  );
  setupLvlHandlers(
    findSongLvl,
    findSongLvl,
    "morningOrNight",
    "morning",
    "night",
    3,
    spacer5,
    choiceAni,
    // blueSwimmerAni,
    morningLink,
    morningImg,
    nightLink,
    nightImg
  );
  setupLvlHandlers(
    findSongLvl,
    findSongLvl,
    "unfoldOrCycle",
    "unfold",
    "cycle",
    3,
    spacer5,
    choiceAni,
    // blueSwimmerAni,
    unfoldLink,
    unfoldImg,
    cycleLink,
    cycleImg
  );

  ////////////////////////////
  ////// bottom ladies  ///////
  ////////////////////////////

  function setupLady(btn, lady, ladyHvr) {
    const ladyAni = gsap.to(lady, {
      opacity: 0,
      duration: 1,
      ease: "none",
      paused: true,
    });
    const ladyHvrAni = gsap.to(ladyHvr, {
      opacity: 1,
      duration: 1,
      ease: "none",
      paused: true,
    });

    function btnHvr(event) {
      ladyAni.play();
      ladyHvrAni.play();
    }

    function btnLeave(event) {
      ladyAni.reverse();
      ladyHvrAni.reverse();
    }

    btn.addEventListener("mouseover", btnHvr);
    btn.addEventListener("mouseleave", btnLeave);
  }

  setupLady(learnMoreBtn, seatedLadyL, seatedLadyLHvr);
  setupLady(startOverBtn, seatedLadyC, seatedLadyCHvr);
  setupLady(creditsBtn, seatedLadyR, seatedLadyRHvr);

  function learnMoreBtnHandler(event) {
    playSound(sendSound);
    // window.open("https://www.debaser.ca/mood-ring", "_blank");
  }
  function startOverBtnHandler(event) {
    playSound(sendSound);
  }
  function creditsBtnHandler(event) {
    creditsLvl.style.display = "grid";
    playSound(sendSound);
  }
  learnMoreBtn.addEventListener("click", learnMoreBtnHandler);
  startOverBtn.addEventListener("click", startOverBtnHandler);
  creditsBtn.addEventListener("click", creditsBtnHandler);
}

window.addEventListener("load", windowOnLoad);
