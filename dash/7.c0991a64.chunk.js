(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 2233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(4));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){const data=(0,_taggedTemplateLiteral2.default)(["\n  padding: 18px 30px 18px 30px;\n"]);_templateObject=function _templateObject(){return data;};return data;}const Container=_styledComponents.default.div(_templateObject());var _default=Container;exports.default=_default;

/***/ }),

/***/ 2246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(4));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){const data=(0,_taggedTemplateLiteral2.default)(["\n  .btn-group button {\n    line-height: 28px;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}const SortWrapper=_styledComponents.default.div(_templateObject());var _default=SortWrapper;exports.default=_default;

/***/ }),

/***/ 2263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _strapiHelperPlugin=__webpack_require__(8);var _reactIntl=__webpack_require__(17);var _lodash=__webpack_require__(10);var _core=__webpack_require__(21);const PopupForm=({headerId,isOpen,onClosed,onSubmit,onToggle,renderForm,subHeaderContent,type})=>{const getAttrType=()=>{if(type==='timestamp'){return'date';}if(['decimal','float','integer','biginter'].includes(type)){return'number';}return type;};return/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.Modal,{isOpen:isOpen,onClosed:onClosed,onToggle:onToggle},/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.HeaderModal,null,/*#__PURE__*/_react.default.createElement("section",null,/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.HeaderModalTitle,{style:{textTransform:'none'}},/*#__PURE__*/_react.default.createElement(_core.AttributeIcon,{type:getAttrType(),style:{margin:'auto 20px auto 0'}}),/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:headerId}))),/*#__PURE__*/_react.default.createElement("section",null,/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.HeaderModalTitle,null,/*#__PURE__*/_react.default.createElement("span",null,(0,_lodash.upperFirst)(subHeaderContent)),/*#__PURE__*/_react.default.createElement("hr",null)))),/*#__PURE__*/_react.default.createElement("form",{onSubmit:onSubmit},/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.ModalForm,null,/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.ModalBody,null,renderForm())),/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.ModalFooter,null,/*#__PURE__*/_react.default.createElement("section",null,/*#__PURE__*/_react.default.createElement(_core.Button,{onClick:onToggle,color:"cancel"},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"components.popUpWarning.button.cancel"})),/*#__PURE__*/_react.default.createElement(_core.Button,{type:"submit",color:"success"},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"form.button.done"}))))));};PopupForm.defaultProps={isOpen:false,onClosed:()=>{},onSubmit:()=>{},onToggle:()=>{},renderForm:()=>{},subHeaderContent:'',type:''};PopupForm.propTypes={headerId:_propTypes.default.string.isRequired,isOpen:_propTypes.default.bool,onClosed:_propTypes.default.func,onSubmit:_propTypes.default.func,onToggle:_propTypes.default.func,renderForm:_propTypes.default.func,subHeaderContent:_propTypes.default.string,type:_propTypes.default.string};var _default=PopupForm;exports.default=_default;

/***/ }),

/***/ 2264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(7);var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(6));var _react=_interopRequireWildcard(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(10);var _reactRouterDom=__webpack_require__(34);var _reactIntl=__webpack_require__(17);var _custom=__webpack_require__(62);var _strapiHelperPlugin=__webpack_require__(8);var _pluginId=_interopRequireDefault(__webpack_require__(101));var _Block=_interopRequireDefault(__webpack_require__(2265));var _Container=_interopRequireDefault(__webpack_require__(2233));var _SectionTitle=_interopRequireDefault(__webpack_require__(2267));var _Separator=_interopRequireDefault(__webpack_require__(2269));const SettingsViewWrapper=({children,history:{goBack},getListDisplayedFields,inputs,initialData,isEditSettings,isLoading,modifiedData,onChange,onConfirmReset,onConfirmSubmit,name})=>{const{emitEvent,formatMessage}=(0,_strapiHelperPlugin.useGlobalContext)();const[showWarningCancel,setWarningCancel]=(0,_react.useState)(false);const[showWarningSubmit,setWarningSubmit]=(0,_react.useState)(false);const getAttributes=(0,_react.useMemo)(()=>{return(0,_lodash.get)(modifiedData,['schema','attributes'],{});},[modifiedData]);const toggleWarningCancel=()=>setWarningCancel(prevState=>!prevState);const toggleWarningSubmit=()=>setWarningSubmit(prevState=>!prevState);const getPluginHeaderActions=()=>{return[{color:'cancel',onClick:toggleWarningCancel,label:formatMessage({id:"".concat(_pluginId.default,".popUpWarning.button.cancel")}),type:'button',disabled:(0,_lodash.isEqual)(modifiedData,initialData),style:{fontWeight:600,paddingLeft:15,paddingRight:15}},{color:'success',label:formatMessage({id:"".concat(_pluginId.default,".containers.Edit.submit")}),type:'submit',disabled:(0,_lodash.isEqual)(modifiedData,initialData),style:{minWidth:150,fontWeight:600}}];};const headerProps={actions:getPluginHeaderActions(),title:{label:formatMessage({id:"".concat(_pluginId.default,".components.SettingsViewWrapper.pluginHeader.title")},{name:(0,_lodash.upperFirst)(name)})},content:formatMessage({id:"".concat(_pluginId.default,".components.SettingsViewWrapper.pluginHeader.description.").concat(isEditSettings?'edit':'list',"-settings")})};const getSelectOptions=input=>{if(input.name==='settings.defaultSortBy'){return['id',...getListDisplayedFields().filter(name=>(0,_lodash.get)(getAttributes,[name,'type'],'')!=='media'&&name!=='id'&&(0,_lodash.get)(getAttributes,[name,'type'],'')!=='richtext')];}if(input.name==='settings.mainField'){const attributes=getAttributes;const options=Object.keys(attributes).filter(attr=>{const type=(0,_lodash.get)(attributes,[attr,'type'],'');return!['json','text','relation','component','boolean','date','media','richtext'].includes(type)&&!!type;});return options;}return input.options;};const handleSubmit=e=>{e.preventDefault();toggleWarningSubmit();emitEvent('willSaveContentTypeLayout');};if(isLoading){return/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.LoadingIndicatorPage,null);}return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.BackHeader,{onClick:goBack}),/*#__PURE__*/_react.default.createElement(_Container.default,{className:"container-fluid"},/*#__PURE__*/_react.default.createElement("form",{onSubmit:handleSubmit},/*#__PURE__*/_react.default.createElement(_custom.Header,headerProps),/*#__PURE__*/_react.default.createElement("div",{className:"row",style:{paddingTop:'3px'}},/*#__PURE__*/_react.default.createElement(_Block.default,{style:{marginBottom:'13px',paddingBottom:'30px',paddingTop:'24px'}},/*#__PURE__*/_react.default.createElement(_SectionTitle.default,{isSettings:true}),/*#__PURE__*/_react.default.createElement("div",{className:"row"},inputs.map(input=>{return/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{key:input.name,id:input.label.id},label=>/*#__PURE__*/_react.default.createElement("div",{className:input.customBootstrapClass},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:(0,_lodash.get)(input,'description.id','app.utils.defaultMessage')},description=>/*#__PURE__*/_react.default.createElement(_custom.Inputs,(0,_extends2.default)({},input,{description:description,label:label===' '?null:label,onChange:onChange,options:getSelectOptions(input),value:(0,_lodash.get)(modifiedData,input.name,'')})))));}),/*#__PURE__*/_react.default.createElement("div",{className:"col-12"},/*#__PURE__*/_react.default.createElement(_Separator.default,{style:{marginBottom:20}}))),/*#__PURE__*/_react.default.createElement(_SectionTitle.default,null),children)),/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.PopUpWarning,{isOpen:showWarningCancel,toggleModal:toggleWarningCancel,content:{title:"".concat(_pluginId.default,".popUpWarning.title"),message:"".concat(_pluginId.default,".popUpWarning.warning.cancelAllSettings"),cancel:"".concat(_pluginId.default,".popUpWarning.button.cancel"),confirm:"".concat(_pluginId.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:()=>{onConfirmReset();toggleWarningCancel();}}),/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.PopUpWarning,{isOpen:showWarningSubmit,toggleModal:toggleWarningSubmit,content:{title:"".concat(_pluginId.default,".popUpWarning.title"),message:"".concat(_pluginId.default,".popUpWarning.warning.updateAllSettings"),cancel:"".concat(_pluginId.default,".popUpWarning.button.cancel"),confirm:"".concat(_pluginId.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:async()=>{await onConfirmSubmit();toggleWarningSubmit();}}))));};SettingsViewWrapper.defaultProps={getListDisplayedFields:()=>[],inputs:[],initialData:{},isEditSettings:false,modifiedData:{},name:'',onConfirmReset:()=>{},onConfirmSubmit:async()=>{},onSubmit:()=>{},pluginHeaderProps:{actions:[],description:{id:'app.utils.defaultMessage'},title:{id:'app.utils.defaultMessage',values:{}}}};SettingsViewWrapper.propTypes={children:_propTypes.default.node.isRequired,getListDisplayedFields:_propTypes.default.func,history:_propTypes.default.shape({goBack:_propTypes.default.func.isRequired}).isRequired,initialData:_propTypes.default.object,inputs:_propTypes.default.array,isEditSettings:_propTypes.default.bool,isLoading:_propTypes.default.bool.isRequired,modifiedData:_propTypes.default.object,name:_propTypes.default.string,onChange:_propTypes.default.func.isRequired,onConfirmReset:_propTypes.default.func,onConfirmSubmit:_propTypes.default.func,onSubmit:_propTypes.default.func,pluginHeaderProps:_propTypes.default.shape({actions:_propTypes.default.array,description:_propTypes.default.shape({id:_propTypes.default.string}),title:_propTypes.default.shape({id:_propTypes.default.string,values:_propTypes.default.object})})};var _default=(0,_reactRouterDom.withRouter)(SettingsViewWrapper);exports.default=_default;

/***/ }),

/***/ 2265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);var _interopRequireWildcard=__webpack_require__(7);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(17);var _components=__webpack_require__(2266);/**
 *
 * Block
 */const renderMsg=msg=>/*#__PURE__*/_react.default.createElement("p",null,msg);const Block=({children,description,style,title})=>/*#__PURE__*/_react.default.createElement("div",{className:"col-md-12"},/*#__PURE__*/_react.default.createElement(_components.Wrapper,{style:style},/*#__PURE__*/_react.default.createElement(_components.Sub,null,!!title&&/*#__PURE__*/_react.default.createElement("p",null,/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:title})),!!description&&/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:description},renderMsg)),children));Block.defaultProps={children:null,description:null,style:{},title:null};Block.propTypes={children:_propTypes.default.any,description:_propTypes.default.string,style:_propTypes.default.object,title:_propTypes.default.string};var _default=/*#__PURE__*/(0,_react.memo)(Block);exports.default=_default;

/***/ }),

/***/ 2266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.Sub=exports.Wrapper=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(4));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject2(){const data=(0,_taggedTemplateLiteral2.default)(["\n  padding-top: 0px;\n  line-height: 18px;\n  > p:first-child {\n    margin-bottom: 1px;\n    font-weight: 700;\n    color: #333740;\n    font-size: 1.8rem;\n  }\n  > p {\n    color: #787e8f;\n    font-size: 13px;\n  }\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){const data=(0,_taggedTemplateLiteral2.default)(["\n  margin-bottom: 35px;\n  background: #ffffff;\n  padding: 22px 28px 18px;\n  padding-bottom: 13px;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px #e3e9f3;\n  -webkit-font-smoothing: antialiased;\n"]);_templateObject=function _templateObject(){return data;};return data;}const Wrapper=_styledComponents.default.div(_templateObject());exports.Wrapper=Wrapper;const Sub=_styledComponents.default.div(_templateObject2());exports.Sub=Sub;

/***/ }),

/***/ 2267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);var _interopRequireWildcard=__webpack_require__(7);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(17);var _pluginId=_interopRequireDefault(__webpack_require__(101));var _Title=_interopRequireDefault(__webpack_require__(2268));const SectionTitle=({isSettings})=>{const suffix=isSettings?'settings':'view';const msgId="".concat(_pluginId.default,".containers.SettingPage.").concat(suffix);return/*#__PURE__*/_react.default.createElement("div",{style:{marginBottom:'18px'}},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:msgId},msg=>/*#__PURE__*/_react.default.createElement(_Title.default,null,msg)));};SectionTitle.propTypes={isSettings:_propTypes.default.bool};SectionTitle.defaultProps={isSettings:false};var _default=/*#__PURE__*/(0,_react.memo)(SectionTitle);exports.default=_default;

/***/ }),

/***/ 2268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(4));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){const data=(0,_taggedTemplateLiteral2.default)(["\n  color: #787e8f;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.77px;\n  text-transform: uppercase;\n"]);_templateObject=function _templateObject(){return data;};return data;}const Title=_styledComponents.default.div(_templateObject());var _default=Title;exports.default=_default;

/***/ }),

/***/ 2269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(4));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){const data=(0,_taggedTemplateLiteral2.default)(["\n  margin-top: 17px;\n  margin-bottom: 24px;\n  border-top: 1px solid #f6f6f6;\n"]);_templateObject=function _templateObject(){return data;};return data;}const Separator=_styledComponents.default.div(_templateObject());var _default=Separator;exports.default=_default;

/***/ }),

/***/ 2612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);var _interopRequireWildcard=__webpack_require__(7);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(10);var _strapiHelperPlugin=__webpack_require__(8);var _reactIntl=__webpack_require__(17);var _reactDnd=__webpack_require__(123);var _reactstrap=__webpack_require__(55);var _custom=__webpack_require__(62);var _pluginId=_interopRequireDefault(__webpack_require__(101));var _ItemTypes=_interopRequireDefault(__webpack_require__(756));var _getRequestUrl=_interopRequireDefault(__webpack_require__(758));var _PopupForm=_interopRequireDefault(__webpack_require__(2263));var _SettingsViewWrapper=_interopRequireDefault(__webpack_require__(2264));var _SortWrapper=_interopRequireDefault(__webpack_require__(2246));var _LayoutDndProvider=_interopRequireDefault(__webpack_require__(760));var _Label=_interopRequireDefault(__webpack_require__(2613));var _MenuDropdown=_interopRequireDefault(__webpack_require__(2614));var _DropdownButton=_interopRequireDefault(__webpack_require__(2615));var _DragWrapper=_interopRequireDefault(__webpack_require__(2616));var _Toggle=_interopRequireDefault(__webpack_require__(2617));var _reducer=_interopRequireWildcard(__webpack_require__(2618));var _forms=_interopRequireDefault(__webpack_require__(2619));const ListSettingsView=({deleteLayout,slug})=>{const[reducerState,dispatch]=(0,_react.useReducer)(_reducer.default,_reducer.initialState);const[isOpen,setIsOpen]=(0,_react.useState)(false);const[isModalFormOpen,setIsModalFormOpen]=(0,_react.useState)(false);const[isDraggingSibling,setIsDraggingSibling]=(0,_react.useState)(false);const{emitEvent}=(0,_strapiHelperPlugin.useGlobalContext)();const toggleModalForm=()=>setIsModalFormOpen(prevState=>!prevState);const{labelForm,labelToEdit,initialData,modifiedData,isLoading}=reducerState.toJS();const abortController=new AbortController();const{signal}=abortController;const getAttributes=(0,_react.useMemo)(()=>{return(0,_lodash.get)(modifiedData,['schema','attributes'],{});},[modifiedData]);(0,_react.useEffect)(()=>{const getData=async()=>{try{const{data}=await(0,_strapiHelperPlugin.request)((0,_getRequestUrl.default)("content-types/".concat(slug)),{method:'GET',signal});dispatch({type:'GET_DATA_SUCCEEDED',data:data.contentType});}catch(err){if(err.code!==20){strapi.notification.error('notification.error');}}};getData();return()=>{abortController.abort();};// eslint-disable-next-line react-hooks/exhaustive-deps
},[slug]);const getName=(0,_react.useMemo)(()=>{return(0,_lodash.get)(modifiedData,['schema','info','name'],'');},[modifiedData]);const getListDisplayedFields=()=>(0,_lodash.get)(modifiedData,['layouts','list'],[]);const getListRemainingFields=()=>{const metadatas=(0,_lodash.get)(modifiedData,['metadatas'],{});const attributes=getAttributes;return Object.keys(metadatas).filter(key=>{const type=(0,_lodash.get)(attributes,[key,'type'],'');return!['json','component','richtext','relation'].includes(type)&&!!type;}).filter(field=>{return!getListDisplayedFields().includes(field);});};const handleClickEditLabel=labelToEdit=>{dispatch({type:'SET_LABEL_TO_EDIT',labelToEdit});toggleModalForm();};const handleClosed=()=>{dispatch({type:'UNSET_LABEL_TO_EDIT'});};const handleChange=({target:{name,value}})=>{dispatch({type:'ON_CHANGE',keys:name,value:name==='settings.pageSize'?parseInt(value,10):value});};const handleChangeEditLabel=({target:{name,value}})=>{dispatch({type:'ON_CHANGE_LABEL_METAS',name,value});};const handleConfirm=async()=>{try{const body=(0,_lodash.cloneDeep)(modifiedData);delete body.apiID;delete body.schema;delete body.uid;await(0,_strapiHelperPlugin.request)((0,_getRequestUrl.default)("content-types/".concat(slug)),{method:'PUT',body,signal});dispatch({type:'SUBMIT_SUCCEEDED'});deleteLayout(slug);emitEvent('didEditListSettings');}catch(err){strapi.notification.error('notification.error');}};const move=(originalIndex,atIndex)=>{dispatch({type:'MOVE_FIELD',originalIndex,atIndex});};const[,drop]=(0,_reactDnd.useDrop)({accept:_ItemTypes.default.FIELD});const renderForm=()=>/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement("div",{className:"col-6",style:{marginBottom:4}},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".form.Input.label")},label=>/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".form.Input.label.inputDescription")},description=>/*#__PURE__*/_react.default.createElement(_custom.Inputs,{description:description,label:label,type:"text",name:"label",onBlur:()=>{},value:(0,_lodash.get)(labelForm,'label',''),onChange:handleChangeEditLabel})))),(0,_lodash.get)(getAttributes,[labelToEdit,'type'],'text')!=='media'&&/*#__PURE__*/_react.default.createElement("div",{className:"col-6",style:{marginBottom:4}},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".form.Input.sort.field")},label=>/*#__PURE__*/_react.default.createElement(_custom.Inputs,{label:label,type:"bool",name:"sortable",value:(0,_lodash.get)(labelForm,'sortable',false),onChange:handleChangeEditLabel}))));return/*#__PURE__*/_react.default.createElement(_LayoutDndProvider.default,{isDraggingSibling:isDraggingSibling,setIsDraggingSibling:setIsDraggingSibling},/*#__PURE__*/_react.default.createElement(_SettingsViewWrapper.default,{getListDisplayedFields:getListDisplayedFields,inputs:_forms.default,isLoading:isLoading,initialData:initialData,modifiedData:modifiedData,onChange:handleChange,onConfirmReset:()=>{dispatch({type:'ON_RESET'});},onConfirmSubmit:handleConfirm,name:getName},/*#__PURE__*/_react.default.createElement(_DragWrapper.default,null,/*#__PURE__*/_react.default.createElement("div",{className:"row"},/*#__PURE__*/_react.default.createElement("div",{className:"col-12"},/*#__PURE__*/_react.default.createElement(_SortWrapper.default,{ref:drop,style:{display:'flex',width:'100%'}},getListDisplayedFields().map((item,index)=>{const label=(0,_lodash.get)(modifiedData,['metadatas',item,'list','label'],'');return/*#__PURE__*/_react.default.createElement(_Label.default,{count:getListDisplayedFields().length,key:item,index:index,isDraggingSibling:isDraggingSibling,label:label,move:move,name:item,onClick:handleClickEditLabel,onRemove:e=>{e.stopPropagation();if(getListDisplayedFields().length===1){strapi.notification.info("".concat(_pluginId.default,".notification.info.minimumFields"));}else{dispatch({type:'REMOVE_FIELD',index});}},selectedItem:labelToEdit,setIsDraggingSibling:setIsDraggingSibling});})))),/*#__PURE__*/_react.default.createElement(_DropdownButton.default,{isOpen:isOpen,toggle:()=>{if(getListRemainingFields().length>0){setIsOpen(prevState=>!prevState);}},direction:"down",style:{position:'absolute',top:11,right:10}},/*#__PURE__*/_react.default.createElement(_Toggle.default,{disabled:getListRemainingFields().length===0}),/*#__PURE__*/_react.default.createElement(_MenuDropdown.default,null,getListRemainingFields().map(item=>/*#__PURE__*/_react.default.createElement(_reactstrap.DropdownItem,{key:item,onClick:()=>{dispatch({type:'ADD_FIELD',item});}},item)))))),/*#__PURE__*/_react.default.createElement(_PopupForm.default,{headerId:"".concat(_pluginId.default,".containers.ListSettingsView.modal-form.edit-label"),isOpen:isModalFormOpen,onClosed:handleClosed,onSubmit:e=>{e.preventDefault();toggleModalForm();dispatch({type:'SUBMIT_LABEL_FORM'});},onToggle:toggleModalForm,renderForm:renderForm,subHeaderContent:labelToEdit,type:(0,_lodash.get)(getAttributes,[labelToEdit,'type'],'text')}));};ListSettingsView.propTypes={deleteLayout:_propTypes.default.func.isRequired,location:_propTypes.default.shape({search:_propTypes.default.string.isRequired}).isRequired,slug:_propTypes.default.string.isRequired};var _default=ListSettingsView;exports.default=_default;

/***/ }),

/***/ 2613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);var _interopRequireWildcard=__webpack_require__(7);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(1));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactDnd=__webpack_require__(123);var _reactDndHtml5Backend=__webpack_require__(279);var _ItemTypes=_interopRequireDefault(__webpack_require__(756));var _DraggedField=_interopRequireDefault(__webpack_require__(761));var _useLayoutDnd=_interopRequireDefault(__webpack_require__(757));const Label=({count,index,label,move,name,onClick,onRemove,selectedItem})=>{const ref=(0,_react.useRef)(null);const{setIsDraggingSibling}=(0,_useLayoutDnd.default)();const[,drop]=(0,_reactDnd.useDrop)({accept:_ItemTypes.default.FIELD,hover(item){if(!ref.current){return;}const dragIndex=item.index;const hoverIndex=index;// Don't replace items with themselves
if(dragIndex===hoverIndex){return;}move(dragIndex,hoverIndex);item.index=hoverIndex;}});const[{isDragging},drag,preview]=(0,_reactDnd.useDrag)({begin:()=>{setIsDraggingSibling(true);},end:()=>{setIsDraggingSibling(false);},item:{type:_ItemTypes.default.FIELD,id:name,name,index},collect:monitor=>({isDragging:monitor.isDragging()})});(0,_react.useEffect)(()=>{preview((0,_reactDndHtml5Backend.getEmptyImage)(),{captureDraggingState:false});},[preview]);drag(drop(ref));return/*#__PURE__*/_react.default.createElement(_DraggedField.default,{count:count,ref:ref,isDragging:isDragging,label:label,name:name,onClick:onClick,onRemove:onRemove,selectedItem:selectedItem});};Label.defaultProps={index:0,label:'',selectedItem:''};Label.propTypes={count:_propTypes.default.number.isRequired,index:_propTypes.default.number,label:_propTypes.default.string,move:_propTypes.default.func.isRequired,name:_propTypes.default.string.isRequired,onClick:_propTypes.default.func.isRequired,onRemove:_propTypes.default.func.isRequired,selectedItem:_propTypes.default.string};var _default=Label;exports.default=_default;

/***/ }),

/***/ 2614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(4));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _reactstrap=__webpack_require__(55);function _templateObject(){const data=(0,_taggedTemplateLiteral2.default)(["\n  max-height: 180px;\n  min-width: 230px;\n  margin-left: -1px;\n  margin-top: -1px;\n  padding: 0;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0;\n  border-color: #e3e9f3 !important;\n  border-top-color: #aed4fb !important;\n  box-shadow: 0 2px 3px rgba(227, 233, 245, 0.5);\n  transform: translate3d(-199px, 30px, 0px) !important;\n\n  overflow: scroll;\n\n  button {\n    height: 30px;\n    padding-left: 10px !important;\n    line-height: 26px;\n    cursor: pointer;\n    font-size: 13px !important;\n    &:focus,\n    &:active,\n    &:hover,\n    &:hover {\n      background-color: #fafafb !important;\n      color: #333740;\n      outline: 0;\n    }\n    div {\n      margin: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}const MenuDropdown=(0,_styledComponents.default)(_reactstrap.DropdownMenu)(_templateObject());var _default=MenuDropdown;exports.default=_default;

/***/ }),

/***/ 2615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(4));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _reactstrap=__webpack_require__(55);function _templateObject(){const data=(0,_taggedTemplateLiteral2.default)(["\n  display: table-cell;\n"]);_templateObject=function _templateObject(){return data;};return data;}const DropdownButton=(0,_styledComponents.default)(_reactstrap.ButtonDropdown)(_templateObject());var _default=DropdownButton;exports.default=_default;

/***/ }),

/***/ 2616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(4));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){const data=(0,_taggedTemplateLiteral2.default)(["\n  position: relative;\n  padding: 11px 40px 11px 11px;\n  margin-top: 19px;\n  margin-bottom: 10px;\n  border: 1px dashed #e3e9f3;\n  border-radius: 2px;\n  > div,\n  > div > div {\n    margin: 0;\n    padding: 0;\n  }\n  > div > div {\n    overflow-x: auto;\n    overflow-y: scroll;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}const DragWrapper=_styledComponents.default.div(_templateObject());var _default=DragWrapper;exports.default=_default;

/***/ }),

/***/ 2617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(4));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _reactstrap=__webpack_require__(55);function _templateObject(){const data=(0,_taggedTemplateLiteral2.default)(["\n  width: 30px;\n  height: 30px;\n  background: #fafafb;\n  border: 1px solid #e3e9f3;\n  border-radius: 2px;\n  border-top-right-radius: 2px !important;\n  border-bottom-right-radius: 2px !important;\n  color: #b3b5b9;\n\n  &:disabled {\n    cursor: not-allowed !important;\n\n    background: #fafafb;\n    border: 1px solid #e3e9f3;\n    border-radius: 2px;\n    color: #b3b5b9;\n  }\n\n  &:before {\n    ","\n  }\n\n  &:hover,\n  :active,\n  :focus {\n    ","\n\n    &:before {\n      ","\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}const openedStyle="\n  background-color: #e6f0fb !important;\n  border: 1px solid #aed4fb !important;\n  color: #007eff !important;\n";const beforeStyle="\n  content: '\f067';\n  font-family: FontAwesome;\n  font-size: 13px;\n  -webkit-font-smoothing: antialiased;\n";const Toggle=(0,_styledComponents.default)(_reactstrap.DropdownToggle)(_templateObject(),beforeStyle,openedStyle,beforeStyle);var _default=Toggle;exports.default=_default;

/***/ }),

/***/ 2618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=exports.default=void 0;var _immutable=__webpack_require__(33);const initialState=(0,_immutable.fromJS)({labelForm:{},labelToEdit:'',initialData:{},isLoading:true,modifiedData:{}});exports.initialState=initialState;const reducer=(state,action)=>{const layoutPath=['modifiedData','layouts','list'];switch(action.type){case'ADD_FIELD':return state.updateIn(layoutPath,list=>list.push(action.item));case'GET_DATA_SUCCEEDED':return state.update('initialData',()=>(0,_immutable.fromJS)(action.data)).update('isLoading',()=>false).update('modifiedData',()=>(0,_immutable.fromJS)(action.data));case'MOVE_FIELD':return state.updateIn(['modifiedData','layouts','list'],list=>{return list.delete(action.originalIndex).insert(action.atIndex,list.get(action.originalIndex));});case'ON_CHANGE':return state.updateIn(['modifiedData',...action.keys.split('.')],()=>action.value);case'ON_CHANGE_LABEL_METAS':return state.updateIn(['labelForm',action.name],()=>action.value);case'ON_RESET':return state.update('modifiedData',()=>state.get('initialData'));case'REMOVE_FIELD':{const defaultSortByPath=['modifiedData','settings','defaultSortBy'];const defaultSortBy=state.getIn(defaultSortByPath);const attrPath=['modifiedData','layouts','list',action.index];const attrToBeRemoved=state.getIn(attrPath);const firstAttr=state.getIn(['modifiedData','layouts','list',1]);const firstAttrType=state.getIn(['modifiedData','schema','attributes',firstAttr,'type']);const attrToSelect=firstAttrType!=='media'&&firstAttrType!=='richtext'?firstAttr:'id';return state.removeIn(['modifiedData','layouts','list',action.index]).updateIn(defaultSortByPath,()=>{if(attrToBeRemoved===defaultSortBy){return attrToSelect;}return defaultSortBy;});}case'SET_LABEL_TO_EDIT':return state.update('labelToEdit',()=>action.labelToEdit).updateIn(['labelForm','label'],()=>state.getIn(['modifiedData','metadatas',action.labelToEdit,'list','label'])).updateIn(['labelForm','sortable'],()=>state.getIn(['modifiedData','metadatas',action.labelToEdit,'list','sortable']));case'UNSET_LABEL_TO_EDIT':return state.update('labelToEdit',()=>'').update('labelForm',()=>(0,_immutable.fromJS)({}));case'SUBMIT_LABEL_FORM':{const metaPath=['modifiedData','metadatas',state.get('labelToEdit'),'list'];return state.updateIn([...metaPath,'label'],()=>state.getIn(['labelForm','label'])).updateIn([...metaPath,'sortable'],()=>state.getIn(['labelForm','sortable']));}case'SUBMIT_SUCCEEDED':return state.update('initialData',()=>state.get('modifiedData'));default:return state;}};var _default=reducer;exports.default=_default;

/***/ }),

/***/ 2619:
/***/ (function(module) {

module.exports = JSON.parse("[{\"label\":{\"id\":\"content-manager.form.Input.search\"},\"customBootstrapClass\":\"col-md-4\",\"didCheckErrors\":false,\"errors\":[],\"name\":\"settings.searchable\",\"type\":\"bool\",\"validations\":{}},{\"label\":{\"id\":\"content-manager.form.Input.filters\"},\"customBootstrapClass\":\"col-md-4\",\"didCheckErrors\":false,\"errors\":[],\"name\":\"settings.filterable\",\"type\":\"bool\",\"validations\":{}},{\"label\":{\"id\":\"content-manager.form.Input.bulkActions\"},\"customBootstrapClass\":\"col-md-4\",\"didCheckErrors\":false,\"errors\":[],\"name\":\"settings.bulkable\",\"type\":\"bool\",\"validations\":{}},{\"label\":{\"id\":\"content-manager.form.Input.pageEntries\"},\"customBootstrapClass\":\"col-md-4\",\"didCheckErrors\":false,\"errors\":[],\"description\":{\"id\":\"content-manager.form.Input.pageEntries.inputDescription\"},\"name\":\"settings.pageSize\",\"options\":[10,20,50,100],\"type\":\"select\",\"validations\":{}},{\"label\":{\"id\":\"content-manager.form.Input.defaultSort\"},\"customBootstrapClass\":\"col-md-4 ml-md-auto\",\"didCheckErrors\":false,\"errors\":[],\"style\":{\"marginRight\":\"-20px\"},\"name\":\"settings.defaultSortBy\",\"options\":[\"id\"],\"type\":\"select\",\"validations\":{}},{\"label\":{\"id\":\"app.utils.defaultMessage\"},\"customBootstrapClass\":\"col-md-2\",\"didCheckErrors\":false,\"errors\":[],\"name\":\"settings.defaultSortOrder\",\"options\":[\"ASC\",\"DESC\"],\"type\":\"select\",\"validations\":{}}]");

/***/ })

}]);