
var soundOn=false;
var timerOn=false;
var t;
var currentPage=1;
var themeId = 0;  //default theme

var languages = [

{lang:1,sports:["Archery","Athletics","Badminton","Basketball","Beach Volleyball","Boxing","Canoeing Slalom","Canoeing Sprint","Cycling BMX","Cycling Mountain Bike","Cycling Road","Cycling Track","Diving","Equestrian","Fencing","Football","Gymnastics Artistic","Gymnastics Rhythmic","Handball","Hockey","Judo","Modern Pentathlon","Rowing","Sailing","Shooting","Swimming","Synchro Swimming","Table Tennis","Taekwondo","Tennis","Trampoline","Triathlon","Volleyball","Water Polo","Weightlifting","Wrestling"]},

{lang:2,sports:["射箭","田径","羽毛球","篮球","沙滩排球","拳击","皮划艇激流回旋","皮划艇冲刺","自行车BMX","山地自行车","公路自行车","场地自行车","跳水","马术","击剑","足球","体操","艺术体操","手球","曲棍球","柔道","现代五项","赛艇","帆船帆板","射击","游泳","花样游泳","乒乓球","跆拳道","网球","蹦床","铁人三项","排球","水球","举重","摔跤"]},

{lang:3,sports:["射箭","田徑","羽毛球","籃球","沙灘排球","拳擊","皮划艇激流迴旋","皮划艇衝刺","自行車BMX","山地自行車","公路自行車","場地自行車","跳水","馬術","擊劍","足球","體操","藝術體操","手球","曲棍球","柔道","現代五項","賽艇","帆船帆板","射擊","游泳","花樣游泳","乒乓球","跆拳道","網球","蹦床","鐵人三項","排球","水球","舉重","摔跤"]},

{lang:4,sports:["Jousiammunta","Yleisurheilu","Sulkapallo","Koripallo","Rantalentopallo","Nyrkkeily","Koskimelonta","Ratamelonta","Radsport–BMX","Maastopyöräily","Maantiepyöräily","Ratapyöräily","Uimahypyt","Ratsastus","Miekkailu","Jalkapallo","Telinevoimistelu","Rytminen voimistelu","Käsipallo","Maahockey","Judo","Nykyaikainen viisiottelu","Soutu","Purjehdus","Ammunta","Uinti","Taitouinti","Pöytätennis","Taekwondo","Tennis","Trampoliini","Triathlon","Lentopallo","Vesipallo","Painonnosto","Paini"]},
                 
{lang:5,sports:["Bogenschießen","Leichtathletik","Badminton","Basketball","Beachvolleyball","Boxen","Kanuslalom","Kanurennsport","BMX","Mountainbike","Straßenrennen","Bahnradrennen","Kunst- und Turmspringen","Military","Fechten","Fußball","Kunstturnen","Rhythmische Sportgymnastik","handball","Hockey","Judo","Moderner Fünfkampf","Rudern","Segeln","Schießen","Schwimmen","Synchronschwimmen","Tischtennis","Taekwondo","Tennis","Trampolin","Triathlon","Volleyball","Wasserball","Gewichtheben","Ringen"]}

];

var game = {

newlevels: [
{img: "images/dummy.jpg", 
faults:[{x:142,y:57,w:37,h:28},{x:142,y:57,w:37,h:28},{x:142,y:57,w:37,h:28},{x:142,y:57,w:37,h:28},{x:142,y:57,w:37,h:28},{x:142,y:57,w:37,h:28},{x:142,y:57,w:37,h:28},{x:142,y:57,w:37,h:28}]},

{img: "images/510x510/archery.png", 
faults:[{x:0,y:0,w:51,h:52},{x:0,y:69,w:51,h:112},{x:466,y:69,w:44,h:63},{x:429,y:165,w:81,h:90},{x:194,y:189,w:44,h:46},{x:281,y:199,w:53,h:56},{x:200,y:315,w:55,h:61},{x:51,y:345,w:55,h:70},{x:127,y:429,w:36,h:46}],
faultStyle:"border-color:red"},

{img: "images/510x510/athletics.png", 
faults:[{x:7,y:0,w:141,h:46},{x:176,y:81,w:47,h:38},{x:163,y:119,w:60,h:51},{x:376,y:119,w:105,h:51},{x:348,y:219,w:53,h:57},{x:106,y:304,w:57,h:54},{x:7,y:331,w:53,h:50},{x:148,y:358,w:227,h:152}],
faultStyle:"border-color:green"},

{img: "images/510x510/badminton.png", 
faults:[{x:127,y:0,w:109,h:67},{x:454,y:24,w:48,h:50},{x:0,y:61,w:43,h:57},{x:208,y:86,w:103,h:57},{x:108,y:124,w:66,h:65},{x:281,y:223,w:110,h:69},{x:77,y:384,w:64,h:50},{x:413,y:415,w:80,h:37}]},

{img: "images/510x510/basketball.png", 
faults:[{x:418,y:0,w:92,h:71},{x:293,y:93,w:56,h:63},{x:93,y:146,w:45,h:45},{x:16,y:224,w:40,h:81},{x:452,y:240,w:58,h:77},{x:170,y:264,w:57,h:53},{x:73,y:271,w:54,h:54},{x:127,y:355,w:37,h:44},{x:321,y:377,w:97,h:41},{x:441,y:377,w:69,h:53},{x:79,y:409,w:85,h:79}]},

{img: "images/510x510/beach_volleyball.png", 
faults:[{x:386,y:0,w:124,h:91},{x:50,y:20,w:48,h:45},{x:280,y:80,w:48,h:55},{x:0,y:118,w:74,h:74},{x:191,y:166,w:48,h:53},{x:398,y:166,w:57,h:89},{x:455,y:265,w:55,h:48},{x:22,y:320,w:52,h:59},{x:448,y:320,w:35,h:46},{x:280,y:333,w:61,h:65},{x:411,y:398,w:89,h:51},{x:29,y:423,w:45,h:72}]},

{img: "images/510x510/boxing.png", 
faults:[{x:29,y:0,w:49,h:34},{x:406,y:0,w:53,h:40},{x:292,y:40,w:48,h:52},{x:144,y:85,w:51,h:52},{x:292,y:181,w:79,h:48},{x:96,y:223,w:81,h:69},{x:349,y:229,w:49,h:41},{x:0,y:292,w:42,h:47},{x:442,y:292,w:68,h:56},{x:29,y:388,w:430,h:70}]},

{img: "images/510x510/canoe_slalom.png", 
faults:[{x:51,y:0,w:54,h:62},{x:421,y:0,w:64,h:72},{x:166,y:36,w:56,h:55},{x:298,y:36,w:56,h:46},{x:247,y:98,w:79,h:93},{x:69,y:130,w:59,h:74},{x:378,y:191,w:54,h:81},{x:152,y:299,w:187,h:90}]},

{img: "images/510x510/canoe_sprint.png", 
faults:[{x:355,y:15,w:59,h:94},{x:294,y:50,w:53,h:59},{x:104,y:120,w:58,h:57},{x:452,y:185,w:50,h:70},{x:394,y:203,w:47,h:73},{x:0,y:234,w:70,h:125},{x:120,y:276,w:71,h:140},{x:294,y:369,w:53,h:58}]},

{img: "images/510x510/cycling_bmx.png", 
faults:[{x:448,y:12,w:62,h:68},{x:93,y:24,w:42,h:63},{x:255,y:55,w:61,h:57},{x:423,y:120,w:70,h:69},{x:84,y:175,w:57,h:55},{x:196,y:189,w:59,h:51},{x:338,y:209,w:70,h:60},{x:0,y:380,w:204,h:130}]},

{img: "images/510x510/cycling_mountain.png", 
faults:[{x:448,y:67,w:47,h:56},{x:53,y:112,w:63,h:77},{x:314,y:141,w:82,h:85},{x:9,y:183,w:55,h:72},{x:139,y:183,w:59,h:62},{x:225,y:265,w:100,h:65},{x:9,y:318,w:69,h:59},{x:396,y:318,w:52,h:59},{x:106,y:425,w:79,h:63}]},

{img: "images/510x510/cycling_road.png", 
faults:[{x:107,y:0,w:42,h:53},{x:0,y:14,w:84,h:171},{x:448,y:14,w:52,h:78},{x:328,y:67,w:58,h:67},{x:412,y:120,w:81,h:52},{x:386,y:286,w:35,h:47},{x:42,y:302,w:48,h:43},{x:269,y:302,w:59,h:71},{x:66,y:361,w:62,h:58},{x:136,y:404,w:126,h:106}]},

{img: "images/510x510/cycling_track.png", 
faults:[{x:380,y:0,w:59,h:119},{x:106,y:11,w:48,h:42},{x:312,y:23,w:68,h:37},{x:439,y:128,w:71,h:167},{x:100,y:211,w:94,h:158},{x:318,y:240,w:48,h:50},{x:56,y:349,w:44,h:53},{x:439,y:375,w:71,h:50},{x:333,y:435,w:69,h:53}]},

{img: "images/510x510/diving.png", 
faults:[{x:361,y:0,w:61,h:40},{x:111,y:12,w:111,h:41},{x:406,y:96,w:50,h:50},{x:95,y:171,w:41,h:39},{x:184,y:171,w:50,h:46},{x:340,y:171,w:52,h:62},{x:264,y:296,w:76,h:71},{x:115,y:367,w:51,h:107},{x:0,y:403,w:45,h:54}]},

{img: "images/510x510/equestrian.png", 
faults:[{x:414,y:10,w:96,h:33},{x:10,y:20,w:71,h:46},{x:45,y:118,w:74,h:50,},{x:414,y:143,w:68,h:38},{x:102,y:181,w:40,h:62},{x:0,y:214,w:45,h:58},{x:318,y:272,w:56,h:51},{x:207,y:280,w:48,h:52},{x:218,y:386,w:68,h:58}]},

{img: "images/510x510/fencing.png", 
faults:[{x:51,y:69,w:45,h:54},{x:321,y:117,w:83,h:55},{x:17,y:144,w:79,h:95},{x:210,y:212,w:55,h:57},{x:0,y:281,w:89,h:113},{x:285,y:281,w:68,h:79},{x:210,y:354,w:45,h:48},{x:374,y:415,w:94,h:60}]},

{img: "images/510x510/football.png", 
faults:[{x:347,y:0,w:163,h:89},{x:22,y:123,w:45,h:69},{x:420,y:192,w:45,h:50},{x:245,y:217,w:48,h:59},{x:330,y:217,w:45,h:59},{x:132,y:322,w:48,h:51},{x:409,y:340,w:65,h:49},{x:125,y:404,w:80,h:40}]},

{img: "images/510x510/gymnastics_artistic.png", 
faults:[{x:58,y:0,w:108,h:145},{x:255,y:91,w:49,h:39},{x:284,y:162,w:71,h:44},{x:340,y:276,w:44,h:39},{x:362,y:344,w:47,h:42},{x:175,y:355,w:44,h:43},{x:409,y:355,w:101,h:60},{x:141,y:415,w:245,h:81}],
faultStyle:"border-color:yellow"},

{img: "images/510x510/gymnastics-rhythmic.png", 
faults:[{x:22,y:54,w:40,h:48},{x:222,y:54,w:40,h:48},{x:360,y:54,w:49,h:48},{x:161,y:176,w:101,h:67},{x:182,y:296,w:80,h:62},{x:84,y:309,w:49,h:49},{x:303,y:358,w:83,h:76},{x:211,y:425,w:72,h:56}]},

{img: "images/510x510/handball.png", 
faults:[{x:225,y:36,w:44,h:51},{x:15,y:72,w:46,h:69},{x:318,y:93,w:50,h:57},{x:247,y:141,w:45,h:52},{x:172,y:150,w:53,h:63},{x:476,y:199,w:34,h:62},{x:417,y:223,w:47,h:68},{x:307,y:333,w:47,h:52},{x:0,y:438,w:154,h:58}]},

{img: "images/510x510/hockey.png", 
faults:[{x:183,y:45,w:64,h:98},{x:398,y:94,w:91,h:59},{x:0,y:116,w:52,h:119},{x:411,y:186,w:41,h:49},{x:52,y:202,w:75,h:47},{x:367,y:210,w:44,h:100},{x:202,y:214,w:45,h:82},{x:44,y:281,w:56,h:91},{x:311,y:372,w:70,h:76}]},

{img: "images/510x510/judo.png", 
faults:[{x:100,y:84,w:52,h:69},{x:237,y:90,w:62,h:49},{x:162,y:118,w:52,h:56},{x:335,y:183,w:55,h:61},{x:439,y:183,w:71,h:61},{x:268,y:261,w:54,h:56},{x:126,y:289,w:49,h:59},{x:214,y:326,w:71,h:74}]},

{img: "images/510x510/modern_pentathlon.png", 
faults:[{x:27,y:75,w:45,h:50},{x:440,y:90,w:58,h:44},{x:101,y:112,w:47,h:48},{x:362,y:112,w:48,h:60},{x:181,y:153,w:150,h:35},{x:386,y:301,w:43,h:51},{x:148,y:358,w:33,h:98},{x:362,y:358,w:48,h:49}]},

{img: "images/510x510/rowing.png", 
faults:[{x:395,y:29,w:115,h:98},{x:175,y:61,w:57,h:47},{x:0,y:96,w:115,h:111},{x:232,y:117,w:54,h:56},{x:395,y:207,w:41,h:48},{x:424,y:268,w:61,h:56},{x:275,y:296,w:62,h:43},{x:13,y:339,w:51,h:59},{x:460,y:339,w:44,h:66}]},

{img: "images/510x510/sailing.png", 
faults:[{x:462,y:11,w:48,h:44},{x:438,y:68,w:72,h:79},{x:7,y:74,w:73,h:58},{x:56,y:176,w:95,h:79},{x:287,y:200,w:73,h:75},{x:0,y:281,w:90,h:69},{x:438,y:281,w:72,h:59},{x:360,y:350,w:54,h:69},{x:0,y:367,w:212,h:34},{x:247,y:434,w:263,h:38}]},

{img: "images/510x510/shooting.png", 
faults:[{x:52,y:25,w:57,h:84},{x:266,y:140,w:36,h:61},{x:476,y:147,w:34,h:45},{x:341,y:186,w:44,h:45},{x:31,y:192,w:50,h:63},{x:208,y:208,w:58,h:64},{x:375,y:255,w:87,h:46},{x:81,y:301,w:69,h:43},{x:52,y:418,w:156,h:65}]},

{img: "images/510x510/swimming.png", 
faults:[{x:0,y:13,w:47,h:71},{x:237,y:46,w:94,h:27},{x:405,y:46,w:41,h:38},{x:237,y:73,w:94,h:35},{x:34,y:148,w:62,h:36},{x:179,y:243,w:174,h:53},{x:307,y:339,w:104,h:53},{x:34,y:365,w:42,h:53},{x:147,y:453,w:235,h:57}]},

{img: "images/510x510/synchronised_swimming.png", 
faults:[{x:195,y:119,w:39,h:62},{x:266,y:119,w:46,h:54},{x:226,y:219,w:94,h:80},{x:13,y:284,w:94,h:65},{x:328,y:299,w:51,h:50},{x:411,y:299,w:83,h:50},{x:367,y:349,w:136,h:91},{x:234,y:427,w:48,h:52}]},

{img: "images/510x510/table_tennis.png", 
faults:[{x:56,y:124,w:33,h:49},{x:180,y:173,w:41,h:49},{x:237,y:215,w:49,h:62},{x:363,y:215,w:54,h:49},{x:417,y:255,w:93,h:82},{x:128,y:264,w:42,h:50},{x:363,y:264,w:54,h:119},{x:89,y:277,w:39,h:60},{x:195,y:321,w:42,h:62},{x:295,y:331,w:68,h:98}]},

{img: "images/510x510/taekwondo.png", 
faults:[{x:367,y:62,w:52,h:61},{x:69,y:104,w:52,h:58},{x:292,y:123,w:54,h:54},{x:121,y:177,w:43,h:42},{x:310,y:177,w:51,h:57},{x:54,y:234,w:94,h:128},{x:113,y:380,w:69,h:56},{x:310,y:380,w:57,h:56}]},

{img: "images/510x510/tennis.png", 
faults:[{x:275,y:45,w:63,h:105},{x:443,y:111,w:59,h:63},{x:73,y:174,w:86,h:49},{x:423,y:198,w:65,h:70},{x:73,y:223,w:86,h:54},{x:0,y:250,w:48,h:71},{x:116,y:377,w:53,h:52},{x:349,y:429,w:65,h:64}]},

{img: "images/510x510/trampoline.png", 
faults:[{x:209,y:12,w:46,h:54},{x:274,y:66,w:50,h:62},{x:181,y:97,w:43,h:74},{x:255,y:148,w:56,h:66},{x:150,y:224,w:65,h:59},{x:215,y:283,w:51,h:56},{x:117,y:364,w:261,h:80},{x:224,y:454,w:68,h:56}],
faultStyle:"border-color:green"},

{img: "images/510x510/triathlon.png", 
faults:[{x:209,y:6,w:116,h:102},{x:0,y:66,w:37,h:79},{x:379,y:66,w:43,h:51},{x:219,y:117,w:71,h:56},{x:356,y:145,w:114,h:82},{x:209,y:263,w:46,h:73},{x:356,y:350,w:114,h:110},{x:37,y:405,w:133,h:93}]},

{img: "images/510x510/volleyball.png", 
faults:[{x:296,y:61,w:49,h:64},{x:401,y:125,w:54,h:53},{x:74,y:171,w:44,h:52},{x:150,y:197,w:60,h:65},{x:455,y:203,w:41,h:40},{x:57,y:298,w:45,h:50},{x:79,y:348,w:39,h:77},{x:345,y:376,w:40,h:62},{x:455,y:376,w:41,h:62}]},

{img: "images/510x510/waterpolo.png", 
faults:[{x:114,y:25,w:55,h:67},{x:261,y:25,w:52,h:73},{x:115,y:233,w:49,h:50},{x:320,y:242,w:55,h:52},{x:100,y:283,w:64,h:60},{x:470,y:343,w:40,h:63},{x:304,y:349,w:71,h:68},{x:64,y:417,w:226,h:45}]},

{img: "images/510x510/weightlifting.png", 
faults:[{x:456,y:126,w:54,h:71},{x:207,y:150,w:41,h:47},{x:350,y:188,w:45,h:80},{x:127,y:246,w:52,h:63},{x:268,y:255,w:57,h:42},{x:0,y:297,w:72,h:46},{x:268,y:297,w:57,h:55},{x:0,y:424,w:72,h:86}]},

{img: "images/510x510/wrestling.png", 
faults:[{x:142,y:58,w:46,h:48},{x:91,y:160,w:59,h:78},{x:215,y:199,w:40,h:49},{x:464,y:210,w:46,h:87},{x:0,y:238,w:38,h:59},{x:284,y:255,w:58,h:70},{x:50,y:276,w:55,h:68},{x:342,y:310,w:43,h:62}]}

],


currentLevel:0,
elapsedTime:0,

init: function(level) {	
	if (typeof level === "undefined") {
		level = 1;
	}
		
	if (level> this.newlevels.length) return;
	
	this.currentLevel = level;
		
	this.newLevel();
  },

newLevel: function() {
	
	if (this.currentLevel == 37) {
		this.currentLevel = 1;
	}
	
	var level = this.currentLevel;
	
	var str = level;
	var levelName = $(".levelGrid div:nth-child("+game.currentLevel+") p").html();
	$("#gameTitle").html('<p>'+levelName+'</p>');	
	
	$("#img1").attr("src", this.newlevels[level].img);
	$("#img2").attr("src", this.newlevels[level].img);	

	$("#img1container").animate({opacity:1}, 2000);
	$("#img2container").animate({opacity:1}, 2000);		
	
	var faultsNum=this.newlevels[level].faults.length;	
	
	var faultsSet = getRandomNumbers(faultsNum);
	
	for(var i=0;i<faultsSet.length;i++){
		var index = faultsSet[i];
		var x=Math.round(this.newlevels[level].faults[index].x*co);
		var y=Math.round(this.newlevels[level].faults[index].y*co);
		var w=Math.round(this.newlevels[level].faults[index].w*co);
		var h=Math.round(this.newlevels[level].faults[index].h*co);
		//console.log("x:"+x+" y:"+y+" w:"+w+" h"+h);
		// attach faults images to original image	 background-image:url(../images/soundOn.png);
		//var faultDiv = "<div class='faultImage' onclick='spotclicked("+x+","+y+","+w+","+h+")"+"' style='width:"+w+"px; height:"+h+"px; left:"+x+"px; top:"+y+"px; background-image:url(images\/510x510\/"+level+"_"+(index+1)+".jpg);'></div>";
		var faultDiv = "<div class='faultImage' onclick='spotclicked("+x+","+y+","+w+","+h+")"+"' style='width:"+w+"px; height:"+h+"px; left:"+x+"px; top:"+y+"px; background-image:url("+this.newlevels[level].img.replace(".png","_"+(index+1))+".png);'></div>";
		$(faultDiv).appendTo('#img2container');				
		
		$("#imgMap").append('<area shape="rect" coords="'+x+','+y+','+(x+w)+','+(y+h)+'" onclick="spotclicked('+x+','+y+','+w+','+h+')" />');
		$("#indicatorContainer").append('<div class="faultIndicator"></div>');
	}
	
	$("#indicatorContainer .faultIndicator").animate({opacity:1}, 1000);
	
	this.elapsedTime = 0;
	timerOn=true;
	t=setTimeout("doTimer()", 1500); 		
	
  },


cleanLevel: function() {
	$("#indicatorContainer").empty();
	$("#imgMap").empty();
	$('.fault').remove();
	$('.faultImage').remove();
    $("#img1").attr("src", "images/trans.png");
    $("#img2").attr("src", "images/trans.png");
	$("#gamePage #timer p").html("00:00");
	timerOn=false;
}
  
};

function spotclicked(x,y,w,h) {	

	if (soundOn) {
		//document.getElementById('rightSound').play();
        playSound(1);
	}
	
	var faultStyle = "";
	if (typeof game.newlevels[game.currentLevel].faultStyle !== "undefined") {
		faultStyle = game.newlevels[game.currentLevel].faultStyle;
	}		

	var faultDiv = "<div class='fault' style='width:"+w+"px; height:"+h+"px; left:"+x+"px; top:"+y+"px;"+faultStyle+"'></div>";
	$(faultDiv).appendTo('#img1container');
	$(faultDiv).appendTo('#img2container');
	if ($("#indicatorContainer").children(".faultIndicator").length>0) {
		$("#indicatorContainer>.faultIndicator:last").animate({opacity:0}, 1000);
		$("#indicatorContainer>.faultIndicator:last").addClass("faultIndicatorRemoved").removeClass("faultIndicator");;		
	}
	
	if ($("#indicatorContainer").children(".faultIndicator").length==0) {
		timerOn=false;	
		
		$("#levelOver").css('display','inline');
		$("#levelOver").animate({opacity:1}, 1000);		
/*		$("#ring").animate({
			width:'624px',
			height:'297px',
			left:'0px',
			top:'0px'			
		}, 1000);		*/		
		
		$("#img1container").animate({opacity:0}, 1500, function(){ $("#img1").attr("src", "images/trans.png"); });
		$("#img2container").animate({opacity:0}, 1500, function(){ $("#img2").attr("src", "images/trans.png"); });		
		setTimeout( nextLevel, 4500);
        if (soundOn) {
            playSound(3);
        }    
	}
}

// select num from total
function getRandomNumbers(total) {

	// generate random number of faults 3-5
	var num = Math.floor(Math.random()*3) + 3;
	
	var arr = [];
	
	// for testing show all begin
//	for(var j=0;j<total;j++){arr[j]=j;}
//	return arr;	
	// for testing show all	end
	
	while(arr.length < num){
	  var randomnumber=Math.floor(Math.random()*total);
	  var found=false;
	  for(var i=0;i<arr.length;i++){
		if(arr[i]==randomnumber){found=true;break}
	  }
	  if(!found)arr[arr.length]=randomnumber;
	}
	
	return arr;
}

function nextLevel() {
	$("#levelOver").animate({opacity:0},1000, function() { 
	  $("#levelOver").css('display','none');
	 });
	 
/*	$("#ring").animate({
		width:'225px',
		height:'107px',
		left:'200px',
		top:'50px' 
	}, 1000);		*/ 
	 
	if (currentPage==3){
		game.cleanLevel();
		game.currentLevel++;
		game.newLevel();
	}
}

function goLevelPage(fromPage) {
	currentPage=2;
	if (fromPage == "homePage") {
		$("#homePage").css('visibility', 'hidden');
	} else if (fromPage == "gamePage") {
        clearTimeout(t);
	    game.cleanLevel();        
		$("#gamePage").css('visibility', 'hidden');		
        
        window.location = "myapp://gamepage/false";
    }
	
	$("#levelPage").css('visibility', 'visible');		
}
	
function goHomePage() {
	currentPage=1;
	$("#homePage").css('visibility', 'visible');
	$("#levelPage").css('visibility', 'hidden');	
}	

function golevel(level) {
	currentPage=3;
	$("#gamePage").css('visibility', 'visible');
	$("#levelPage").css('visibility', 'hidden');
	
	if((themeId === 0) || (themeId === 1)){
		$("#gamePage").css("background-size","100% 100%");
	} else {
		$("#gamePage").css("background-size","");
	}	
		
	game.init(level);
    
    window.location = "myapp://gamepage/true";  
}

function muteSound() {
	soundOn = !soundOn;
	if (soundOn) {
		$(".sound").css('background-image','url(images/soundOn.png)');
		document.getElementById('bgMusic').play();
	} else {
		$(".sound").css('background-image','url(images/soundOff.png)');
		document.getElementById('bgMusic').pause();
	}
}

function changeTheme(){
	if(++themeId===10){themeId=0;};	
	$("#gamePage").css("background-image","url(images/theme"+themeId+".png)");
	if((themeId === 0) || (themeId === 1)){
		$("#gamePage").css("background-size","100% 100%");
	} else {
		$("#gamePage").css("background-size","");
	}
}
/*
function showad(){
    $("#ad1").removeClass("showAd");    
    window.location = "adrequest://adrequest";
}

function adStatus(avail){
    console.log("adStatus called"+avail);
    if(avail)
        $("#ad1").addClass("showAd");
    else
        $("#ad1").removeClass("showAd");
    
}*/

function doTimer() {
   if (timerOn) {
		game.elapsedTime++;
		
		// calculate the minutes and seconds from elapsed time
		var minute = Math.floor(game.elapsedTime / 60);
		var second = game.elapsedTime % 60;   
		
		// add padding 0 if minute and second is less then 10
		if (minute < 10) minute = "0" + minute;
		if (second < 10) second = "0" + second;
		
		// display the elapsed time
		$("#gamePage #timer p").html(minute+":"+second);
		
		setTimeout("doTimer()", 1000);  
	}
}	
			   
function initLanguage(lang) {
    console.log("initLanguage called");
	for(var i=1;i<37;i++){
		$(".levelGrid div:nth-child("+i+") p").html(languages[lang].sports[i-1]);
	}
}

$(function(){

  $("#img1").click(function (e) { if (soundOn) { playSound(2); } });
  $("#img2").click(function (e) { if (soundOn) { playSound(2); } });  
  console.log("starting1...");
  
  $("#homePage").click(function (e) {
      var target = $(e.target);
      if (target.is("#infobtn")) {
      /*   if (typeof(lang) !== 'undefined'){
              if (lang.indexOf("Hans") >= 0){
                  $("#chineseinfo").addClass("active");
              }else if (lang.indexOf("Hant") >= 0){
                  $("#traditionalinfo").addClass("active");
              }else if (lang.indexOf("fi") >= 0){
                  $("#suomiinfo").addClass("active");
              }else {
                  $("#englishinfo").addClass("active");
              }
          }else{
              $("#englishinfo").addClass("active");
          }*/
          $("#info").show("slow");
       
        }else if (target.is("#backbtn") || ((target.parents("#info").length ==0 ) && (!target.is("#info")) ) ) {
            $("#info").hide("slow");
        }
    });
/*
    if (typeof(lang) !== 'undefined'){
        if (lang.indexOf("Hans") >= 0){
            $("#chineseinfo").addClass("active");
        }else if (lang.indexOf("Hant") >= 0){
            $("#traditionalinfo").addClass("active");
        }else if (lang.indexOf("fi") >= 0){
            $("#suomiinfo").addClass("active");
        }else {
            $("#englishinfo").addClass("active");
        }
    }else{
        $("#englishinfo").addClass("active");
    }
  
  

	if (typeof(lang) !== 'undefined'){
       console.log("lang is" + lang);
	   if (lang.indexOf("Hans") >= 0){
		  initLanguage(1);
		  $("#chineseinfo").addClass("active");
	   }else if (lang.indexOf("Hant") >= 0){
		  initLanguage(2); 
		  $("#traditionalinfo").addClass("active");
	   }else if (lang.indexOf("fi") >= 0){
		  initLanguage(3); 
		  $("#suomiinfo").addClass("active");
	   }else {
		  initLanguage(0); 
		  $("#englishinfo").addClass("active");
	   }
	}else{
       console.log("lang undefined");
	   initLanguage(0);
	   $("#englishinfo").addClass("active");
	}

  $("#homePage").click(function (e) {
         var target = $(e.target);
         if (target.is("#infobtn")) {
            $("#info").show("slow");
         }else if (target.is("#backbtn") || ((target.parents("#info").length ==0 ) && (!target.is("#info")) ) ) {
                $("#info").hide("slow");
         }
   });*/

	$(".levelGrid").click(function (e) {
		var target = $(e.target);
		
		if (target.is(".levelGrid div")) {
			var level = target.attr("level");
			//var levelName = target.children("p").html();
			golevel(level); 
		}					
	});
  
  /*
    for (var i = 1; i < 11; i++) 
    {
        $("#leafContainer div:nth-child("+i+") img").css("webkitAnimationName",  (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip");
        $("#leafContainer div:nth-child("+i+") img").css("webkitAnimationDuration", "6s");  
		
        $("#leafContainer div:nth-child("+i+")").css("webkitAnimationName","drop");
        $("#leafContainer div:nth-child("+i+")").css("webkitAnimationDuration", "20s");		
    }
  */
});