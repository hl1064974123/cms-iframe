		window.onload=function(){
			var src = "https://www.baidu.com";
			var text = "主页";
			var a = document.getElementsByClassName("hl-left");
			var height = a[0].offsetHeight-155;
			$("#iframe-ul-menu").append("<li  helei-id='"+src+"' onclick='liShowIframe(this)' class='li-active li-all' ><span >"+text+"</span></li>");
			$("#hl-body").append('<iframe scrolling-y="yes" class="myiframe"  style="background-color:#fff;padding:10px;" id="myiframe" helei-id='+src+' frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen src="'+src+'" width=100%  height='+height+'>')
		}
		var instance = OverlayScrollbars(document.getElementById("iframe-header"), { 
			className            : "os-theme-dark",
			resize               : "none",
			sizeAutoCapable      : true,
			clipAlways           : true,
			normalizeRTL         : true,
			paddingAbsolute      : false,
			autoUpdate           : null,
			autoUpdateInterval   : 33, 
			updateOnLoad         : ["img"],
			nativeScrollbarsOverlaid : {
				showNativeScrollbars   : false,
				initialize             : true 
			},
			overflowBehavior : {
				x : "hidden",
				y : "hidden"
			},
			scrollbars : {
				visibility       : "auto",
				autoHide         : "move",
				autoHideDelay    : 500,
				dragScrolling    : true,
				clickScrolling   : false,
				touchSupport     : false,
				snapHandle       : false
			},
			textarea : {
				dynWidth       : false,
				dynHeight      : false,
				inheritedAttrs : ["style", "class"]
			},
			callbacks : {
				onInitialized               : null,
				onInitializationWithdrawn   : null,
				onDestroyed                 : null,
				onScrollStart               : null,
				onScroll                    : null,
				onScrollStop                : null,
				onOverflowChanged           : null,
				onOverflowAmountChanged     : null,
				onDirectionChanged          : null,
				onContentSizeChanged        : null,
				onHostSizeChanged           : null,
				onUpdated                   : null
			}
		});
				
		function changeScroll(){
			var width = $("#iframe-ul-menu").width();
			instance.scroll({ x : "+="+width+"px"  });
		}
		
		function scrollToLeft(){
			instance.scroll({ x : "-=100px"  });
		}
		
		function scrollToRight(){
			instance.scroll({ x : "+=100px"  });
		}
		
		function openiframe(that){
			var src = that.getAttribute("data-src");
			var text = that.children[1].innerText;
			var a = document.getElementsByClassName("hl-left");
			var height = a[0].offsetHeight-155;
			var addLi = true,addFrame = true;
				var liAll = document.getElementsByClassName("li-all");
				for(var i = 0; i < liAll.length; i ++){
					if(liAll[i].getAttribute("helei-id")==src){
						addLi = false;
					}
				}
			if(addLi){
				var fActive = document.getElementsByClassName("myiframe");
				for(var i = 0; i < fActive.length; i ++){
					if(fActive[i].style.display!="none"){
						fActive[i].style.display = "none";
					}
				}
				var liActive = document.getElementsByClassName("li-active");
				for(var i = 0; i < liActive.length; i ++){
					liActive[i].className = "li-all";
					
				}
				$("#iframe-ul-menu").append("<li  helei-id='"+src+"' class='li-active li-all' onclick='liShowIframe(this)'><span>"+text+"</span><i onclick='closeIframe(this)' class='fa fa-times' aria-hidden='true'></i></li>");
				$("#hl-body").append('<iframe scrolling="yes" class="myiframe" style="background-color:#fff;padding:10px;" id="myiframe" helei-id='+src+' frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen src="'+src+'" width=100%  height='+height+'>')
			}else{
				var fActive = document.getElementsByClassName("myiframe");
				for(var i = 0; i < fActive.length; i ++){
					if(fActive[i].getAttribute("helei-id")==src){
						fActive[i].style.display = "block";
					}else{
						fActive[i].style.display = "none";
					}
				}
				var liAll = document.getElementsByClassName("li-all");
				for(var i = 0; i < liAll.length; i ++){
					if(liAll[i].getAttribute("helei-id")==src){
						liAll[i].className = 'li-active li-all';
					}else{
						liAll[i].className = "li-all";
					}
				}
			}
			
			if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { 
				 var side = document.getElementsByClassName("hl-sidebar")[0];
				 var left = document.getElementsByClassName("hl-left")[0];
				 side.style.position="absolute";
				 left.style.position="absolute";
				 side.style.animation = "hidediv 0.5s forwards";
				 $("#hide-all").hide();
				 //$(".hide-div").hide();
			}
			changeScroll();
		}
		
		var side = document.getElementsByClassName("hl-sidebar")[0];	
		$("#hide-all").click(function(){
			 var side = document.getElementsByClassName("hl-sidebar")[0];
			 var left = document.getElementsByClassName("hl-left")[0];
			 side.style.position="absolute";
			 left.style.position="absolute";
			 side.style.animation = "hidediv 0.5s forwards";
			 $("#hide-all").hide();
//			 //$(".hide-div").hide();
		})
		function sidebarController(){
			var side = document.getElementsByClassName("hl-sidebar")[0];
			var left = document.getElementsByClassName("hl-left")[0];
			if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
				if($(".hl-sidebar").offset().left==-200){
					side.style.position="fixed";
					side.style.zIndex="20";
					$("#hide-all").show();
					left.style.position="fixed";
//					//$(".hide-div").show()
					side.style.animation = "showdiv 0.5s forwards";
				}else{
					//$(".hide-div").hide()
					side.style.animation = "hidediv 0.5s forwards";
					left.style.animation = "showbody 0.5s forwards";
				}
			}else{
				if($(".hl-sidebar").offset().left==-200){
					//$(".hide-div").show()
					side.style.animation = "showdiv 0.5s forwards";
					left.style.animation = "hidebody 0.5s forwards";
				}else{
					//$(".hide-div").hide()
					side.style.animation = "hidediv 0.5s forwards";
					left.style.animation = "showbody 0.5s forwards";
				}
			}
		}
		function change(that){
			var ul =  that.parentNode.children[1];
<<<<<<< HEAD
			var num = ($($(that.parentNode.children[1])).children().length)*40;
			if($(that.parentNode.children[1]).css("height")=="0px"){
				$(that.parentNode.children[1]).css("height",num+"px");
			}else{
				$(that.parentNode.children[1]).css("height","0px");
			}
			/*if(ul.style.display=="none"){
=======
			if(ul.style.display=="none"){
>>>>>>> 6ea79edb80591cf55527319f803d62dc87bd52e2
				that.children[1].style.transform="rotate(-90deg)";
				that.children[1].style.transition="transform 0.1s";
				ul.style.display="block";
				// that.parentNode.children[1].style.height = "200px";
				$(that.parentNode.children[1]).css("height","200px")
			}else{
				that.children[1].style.transform="rotate(0deg)";
				that.parentNode.children[1].style.height = "0px";
				ul.style.display="none";
			}*/
		}
		function controllerUl(){
			console.log("hahah");
		}
		function liShowIframe(that){
			var src = that.parentNode.getAttribute("helei-id");
			var src = that.getAttribute("helei-id");
			var liAll = document.getElementsByClassName("li-all");
			for(var i = 0; i < liAll.length; i ++){
				if(liAll[i].getAttribute("helei-id")==src){
					liAll[i].className = 'li-active li-all';
				}else{
					liAll[i].className = "li-all";
				}
			}
			var src = that.parentNode.getAttribute("helei-id");
			var src = that.getAttribute("helei-id");
			var fActive = document.getElementsByClassName("myiframe");
			for(var i = 0; i < fActive.length; i ++){
				if(fActive[i].getAttribute("helei-id")==src){
					fActive[i].style.display = "block";
				}else{
					fActive[i].style.display = "none";
				}
			}
			 
		}
		
		function closeIframe(that){
			var src = that.parentNode.getAttribute("helei-id");
			var liAll = document.getElementsByClassName("li-all");
			for(var i = 0; i < liAll.length; i ++){
				if(liAll[i].getAttribute("helei-id")==src){
					var parent = liAll[i].parentNode;
					if (liAll[i] != null){
						if(i>0){
							parent.removeChild(liAll[i]);
							if(that.parentNode.className.search("li-active")!=-1){
								var child = parent.childNodes[i];
								child.className = 'li-active li-all';
							}
						}else if(i==0&&liAll.length!=1){
							parent.removeChild(liAll[i]);
							if(that.parentNode.className.search("li-active")!=-1){
								var child = parent.childNodes[i+1];
								child.className = 'li-active li-all';
							}
						}
					}
				}
			}
			var src = that.parentNode.getAttribute("helei-id");
			var fActive = document.getElementsByClassName("myiframe");
			for(var i = 0; i < fActive.length; i ++){
				if(fActive[i].getAttribute("helei-id")==src){
					var parent = fActive[i].parentNode;
					if (fActive[i] != null){
						if(i>0){
							parent.removeChild(fActive[i]);
							if(that.parentNode.className.search("li-active")!=-1){
								var child = parent.childNodes[i];
								child.style.display = "block";
							}
						}else if(i==0&&fActive.length!=1){
							parent.removeChild(fActive[i]);
							if(that.parentNode.className.search("li-active")!=-1){
								var child = parent.childNodes[i+1];
								child.style.display = "block";
							}
						}else if(i==0&&fActive.length==1){
							window.location.herf = window.location.href = "http://127.0.0.1:8020/test/index.html?__hbt=1593564776789";
						}
					}
				}
			}
		}