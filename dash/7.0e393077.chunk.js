(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{2233:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(4));function o(){const e=(0,l.default)(["\n  padding: 18px 30px 18px 30px;\n"]);return o=function(){return e},e}var i=n(a(3)).default.div(o());t.default=i},2246:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(4));function o(){const e=(0,l.default)(["\n  .btn-group button {\n    line-height: 28px;\n  }\n"]);return o=function(){return e},e}var i=n(a(3)).default.div(o());t.default=i},2263:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1)),o=n(a(2)),i=a(8),r=a(17),d=a(10),u=a(21);const s=({headerId:e,isOpen:t,onClosed:a,onSubmit:n,onToggle:o,renderForm:s,subHeaderContent:c,type:f})=>l.default.createElement(i.Modal,{isOpen:t,onClosed:a,onToggle:o},l.default.createElement(i.HeaderModal,null,l.default.createElement("section",null,l.default.createElement(i.HeaderModalTitle,{style:{textTransform:"none"}},l.default.createElement(u.AttributeIcon,{type:"timestamp"===f?"date":["decimal","float","integer","biginter"].includes(f)?"number":f,style:{margin:"auto 20px auto 0"}}),l.default.createElement(r.FormattedMessage,{id:e}))),l.default.createElement("section",null,l.default.createElement(i.HeaderModalTitle,null,l.default.createElement("span",null,(0,d.upperFirst)(c)),l.default.createElement("hr",null)))),l.default.createElement("form",{onSubmit:n},l.default.createElement(i.ModalForm,null,l.default.createElement(i.ModalBody,null,s())),l.default.createElement(i.ModalFooter,null,l.default.createElement("section",null,l.default.createElement(u.Button,{onClick:o,color:"cancel"},l.default.createElement(r.FormattedMessage,{id:"components.popUpWarning.button.cancel"})),l.default.createElement(u.Button,{type:"submit",color:"success"},l.default.createElement(r.FormattedMessage,{id:"form.button.done"}))))));s.defaultProps={isOpen:!1,onClosed:()=>{},onSubmit:()=>{},onToggle:()=>{},renderForm:()=>{},subHeaderContent:"",type:""},s.propTypes={headerId:o.default.string.isRequired,isOpen:o.default.bool,onClosed:o.default.func,onSubmit:o.default.func,onToggle:o.default.func,renderForm:o.default.func,subHeaderContent:o.default.string,type:o.default.string};var c=s;t.default=c},2264:function(e,t,a){"use strict";var n=a(7),l=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(6)),i=n(a(1)),r=l(a(2)),d=a(10),u=a(34),s=a(17),c=a(62),f=a(8),p=l(a(101)),m=l(a(2265)),g=l(a(2233)),b=l(a(2267)),E=l(a(2269));const v=({children:e,history:{goBack:t},getListDisplayedFields:a,inputs:n,initialData:l,isEditSettings:r,isLoading:u,modifiedData:v,onChange:y,onConfirmReset:x,onConfirmSubmit:h,name:D})=>{const{emitEvent:S,formatMessage:_}=(0,f.useGlobalContext)(),[I,C]=(0,i.useState)(!1),[M,T]=(0,i.useState)(!1),F=(0,i.useMemo)(()=>(0,d.get)(v,["schema","attributes"],{}),[v]),w=()=>C(e=>!e),O=()=>T(e=>!e),L={actions:[{color:"cancel",onClick:w,label:_({id:"".concat(p.default,".popUpWarning.button.cancel")}),type:"button",disabled:(0,d.isEqual)(v,l),style:{fontWeight:600,paddingLeft:15,paddingRight:15}},{color:"success",label:_({id:"".concat(p.default,".containers.Edit.submit")}),type:"submit",disabled:(0,d.isEqual)(v,l),style:{minWidth:150,fontWeight:600}}],title:{label:_({id:"".concat(p.default,".components.SettingsViewWrapper.pluginHeader.title")},{name:(0,d.upperFirst)(D)})},content:_({id:"".concat(p.default,".components.SettingsViewWrapper.pluginHeader.description.").concat(r?"edit":"list","-settings")})},B=e=>{if("settings.defaultSortBy"===e.name)return["id",...a().filter(e=>"media"!==(0,d.get)(F,[e,"type"],"")&&"id"!==e&&"richtext"!==(0,d.get)(F,[e,"type"],""))];if("settings.mainField"===e.name){const e=F;return Object.keys(e).filter(t=>{const a=(0,d.get)(e,[t,"type"],"");return!["json","text","relation","component","boolean","date","media","richtext"].includes(a)&&!!a})}return e.options};return u?i.default.createElement(f.LoadingIndicatorPage,null):i.default.createElement(i.default.Fragment,null,i.default.createElement(f.BackHeader,{onClick:t}),i.default.createElement(g.default,{className:"container-fluid"},i.default.createElement("form",{onSubmit:e=>{e.preventDefault(),O(),S("willSaveContentTypeLayout")}},i.default.createElement(c.Header,L),i.default.createElement("div",{className:"row",style:{paddingTop:"3px"}},i.default.createElement(m.default,{style:{marginBottom:"13px",paddingBottom:"30px",paddingTop:"24px"}},i.default.createElement(b.default,{isSettings:!0}),i.default.createElement("div",{className:"row"},n.map(e=>i.default.createElement(s.FormattedMessage,{key:e.name,id:e.label.id},t=>i.default.createElement("div",{className:e.customBootstrapClass},i.default.createElement(s.FormattedMessage,{id:(0,d.get)(e,"description.id","app.utils.defaultMessage")},a=>i.default.createElement(c.Inputs,(0,o.default)({},e,{description:a,label:" "===t?null:t,onChange:y,options:B(e),value:(0,d.get)(v,e.name,"")})))))),i.default.createElement("div",{className:"col-12"},i.default.createElement(E.default,{style:{marginBottom:20}}))),i.default.createElement(b.default,null),e)),i.default.createElement(f.PopUpWarning,{isOpen:I,toggleModal:w,content:{title:"".concat(p.default,".popUpWarning.title"),message:"".concat(p.default,".popUpWarning.warning.cancelAllSettings"),cancel:"".concat(p.default,".popUpWarning.button.cancel"),confirm:"".concat(p.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:()=>{x(),w()}}),i.default.createElement(f.PopUpWarning,{isOpen:M,toggleModal:O,content:{title:"".concat(p.default,".popUpWarning.title"),message:"".concat(p.default,".popUpWarning.warning.updateAllSettings"),cancel:"".concat(p.default,".popUpWarning.button.cancel"),confirm:"".concat(p.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:async()=>{await h(),O()}}))))};v.defaultProps={getListDisplayedFields:()=>[],inputs:[],initialData:{},isEditSettings:!1,modifiedData:{},name:"",onConfirmReset:()=>{},onConfirmSubmit:async()=>{},onSubmit:()=>{},pluginHeaderProps:{actions:[],description:{id:"app.utils.defaultMessage"},title:{id:"app.utils.defaultMessage",values:{}}}},v.propTypes={children:r.default.node.isRequired,getListDisplayedFields:r.default.func,history:r.default.shape({goBack:r.default.func.isRequired}).isRequired,initialData:r.default.object,inputs:r.default.array,isEditSettings:r.default.bool,isLoading:r.default.bool.isRequired,modifiedData:r.default.object,name:r.default.string,onChange:r.default.func.isRequired,onConfirmReset:r.default.func,onConfirmSubmit:r.default.func,onSubmit:r.default.func,pluginHeaderProps:r.default.shape({actions:r.default.array,description:r.default.shape({id:r.default.string}),title:r.default.shape({id:r.default.string,values:r.default.object})})};var y=(0,u.withRouter)(v);t.default=y},2265:function(e,t,a){"use strict";var n=a(0),l=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(1)),i=n(a(2)),r=a(17),d=a(2266);const u=e=>o.default.createElement("p",null,e),s=({children:e,description:t,style:a,title:n})=>o.default.createElement("div",{className:"col-md-12"},o.default.createElement(d.Wrapper,{style:a},o.default.createElement(d.Sub,null,!!n&&o.default.createElement("p",null,o.default.createElement(r.FormattedMessage,{id:n})),!!t&&o.default.createElement(r.FormattedMessage,{id:t},u)),e));s.defaultProps={children:null,description:null,style:{},title:null},s.propTypes={children:i.default.any,description:i.default.string,style:i.default.object,title:i.default.string};var c=(0,o.memo)(s);t.default=c},2266:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.Sub=t.Wrapper=void 0;var l=n(a(4)),o=n(a(3));function i(){const e=(0,l.default)(["\n  padding-top: 0px;\n  line-height: 18px;\n  > p:first-child {\n    margin-bottom: 1px;\n    font-weight: 700;\n    color: #333740;\n    font-size: 1.8rem;\n  }\n  > p {\n    color: #787e8f;\n    font-size: 13px;\n  }\n"]);return i=function(){return e},e}function r(){const e=(0,l.default)(["\n  margin-bottom: 35px;\n  background: #ffffff;\n  padding: 22px 28px 18px;\n  padding-bottom: 13px;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px #e3e9f3;\n  -webkit-font-smoothing: antialiased;\n"]);return r=function(){return e},e}const d=o.default.div(r());t.Wrapper=d;const u=o.default.div(i());t.Sub=u},2267:function(e,t,a){"use strict";var n=a(0),l=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(1)),i=n(a(2)),r=a(17),d=n(a(101)),u=n(a(2268));const s=({isSettings:e})=>{const t=e?"settings":"view",a="".concat(d.default,".containers.SettingPage.").concat(t);return o.default.createElement("div",{style:{marginBottom:"18px"}},o.default.createElement(r.FormattedMessage,{id:a},e=>o.default.createElement(u.default,null,e)))};s.propTypes={isSettings:i.default.bool},s.defaultProps={isSettings:!1};var c=(0,o.memo)(s);t.default=c},2268:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(4));function o(){const e=(0,l.default)(["\n  color: #787e8f;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.77px;\n  text-transform: uppercase;\n"]);return o=function(){return e},e}var i=n(a(3)).default.div(o());t.default=i},2269:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(4));function o(){const e=(0,l.default)(["\n  margin-top: 17px;\n  margin-bottom: 24px;\n  border-top: 1px solid #f6f6f6;\n"]);return o=function(){return e},e}var i=n(a(3)).default.div(o());t.default=i},2612:function(e,t,a){"use strict";var n=a(0),l=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(1)),i=n(a(2)),r=a(10),d=a(8),u=a(17),s=a(123),c=a(55),f=a(62),p=n(a(101)),m=n(a(756)),g=n(a(758)),b=n(a(2263)),E=n(a(2264)),v=n(a(2246)),y=n(a(760)),x=n(a(2613)),h=n(a(2614)),D=n(a(2615)),S=n(a(2616)),_=n(a(2617)),I=l(a(2618)),C=n(a(2619));const M=({deleteLayout:e,slug:t})=>{const[a,n]=(0,o.useReducer)(I.default,I.initialState),[l,i]=(0,o.useState)(!1),[M,T]=(0,o.useState)(!1),[F,w]=(0,o.useState)(!1),{emitEvent:O}=(0,d.useGlobalContext)(),L=()=>T(e=>!e),{labelForm:B,labelToEdit:k,initialData:R,modifiedData:P,isLoading:A}=a.toJS(),U=new AbortController,{signal:j}=U,N=(0,o.useMemo)(()=>(0,r.get)(P,["schema","attributes"],{}),[P]);(0,o.useEffect)(()=>((async()=>{try{const{data:e}=await(0,d.request)((0,g.default)("content-types/".concat(t)),{method:"GET",signal:j});n({type:"GET_DATA_SUCCEEDED",data:e.contentType})}catch(e){20!==e.code&&strapi.notification.error("notification.error")}})(),()=>{U.abort()}),[t]);const W=(0,o.useMemo)(()=>(0,r.get)(P,["schema","info","name"],""),[P]),q=()=>(0,r.get)(P,["layouts","list"],[]),H=()=>{const e=(0,r.get)(P,["metadatas"],{}),t=N;return Object.keys(e).filter(e=>{const a=(0,r.get)(t,[e,"type"],"");return!["json","component","richtext","relation"].includes(a)&&!!a}).filter(e=>!q().includes(e))},G=e=>{n({type:"SET_LABEL_TO_EDIT",labelToEdit:e}),L()},J=({target:{name:e,value:t}})=>{n({type:"ON_CHANGE_LABEL_METAS",name:e,value:t})},z=(e,t)=>{n({type:"MOVE_FIELD",originalIndex:e,atIndex:t})},[,V]=(0,s.useDrop)({accept:m.default.FIELD});return o.default.createElement(y.default,{isDraggingSibling:F,setIsDraggingSibling:w},o.default.createElement(E.default,{getListDisplayedFields:q,inputs:C.default,isLoading:A,initialData:R,modifiedData:P,onChange:({target:{name:e,value:t}})=>{n({type:"ON_CHANGE",keys:e,value:"settings.pageSize"===e?parseInt(t,10):t})},onConfirmReset:()=>{n({type:"ON_RESET"})},onConfirmSubmit:async()=>{try{const a=(0,r.cloneDeep)(P);delete a.apiID,delete a.schema,delete a.uid,await(0,d.request)((0,g.default)("content-types/".concat(t)),{method:"PUT",body:a,signal:j}),n({type:"SUBMIT_SUCCEEDED"}),e(t),O("didEditListSettings")}catch(a){strapi.notification.error("notification.error")}},name:W},o.default.createElement(S.default,null,o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-12"},o.default.createElement(v.default,{ref:V,style:{display:"flex",width:"100%"}},q().map((e,t)=>{const a=(0,r.get)(P,["metadatas",e,"list","label"],"");return o.default.createElement(x.default,{count:q().length,key:e,index:t,isDraggingSibling:F,label:a,move:z,name:e,onClick:G,onRemove:e=>{e.stopPropagation(),1===q().length?strapi.notification.info("".concat(p.default,".notification.info.minimumFields")):n({type:"REMOVE_FIELD",index:t})},selectedItem:k,setIsDraggingSibling:w})})))),o.default.createElement(D.default,{isOpen:l,toggle:()=>{H().length>0&&i(e=>!e)},direction:"down",style:{position:"absolute",top:11,right:10}},o.default.createElement(_.default,{disabled:0===H().length}),o.default.createElement(h.default,null,H().map(e=>o.default.createElement(c.DropdownItem,{key:e,onClick:()=>{n({type:"ADD_FIELD",item:e})}},e)))))),o.default.createElement(b.default,{headerId:"".concat(p.default,".containers.ListSettingsView.modal-form.edit-label"),isOpen:M,onClosed:()=>{n({type:"UNSET_LABEL_TO_EDIT"})},onSubmit:e=>{e.preventDefault(),L(),n({type:"SUBMIT_LABEL_FORM"})},onToggle:L,renderForm:()=>o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"col-6",style:{marginBottom:4}},o.default.createElement(u.FormattedMessage,{id:"".concat(p.default,".form.Input.label")},e=>o.default.createElement(u.FormattedMessage,{id:"".concat(p.default,".form.Input.label.inputDescription")},t=>o.default.createElement(f.Inputs,{description:t,label:e,type:"text",name:"label",onBlur:()=>{},value:(0,r.get)(B,"label",""),onChange:J})))),"media"!==(0,r.get)(N,[k,"type"],"text")&&o.default.createElement("div",{className:"col-6",style:{marginBottom:4}},o.default.createElement(u.FormattedMessage,{id:"".concat(p.default,".form.Input.sort.field")},e=>o.default.createElement(f.Inputs,{label:e,type:"bool",name:"sortable",value:(0,r.get)(B,"sortable",!1),onChange:J})))),subHeaderContent:k,type:(0,r.get)(N,[k,"type"],"text")}))};M.propTypes={deleteLayout:i.default.func.isRequired,location:i.default.shape({search:i.default.string.isRequired}).isRequired,slug:i.default.string.isRequired};var T=M;t.default=T},2613:function(e,t,a){"use strict";var n=a(0),l=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(1)),i=n(a(2)),r=a(123),d=a(279),u=n(a(756)),s=n(a(761)),c=n(a(757));const f=({count:e,index:t,label:a,move:n,name:l,onClick:i,onRemove:f,selectedItem:p})=>{const m=(0,o.useRef)(null),{setIsDraggingSibling:g}=(0,c.default)(),[,b]=(0,r.useDrop)({accept:u.default.FIELD,hover(e){if(!m.current)return;const a=e.index,l=t;a!==l&&(n(a,l),e.index=l)}}),[{isDragging:E},v,y]=(0,r.useDrag)({begin:()=>{g(!0)},end:()=>{g(!1)},item:{type:u.default.FIELD,id:l,name:l,index:t},collect:e=>({isDragging:e.isDragging()})});return(0,o.useEffect)(()=>{y((0,d.getEmptyImage)(),{captureDraggingState:!1})},[y]),v(b(m)),o.default.createElement(s.default,{count:e,ref:m,isDragging:E,label:a,name:l,onClick:i,onRemove:f,selectedItem:p})};f.defaultProps={index:0,label:"",selectedItem:""},f.propTypes={count:i.default.number.isRequired,index:i.default.number,label:i.default.string,move:i.default.func.isRequired,name:i.default.string.isRequired,onClick:i.default.func.isRequired,onRemove:i.default.func.isRequired,selectedItem:i.default.string};var p=f;t.default=p},2614:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(4)),o=n(a(3)),i=a(55);function r(){const e=(0,l.default)(["\n  max-height: 180px;\n  min-width: 230px;\n  margin-left: -1px;\n  margin-top: -1px;\n  padding: 0;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0;\n  border-color: #e3e9f3 !important;\n  border-top-color: #aed4fb !important;\n  box-shadow: 0 2px 3px rgba(227, 233, 245, 0.5);\n  transform: translate3d(-199px, 30px, 0px) !important;\n\n  overflow: scroll;\n\n  button {\n    height: 30px;\n    padding-left: 10px !important;\n    line-height: 26px;\n    cursor: pointer;\n    font-size: 13px !important;\n    &:focus,\n    &:active,\n    &:hover,\n    &:hover {\n      background-color: #fafafb !important;\n      color: #333740;\n      outline: 0;\n    }\n    div {\n      margin: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n"]);return r=function(){return e},e}var d=(0,o.default)(i.DropdownMenu)(r());t.default=d},2615:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(4)),o=n(a(3)),i=a(55);function r(){const e=(0,l.default)(["\n  display: table-cell;\n"]);return r=function(){return e},e}var d=(0,o.default)(i.ButtonDropdown)(r());t.default=d},2616:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(4));function o(){const e=(0,l.default)(["\n  position: relative;\n  padding: 11px 40px 11px 11px;\n  margin-top: 19px;\n  margin-bottom: 10px;\n  border: 1px dashed #e3e9f3;\n  border-radius: 2px;\n  > div,\n  > div > div {\n    margin: 0;\n    padding: 0;\n  }\n  > div > div {\n    overflow-x: auto;\n    overflow-y: scroll;\n  }\n"]);return o=function(){return e},e}var i=n(a(3)).default.div(o());t.default=i},2617:function(e,t,a){"use strict";var n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(4)),o=n(a(3)),i=a(55);function r(){const e=(0,l.default)(["\n  width: 30px;\n  height: 30px;\n  background: #fafafb;\n  border: 1px solid #e3e9f3;\n  border-radius: 2px;\n  border-top-right-radius: 2px !important;\n  border-bottom-right-radius: 2px !important;\n  color: #b3b5b9;\n\n  &:disabled {\n    cursor: not-allowed !important;\n\n    background: #fafafb;\n    border: 1px solid #e3e9f3;\n    border-radius: 2px;\n    color: #b3b5b9;\n  }\n\n  &:before {\n    ","\n  }\n\n  &:hover,\n  :active,\n  :focus {\n    ","\n\n    &:before {\n      ","\n    }\n  }\n"]);return r=function(){return e},e}const d="\n  content: '\f067';\n  font-family: FontAwesome;\n  font-size: 13px;\n  -webkit-font-smoothing: antialiased;\n";var u=(0,o.default)(i.DropdownToggle)(r(),d,"\n  background-color: #e6f0fb !important;\n  border: 1px solid #aed4fb !important;\n  color: #007eff !important;\n",d);t.default=u},2618:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.default=void 0;var n=a(33);const l=(0,n.fromJS)({labelForm:{},labelToEdit:"",initialData:{},isLoading:!0,modifiedData:{}});t.initialState=l;var o=(e,t)=>{const a=["modifiedData","layouts","list"];switch(t.type){case"ADD_FIELD":return e.updateIn(a,e=>e.push(t.item));case"GET_DATA_SUCCEEDED":return e.update("initialData",()=>(0,n.fromJS)(t.data)).update("isLoading",()=>!1).update("modifiedData",()=>(0,n.fromJS)(t.data));case"MOVE_FIELD":return e.updateIn(["modifiedData","layouts","list"],e=>e.delete(t.originalIndex).insert(t.atIndex,e.get(t.originalIndex)));case"ON_CHANGE":return e.updateIn(["modifiedData",...t.keys.split(".")],()=>t.value);case"ON_CHANGE_LABEL_METAS":return e.updateIn(["labelForm",t.name],()=>t.value);case"ON_RESET":return e.update("modifiedData",()=>e.get("initialData"));case"REMOVE_FIELD":{const a=["modifiedData","settings","defaultSortBy"],n=e.getIn(a),l=["modifiedData","layouts","list",t.index],o=e.getIn(l),i=e.getIn(["modifiedData","layouts","list",1]),r=e.getIn(["modifiedData","schema","attributes",i,"type"]),d="media"!==r&&"richtext"!==r?i:"id";return e.removeIn(["modifiedData","layouts","list",t.index]).updateIn(a,()=>o===n?d:n)}case"SET_LABEL_TO_EDIT":return e.update("labelToEdit",()=>t.labelToEdit).updateIn(["labelForm","label"],()=>e.getIn(["modifiedData","metadatas",t.labelToEdit,"list","label"])).updateIn(["labelForm","sortable"],()=>e.getIn(["modifiedData","metadatas",t.labelToEdit,"list","sortable"]));case"UNSET_LABEL_TO_EDIT":return e.update("labelToEdit",()=>"").update("labelForm",()=>(0,n.fromJS)({}));case"SUBMIT_LABEL_FORM":{const t=["modifiedData","metadatas",e.get("labelToEdit"),"list"];return e.updateIn([...t,"label"],()=>e.getIn(["labelForm","label"])).updateIn([...t,"sortable"],()=>e.getIn(["labelForm","sortable"]))}case"SUBMIT_SUCCEEDED":return e.update("initialData",()=>e.get("modifiedData"));default:return e}};t.default=o},2619:function(e){e.exports=JSON.parse('[{"label":{"id":"content-manager.form.Input.search"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.searchable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.filters"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.filterable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.bulkActions"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"name":"settings.bulkable","type":"bool","validations":{}},{"label":{"id":"content-manager.form.Input.pageEntries"},"customBootstrapClass":"col-md-4","didCheckErrors":false,"errors":[],"description":{"id":"content-manager.form.Input.pageEntries.inputDescription"},"name":"settings.pageSize","options":[10,20,50,100],"type":"select","validations":{}},{"label":{"id":"content-manager.form.Input.defaultSort"},"customBootstrapClass":"col-md-4 ml-md-auto","didCheckErrors":false,"errors":[],"style":{"marginRight":"-20px"},"name":"settings.defaultSortBy","options":["id"],"type":"select","validations":{}},{"label":{"id":"app.utils.defaultMessage"},"customBootstrapClass":"col-md-2","didCheckErrors":false,"errors":[],"name":"settings.defaultSortOrder","options":["ASC","DESC"],"type":"select","validations":{}}]')}}]);