   var innerList = document.getElementById("inner");
   var btnList = document.getElementsByTagName("button");
   var perWidth = inner.children[0].offsetWidth;
   var prevBtn = document.getElementById("prevBtn");
   var nextBtn = document.getElementById("nextBtn");
   var timer = 0;
   var timer1 = 0;
   var index =0;
   var runFlag = true;

   for(var i = 0; i < btnList.length; i++) {
      btnList[i].index = i;
      btnList[i].onclick = function() {
         index = this.index;
         
         tab();
      }
   }
   function tab() {
      var start = inner.offsetLeft;
      var end = - perWidth * index;
      var change = end - start;
      var t = 0;
      var maxT = 30;

      clearInterval(timer1);
      timer1 = setInterval(function() {
         t++;
         if(t >= maxT) {
            clearInterval(timer1);

            runFlag = true;
         }
         inner.style.left = change/maxT * t + start + "px";
         if(index == btnList.length && t >= maxT) {
            inner.style.left = 0;
         }
      },30)


      for(var j = 0; j < 7; j++) {
         btnList[j].className = "";
      }
      if(index >= 7) {
         btnList[0].className = "active";
      }else {
         btnList[index].className = "active";
      }
      
   }
    function xunhuan(){
       index++;
   
         if(index>btnList.length){
         index=1;
         }
		
       tab();
   }

   var timer =setInterval(xunhuan,5000);

   inner.onmouseover =function(){
   clearInterval(timer);
   }
   inner.onmouseout =function(){
    timer = setInterval(xunhuan,5000);
   }

   function next() {
      index++;
      if(index > btnList.length) {
         index = 1;
      }
      tab();
   }
   function prev() {
      index--;
      if(index < 0 ) {
         index = btnList.length - 1;
         inner.style.left = - btnList.length * perWidth + "px";
         console.log(index);
      }
      tab();
   }
	  
   nextBtn.onclick = function() {
      clearInterval(timer);
      if(runFlag) {
         next();
      }
      runFlag = false;
      
   }

   prevBtn.onclick = function() {
      clearInterval(timer);
      if(runFlag) {
         prev();
      }
      runFlag = false;
      
   }