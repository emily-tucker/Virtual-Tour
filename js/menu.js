function dispMenu(items) {
    var i;
    var inner = "";
    var mi, a, icon;
    for (i in items) {
        inner += "<li>";
        mi = items[i];
        a = '';
        icon = "<i class='"+mi.icon+"'></i>";

        if(mi.href === "#") { //Place holder links break currently
            mi.href = '';
        }

        if (mi.target === "locations") {
            a = "<a href='"+mi.href+"'>" + icon + "&nbsp;"+mi.text+"</a>";
        } else if (mi.target === "external") {
            a = "<a href='"+mi.href+"' target='_blank'>" + icon + "&nbsp;"+mi.text+"</a>";
        } else if (mi.target === "ci") {
            console.log("Not supported - Menu to carousel item");
        } else {
            a = "<a href=''>"+ icon + "&nbsp;"+mi.text+"</a>";
        }

        inner += a;

        if (mi.items.length > 0) {
            inner += "<ul>" + dispMenu(mi.items) + "</ul>";
        }
        inner += "</li>";
    }
    return inner;
}

function dispMainMenu() {
    var inner = "";
    inner += "<li><a href='"+menu.target+"'><i class='"+menu.icon+"'></i>&nbsp; "+menu.text+"</a>"
    inner += "<ul>" + dispMenu(menu.items) + "</ul>";
    inner += "</li>";
    $("#drilldown-1").html(inner);
}

