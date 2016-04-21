$(document).ready(function(){
    for (key in SNH48_DB){
        var add_html = "";
        add_html += "<div class=\"cd-timeline-block\">";
            //图标
            if(SNH48_DB[key]["type"] == 1){
                add_html += "   <div class=\"cd-timeline-img cd-formal\">";
                add_html += "       <img src=\"image/icon-movie.svg\" alt=\"formal\">";
            }else if(SNH48_DB[key]["type"] == 2){
                add_html += "   <div class=\"cd-timeline-img cd-informal\">";
                add_html += "       <img src=\"image/icon-tool.svg\" alt=\"informal\">";
            }else if(SNH48_DB[key]["type"] == 0){
            add_html += "   <div class=\"cd-timeline-img cd-author\">";
            add_html += "       <img src=\"image/icon-location.svg\" alt=\"author\">";
        }
        add_html += "    </div>";
        add_html += "    <div class=\"cd-timeline-content\">";
        add_html += "       <h2>" + SNH48_DB[key]["title"] + "</h2>";
            //前置图片
            if(SNH48_DB[key]["image"]!=null && SNH48_DB[key]["image"]!="" && SNH48_DB[key]["image-position"]==null){
                add_html += "       <img src=\"" + SNH48_DB[key]["image"] + "\" class=\"cd-content-image\" alt=\"image\" />";
            }
        //正文
        add_html += "       <p>" + SNH48_DB[key]["content"] + "</p>";
            //后置图片
            if(SNH48_DB[key]["image"]!=null && SNH48_DB[key]["image"]!="" && SNH48_DB[key]["image-position"]=="after"){
                add_html += "       <img src=\"" + SNH48_DB[key]["image"] + "\" class=\"cd-content-image\" alt=\"image\" />";
            }
            //外链
            if(SNH48_DB[key]["link"]!=null && SNH48_DB[key]["link"]!=""){
                add_html += "       <a href=\"" + SNH48_DB[key]["link"] + "\" class=\"cd-read-more\" target=\"_blank\">相关资料</a>";
            }
        add_html += "       <span class=\"cd-date\">" + key + "</span>";
        add_html += "    </div>";
        add_html += "</div>";
        $("#cd-timeline").append(add_html);
    }
});