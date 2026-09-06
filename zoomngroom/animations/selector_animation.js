(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"selector_animation_atlas_1", frames: [[0,0,1672,941],[0,943,1672,941]]},
		{name:"selector_animation_atlas_2", frames: [[0,0,1536,1024]]},
		{name:"selector_animation_atlas_3", frames: [[0,0,1024,1536]]},
		{name:"selector_animation_atlas_4", frames: [[0,0,1024,1536]]},
		{name:"selector_animation_atlas_5", frames: [[0,0,1024,1536]]},
		{name:"selector_animation_atlas_6", frames: [[0,0,1024,1536]]},
		{name:"selector_animation_atlas_7", frames: [[0,0,1456,734],[1458,0,483,258]]}
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



(lib.body = function() {
	this.initialize(ss["selector_animation_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ChatGPTImageAug31202603_22_49PM2 = function() {
	this.initialize(ss["selector_animation_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ChatGPTImageSep6202601_25_47AM = function() {
	this.initialize(ss["selector_animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.farm_bpngcopy = function() {
	this.initialize(ss["selector_animation_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.foot = function() {
	this.initialize(ss["selector_animation_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.initialize(ss["selector_animation_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image399 = function() {
	this.initialize(ss["selector_animation_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.leg = function() {
	this.initialize(ss["selector_animation_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ropes = function() {
	this.initialize(ss["selector_animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween179 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image399();
	this.instance.setTransform(-409,-276,2.1242,2.1242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409,-276,1026,548.1);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.hand();
	this.instance.setTransform(-357.15,54.6,0.3914,0.3914,-65.0005);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357.1,-308.6,714.2,617.3);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.leg();
	this.instance.setTransform(-298,-227.2,0.406,0.4059,-18.9784);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298,-362.4,596,724.9);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.body();
	this.instance.setTransform(-200.4,-300.6,0.3914,0.3914);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-300.6,400.8,601.2);


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
	this.instance = new lib.foot();
	this.instance.setTransform(95.4,-348.4,0.3914,0.3914,49.0011);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358.3,-348.4,716.6,696.9);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ChatGPTImageAug31202603_22_49PM2();
	this.instance.setTransform(0,0,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,1290.3,860.2), null);


// stage content:
(lib.selector_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_16
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(-342.75,668.55,1,1,45.0006,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107).to({_off:false},0).to({scaleX:0.9994,scaleY:0.9994,rotation:-22.8206,x:157.9,y:684.25},22).to({scaleX:0.9995,scaleY:0.9995,rotation:-11.0008,x:165.55,y:677.45},9).wait(12));

	// Layer_15
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(-199.7,686.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(107).to({_off:false},0).to({regX:-0.1,regY:0.1,rotation:-4.0006,x:29.2,y:708.45},10).to({regX:0,regY:0,scaleX:0.9995,scaleY:0.9995,rotation:-73.8209,x:165.45,y:730.6},12).to({scaleX:0.9994,scaleY:0.9994,rotation:-7.9996,x:277.5,y:774.8},9).wait(12));

	// Layer_13
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(-357.6,686.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).to({scaleX:0.9995,scaleY:0.9995,rotation:-11.8208,x:137.85,y:761},22).to({rotation:-2},9).wait(12));

	// Layer_14
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(-342.8,668.55);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).to({scaleX:0.9995,scaleY:0.9995,rotation:-11.8208,x:148.6,y:740.3},22).to({rotation:3.9999,x:160.6,y:762.25},9).wait(12));

	// Layer_1
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(-275.4,741.7,0.6,0.6,0,0,0,637.7,418.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:639.3},102).to({regX:639.2,rotation:-17.9999,x:-435.5,y:761.75},4).to({regX:639.1,regY:418.5,scaleX:0.5999,scaleY:0.5999,rotation:0,skewY:180,x:-366.5,y:758.55},1).to({regX:639.3,regY:418.4,scaleX:0.5996,scaleY:0.5996,skewX:-21.8204,skewY:158.1796,x:159.7,y:830.65},22).wait(21));

	// Layer_3
	this.instance_5 = new lib.Tween179("synched",0);
	this.instance_5.setTransform(-263.8,274,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(149).to({startPosition:0},0).wait(1));

	// ropes
	this.instance_6 = new lib.ropes();
	this.instance_6.setTransform(6,4,1.134,1.134);

	this.instance_7 = new lib.ChatGPTImageSep6202601_25_47AM();
	this.instance_7.setTransform(3819.95,27,1.1477,1.1477,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},149).wait(1));

	// Layer_7
	this.instance_8 = new lib.farm_bpngcopy();
	this.instance_8.setTransform(-748,-4,1.4999,1.4999);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(82.3,536,3737.7,685.7);
// library properties:
lib.properties = {
	id: '17C26740C224FA4696F10DAD9C6965AF',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#2F2F2F",
	opacity: 0.00,
	manifest: [
		{src:"images/selector_animation_atlas_1.png", id:"selector_animation_atlas_1"},
		{src:"images/selector_animation_atlas_2.png", id:"selector_animation_atlas_2"},
		{src:"images/selector_animation_atlas_3.png", id:"selector_animation_atlas_3"},
		{src:"images/selector_animation_atlas_4.png", id:"selector_animation_atlas_4"},
		{src:"images/selector_animation_atlas_5.png", id:"selector_animation_atlas_5"},
		{src:"images/selector_animation_atlas_6.png", id:"selector_animation_atlas_6"},
		{src:"images/selector_animation_atlas_7.png", id:"selector_animation_atlas_7"}
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
an.compositions['17C26740C224FA4696F10DAD9C6965AF'] = {
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