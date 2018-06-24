var maritza = {
    utilities: {},
    layout: {},
    page: {
        handlers:{},
        startUp:null
    },
    services:{},
    ui:{}
};

maritza.moduleOptions = {
    APPNAME: "MaritzaApp",
    extraModuleDependencies:[],
    runners:[],
    page: maritza.page
}
maritza.layout.startUp = function() {
    console.debug("maritza.page.startUp");

    //null check
    if (maritza.page.startUp) {
        console.debug("maritza.page.startUp");
        maritza.page.startUp();
    }
};
maritza.APPNAME = "MaritzaAPP";//legacy
$(document).ready(maritza.layout.startUp);