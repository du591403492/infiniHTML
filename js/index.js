
 		window.onload=init;
        var interval;
        var current=0;

        function init(){
        	changeImg();
            var butNow=document.getElementById("btn"+current);
            butNow.style.color="red";
            interval=window.setInterval("changeImg()",1500);
        }

        function changeImg(){
            current++;
            if(current>4){
                current=1;
            }
            var obj=document.getElementById("banner");
            obj.style.backgroundImage="url(img/head/banner"+current+".jpg)";
            for(var i=1;i<=4;i++){
                var butt=document.getElementById("btn"+i);
                butt.style.color="gray";
            }
            var butNow=document.getElementById("btn"+current);
            butNow.style.color="red";

        }

        function stopImg(){
            window.clearInterval(interval);
            var obj=document.getElementById("banner");
            obj.style.cursor="pointer";
        }

        function keepImg(){
            interval=window.setInterval("changeImg()",1500);
        }

        function overNumStopImg(e){
            var obj=document.getElementById("banner");
            obj.style.backgroundImage="url(img/head/banner"+e.innerHTML+".jpg)";
            for(var i=1;i<=4;i++){
                var butt=document.getElementById("btn"+i);
                butt.style.color="gray";
            }
            e.style.color="red";
            e.style.cursor="pointer";            
            window.clearInterval(interval);
        }

        function outNumKeepImg(e){
            var obj=document.getElementById("banner");
            interval=window.setInterval("changeImg()",1500);
            current=parseInt(e.innerHTML);
            obj.style.backgroundImage="url(img/head/banner"+current+".jpg)";            
        }
        
    var imgBox = document.getElementsByClassName("con");
    for(var i = 0;i<imgBox.length;i++){
        imgBox[i].onmouseenter = function(){
        	alert("hello");
            this.getElementsByClassName("work")[0].style.display = "block";
        }
        imgBox[i].onmouseleave = function(){
            this.getElementsByClassName("work")[0].style.display = "none";
        }
    }