;(function(win) {
	var params;
    win.popup = function(opt) {
    	if(opt.status && opt.title && opt.content){
    		proto.func(opt.status);
    		$(".title").text(opt.title);
			$(".desc").text(opt.content);
    	}
	    params = opt;
    },
    proto = popup.prototype;

    proto.touchHandle = function(_this){
	    $(_this).attr("data-move","");
	    var startX=event.targetTouches[0].pageX;
	    var startY=event.targetTouches[0].pageY;
	    $(_this)[0].addEventListener("touchmove",function(event){
	        var endX=event.targetTouches[0].pageX;
	        var endY=event.targetTouches[0].pageY;
	        var dx=endX-startX,dy=endY-startY;
	        var boxWidth=$(_this)[0].offsetWidth;
	        var boxHeight=$(_this)[0].offsetHeight;
	        if(Math.abs(dy) > 0.01*boxHeight){
	            if(Math.abs(dx) < Math.abs(dy)){
	                $(_this).attr("data-move","y");
	            }
	        }
	    })
	};

	proto.func = function(status){
		$("body").append('<div class="popup" style="margin:0;padding:0;z-index: 5;width: 100%;height: 100%;padding-top: 50%;;background: rgba(0,0,0,0.5);position: fixed;left: 0;top: 0;"><div class="pop-box" style="background: rgba(255,255,255,1);text-align: center;border-radius: 10px;width: 70%;margin: auto;"><h3 class="title" style="margin:0;padding:0;font-size: 4vw;padding-top: 8%;padding-bottom: 0.5%;">提示</h3><p class="desc" style="margin:0;padding:0;font-size: 3.5vw;padding-top:1%;padding-bottom: 5%;">这是一个模态弹窗</p><ul class="btn-box" style="list-style:none;margin:0;padding:0;font-size: 4vw;border-top: 0.5px solid rgba(0,0,0,.5);overflow: hidden;"><li class="cancel" style="padding: 4% 0;width: 49.5%;color: #217fe3;border-right: 0.5px solid rgba(0,0,0,.5);float: left;">取消</li><li class="confirm" style="padding: 4% 0;width: 49.5%;color: #217fe3;float: left;">确定</li></ul></div></div>');

		if(status == 1){
			$(".cancel").remove();
			$(".confirm")[0].style.width = "100%";
		}else{
			$(".cancel")[0].addEventListener("touchstart",function(event){
		        var _this=this;
		        proto.touchHandle(_this);
		        $(_this).unbind("touchend").bind("touchend",function(){
		            if($(_this).attr("data-move") != "y"){
						$(".popup").remove();
		            }
		        })
		   })
		}

	    $(".confirm")[0].addEventListener("touchstart",function(event){
	        var _this=this;
	        proto.touchHandle(_this);
	        $(_this).unbind("touchend").bind("touchend",function(){
	            if($(_this).attr("data-move") != "y"){
	            	$(".popup").remove();
	            	if(params.confirm){
						params.confirm(true);
	            	}
	            }
	        })
	    })
	}

    if(win.popup) return false;
})(window);
