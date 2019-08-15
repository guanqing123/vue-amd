define(['vue','picker','poppicker'], function (Vue) {
    return Vue.extend({
        name: 'PrimaryPicker',
        props: {
            id: String,
            title: String,
            record: {
                type: Object
            },
            datasource: {
                type: Array
            }
        },
        template: `
           <div class="mui-content">
				<h5 class="mui-content-padded">{{title}}</h5>
				<div class="mui-border">
				    <button :id="id" class="mui-btn mui-btn-block" type='button' :val="record.value" @click="show">{{record.text}}</button>
				</div>
		   </div>
        `,
        watch: {
            datasource: {
                handler(){
                    this.dataPicker && this.dataPicker.setData(this.datasource);
                }
            }
        },
        methods: {
            init: function () {
                let self = this;
                mui.init();
                mui.ready(function () {
                    var dataPicker = new mui.PopPicker();
                    dataPicker.setData(self.datasource);
                    self.dataPicker = dataPicker;
                })
            },
            show: function () {
                let self = this;
                this.dataPicker.show(function (item) {
                    self.$emit('itemclick', item);
                })
            }
        },
        mounted(){
            this.init()
        }
    })
})