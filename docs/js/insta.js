$(document).ready(function(){ 

  var userFeed = new Instafeed({
	  get: 'user',
	  userId: 2939793781,
	  accessToken: '2939793781.1677ed0.2a35e3d1eb504dc7b45f00469d17270e',
	  resolution: 'standard_resolution',
	  limit: 50,
	});
	
	userFeed.run();

	setTimeout(function(){
		$('.instafeed').addClass('shadowed');
	}, 100);

});