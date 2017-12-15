var result_1;
function findpath3(){
    find3_1();
    find3_2();
    redyuan(stopinfo[$("mid_stop").value].xx,stopinfo[$("mid_stop").value].yy);
}

function find3_1(){
    clearcan();
    var open = [];
    var close = [];
    // alert(document.getElementById("startstop"));
    var start = document.getElementById("startstop").value;
    var aim = document.getElementById("mid_stop").value;
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
          result.unshift("\n"+xxx+"\n↓");
          yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
          // document.write(xxx + "<br>");
          // document.getElementById("pathresult").innerHTML=xxx + "<br>";
        }
        result_1=result;
        document.getElementById("show").value=result.join('');
        
      //   document.write(result);
        return;
      } //找到目标节点时退出
  
      for (var i = 0; i < stopinfo[n].fllwstop.length; i++) {
        //循环m次（m为与此站相邻站点数）
        //下一站站名：nxtstp(n,i).nm
        if (open.indexOf(nxtstp(n, i).nm) > -1) {
          nxtstp(n, i).father = stopinfo[n].nm;
          continue;
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

function find3_2(){
    var open = [];
    var close = [];
    // alert(document.getElementById("startstop"));
    var start = document.getElementById("mid_stop").value;
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
          result.unshift("\n"+xxx+"\n↓");
          yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
          // document.write(xxx + "<br>");
          // document.getElementById("pathresult").innerHTML=xxx + "<br>";
        }
        // result=reslut+result_1;
        // result_1.concat(result);
        document.getElementById("show").value=result_1.join('');
        
      //   document.write(result);
        return;
      } //找到目标节点时退出
  
      for (var i = 0; i < stopinfo[n].fllwstop.length; i++) {
        //循环m次（m为与此站相邻站点数）
        //下一站站名：nxtstp(n,i).nm
        if (open.indexOf(nxtstp(n, i).nm) > -1) {
          nxtstp(n, i).father = stopinfo[n].nm;
          continue;
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