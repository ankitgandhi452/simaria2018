(function() {
	var BASE_URL = "./assets/img/banners/"
	var banners = {
		h: [ "1", "2" ],
		v: [ "1", "2" ]
	}

	var bannerTypes = Object.keys(banners);

	for(var i=0, len=bannerTypes.length; i<len; i++) {
		var bannerType = bannerTypes[i],
			bannerList = banners[bannerType];

		for(var j=0, len=bannerList.length; j<len; j++) {
			var obj = new Image();
			obj.src = BASE_URL + bannerType + "/" + bannerList[j] + ".png";
			document.getElementById("carouselBannerMaster").appendChild(obj);
		}
	}
})();