function decide_path(){
    var choosepath = document.getElementById("select_path").value;
    switch(choosepath){
        case "short_dis":
        findpath();
        break;
        case "least_time":
        findpath2();
        break;
        case "r1":
        alert("敬请期待！");
        window.location.reload(true);
        break;
        case "r2":
        alert("敬请期待！");
        window.location.reload(true);
        break;
    }
}