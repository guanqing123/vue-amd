require([
    'vue',
    'components/TextArea',
    'components/PrimaryPicker',
    'service'
], function (Vue, TextArea, PrimaryPicker, service) {
    new Vue({
        el: '#monthPlanDetail',
        components: {
            'text-area': TextArea,
            'primary-picker': PrimaryPicker
        },
        template: `
            <div>
               <text-area v-for="field in fields" :field="field" :key="field.field"></text-area>
               <primary-picker id="zgldfield" title="直管领导" :record="zgld.record" :datasource="zgld.datasource" @itemclick="setZgld"></primary-picker>
            </div>
        `,
        data:{
            fields: [],
            zgld:{
                record:{},
                datasource:[]
            }
        },
        methods: {
          initData(){
              let self = this;
              service.test();
              service.monthPlanDetailInit('99', function (res) {
                  self.fields = res.data.fields;
                  self.zgld.datasource = res.data.zgld;
              });
          },
          setZgld(item){
              this.zgld.record = item[0]
          }
        },
        created(){

        },
        mounted(){
            this.initData();
        }
    })
})