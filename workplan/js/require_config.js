define(function () {
    require.config({
        baseUrl: "../source/js",
        paths: {
            "vue": "lib/vue",
            "zepto": "lib/zepto1.2",
            "axios": "lib/axios",
            "mui": "lib/mui",
            "picker": "plugin/mui.picker",
            "poppicker": "plugin/mui.poppicker",
            "components": "../../workplan/components",
            "service" : "../../workplan/js/service"
        },
        shim: {
            "picker": {
                deps: ["mui"]
            },
            "poppicker": {
                deps: ["mui"]
            }
        }
    });
    require(["zepto", "axios"], function () {
        require(["../../workplan/js/" + $("title").text()])
    })
})