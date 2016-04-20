$(document).ready(function(){
    for (key in SNH48_DB){
        var add_html = "";
        add_html += "<div class=\"cd-timeline-block\">";
            if(SNH48_DB[key]["type"] == 1){
                add_html += "   <div class=\"cd-timeline-img cd-formal\">";
                add_html += "       <img src=\"image/icon-movie.svg\" alt=\"formal\">";
            }else{
                add_html += "   <div class=\"cd-timeline-img cd-informal\">";
                add_html += "       <img src=\"image/icon-tool.svg\" alt=\"informal\">";
            }
        add_html += "    </div>";
        add_html += "    <div class=\"cd-timeline-content\">";
        add_html += "       <h2>" + SNH48_DB[key]["title"] + "</h2>";
        add_html += "       <p>" + SNH48_DB[key]["content"] + "</p>";
            if(SNH48_DB[key]["link"]!=""){
                add_html += "       <a href=\"" + SNH48_DB[key]["link"] + "\" class=\"cd-read-more\" target=\"_blank\">相关资料</a>";
            }
        add_html += "       <span class=\"cd-date\">" + key + "</span>";
        add_html += "    </div>";
        add_html += "</div>";
        $("#cd-timeline").append(add_html);
    }
});