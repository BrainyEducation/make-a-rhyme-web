window.onload = function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = words[5],
    // Make a container element for the list
    listContainer = document.createElement('div'),
    
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;
    
    listContainer.className = "wordList";
    
    
//    console.log(listData);
    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');
        listItem.className = "WordItem clickable";
        
        const clip_name = '../../assets/word_assets/word_audio/' + listData[i] + '.mp3'
        listItem.onmouseover = function(){playClip(clip_name);};
        listItem.onmouseout = function(){stopClip(clip_name);};
        
        
        imageItem = document.createElement('img');

        // Add the item text
        imageItem.src = '../../assets/word_assets/word_art/5/' + listData[i] + '.png';
        listItem.innerHTML = '';
        listItem.innerHTML = '<h2>' + listData[i] + '</h2>';
        listItem.appendChild(imageItem);
        

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}


function playClip(clip_name) {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all) {
      document.all.sound.src = "click.mp3";
    }
  }
  else {
    {
    var audio = document.getElementById("word_audio");
        
        console.log(!audio.paused);
        
    if (audio == null ) {
        return;
    }
    
    audio.src = clip_name;
    const playPromise = audio.play();
    if (playPromise !== null){
      playPromise.catch(() => { audio.play(); })
      console.log("User needs to click on page first");
    }
    }
  }
}

function stopClip(clip_name) {
  var audio = document.getElementById("word_audio");
    if (audio == null) {
        return;
    }
  audio.pause();
  audio.currentTime = 0;
}