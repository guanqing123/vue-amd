define(function () {
    require.config({
        baseUrl: "../source/js",
        paths: {
            "vue": "lib/vue",
            "zepto": "lib/zepto1.2",
            "axios": "lib/axios",
            "mui": "lib/mui",
            "components": "../../workplan/components"
        }
    });
    require(["zepto"], function () {
        require(["../../workplan/js/" + $("title").text()])
    })
})