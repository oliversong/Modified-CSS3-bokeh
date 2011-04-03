//Original source code by Nikhil Verma, "Beautiful Bokeh"
//Includes fading individual bokeh and arranging them into different shapes

	
        $(document).ready(function(){
            $('.bokeh').each(function(){
                var initOpacity = $(this).css('opacity');
                $(this).hover(
                    function(){
                        $(this).animate(
                            {opacity:1.0},
                            {duration:300}
                        );
                    },
                    function(){
                        $(this).animate(
                            {opacity:initOpacity},
                            {duration:300}
                        );
                    }
                );
            });
        });
     
        $(".bokeh").click(function(event){
            event.preventDefault();
            linkLocation = this.href;
            $("body").fadeOut(500, redirectPage);
        });
     
        function redirectPage() {
            window.location = "about.html";
        }

/*		<div id="wrapper">
			<!-- take inputs from html-->
			<label>Minimum Size(px) <input id="min_size" type="text" value="5" maxlength="3"/></label>

			<label>Maximum Size(px) <input id="max_size" type="text" value="8" maxlength="3"/></label>

			<label>Bokeh Count <input id="bokeh_count" type="text" value="800" maxlength="3"/></label>

			<button id="generate">Create</button>

		</div>
*/

//		<!-- begin awesomeness -->

			var min,max,sum,bokeh_count,window_width,window_height,colorful,randomnumber;

			function get_bokeh(){

				var radius = Math.ceil(Math.random()*max) + min,

					radius2 = radius/2,

					size = Math.ceil(Math.random()*max) + min,

					intensity = ((radius+size)/(sum*2)),

					randomnumber = Math.random()*6*3.1415926535,

					//pick one!
					
					/*
					x = Math.ceil(window_height/3*Math.cos(randomnumber)) + 200, //circle

					y = Math.ceil(window_height/3*Math.sin(randomnumber))+300, //circle

					x = window_width/6*Math.sin(randomnumber)*(1+2*Math.cos(randomnumber))+600, //cardioid
					y = (window_height/3*Math.cos(randomnumber)*(1+2*Math.cos(randomnumber)))+100, //cardioid
							   
					y = randomnumber*window_width/15*polary(1+Math.sin(randomnumber),Math.sin(randomnumber)), //archimedes spiral 

					x = Math.ceil(randomnumber*window_width/15), //sin

					y = Math.ceil(x+window_height/2*Math.sin(randomnumber))/3+100, //tilted sin
					
					y = Math.ceil(x*window_height/800*Math.sin(randomnumber))/2+400, //exponental sin

					y = Math.ceil(Math.random()*window_height),//normal
					x = Math.ceil(Math.random()*window_width),//normal
					
					x = acos(t)(1+cos(t)) 
					y = asin(t)(1+cos(t))
					*/
					color = "255,255,255";

				return "left:"+x+"px; top:"+y+"px;  width:"+size+"px; height:"+size+"px; background:rgba("+color+","+intensity+"); opacity:"+intensity/3+";  -moz-border-radius:200px; -webkit-border-radius:200px; position:absolute; z-index:2;";

			}

			

			$("#generate").click(function(){ 

				$("#bokeh_container").remove();

				min = parseInt($("#min_size").val());

				max = parseInt($("#max_size").val());

				bokeh_count = $("#bokeh_count").val();

				sum = min+max;

				window_width = $(document).width(); 

				window_height = $(window).height();

				colorful = $("#colorful").attr("checked");



				var container = $("<div />",{"id":"bokeh_container","style":"width:100%; height:100%; position:absolute; left:0px; top:0px; z-index:1; display:none; "});

				for( var i=0;i<bokeh_count;i++){

					$("<div />",{"class":"bokeh","style":get_bokeh()}).appendTo(container);

				}

				container.appendTo("body").show();

			});



			$("#generate").click();

			$("#colors li").click(function(){ $("body").css("background",$(this).attr("color")); });