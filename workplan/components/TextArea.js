define(['vue'], function (Vue) {
    return Vue.extend({
        name: 'TextArea',
        props: {
            field:{
                type: Object,
                required: true
            }
        },
        template:`
            <div class="mui-content">
                <div class="mui-content-padded">
                    <p>{{field.title}}</p>
                </div>
                <div class="mui-input-row mui-border">
                        <textarea :rows="field.rows" :placeholder="field.placeholder" v-model="field.value"></textarea>
                </div>
            </div>
         `
    })
})