(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"note8_atlas_1", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_2", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_3", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_4", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_5", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_6", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_7", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_8", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_9", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_10", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_11", frames: [[0,0,1024,1536]]},
		{name:"note8_atlas_12", frames: [[0,0,1024,1536]]}
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
	this.initialize(ss["note8_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flute = function() {
	this.initialize(img.flute);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2172,724);


(lib.head = function() {
	this.initialize(ss["note8_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.left_arm_feet = function() {
	this.initialize(ss["note8_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.left_arm_hand = function() {
	this.initialize(ss["note8_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.left_handpngcopy = function() {
	this.initialize(ss["note8_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.left_leg_feet = function() {
	this.initialize(ss["note8_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.left_leg_hand = function() {
	this.initialize(ss["note8_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.right_arm_feet = function() {
	this.initialize(ss["note8_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.right_arm_hand = function() {
	this.initialize(ss["note8_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.right_hand = function() {
	this.initialize(ss["note8_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.right_leg_feet = function() {
	this.initialize(ss["note8_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.right_leg_hand = function() {
	this.initialize(ss["note8_atlas_12"]);
	this.gotoAndStop(0);
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


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.left_handpngcopy();
	this.instance.setTransform(240,-369,0.4688,0.4688,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-369,480,720);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.flute();
	this.instance.setTransform(-81.8,-69.7,0.0939,0.0939,21.9898);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.2,-69.7,214.5,139.5);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.right_leg_hand();
	this.instance.setTransform(-240,-360,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.right_arm_hand();
	this.instance.setTransform(-240,-360,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.right_arm_hand();
	this.instance.setTransform(-240,-360,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.right_arm_hand();
	this.instance.setTransform(-240,-360,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.right_hand();
	this.instance.setTransform(240,-360,0.4688,0.4688,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.right_hand();
	this.instance.setTransform(240,-360,0.4688,0.4688,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.left_leg_hand();
	this.instance.setTransform(-240,-360,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.left_arm_hand();
	this.instance.setTransform(-240,-360,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


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
	this.instance = new lib.right_leg_feet();
	this.instance.setTransform(-240,-360,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


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
	this.instance = new lib.right_arm_feet();
	this.instance.setTransform(-240,-360,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


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
	this.instance = new lib.left_leg_feet();
	this.instance.setTransform(-240,-360,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


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
	this.instance = new lib.left_arm_feet();
	this.instance.setTransform(-240,-360,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(0,0,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,480,720), null);


(lib.head_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.head();
	this.instance.setTransform(0,0,0.4688,0.4688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head_1, new cjs.Rectangle(0,0,480,720), null);


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
	this.instance = new lib.head_1();
	this.instance.setTransform(0,0,1,1,0,0,0,240,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-360,480,720);


(lib.body_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1();
	this.instance.setTransform(240,360,1,1,0,0,0,240,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body_1, new cjs.Rectangle(0,0,480,720), null);


// stage content:
(lib.note8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [30,31];
	// timeline functions:
	this.frame_30 = function() {
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1).call(this.frame_31).wait(1));

	// Layer_13
	this.instance = new lib.Tween10("synched",0);
	this.instance.setTransform(515.05,334.75,0.9651,0.9652,0,0,0,-1.1,0.7);

	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.setTransform(511.1,334.55,0.9458,0.9458,0,0,0,-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9631,scaleY:0.9633,rotation:-16.4279,x:540.85,y:297.45},1).to({scaleX:0.9612,scaleY:0.9614,rotation:-32.858,x:554.1,y:260.1},1).to({regY:0.8,scaleX:0.9594,scaleY:0.9595,rotation:-49.2858,x:553.35,y:222.75},1).to({scaleX:0.9575,scaleY:0.9576,rotation:-65.7146,x:539.4,y:188.7},1).to({scaleX:0.9556,scaleY:0.9557,rotation:-82.1429,x:524.4,y:160},1).to({regX:-1.2,scaleX:0.9537,scaleY:0.9538,rotation:-98.569,x:496.9,y:145.5},1).to({regX:-1,regY:0.7,scaleX:0.9519,scaleY:0.952,rotation:-115.0001,x:473.45,y:138.6},1).to({regY:0.6,scaleX:0.9481,scaleY:0.9482,rotation:-137.8569,x:447.55,y:140.4},2).to({regX:-1.1,scaleX:0.9462,scaleY:0.9463,rotation:-149.2861,x:440.7,y:136.75},1).to({scaleX:0.9425,scaleY:0.9426,rotation:-172.1431,x:421.35,y:164.6},2).to({regX:0.1,regY:-0.1,scaleX:0.9363,scaleY:0.9363,rotation:-202.9702,x:401.25,y:178.45},2).to({scaleX:0.9395,scaleY:0.9395,rotation:-166.9234,x:424.9,y:141.75},2).to({regX:0.2,scaleX:0.9399,scaleY:0.9399,rotation:-152.8825,x:442.85,y:120.15},1).to({scaleX:0.9403,scaleY:0.9403,rotation:-138.8435,x:462.55,y:100.65},1).to({regX:0.1,scaleX:0.9411,scaleY:0.9411,rotation:-110.7652,x:508,y:111.8},2).to({regX:0.2,scaleX:0.9419,scaleY:0.9419,rotation:-82.6864,x:561.35,y:138.7},2).to({scaleX:0.9438,scaleY:0.9438,rotation:-41.3427,x:571.2,y:248.65},4).to({regY:0,scaleX:0.9448,scaleY:0.9448,rotation:-20.67,x:547.25,y:296.7},2).to({_off:true,regX:-0.3,regY:0.1,scaleX:0.9458,scaleY:0.9458,rotation:0,x:511.1,y:334.55},2).wait(2));

	// flute
	this.instance_2 = new lib.Tween16("synched",0);
	this.instance_2.setTransform(366.95,365.9,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.9999,scaleY:0.9999,rotation:146.0015,x:466.65,y:364.15},3).to({scaleX:1,scaleY:1,rotation:79.0006,x:546.45,y:298.3},3).to({regX:0.1,regY:0.4,scaleX:0.9972,scaleY:0.9972,rotation:-26.9701,x:570.15,y:81.15},8).to({regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:30.5003,x:612.05,y:211},4).to({regY:0.2,rotation:80.0009,x:561.05,y:316.75},4).to({rotation:130.0001,x:452.05,y:386.45},4).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:180,x:366.95,y:365.9},4).wait(2));

	// Layer_5
	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(490,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-4.7852,x:507.75,y:354.05},1).to({regX:0.1,rotation:-9.5698,x:528.1,y:347.2},1).to({regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-23.9275,x:567.35,y:316.75},3).to({regX:0.2,rotation:-38.2851,x:603.9,y:288.75},3).to({regX:0.1,rotation:-52.6426,x:630.8,y:240.85},3).to({regX:-0.1,regY:0.2,scaleX:0.9972,scaleY:0.9972,rotation:-74.972,x:637.25,y:160},3).to({regX:0,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:-46.0628,x:620.65,y:262.15},5).to({regY:0.1,rotation:-25.1248,x:561.35,y:331.65},5).to({regY:0,scaleX:1,scaleY:1,rotation:0,x:490,y:360},6).wait(2));

	// Layer_8
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.setTransform(490,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-12.8563,x:524.45,y:339.3},1).to({rotation:-25.7126,x:555.45,y:313.1},1).to({rotation:-38.5696,x:572.35,y:282.95},1).to({rotation:-64.2835,x:587.45,y:210.6},2).to({rotation:-89.9948,x:572.55,y:150.1},2).to({scaleX:0.9999,scaleY:0.9999,rotation:-128.5675,x:515.65,y:92.85},3).to({scaleX:0.9973,scaleY:0.9973,rotation:-187.9707,x:408.6,y:108.4},4).to({scaleX:1,scaleY:1,rotation:-134.9969,x:504.75,y:88.05},4).to({rotation:-89.9948,x:566.55,y:156.05},4).to({scaleX:0.9999,scaleY:0.9999,rotation:-44.9963,x:569.25,y:274.05},4).to({regX:0.1,regY:0.1,rotation:-22.4975,x:536.75,y:324.1},2).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:490,y:360},2).wait(2));

	// Layer_17
	this.instance_5 = new lib.Tween17("synched",0);
	this.instance_5.setTransform(515,368);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-31.7142,x:586.9,y:399},3).to({rotation:-73.9998,x:690.85,y:371.2},4).to({regX:-0.1,regY:0.1,rotation:-116.2843,x:752.2,y:271.45},4).to({scaleX:0.9999,scaleY:0.9999,rotation:-137.4304,x:761,y:207.45},2).to({regX:0,regY:0,scaleX:0.9994,scaleY:0.9994,rotation:-157.8187,x:768.7,y:135.05},1).to({scaleX:0.9999,scaleY:0.9999,rotation:-113.1741,x:763.85,y:279.8},4).to({rotation:-69.6467,x:686.1,y:383.8},5).to({rotation:-43.5277,x:614.3,y:404.55},3).to({scaleX:1,scaleY:1,rotation:-8.7048,x:519.65,y:396},4).to({rotation:0,x:513,y:377},1).wait(1));

	// Layer_15
	this.instance_6 = new lib.Tween15("synched",0);
	this.instance_6.setTransform(490,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.9754,scaleY:0.9754,rotation:-26.7855,x:556,y:386.5},3).to({scaleX:0.9427,scaleY:0.9427,rotation:-62.5001,x:643.9,y:370.5},4).to({scaleX:0.9181,scaleY:0.9181,rotation:-89.2867,x:690.45,y:317.35},3).to({regX:0.1,regY:0.8,scaleX:0.8849,scaleY:0.8849,rotation:-134.8177,x:733.2,y:204.35},4).to({scaleX:0.914,scaleY:0.914,rotation:-93.7476,x:699.1,y:311.95},4).to({regX:0.2,scaleX:0.9498,scaleY:0.9498,rotation:-54.6855,x:630.4,y:378.25},5).to({scaleX:0.9784,scaleY:0.9784,rotation:-23.437,x:550.2,y:387.8},4).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:490,y:360},3).wait(2));

	// Layer_14
	this.instance_7 = new lib.Tween14("synched",0);
	this.instance_7.setTransform(490,360);

	this.instance_8 = new lib.Tween12("synched",0);
	this.instance_8.setTransform(509.8,343.45,0.9994,0.9994,-2.818);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween13("synched",0);
	this.instance_9.setTransform(490,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_9}]},16).to({state:[{t:this.instance_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,scaleX:0.9994,scaleY:0.9994,rotation:-2.818,x:509.8,y:343.45},14).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},14).to({_off:true,scaleX:1,scaleY:1,rotation:0,x:490,y:360},16).wait(2));

	// head
	this.instance_10 = new lib.Tween1("synched",0);
	this.instance_10.setTransform(490,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:0.1,regY:0.1,rotation:-23.0008,x:580.05,y:340},14).to({rotation:0,x:489.05,y:360.1},16).wait(2));

	// body
	this.instance_11 = new lib.body_1();
	this.instance_11.setTransform(490,360,1,1,0,0,0,240,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({rotation:-0.5333,x:492.25,y:359.95},0).wait(1).to({rotation:-1.0667,x:494.55,y:360},0).wait(1).to({rotation:-1.6,x:496.8,y:359.95},0).wait(1).to({rotation:-2.1333,x:499.15},0).wait(1).to({rotation:-2.6667,x:501.4,y:360},0).wait(1).to({rotation:-3.2,x:503.65},0).wait(1).to({rotation:-3.7333,x:506,y:359.95},0).wait(1).to({rotation:-4.2667,x:508.3,y:360},0).wait(1).to({rotation:-4.8,x:510.5,y:359.95},0).wait(1).to({rotation:-5.3333,x:512.8,y:360},0).wait(1).to({rotation:-5.8667,x:515.15,y:359.95},0).wait(1).to({rotation:-6.4,x:517.4},0).wait(1).to({rotation:-6.9333,x:519.7,y:360},0).wait(1).to({rotation:-7.4667,x:522,y:359.95},0).wait(1).to({rotation:-8,x:522.95,y:359},0).wait(1).to({rotation:-7.4667,x:520.8,y:358.95},0).wait(1).to({rotation:-6.9333,x:518.55,y:359},0).wait(1).to({rotation:-6.4,x:516.4,y:358.95},0).wait(1).to({rotation:-5.8667,x:514.2},0).wait(1).to({rotation:-5.3333,x:511.95,y:359},0).wait(1).to({rotation:-4.8,x:509.75,y:358.95},0).wait(1).to({rotation:-4.2667,x:507.6,y:359},0).wait(1).to({rotation:-3.7333,x:505.4,y:358.95},0).wait(1).to({rotation:-3.2,x:503.15,y:359},0).wait(1).to({rotation:-2.6667,x:501},0).wait(1).to({rotation:-2.1333,x:498.8,y:358.95},0).wait(1).to({rotation:-1.6,x:496.55},0).wait(1).to({rotation:-1.0667,x:494.35,y:359},0).wait(1).to({rotation:-0.5333,x:492.2,y:358.95},0).wait(1).to({rotation:0,x:490,y:359},0).wait(2));

	// Layer_4
	this.instance_12 = new lib.Tween4("synched",0);
	this.instance_12.setTransform(489.95,359.95,1,1,-5.9997);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:0.1,regY:0.1,scaleX:0.9987,scaleY:0.9987,rotation:-21.9999,x:526.55,y:353.75},14).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-5.0001,x:489.95,y:359.95},16).wait(2));

	// Layer_10
	this.instance_13 = new lib.Tween5("synched",0);
	this.instance_13.setTransform(479.95,368.95,1,1,-10.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:0.4,regY:0.5,scaleX:0.9987,scaleY:0.9987,rotation:45.9997,x:637.4,y:304.4},14).to({regX:0,regY:0.1,scaleX:1,scaleY:1,rotation:-10.9996,x:479.95,y:369.05},16).wait(2));

	// left_feet_arm
	this.instance_14 = new lib.Tween2("synched",0);
	this.instance_14.setTransform(490,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:0.1,regY:0.1,scaleX:0.9992,scaleY:0.9992,rotation:-10.8267,x:526.15,y:368.8},14).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:490,y:360},16).wait(2));

	// Layer_9
	this.instance_15 = new lib.Tween3("synched",0);
	this.instance_15.setTransform(490,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:0.1,regY:0.1,scaleX:0.9991,scaleY:0.9991,rotation:13.0005,x:564.9,y:387.8},14).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:490,y:360},16).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(548.7,21.1,641.5,806.5);
// library properties:
lib.properties = {
	id: '57D85FE425AD0E4BBA604410090A0EA5',
	width: 1000,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/flute.png", id:"flute"},
		{src:"images/note8_atlas_1.png", id:"note8_atlas_1"},
		{src:"images/note8_atlas_2.png", id:"note8_atlas_2"},
		{src:"images/note8_atlas_3.png", id:"note8_atlas_3"},
		{src:"images/note8_atlas_4.png", id:"note8_atlas_4"},
		{src:"images/note8_atlas_5.png", id:"note8_atlas_5"},
		{src:"images/note8_atlas_6.png", id:"note8_atlas_6"},
		{src:"images/note8_atlas_7.png", id:"note8_atlas_7"},
		{src:"images/note8_atlas_8.png", id:"note8_atlas_8"},
		{src:"images/note8_atlas_9.png", id:"note8_atlas_9"},
		{src:"images/note8_atlas_10.png", id:"note8_atlas_10"},
		{src:"images/note8_atlas_11.png", id:"note8_atlas_11"},
		{src:"images/note8_atlas_12.png", id:"note8_atlas_12"}
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
an.compositions['57D85FE425AD0E4BBA604410090A0EA5'] = {
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