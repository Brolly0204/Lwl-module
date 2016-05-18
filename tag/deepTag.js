 /**
 * @authors     Li Wenli (https://github.com/liwenli111)
 * @email       lwl531466359@163.com
 * @contributer
 * @company     Deep (www.deeping.cn) 
 * @date        2016-05
 * @version     0.1
 * @commit      
 * Released under the MIT license.
 */
 (function(){
 function ele(eles){
  return document.getElementById(eles);
 }
 var tags=ele("tags");
 var add=ele("add");
 var text=ele("text");
 var adder=ele("adder");

 var del=ele("del");
 add.onclick=adds;
 tags.onclick=function(){
  text.focus();
  text.flag=true;
 };

 text.onkeydown=function(e){
  var e=e||window.event;
  if(e && e.keyCode==13){ // enter 键
   adds();
  }
 };
 text.onblur=function(){if(text.flag==true&&text.value !=""){adds()}};


 var ins=0;
 function adds(){
  ins++;
  console.log(text.flag==true);
  if(text.value !=""){
   var child=document.createElement("span");
   var chil=document.createElement("span");
   var del=document.createElement("div");
   del.id="del"+ins;
   child.id="tag"+ins;
   chil.id="chil"+ins;
   child.className="tag";
   del.className="del";
   del.innerText="×";
   chil.className="chil";
   chil.innerText=text.value;
   text.value="";
   tags.insertBefore(child,adder);
   child.appendChild(chil);
   child.appendChild(del);
   var tag=ele("tag"+ins);
   tag.onclick=function(){
    tags.removeChild(child);
   }
  }
 }
 })();

