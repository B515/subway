
var open2=[];
var close2=[];
function findpart1(l){
    clearcan();
    var open = [];
    var close = [];
    var start = document.getElementById("startstop").value;
    var aim = document.getElementById("aimstop").value;
    open.push(start); //起始节点放入open表
    stopinfo[start].g = 0; //初始化起点的g(x)
    stopinfo[start].h = 0; //初始化起点的h(x)
    stopinfo[start].f = 0; //初始化起点的f(x)
    while (open.length != 0) {
      //open表非空时循环
      n = open.shift(); //当前节点放入open表
      if (n == aim) {
        var result = [];
        var xxx = stopinfo[n].nm;
        xian(stopinfo[xxx].xx,stopinfo[xxx].yy,stopinfo[stopinfo[xxx].father].xx,stopinfo[stopinfo[xxx].father].yy);
        yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
        result.unshift("\n"+stopinfo[n].nm);
        while (xxx != start) {
          xian(stopinfo[xxx].xx,stopinfo[xxx].yy,stopinfo[stopinfo[xxx].father].xx,stopinfo[stopinfo[xxx].father].yy);
          xxx = stopinfo[stopinfo[xxx].father].nm;
          result.unshift("\n"+xxx+"\n");
          yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
        }
        document.getElementById("show").value=result.join('');
        return;
      } //找到目标节点时退出

      for (var i = 0; i < stopinfo[n].fllwstop.length; i++) {
        //循环m次（m为与此站相邻站点数）
        //下一站站名：nxtstp(n,i).nm
        if(nxtstp(n,i).ln.indexOf(l)==-1)continue;
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



//line2 and line 10
function findpart2(l,jugg){
    clearcan();
    var open = [];
    var close = [];
    var start = document.getElementById("startstop").value;
    var aim = document.getElementById("aimstop").value;
    open.push(start); //起始节点放入open表
    stopinfo[start].g = 0; //初始化起点的g(x)
    stopinfo[start].h = 0; //初始化起点的h(x)
    stopinfo[start].f = 0; //初始化起点的f(x)


    while (open.length != 0) {
      //open表非空时循环
      n = open.shift(); //当前节点放入open表


      //print
      if(jugg==0){
        if (n == aim) {
            return stopinfo[n].f; 
      }
    }
      else {
      if (n == aim) {
        var result = [];
        var xxx = stopinfo[n].nm;
        xian(stopinfo[xxx].xx,stopinfo[xxx].yy,stopinfo[stopinfo[xxx].father].xx,stopinfo[stopinfo[xxx].father].yy);
        yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
        result.unshift("\n"+stopinfo[n].nm);
        while (xxx != start) {
          xian(stopinfo[xxx].xx,stopinfo[xxx].yy,stopinfo[stopinfo[xxx].father].xx,stopinfo[stopinfo[xxx].father].yy);
          xxx = stopinfo[stopinfo[xxx].father].nm;
          result.unshift("\n"+xxx+"\n");
          yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
        }
        document.getElementById("show").value=result.join('');
        return;
      } //找到目标节点时退出
    }



      for (var i = 0; i < stopinfo[n].fllwstop.length; i++) {
        //循环m次（m为与此站相邻站点数）
        //下一站站名：nxtstp(n,i).nm
        if(nxtstp(n,i).ln.indexOf(l)==-1&&nxtstp(n,i).ln.indexOf(2)==-1&&nxtstp(n,i).ln.indexOf(10)==-1)continue;
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


function printpart2(){
    var min_line;
    if(findpart2(1,0)<findpart2(5,0)) min_line=1;
    else min_line=5;

    if(findpart2(6,0)<findpart2(min_line,0)) min_line=6;

    findpart2(min_line,1);
}


function findpart3(l1,l2){
    clearcan();
    var open = [];
    var close = [];
    var start = document.getElementById("startstop").value;
    var aim = document.getElementById("aimstop").value;
    open.push(start); //起始节点放入open表
    stopinfo[start].g = 0; //初始化起点的g(x)
    stopinfo[start].h = 0; //初始化起点的h(x)
    stopinfo[start].f = 0; //初始化起点的f(x)
    while (open.length != 0) {
      //open表非空时循环
      n = open.shift(); //当前节点放入open表
      if (n == aim) {
        var result = [];
        var xxx = stopinfo[n].nm;
        xian(stopinfo[xxx].xx,stopinfo[xxx].yy,stopinfo[stopinfo[xxx].father].xx,stopinfo[stopinfo[xxx].father].yy);
        yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
        result.unshift("\n"+stopinfo[n].nm);
        while (xxx != start) {
          xian(stopinfo[xxx].xx,stopinfo[xxx].yy,stopinfo[stopinfo[xxx].father].xx,stopinfo[stopinfo[xxx].father].yy);
          xxx = stopinfo[stopinfo[xxx].father].nm;
          result.unshift("\n"+xxx+"\n");
          yuan(stopinfo[xxx].xx,stopinfo[xxx].yy);
        }
        document.getElementById("show").value=result.join('');
        return;
      } //找到目标节点时退出

      for (var i = 0; i < stopinfo[n].fllwstop.length; i++) {
        //循环m次（m为与此站相邻站点数）
        //下一站站名：nxtstp(n,i).nm
        // if(nxtstp(n,i).ln.indexOf(l1)==-1)continue;
        // if (nxtstp(n,i).ln[0]!=l1)continue;
        if( (nxtstp(n,i).ln.indexOf(l1)==-1)&&(nxtstp(n,i).ln.indexOf(l2)==-1) )continue;
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


function findpath2(){
    clearcan();
    var open = [];
    var close = [];
    var start2 = document.getElementById("startstop").value;
    var aim2 = document.getElementById("aimstop").value;
    if(stops.indexOf(start2)==-1||stops.indexOf(aim2)==-1){
        alert("站名错误");
    }
    var a = stopinfo[start2].ln;
    var b = stopinfo[aim2].ln;
    var c=0;
    for(var i=0;i<a.length;i++){
        if(b.indexOf(a[i])>-1){
            c=a[i];
            break;
        }
    }
    //on the same line
    if(c!=0){
        findpart1(c);
    }
    //on line 6 and line 1 only
    if( (a[0]==6&&b[0]==1&&stopinfo[start2].trs==0&&stopinfo[aim2].trs==0)||(a[0]==1&&b[0]==6&&stopinfo[start2].trs==0&&stopinfo[aim2].trs==0) ){
        findpath();
    }
    //on line 2 and line 10 only
    if( (a[0]==2&&b[0]==10&&stopinfo[start2].trs==0&&stopinfo[aim2].trs==0)||(a[0]==10&&b[0]==2&&stopinfo[start2].trs==0&&stopinfo[aim2].trs==0) ){
        printpart2();
    }
    //other condition
    else {
        findpart3(a[0],b[0]);
    }


}