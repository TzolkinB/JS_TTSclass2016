var slideshow = {
	photoList: ["farm", "woods", "lake"],
	currentPhotoIndex: 0,
	nextPhoto: function() {
		if (this.currentPhotoIndex < this.photoList.length-1)  {
			this.currentPhotoIndex += 1;
			this.photoList[this.currentPhotoIndex];
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("End of slideshow!");
		}
	},
	prevPhoto: function() {
		if (this.currentPhotoIndex >= 1)  {
		// why is it 1 to work, shouldn't it be 0? When 0 I get 'undefined' not 'begin slideshow'
			this.currentPhotoIndex --;
			this.photoList[this.currentPhotoIndex];
			console.log(this.photoList[this.currentPhotoIndex]);
		} else {
			console.log("Begin slideshow!");
		}
	},

	getCurrentPhoto: function() {
		return console.log("Current photo is " + (this.photoList[this.currentPhotoIndex]));
		// 'undefined' ?
	}
}

slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.getCurrentPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.getCurrentPhoto();
