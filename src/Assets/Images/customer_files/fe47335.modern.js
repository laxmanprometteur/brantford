(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{1741:function(e,t,n){var content=n(2938);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("e0f80242",content,!0,{sourceMap:!1})},2937:function(e,t,n){"use strict";var r=n(1741),l=n.n(r);n.d(t,"default",(function(){return l.a}))},2938:function(e,t,n){var r=n(36)(!1);r.push([e.i,'.container_RWxEI{background-color:#fff;padding:1.5rem;height:33.75rem}.container_RWxEI.styleContainer_gjdAV{height:33.75rem}@media (max-width: 1023.98px){.container_RWxEI{height:400px;padding:1.25rem}}.container_RWxEI .styles_jKCvE{position:absolute;left:0;bottom:.75rem;width:100%;z-index:10;display:flex;justify-content:center}.container_RWxEI .styles_jKCvE .scrollableStyles_Tzacw{max-width:300px}@media (max-width: 1279.98px){.container_RWxEI .styles_jKCvE .scrollableStyles_Tzacw{max-width:250px}}.container_RWxEI .styles_jKCvE .scrollableStyles_Tzacw .item_rsXbZ{display:block;box-shadow:inset 0 0 1px 1px #EBEDF5;border-radius:4px;padding:.5rem;position:relative;background-color:#fff}@media (max-width: 1023.98px){.container_RWxEI .styles_jKCvE .scrollableStyles_Tzacw .item_rsXbZ{padding:.25rem}}.container_RWxEI .styles_jKCvE .scrollableStyles_Tzacw .item_rsXbZ:not(:last-child){margin-right:.75rem}.container_RWxEI .styles_jKCvE .scrollableStyles_Tzacw .item_rsXbZ.active_MAlvJ{background-color:#EBEDF5}.container_RWxEI .styles_jKCvE .scrollableStyles_Tzacw .item_rsXbZ.active_MAlvJ::before{content:"";position:absolute;display:block;height:6px;width:6px;transform:rotateZ(45deg);border-top:3px solid #EBEDF5;border-right:3px solid transparent;border-bottom:3px solid transparent;border-left:3px solid #EBEDF5;top:-4px;left:50%;margin-left:-2px}.container_RWxEI .exclusive_0IcDV{position:absolute;top:1.5rem;right:1.5rem;z-index:15}@media (max-width: 1023.98px){.container_RWxEI .exclusive_0IcDV{display:none}}.container_RWxEI .previewContainer_R6DGf{position:absolute;top:0;left:0;right:0;bottom:0}.container_RWxEI .previewContainer_R6DGf .preview_NfJLC{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}@media (max-width: 1023.98px){.container_RWxEI .previewContainer_R6DGf .preview_NfJLC{padding-bottom:6rem}}.container_RWxEI .previewContainer_R6DGf .preview_NfJLC>img{transition:all 0.2s ease-in-out;pointer-events:none}.container_RWxEI .brandColor_zxvF5{position:absolute;bottom:1.5rem;left:1.5rem;z-index:11}@media (max-width: 1023.98px){.container_RWxEI .brandColor_zxvF5{display:none}}\n',""]),r.locals={container:"container_RWxEI",styleContainer:"styleContainer_gjdAV",styles:"styles_jKCvE",scrollableStyles:"scrollableStyles_Tzacw",item:"item_rsXbZ",active:"active_MAlvJ",exclusive:"exclusive_0IcDV",previewContainer:"previewContainer_R6DGf",preview:"preview_NfJLC",brandColor:"brandColor_zxvF5"},e.exports=r},3880:function(e,t,n){"use strict";n.r(t);var r=n(56),l=n(991),o=n(1141),c=n(1277),d=n(2578),m={components:{HorizontalScroll:c.a,BrandPaletteButton:o.a,SvgBrandPreview:d.a},mixins:[r.a,l.a],props:{item:{type:Object,default:()=>{}},items:{type:Array,default:()=>[]},searchInsight:{type:Object,default:()=>{}},brandClient:{type:String,default:null}},computed:{currentPreview(){return this.item.urls.png_256},current2xPreview(){return"".concat(this.item.urls.png_512||this.item.urls.png_256," 2x")}},methods:{href(e){return this.$router.resolve({name:"icon-slug",params:{slug:e.slug}}).href},onClickStyle(e){e.id!==this.item.id&&(this.$emit("fetch-style",e),this.$aa.algoliaInsight("click",{indexName:this.searchInsight.indexName,ipAddress:this.searchInsight.ipAddress,eventName:"PDP;Item Clicked",objectID:e.id}),"modal"===window.history.state.type?window.history.replaceState({type:"modal"},null,this.href(e)):window.history.pushState({type:"page"},null,this.href(e)))}}},_=n(2937),x=n(8);var component=Object(x.a)(m,(function(){var e=this,t=e._self._c;return t("div",{class:[e.$style.container,e.items.length>1?e.$style.styleContainer:null]},[e.items.length>1?t("div",{class:e.$style.styles},[t("horizontal-scroll",{staticClass:"m-0"},[t("ul",{class:["list-inline m-2",e.$style.scrollableStyles]},e._l(e.items,(function(n,r){return t("li",{key:r,staticClass:"list-inline-item"},[t("a",{directives:[{name:"track",rawName:"v-track",value:{event:"productClick",data:{id:n.id,name:n.name,asset:n.asset,product_type:"item",price:n.payable_price,list:"similar-styles",from_id:e.item.id}},expression:"{\n              event: 'productClick',\n              data: {\n                id: icon.id,\n                name: icon.name,\n                asset: icon.asset,\n                product_type: 'item',\n                price: icon.payable_price,\n                list: 'similar-styles',\n                from_id: item.id,\n              },\n            }"}],class:[e.$style.item,e.item.id===n.id?e.$style.active:null],attrs:{href:e.href(n),title:n.name},on:{click:function(t){return t.preventDefault(),e.onClickStyle(n)}}},[t("img",{attrs:{src:n.urls.png_64,alt:n.name,width:"32",height:"32"}})])])})),0)])],1):e._e(),e._v(" "),e.item.additional_informations&&e.item.additional_informations.iconscout_exclusive?t("div",{class:e.$style.exclusive,attrs:{"data-balloon":"Iconscout Exclusive","data-balloon-pos":"right"}},[t("img",{attrs:{src:n(2523),alt:"IconScout Exclusive",height:"64"}})]):e._e(),e._v(" "),t("div",{class:e.$style.previewContainer},[t("div",{class:e.$style.preview},[e.isLoggedIn&&e.canDownload?t("svg-brand-preview",{attrs:{item:e.item}}):t("img",{key:e.item.id,attrs:{src:e.currentPreview,srcset:e.current2xPreview,alt:e.name,width:"256"}})],1)]),e._v(" "),t("div",{class:e.$style.brandColor},[t("brand-palette-button",{attrs:{"brand-client":e.brandClient,enable:!(!e.isLoggedIn||!e.canDownload)}})],1)])}),[],!1,(function(e){this.$style=_.default.locals||_.default}),null,null);t.default=component.exports}}]);
//# sourceMappingURL=fe47335.modern.js.map