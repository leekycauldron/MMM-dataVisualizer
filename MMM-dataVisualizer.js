Module.register("MMM-dataVisualizer", {

    
    defaults: {
        link: "", // Link containing data.
        data: [], // data to get and display. first one must be a number so that it can be visualized. Multiple values can be used.
        thresholds: [], // Thresholds for color coding (INCLUSIVE). [min,max,color (rgb)] // This also creates the limits for the graph. If number surpasses thresholds., it will color code it as the color with the largest value.
		refreshRate: 300000,
		title: "" 
},


	getStyles: function() {
		return [
				"MMM-dataVisualizer.css",
		];
	},	


	//Refreshes the module every x minutes.
	start: function() {
		var timeFormat = this.config.refreshRate;
		console.log(`Starting Module: ${this.name}`)
		var self = this;
		setInterval( function(){
			self.updateDom();
		}, timeFormat);
	},



	getDom: function() {

        this.numData;
    	var wrapper = document.createElement("div");
		wrapper.id = "wrapper";
        
		let title = document.createElement('p');
		title.innerHTML = this.config.title;

        fetch(this.config.link)
        .then(response => response.json())
        .then(res => {
            
            let toDisplay = "";
        
            this.config.data.forEach(val => {
                toDisplay += res[val] + " ";
            });
			
            this.numData = res[this.config.data[0]];
			this.max = this.config.thresholds[this.config.thresholds.length - 1][1]; // Gets the highest possible value

            let visualization = document.createElement('canvas');
	
			let c = visualization.getContext("2d");
			
			// Place bar right in the middle
			let pct = this.numData / this.max;
			
			let px =Math.round( pct * (toDisplay.length*20-1));
			c.fillStyle = 'white';
			c.font = '24px Sans-Serif';
			c.fillText(this.config.title, (toDisplay.length*20)/8, 19);

			this.config.thresholds.forEach(threshold => {
				if (this.numData >= threshold[0] && this.numData <= threshold[1]) {
					c.strokeStyle = threshold[2];
					c.fillStyle = threshold[2];
				}
			})
			
			// Fill bar using thresholds.
			c.rect(10+1,31,px,19);
			c.fill();
			c.strokeStyle = 'white';
			c.rect(10,30,toDisplay.length*20,20);
			c.stroke();
			

			c.fillStyle = 'white';
			c.font = '24px Sans-Serif';
			c.fillText(toDisplay, (toDisplay.length*20)/4, 80);

			
            wrapper.appendChild(visualization);
		

			

        })
        .catch(e => Log.error(e))

		return wrapper;
		
	}

});