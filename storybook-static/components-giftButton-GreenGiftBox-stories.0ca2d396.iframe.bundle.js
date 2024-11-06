"use strict";(self.webpackChunkseason_ui=self.webpackChunkseason_ui||[]).push([[137],{"./src/components/giftButton/GreenGiftBox.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GreenGiftBox_stories});var _rect,_rect2,_rect3,_rect4,_rect5,_path,_path2,_path3,react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgGiftBoxGreenHat(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",_extends({width:145,height:72,viewBox:"0 0 161 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_rect||(_rect=react.createElement("rect",{x:2.5,y:50.0107,width:134.51,height:19.4893,rx:4.5,fill:"white",stroke:"#436E53",strokeWidth:5})),_rect2||(_rect2=react.createElement("rect",{x:49.3283,y:51.5092,width:1.6158,height:19.1162,fill:"#436E53"})),_rect3||(_rect3=react.createElement("rect",{x:49.3283,y:51.5092,width:1.6158,height:19.1162,stroke:"#436E53"})),_rect4||(_rect4=react.createElement("rect",{x:89.4373,y:51.5092,width:1.6158,height:19.1162,fill:"#436E53"})),_rect5||(_rect5=react.createElement("rect",{x:89.4373,y:51.5092,width:1.6158,height:19.1162,stroke:"#436E53"})),_path||(_path=react.createElement("path",{d:"M70.6267 49.6973C68.1563 31.1846 71.6731 -4.09159 105.504 2.90534C147.793 11.6515 74.1145 53.6331 70.6267 49.6973ZM70.6267 49.6973C68.5922 35.4119 59.8147 8.32793 40.981 14.2753C17.4387 21.7096 68.011 51.4466 70.6267 49.6973Z",stroke:"#436E53",strokeWidth:4})),_path2||(_path2=react.createElement("path",{d:"M72.8065 50.1039C92.861 46.897 133.057 38.7339 133.406 31.737C133.755 24.74 151.281 23.5739 160 23.8654",stroke:"#436E53",strokeWidth:4})),_path3||(_path3=react.createElement("path",{d:"M68.0109 49.6666C51.1535 46.897 16.3924 39.5211 12.2071 32.1743",stroke:"#436E53",strokeWidth:4})))}const ForwardRef=react.forwardRef(SvgGiftBoxGreenHat);__webpack_require__.p;var giftBoxGreenBody_rect,giftBoxGreenBody_rect2,giftBoxGreenBody_rect3;function giftBoxGreenBody_extends(){return giftBoxGreenBody_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},giftBoxGreenBody_extends.apply(null,arguments)}function SvgGiftBoxGreenBody(_ref,svgRef){let{title,titleId,...props}=_ref;return react.createElement("svg",giftBoxGreenBody_extends({width:120,height:80,viewBox:"0 0 120 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,giftBoxGreenBody_rect||(giftBoxGreenBody_rect=react.createElement("rect",{x:2.5,y:2.5,width:115,height:75,rx:7.5,fill:"white",stroke:"#436E53",strokeWidth:5})),giftBoxGreenBody_rect2||(giftBoxGreenBody_rect2=react.createElement("rect",{width:2.6087,height:77.4194,transform:"translate(39.1304)",fill:"#436E53"})),giftBoxGreenBody_rect3||(giftBoxGreenBody_rect3=react.createElement("rect",{width:2.6087,height:77.4194,transform:"translate(79.1305 2.58063)",fill:"#436E53"})))}const giftBoxGreenBody_ForwardRef=react.forwardRef(SvgGiftBoxGreenBody);__webpack_require__.p;var popper=__webpack_require__("./src/icons/popper.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RedGiftBox=()=>{const[isHovered,setIsHovered]=(0,react.useState)(!1),[showPopper,setShowPopper]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(GiftBox,{onMouseEnter:()=>{setIsHovered(!0),setShowPopper(!1)},onMouseLeave:()=>{setIsHovered(!1),setShowPopper(!1)},children:[(0,jsx_runtime.jsx)(Lid,{className:isHovered?"hovered":"",onTransitionEnd:()=>{isHovered&&setShowPopper(!0)},children:(0,jsx_runtime.jsx)(ForwardRef,{})}),(0,jsx_runtime.jsxs)(BoxBody,{children:[(0,jsx_runtime.jsx)(giftBoxGreenBody_ForwardRef,{}),(0,jsx_runtime.jsx)(StyledPopper,{style:{opacity:showPopper?1:0}})]})]})},GreenGiftBox=RedGiftBox,GiftBox=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`,Lid=emotion_styled_browser_esm.A.div`
  margin-bottom: -20px;
  margin-left: -3px;
  z-index: 2;
  transition: transform 0.3s ease;

  &.hovered {
    transform: translateY(-40px) translateX(-20px) rotate(-30deg);
  }
`,BoxBody=emotion_styled_browser_esm.A.div`
  z-index: 1;
  position: relative;
`,StyledPopper=(0,emotion_styled_browser_esm.A)(popper.h)`
  position: absolute;
  top: -37px;
  left: 35px;
  z-index: 3;
  transition: opacity 0.1s ease;
`;RedGiftBox.__docgenInfo={description:"",methods:[],displayName:"RedGiftBox"};const GreenGiftBox_stories={title:"Components/GiftButton/GreenGiftBox",component:GreenGiftBox,parameters:{layout:"centered"}},Default=(args=>(0,jsx_runtime.jsx)(GreenGiftBox,{...args})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <GreenGiftBox {...args} />",...Default.parameters?.docs?.source}}}},"./src/icons/popper.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ForwardRef});var _circle,_circle2,_circle3,_circle4,_circle5,_circle6,_path,_path2,_path3,_path4,_path5,_path6,_path7,_path8,_rect,_rect2,_rect3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function SvgPopper(_ref,svgRef){let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:74,height:35,viewBox:"0 0 74 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:65.5,cy:5.5,r:2.5,fill:"#E9DF5C"})),_circle2||(_circle2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:40.5,cy:11.5,r:2.5,fill:"#5CE9D8"})),_circle3||(_circle3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:55.5,cy:17.5,r:1.5,fill:"#63E95C"})),_circle4||(_circle4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:63.5,cy:15.5,r:1.5,fill:"#E95C5C"})),_circle5||(_circle5=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:43,cy:29,r:2,fill:"#865CE9"})),_circle6||(_circle6=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:31.5,cy:30.5,r:2.5,fill:"#92E95C"})),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M35 18L35.8981 20.7639H38.8042L36.4531 22.4721L37.3511 25.2361L35 23.5279L32.6489 25.2361L33.5469 22.4721L31.1958 20.7639H34.1019L35 18Z",fill:"#EE6363"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M55.5 30L56.0613 31.7275H57.8776L56.4082 32.7951L56.9695 34.5225L55.5 33.4549L54.0305 34.5225L54.5918 32.7951L53.1224 31.7275H54.9387L55.5 30Z",fill:"#636AEE"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M50.5 8L51.0613 9.72746H52.8776L51.4082 10.7951L51.9695 12.5225L50.5 11.4549L49.0305 12.5225L49.5918 10.7951L48.1224 9.72746H49.9387L50.5 8Z",fill:"#506ED0"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M14.5 25L15.2858 27.4184H17.8287L15.7714 28.9131L16.5572 31.3316L14.5 29.8369L12.4428 31.3316L13.2286 28.9131L11.1713 27.4184H13.7142L14.5 25Z",fill:"#D35E5E"})),_path5||(_path5=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M61.7462 20.9504L62.7849 26.0416L57.8564 24.3956L61.7462 20.9504Z",fill:"#5093C9"})),_path6||(_path6=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M24.3011 16.2117L28.9471 20.1059L23.2517 22.1824L24.3011 16.2117Z",fill:"#3ABE49"})),_path7||(_path7=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M48.3842 18.5772L47.0835 21.7878L44.9534 19.0561L48.3842 18.5772Z",fill:"#1E5F25"})),_path8||(_path8=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2.5 28L4.66506 31.75H0.334936L2.5 28Z",fill:"#E8A73E"})),_rect||(_rect=react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:48,y:26,width:4,height:4,fill:"#EE9F66"})),_rect2||(_rect2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:71.1074,y:26,width:3,height:3,transform:"rotate(21.662 71.1074 26)",fill:"#66E5EE"})),_rect3||(_rect3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:52,width:4,height:4,fill:"#D766EE"})))}const ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgPopper);__webpack_require__.p}}]);
//# sourceMappingURL=components-giftButton-GreenGiftBox-stories.0ca2d396.iframe.bundle.js.map