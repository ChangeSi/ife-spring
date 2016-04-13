/**
 * Created by tianyi on 2016/4/8.
 */
window.onload = function () {
    var number=document.getElementById("number");
    var leftin=document.getElementById("leftin");
    var rightin=document.getElementById("rightin");
    var leftout=document.getElementById("leftout");
    var rightout=document.getElementById("rightout");
    var ullist=document.getElementById("list");
    /*光标选定 清空输入框*/
    function clear(){
        number.value="";
    }
    /*左进函数*/
    function inleft(){
        var linode=document.createElement("li");
        linode.innerText=number.value;
		linode.onclick=function(){
            ullist.removeChild(this);
        }
        if(number.value!=""){
            ullist.insertBefore(linode,ullist.childNodes[0]);
        }else{
            alert("input a number");
        }

    }
    /*右进函数*/
    function inright(){
        var linode=document.createElement("li");
        linode.innerText=number.value;
		linode.onclick=function(){
            ullist.removeChild(this);
        }
        if(number.value!=""){
             ullist.insertBefore(linode,ullist.childNodes[ullist.length]);
        }else{
            alert("input a number");
        }

    }
    /*左出函数*/
    function outleft(){
        if(ullist.childNodes[0]!=null){
            ullist.removeChild(ullist.childNodes[0]);
        }else{
            alert("无节点可出");
        }
    }
    /*右出函数*/
    function outright(){
        if(ullist.lastChild!=null){
            ullist.removeChild(ullist.lastChild);
        }else{
            alert("无节点可出");
        }
    }

    number.addEventListener("focus",clear,false);
    leftin.addEventListener("click",inleft,false);
    rightin.addEventListener("click",inright,false);
    leftout.addEventListener("click",outleft,false);
    rightout.addEventListener("click",outright,false);

}