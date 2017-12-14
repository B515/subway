function dis_dis(x1, y1, x2, y2) {
  //直线距离
  var k = Math.PI / 180;
  var c =
    Math.cos(y1 * k) * Math.cos(y2 * k) * Math.cos((x1 - x2) * k) +
    Math.sin(y1 * k) * Math.sin(y2 * k);
  var d = 6371008 * Math.acos(c);
  return d;
}
function dis(x1, y1, x2, y2) {
  //曼哈顿距离
  var d1 = dis_dis(x1, y1, x2, y1);
  var d2 = dis_dis(x2, y1, x2, y2);
  return d1 + d2;
}

// document.write(dis(stopinfo.万寿路.x,stopinfo.万寿路.y,stopinfo.公主坟.x,stopinfo.公主坟.y)+"<br>");
// document.write("<br>");									//曼哈顿距离这么算就对了

/* var wsl="西钓鱼台";										//调用对象的对象可以这么写
document.write(stopinfo.公主坟.fllwstop.indexOf(wsl)); */

/* class node{												//创建节点这么写
	constructor(father){
		this.father=father;
	}
} */
/* stopinfo.公主坟.father="万寿路";							//用父节点连接这么写
document.write(stopinfo.公主坟.father); */

/* var wsl=stopinfo.公主坟.fllwstop[0];						//获取到下一站的信息可以这么写
document.write(stopinfo.公主坟["to"+wsl]); */

/* var n="公主坟"												//下一站名称要这么写
var i=0
document.write(stopinfo[stopinfo.公主坟.fllwstop[0]].nm)
document.write("<br>")
document.write(nxtstp(n,i).nm) */

/* var n="万寿路";												//测试一下写gx的时候需要初始化
var i=0;
stopinfo[n].g=0;
alert(parseInt(stopinfo[n].g)) 
nxtstp(n,i).g = stopinfo[n].g + nxtstp(n,i)["to"+n];
document.write(nxtstp(n,i).g);
// document.write(nxtstp(n,i)["to"+n]); */

/* var tst=[];													//测试一下push和pop方法
tst.push(1)
tst.push(2)
tst.push(3)
tst.push(4)
tst.push(5)
document.write(tst);
document.write(tst.pop());
document.write(tst.pop());
document.write(tst.pop());
document.write(tst.pop());
document.write(tst); */

/* var xx=[1,2,3,4,5];									//shift和unshift能用
document.write(xx.shift()); */

function minopen(open) {              //open表排序
  var minv = stopinfo[open[0]].f;
  var min = 0;
  var minn = stopinfo[open[0]].nm;
  // if(open==0) alert("xxx");
  for (var i = 0; i < open.length; i++) {
    if (stopinfo[open[i]].f < minv) {
      minv = stopinfo[open[i]].f;
      min = i;
      minn = stopinfo[open[i]].nm;
    } else continue;
  }
  open.unshift(minn);
  open.splice(min + 1, 1);
}

function nxtstp(n, i) {                       //下一站
  var next_stp_name=stopinfo[stopinfo[n].fllwstop[i]];
  // return stopinfo[stopinfo[n].fllwstop[i]];
  return next_stp_name;
}
/* var n="公主坟";											//居然真能这么写下一站的函数
var i=0;
document.write(nxtstp(n,i).nm); */

/* var n="公主坟";
var i=0;
var open=["万寿路","军事博物馆","公主坟"];
document.write(open.indexOf(nxtstp(n,i).nm)) */

/* document.write(dis(stopinfo.复兴门.x,stopinfo.复兴门.y,stopinfo.车公庄.x,stopinfo.车公庄.y)+"复兴门h");
document.write("<br>")
document.write(dis(stopinfo.阜成门.x,stopinfo.阜成门.y,stopinfo.车公庄.x,stopinfo.车公庄.y)+"阜成门h");
document.write("<br>") */

// var open = [];
// var close = [];

function findpath() {
  clearcan();
  var open = [];
  var close = [];
  // alert(document.getElementById("startstop"));
  var start = document.getElementById("startstop").value;
  var aim = document.getElementById("aimstop").value;
  if(stops.indexOf(start)==-1||stops.indexOf(aim)==-1){
    alert("站名错误");
  }
  open.push(start); //起始节点放入open表
  stopinfo[start].g = 0; //初始化起点的g(x)
  stopinfo[start].h = 0; //初始化起点的h(x)
  stopinfo[start].f = 0; //初始化起点的f(x)
  while (open.length != 0) {
    //open表非空时循环
    n = open.shift(); //当前节点放入open表
    if (n == aim) {
      var result = [];
      //输出

      //document.write(stopinfo[n].nm + "<br>");
      //document.getElementById("pathresult").innerHTML=stopinfo[n].nm + "<br>";
      var xxx = stopinfo[n].nm;
      xian(stopinfo[xxx].xx,stopinfo[xxx].yy,stopinfo[stopinfo[xxx].father].xx,stopinfo[stopinfo[xxx].father].yy);
      yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
      result.unshift("\n"+stopinfo[n].nm);
      while (xxx != start) {
        // xian(stopinfo[xxx].xx,stopinfo[xxx].yy,stopinfo[stopinfo[xxx].father].xx,stopinfo[stopinfo[xxx].father].yy);         //画出路径
        // yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
        xian(stopinfo[xxx].xx,stopinfo[xxx].yy,stopinfo[stopinfo[xxx].father].xx,stopinfo[stopinfo[xxx].father].yy);
        xxx = stopinfo[stopinfo[xxx].father].nm;
        result.unshift("\n"+xxx+"\n");
        yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
        // document.write(xxx + "<br>");
        // document.getElementById("pathresult").innerHTML=xxx + "<br>";
	  }
	  document.getElementById("show").value=result.join('');
	  
    //   document.write(result);
      return;
    } //找到目标节点时退出

    for (var i = 0; i < stopinfo[n].fllwstop.length; i++) {
      //循环m次（m为与此站相邻站点数）
      //下一站站名：nxtstp(n,i).nm
      if (open.indexOf(nxtstp(n, i).nm) > -1) {
        nxtstp(n, i).father = stopinfo[n].nm;
      }
      if (close.indexOf(nxtstp(n, i).nm) > -1) continue;
      else {
        nxtstp(n, i).father = stopinfo[n].nm;
        nxtstp(n, i).g = stopinfo[n].g + nxtstp(n, i)["to" + n]; //计算g(x)
        //计算f(x)↓
        nxtstp(n, i).f =
          nxtstp(n, i).g +
          dis(nxtstp(n, i).x, nxtstp(n, i).y, stopinfo[aim].x, stopinfo[aim].y);
        open.push(nxtstp(n, i).nm); //将x插入open表中
      }
    }
    close.push(n); //将节点n插入close表中
    minopen(open); //按f(n)将open表排序
  }
}

/* var stt=prompt("输入起点：","万寿路");						//弹出的输入框
var aimm=prompt("输入终点：","万寿路"); */

// findpath(document.getElementById("startstop").value,document.getElementById("aimstop").value);

