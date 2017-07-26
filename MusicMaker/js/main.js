
var q=0;
var _sor=document.getElementById("musicList");
var _player = document.getElementById("player");
window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
    	
        var page = document.getElementsByClassName('ui-page-active')[0],
        pageid;

    pageid = page ? page.id : "";

    if (pageid === "main-page") {
        try {
            tizen.application.getCurrentApplication().exit();
        } catch (ignore) {}
    } else {
    	 window.history.back();
    }
    });
    document.getElementById("musicList").addEventListener('click', function(e) {
    	if(q==0){
    		q++;
    		playlistItemClick(e.target);
    	}
    	//alert(1);
    });
    document.getElementById("player").addEventListener("ended", playNext);
    /*var audio1=document.getElementById('level13');
    
	audio1.addEventListener("ended", function() {
	    q=0;
	});
    var audio2=document.getElementById('level12');
    
	audio2.addEventListener("ended", function() {
	    q=0;
	});
    var audio3=document.getElementById('level11');
    
	audio3.addEventListener("ended", function() {
	    q=0;
	});*/
	
	
    	
       //$( "#sortablePlaylist" ).sortable();
       $( "#sortablePlaylist" ).sortable({
    	   update: function( event, ui ) {}
    	 });
};

function playlistItemClick(clickedElement) {
	var _playlist=document.getElementById("musicList");
	var _player2 = document.getElementById("player");
    var selected = _playlist.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    clickedElement.classList.add("selected");

    _player2.src = clickedElement.getAttribute("src");
    _player2.play();
}
function playNext(){
	q=0;
	//alert(q);
}

/*
function playItem1(){
	var audio=document.getElementById('level13');
	if(q==0){
		
		q++;
		audio.play();
	};
}
function playItem2(){
	var audio=document.getElementById('level11');
	if(q==0){
		
		q++;
		audio.play();
	};
}
function playItem3(){
	var audio=document.getElementById('level11');
	if(q==0){
		
		q++;
		audio.play();
	};
}*/