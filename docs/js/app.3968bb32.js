(function(e){function t(t){for(var r,i,a=t[0],u=t[1],c=t[2],l=0,h=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1466:function(e,t,n){"use strict";var r=n("f44b"),o=n.n(r);o.a},"156c":function(e,t,n){"use strict";var r=n("ec03"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[e._m(0),n("p",[e._v("A fully working Vue.js terminal emulator.")]),n("vue-command",{attrs:{"help-timeout":1250,commands:e.commands,"show-help":""}}),e._m(1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("a",{attrs:{href:"https://github.com/ndabAP/vue-command"}},[e._v("vue-command")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("      "),n("code",[e._v("\n$ npm i --save vue-command\n      ")]),e._v("\n    ")])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-command",on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.mutatePointerHandler(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.mutatePointerHandler(t)}],keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.autocomplete(t))}}},[n("div",{staticClass:"term",class:{"white-bg":e.whiteTheme,"dark-bg":!e.whiteTheme}},[e.hideBar?e._e():n("div",{staticClass:"term-bar"},[n("span",{staticClass:"term-title",class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme}},[e._v("\n        "+e._s(e.title)+"\n      ")])]),n("div",{ref:"term-std",staticClass:"term-std"},[n("div",{staticClass:"term-cont"},[e.showIntro?n("div",{class:{"white-font":!e.whiteTheme,"dark-font":e.whiteTheme}},[e._v("\n          "+e._s(e.intro)+"\n        ")]):e._e(),n("stdin",{attrs:{bus:e.bus,"hide-prompt":e.hidePrompt,"is-in-progress":e.isInProgress,"is-last":0===e.progress,prompt:e.prompt,"help-text":e.helpText,"keep-prompt":e.keepPrompt,"help-timeout":e.helpTimeout,"show-help":e.showHelp,"white-theme":e.whiteTheme,uid:e._uid},on:{handle:e.handle,typing:e.setCurrent}}),e._l(e.history,(function(t,r){return n("div",{key:r},[n("stdout",{staticClass:"term-stdout",attrs:{"white-theme":e.whiteTheme,stdout:t}}),n("stdin",{attrs:{bus:e.bus,"hide-prompt":e.hidePrompt,"is-in-progress":e.isInProgress,"is-last":r===e.progress-1,"last-command":e.last,prompt:e.prompt,"help-text":e.helpText,"keep-prompt":e.keepPrompt,"help-timeout":e.helpTimeout,"show-help":e.showHelp,"white-theme":e.whiteTheme,uid:e._uid},on:{handle:e.handle,typing:e.setCurrent}})],1)}))],2)])])])},a=[],u=(n("96cf"),n("3b8d")),c=(n("f559"),n("55dd"),n("c5f6"),n("3852")),p=n.n(c),l=n("a59b"),h=n.n(l),d=n("0644"),m=n.n(d),f=n("d623"),y=n.n(f),b=n("13ea"),w=n.n(b),v=n("c641"),g=n.n(v),k=n("ec69"),x=n.n(k),_=n("3a0e"),P=n.n(_),T=n("66c7"),O=n.n(T),j=n("5add"),C=n.n(j),I=n("9638"),$=n.n(I),L=n("f2d7"),S=n.n(L),B=n("0863"),E=n.n(B),H=n("9b02"),N=n.n(H),U=n("406e"),A=n("afab"),D=n.n(A),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLast||!e.isInProgress,expression:"!isLast || !isInProgress"}]},[e.hidePrompt?e._e():n("span",{staticClass:"term-ps",class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme}},[e.isLast||!e.keepPrompt?[e._v(e._s(e.prompt))]:e._e(),!e.isLast&&e.keepPrompt?[e._v(e._s(e.localPrompt))]:e._e()],2),n("span",{staticClass:"term-stdin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.command,expression:"command"}],ref:"input",class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme},attrs:{autofocus:e.isLast,disabled:!e.isLast,placeholder:e.placeholder,type:"text"},domProps:{value:e.command},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handle(t)},input:function(t){t.target.composing||(e.command=t.target.value)}}})])])},q=[],F=n("b8ce"),R=n.n(F),V={props:{bus:{type:Object,required:!0},helpText:{type:String},helpTimeout:{type:Number},hidePrompt:{type:Boolean,default:!1},isInProgress:{type:Boolean,default:!1},isLast:{type:Boolean,default:!1,required:!0},lastCommand:{type:String,default:""},keepPrompt:{type:Boolean,default:!1},prompt:{type:String},showHelp:{type:Boolean,default:!1},uid:{type:Number,required:!0},whiteTheme:{type:Boolean}},data:function(){return{command:"",localPrompt:"",placeholder:""}},watch:{lastCommand:function(){Object(U["a"])(!w()(this.lastCommand),this.isLast)&&this.setCommand(R()(this.lastCommand))},command:function(){this.$emit("typing",this.command)},isInProgress:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!Object(U["a"])(!this.isInProgress,this.isLast)){e.next=5;break}return e.next=3,this.$nextTick();case 3:this.$refs.input.scrollIntoView(),this.$refs.input.focus();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){var e=this;setTimeout((function(){Object(U["a"])(e.isLast,e.showHelp)&&e.setPlaceholder(e.helpText)}),this.helpTimeout)},mounted:function(){var e=this;this.$refs.input.scrollIntoView(),this.$refs.input.focus();var t=function(t){var n=t.command,r=t.uid;Object(U["a"])(e.isLast,$()(e.uid,r))&&e.setCommand(n)};this.bus.$on("autocomplete",t)},methods:{handle:function(){this.isInProgress||(this.setLocalPrompt(this.prompt),this.$emit("handle",this.command),this.setPlaceholder(""))},setPlaceholder:function(e){this.placeholder=e},setCommand:function(e){this.command=e},setLocalPrompt:function(e){this.localPrompt=e}}},J=V,W=(n("1466"),n("2877")),z=Object(W["a"])(J,M,q,!1,null,null,null),G=z.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:{"dark-font":e.whiteTheme,"white-font":!e.whiteTheme},domProps:{innerHTML:e._s(e.stdout)}})},Q=[],X={props:{stdout:{type:String,default:""},whiteTheme:{type:Boolean}}},Y=X,Z=(n("7d05"),Object(W["a"])(Y,K,Q,!1,null,null,null)),ee=Z.exports,te="Tab",ne="ArrowUp",re="ArrowDown",oe=new r["a"],se={components:{Stdin:G,Stdout:ee},props:{commands:{type:Object,required:!0},helpTimeout:{type:Number,default:4e3},hideBar:{type:Boolean,default:!1},hidePrompt:{type:Boolean,default:!1},helpText:{type:String,default:"Type help"},intro:{type:String,default:"Fasten your seatbelts!"},keepPrompt:{type:Boolean,default:!1},notFound:{type:String,default:"command not found"},prompt:{type:String,default:"~neil@moon:#"},showHelp:{type:Boolean,default:!1},showIntro:{type:Boolean,default:!1},title:{type:String,default:"neil@moon: ~"},whiteTheme:{type:Boolean,default:!1},yargsOptions:{type:Object,default:function(){return{}}}},data:function(){return{bus:oe,history:[],isInProgress:!1,executed:[],current:"",last:"",pointer:0}},computed:{progress:{get:function(){return y()(this.history)}}},watch:{current:function(){this.$emit("input",this.current)}},methods:{mutatePointerHandler:function(e){var t=e.key,n=Object(U["a"])($()(t,ne),S()(this.pointer,0));n&&(this.setPointer(this.pointer-1),this.setLast(N()(this.executed,this.pointer)));var r=Object(U["a"])($()(t,re),E()(this.pointer,y()(this.executed)-1));r&&(this.setPointer(this.pointer+1),this.setLast(N()(this.executed,this.pointer)))},autocomplete:function(e){var t=this,n=e.key;Object(U["a"])($()(n,te),!w()(this.current))&&g()(x()(this.commands).sort(),(function(e){if(e.startsWith(t.current))return t.bus.$emit("autocomplete",{command:e,uid:t._uid}),!1}))},handle:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=O()(t),this.$emit("execute",t),n=h()(D()(t,this.yargsOptions)._),!w()(n)){e.next=7;break}this.history.push(null),e.next=24;break;case 7:if(o=m()(this.executed),o=C()(o,t),o.push(t),this.setExecuted(o),this.setPointer(y()(o)),!p()(this.commands,n)){e.next=23;break}return this.history.push(""),this.setIsInProgress(!0),e.next=17,Promise.resolve(P()(this.commands,n,D()(t,this.yargsOptions)));case 17:s=e.sent,r["a"].set(this.history,y()(this.history)-1,s),this.setIsInProgress(!1),this.$emit("executed",t),e.next=24;break;case 23:this.history.push("".concat(t,": ").concat(this.notFound));case 24:this.setCurrent("");case 25:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),setCurrent:function(e){this.current=e},setIsInProgress:function(e){this.isInProgress=e},setExecuted:function(e){this.executed=e},setPointer:function(e){this.pointer=e},setLast:function(e){this.last=e}}},ie=se,ae=(n("156c"),Object(W["a"])(ie,i,a,!1,null,null,null)),ue=ae.exports,ce={components:{VueCommand:ue},data:function(){return{commands:{pokedex:function(e){var t=e.color,n=e._;return t&&"pikachu"===n[1]?"yellow":"Usage: pokedex pokemon [option]<br><br>\n\n          Example: pokedex pikachu --color\n        "},help:function(){return"Usage: pokedex pokemon [option]<br><br>\n\n        Example: pokedex pikachu --color\n      "}}}}},pe=ce,le=(n("5c0b"),Object(W["a"])(pe,o,s,!1,null,null,null)),he=le.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(he)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("e332"),o=n.n(r);o.a},"729e":function(e,t,n){},"7d05":function(e,t,n){"use strict";var r=n("729e"),o=n.n(r);o.a},be69:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="be69"},e332:function(e,t,n){},ec03:function(e,t,n){},f44b:function(e,t,n){}});
//# sourceMappingURL=app.3968bb32.js.map