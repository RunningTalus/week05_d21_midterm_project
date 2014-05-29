$(document).ready(function() {
	$('.all-maps').click(function(event) {
		if(this.checked) { 
			$('.bing').each(function() { 
				this.checked = true;                 
			});
			$('.esri').each(function() {
				this.checked = true;
			});
			$('.google').each(function() {
				this.checked = true;
			});
			$('.mapquest').each(function() {
				this.checked = true;
			});
			$('.nokia').each(function() {
				this.checked = true;
			});
		} else {
			$('.bing').each(function() { 
				this.checked = false;                       
			});
			$('.esri').each(function() {
				this.checked = false;
			});
			$('.google').each(function() {
				this.checked = false;
			});
			$('.mapquest').each(function() {
				this.checked = false;
			});
			$('.nokia').each(function() {
				this.checked = false;
			});
		}
	});

	$('.all-bing').click(function(event) {
		if(this.checked) {
			$('.bing').each(function() {
				this.checked = true;
			});
			$('.all-bing').each(function() {
				this.checked = false;
			}); 
		} else {
			$('.bing').each(function() {
				this.checked = false;
			});
		}
	});

	$('.all-esri').click(function(event) {
		if(this.checked) {
			$('.esri').each(function() {
				this.checked = true;
			});
			$('.all-esri').each(function() {
				this.checked = false;
			}); 
		} else {
			$('.esri').each(function() {
				this.checked = false;
			});
		}
	});

	$('.all-google').click(function(event) {
		if(this.checked) {
			$('.google').each(function() {
				this.checked = true;
			});
			$('.all-google').each(function() {
				this.checked = false;
			}); 
		} else {
			$('.google').each(function() {
				this.checked = false;
			});
		}
	});

	$('.all-mapquest').click(function(event) {
		if(this.checked) {
			$('.mapquest').each(function() {
				this.checked = true;
			});
			$('.all-mapquest').each(function() {
				this.checked = false;
			}); 
		} else {
			$('.mapquest').each(function() {
				this.checked = false;
			});
		}
	});

	$('.all-nokia').click(function(event) {
		if(this.checked) {
			$('.nokia').each(function() {
				this.checked = true;
			});
			$('.all-nokia').each(function() {
				this.checked = false;
			}); 
		} else {
			$('.nokia').each(function() {
				this.checked = false;
			});
		}
	});

});