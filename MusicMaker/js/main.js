var q=0,
_sor=document.getElementById("musicList"),
_player = document.getElementById("player"),
countUpdate=0;

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
       $( "#sortablePlaylist" ).sortable({
    	   change: function( event, ui ) {
    		   countUpdate++;
    		   $("#count").html(countUpdate);
    	   }
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
    if(clickedElement.id=="playSortList"){
    	var sortedIDs = $( "#sortablePlaylist" ).sortable( "toArray" );
    	alert(sortedIDs[0]);
    	q=0;
    	
    }
    else{
    	_player2.src = clickedElement.getAttribute("src");
    	_player2.play();
    }
}
function playNext(){
	q=0;
}
