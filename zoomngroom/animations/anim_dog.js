(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"anim_dog_atlas_1", frames: [[0,0,1254,1254]]},
		{name:"anim_dog_atlas_2", frames: [[0,0,1346,1168],[0,1170,500,250]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.ChatGPTImageAug31202603_24_50PM = function() {
	this.initialize(ss["anim_dog_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ChatGPTImageSep6202601_42_44AM2 = function() {
	this.initialize(ss["anim_dog_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.selectpngcopy = function() {
	this.initialize(ss["anim_dog_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("", "68px 'BodoniMT'");
	this.text.lineHeight = 84;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-349.95,-316.8);

	this.text_1 = new cjs.Text("Taffy", "68px 'Bodoni MT'");
	this.text_1.lineHeight = 84;
	this.text_1.lineWidth = 188;
	this.text_1.parent = this;
	this.text_1.setTransform(-94.2,-119.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.9,-318.8,448.2,440.3);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ChatGPTImageAug31202603_24_50PM();
	this.instance.setTransform(-179,-155.3,0.266,0.266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179,-155.3,358,310.70000000000005);


// stage content:
(lib.anim_dog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		playSound("Sound205");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90));

	// Layer_8
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(144.8,288.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).to({x:144.85},1).to({x:144.8},80).wait(1));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkDSzQiIgSh5g5QgxgYhLgtQhNgtgqgeQifhxhditQhHiEgtjRQgKgsgDgcIAAAAIgbACQidANhsgBQgxAAghgEQgsgGgigOQgogRgbgfQgdgggFgnIgCgTQgBgLgFgGQgFgHgKgFIgRgHQgpgRgZgmQgZgnAAgrQABgsAbgmQAbgmApgPQglglgSgVQgeghgRgfQgVglgIgmQgIgqALglQAOgkADgUQACgMgBgVIgBgiQAAgdAMgbQAMgbAVgVQAxguBjgJIBQgFQAwgDAfgHQgGgxAaguQAbguAugTQgwAGgtgRQgvgRgcglQgegmgBgyQgBg0AdgkQAhgrBFgPQAagGAigBIA8AAQCjACFGgBQEdAEDKAaICFASQBNALA3ADQA5ADBJgCICCgHQDygOC1ABQDkAADDAVQAqAFAYAFQAkAIAbANQAfAPAVAZQAYAcAEAfQCUASCVAMQArAEAVAEQAjAGAYAOQAcAPATAbQAUAaAGAfQAFAfgIAgQgJAggUAYQhBBJiVgVQhMgNgmgFQhCgIgvAMQBEARBcAJQAlADB+AGQAvADAbAFQAoAIAbASQAjAYARApQAQApgJApQAxAWAeArQAgAtgEAxQgDAqggAnQgbAigsAZQgcAQg3AVQg8AYgYAMIgDBjQgBATABAQQACAMAGAVIAIAiQAHAtgXAqQgYArgqASQghANgugBQgTAAg/gIQhYgKiyABIiLAAIgJBCQgXCXgXBPQgmB8hDBOQgRATgeAdIgwAvIglAnIgkAoQhtBziWBMQiPBJikAcQhVAPhXABIgPAAQhGAAg/gIg");
	mask.setTransform(136.1489,106.5673);

	// Layer_4
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(179,170.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.9995,scaleY:0.9995,rotation:-8.0031,x:170.95,y:158.25},21).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:0,x:187.05,y:183.8},14).to({rotation:11.9997,x:142.05,y:169.25},21).to({regX:0.3,regY:0.2,scaleX:0.9999,scaleY:0.9999,rotation:17.9989,x:158.55,y:169.8},15).to({regX:0.1,scaleX:1,scaleY:1,rotation:0.0009,x:179.1,y:170.5},18).wait(1));

	// Layer_3
	this.instance_2 = new lib.ChatGPTImageSep6202601_42_44AM2();
	this.instance_2.setTransform(0,3,0.1994,0.1994);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// Layer_6
	this.instance_3 = new lib.selectpngcopy();
	this.instance_3.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-82.1,94.9,582.1,315.29999999999995);
// library properties:
lib.properties = {
	id: '6C1855857E6DB6479CDE9326CF999282',
	width: 250,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/anim_dog_atlas_1.png", id:"anim_dog_atlas_1"},
		{src:"images/anim_dog_atlas_2.png", id:"anim_dog_atlas_2"},
		{src:"sounds/Sound205.mp3", id:"Sound205"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6C1855857E6DB6479CDE9326CF999282'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;