import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin=(app)=>{
    app.component('XtxImageView',ImageView)
    app.component('XtxSku',Sku)
}
