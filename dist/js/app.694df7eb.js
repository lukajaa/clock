(function(t){function e(e){for(var i,l,r=e[0],c=e[1],n=e[2],d=0,v=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&v.push(o[l][0]),o[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,n||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=l(l.s=s[0]))}return t}var i={},o={app:0},a=[];function l(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=i,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(s,i,function(e){return t[e]}.bind(null,i));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var n=0;n<r.length;n++)e(r[n]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0800":function(t){t.exports=JSON.parse('{"Default":{"color":"primary","button_colors":{"Useful Links":"","Lunch Menu":"","Custom Schedule":"","Customize":""},"progress_color":"is-primary"},"Monochrome":{"color":"dark","button_colors":{"Useful Links":"is-dark","Lunch Menu":"is-dark","Custom Schedule":"is-dark","Customize":"is-dark"},"progress_color":"is-dark"}}')},"20cb":function(t,e,s){var i={"./1.jpg":"6c20"};function o(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=a,t.exports=o,o.id="20cb"},"2fc4":function(t,e,s){},"3f31":function(t,e,s){var i={"./1.jpg":"6c20"};function o(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=a,t.exports=o,o.id="3f31"},"486e":function(t){t.exports=JSON.parse('{"Immersive1":["2021/12/1","2021/12/31"],"Immersive2":["2022/06/1","2022/06/31"],"Immersive1 Schedule":{"Immersive 1":[[9,0],[15,0]]},"Immersive2 Schedule":{"Immersive 2":[[9,0],[15,0]]}}')},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"body"}},[i("section",{staticClass:"section",attrs:{id:"top-bar"}},[i("nav",{staticClass:"level"},[t.information_bools["Clock"]?i("div",{staticClass:"level-left"},[i("h1",{staticClass:"title is-1"},[t._v(t._s(t.getCurrentTime(t.time,!0)))])]):t._e(),t.information_bools["Time Left"]?i("div",{staticClass:"level-right"},[i("h1",{staticClass:"title is-1"},[t._v(t._s(t.getBlock()))])]):t._e()])]),i("section",{staticClass:"section",attrs:{id:"mid-bar"}},[i("nav",{staticClass:"level"},[t.information_bools["Date"]?i("div",{staticClass:"level-left"},[i("h2",{staticClass:"subtitle is-3 subtext",attrs:{id:"date"}},[t._v(t._s(t.time.toDateString()))])]):t._e(),t.special_schedule_bool&&t.information_bools["Special Schedule Indicator"]?i("div",{staticClass:"level-right"},[i("h2",{staticClass:"subtitle is-3 subtext",attrs:{id:"date"}},[t._v("SPECIAL SCHEDULE")])]):t._e()])]),t.show_schedule?i("div",{attrs:{id:"block-container"}},t._l(t.getDayDict(),(function(e,s){return i("section",{key:s,staticClass:"section block"},[i("b-progress",{attrs:{value:t.getProgress(e),size:"is-large",type:t.progress_color,"show-value":""}},[i("nav",{staticClass:"level is-mobile"},[i("div",{staticClass:"level-left"},[i("p",{staticClass:"level-item"},[t._v(t._s(t.getName(s)))])]),i("div",{staticClass:"level-right"},[i("p",{staticClass:"level-item"},[t._v(t._s(t.getTime(e[0])+" - "+t.getTime(e[1])))])])])])],1)})),0):t._e(),i("section",{staticClass:"section"},[i("nav",{staticClass:"level"},[i("div",{staticClass:"level-left"},[i("div",{staticClass:"level-item"},[i("b-dropdown",{attrs:{"aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var s=e.active;return[i("b-button",{attrs:{label:"Useful Links",type:t.button_colors["Useful Links"],"icon-right":s?"menu-up":"menu-down",rounded:""}})]}}])},[i("b-dropdown-item",{attrs:{"has-link":"","aria-role":"listitem"}},[i("a",{attrs:{href:"https://www.bayschoolsf.org/",target:"_blank"}},[t._v("Bay Site")])]),i("b-dropdown-item",{attrs:{"has-link":"","aria-role":"listitem"}},[i("a",{attrs:{href:"https://bayschoolsf.instructure.com/",target:"_blank"}},[t._v("Canvas")])]),i("b-dropdown-item",{attrs:{"has-link":"","aria-role":"listitem"}},[i("a",{attrs:{href:"https://bayschoolsf.myschoolapp.com/",target:"_blank"}},[t._v("My Bay")])])],1)],1),i("div",{staticClass:"level-item"},[i("b-button",{attrs:{label:"Lunch Menu",type:t.button_colors["Lunch Menu"],rounded:""},on:{click:function(e){t.isLunchModalActive=!0}}})],1),i("div",{staticClass:"level-item"},[i("b-button",{attrs:{label:"Custom Schedule",type:t.button_colors["Custom Schedule"],rounded:""},on:{click:function(e){t.isRescheduleModalActive=!0}}})],1),i("div",{staticClass:"level-item"},[i("b-button",{attrs:{label:"Customize",type:t.button_colors["Customize"],rounded:""},on:{click:function(e){t.isCustomizeModalActive=!0}}})],1)])])]),i("b-modal",{model:{value:t.isLunchModalActive,callback:function(e){t.isLunchModalActive=e},expression:"isLunchModalActive"}},t._l(t.menu_length,(function(t){return i("p",{key:t,staticClass:"image"},[i("img",{attrs:{src:s("20cb")("./"+t+".jpg")}})])})),0),i("b-modal",{attrs:{"can-cancel":"['escape', 'outside']"},model:{value:t.isRescheduleModalActive,callback:function(e){t.isRescheduleModalActive=e},expression:"isRescheduleModalActive"}},[i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v("Custom Schedule")]),i("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.isRescheduleModalActive=!1}}})]),i("section",{staticClass:"modal-card-body"},[t._l(Object.keys(t.blocks),(function(e){return i("b-field",{key:e,attrs:{label:e+" Block:"}},[i("b-input",{model:{value:t.blocks[e],callback:function(s){t.$set(t.blocks,e,s)},expression:"blocks[block]"}})],1)})),i("b-field",{attrs:{label:"Activities + Sports/Drama Block"}},[i("b-input",{model:{value:t.activity_name,callback:function(e){t.activity_name=e},expression:"activity_name"}})],1),i("nav",{staticClass:"level"},[i("div",{staticClass:"level-left"},[i("div",{staticClass:"level-item"},[i("b-checkbox",{model:{value:t.activities_bool,callback:function(e){t.activities_bool=e},expression:"activities_bool"}},[t._v(" Toggle Activities ")])],1)])]),i("nav",{staticClass:"level"},[i("div",{staticClass:"level-left"},[i("div",{staticClass:"level-item"},[i("h6",{staticClass:"title is-6"},[t._v("Activities Schedule")])]),i("div",{staticClass:"level-item"},[i("b-tag",{attrs:{type:"is-info",rounded:""}},[t._v("New!")])],1)])]),i("b-tabs",{model:{value:t.activities_tabs,callback:function(e){t.activities_tabs=e},expression:"activities_tabs"}},t._l(t.activities_schedule,(function(e,s){return i("b-tab-item",{key:s,attrs:{label:s}},[i("b-timepicker",{attrs:{placeholder:"Start Time",icon:"clock"},model:{value:e[0],callback:function(s){t.$set(e,0,s)},expression:"value[0]"}}),i("b-timepicker",{attrs:{placeholder:"End Time",icon:"clock"},model:{value:e[1],callback:function(s){t.$set(e,1,s)},expression:"value[1]"}})],1)})),1)],2),i("footer",{staticClass:"modal-card-foot"},[i("b-button",{attrs:{label:"Close"},on:{click:function(e){t.isRescheduleModalActive=!1}}}),i("b-button",{attrs:{label:"Save",type:"is-primary"},on:{click:t.saveBlocks}})],1)])]),i("b-modal",{attrs:{"can-cancel":"['escape', 'outside']"},model:{value:t.isCustomizeModalActive,callback:function(e){t.isCustomizeModalActive=e},expression:"isCustomizeModalActive"}},[i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v("Customize")]),i("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.isCustomizeModalActive=!1}}})]),i("section",{staticClass:"modal-card-body"},[i("h4",{staticClass:"subtitle is-4"},[t._v("Information")]),i("h5",{staticClass:"subtitle is-5"},[t._v("Toggles")]),i("nav",{staticClass:"level"},[i("div",{staticClass:"level-left"},[i("div",{staticClass:"level-item"},[i("b-field",t._l(Object.keys(t.information_bools),(function(e){return i("b-checkbox",{key:e,model:{value:t.information_bools[e],callback:function(s){t.$set(t.information_bools,e,s)},expression:"information_bools[item]"}},[t._v(" "+t._s(e)+" ")])})),1)],1)])]),i("h5",{staticClass:"subtitle is-5"},[t._v("Other Options")]),i("nav",{staticClass:"level"},[i("div",{staticClass:"level-left"},[i("div",{staticClass:"level-item"},[i("b-field",t._l(Object.keys(t.other_options),(function(e){return i("b-checkbox",{key:e,model:{value:t.other_options[e],callback:function(s){t.$set(t.other_options,e,s)},expression:"other_options[item]"}},[t._v(" "+t._s(e)+" ")])})),1)],1)])]),i("h4",{staticClass:"subtitle is-4"},[t._v("Progress Bar")]),i("nav",{staticClass:"level"},[i("div",{staticClass:"level-left"},[i("div",{staticClass:"level-item"},[i("b-field",{attrs:{label:"Color"}},[i("b-select",{attrs:{placeholder:"Select a color"},model:{value:t.progress_color,callback:function(e){t.progress_color=e},expression:"progress_color"}},[i("option",{attrs:{disabled:""}},[t._v("Default Colors:")]),t._l(t.bar_possible_colors,(function(e,s){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(s)+" ")])})),i("option",{attrs:{disabled:""}},[t._v("Olympic Team Colors:")]),t._l(t.olympic_teams,(function(e,s){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(s.replace(/^\w/,(function(t){return t.toUpperCase()})))+" ")])}))],2)],1)],1)])]),i("h4",{staticClass:"subtitle is-4"},[t._v("Buttons")]),i("nav",{staticClass:"level"},[i("div",{staticClass:"level-left"},t._l(t.button_colors,(function(e,s){return i("div",{key:e,staticClass:"level-item"},[i("b-field",{attrs:{label:s}},[i("b-select",{attrs:{placeholder:"Select a color"},model:{value:t.button_colors[s],callback:function(e){t.$set(t.button_colors,s,e)},expression:"button_colors[button_name]"}},[i("option",{attrs:{disabled:""}},[t._v("Default Colors:")]),t._l(t.btn_possible_colors,(function(e,s){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(s)+" ")])})),i("option",{attrs:{disabled:""}},[t._v("Olympic Team Colors:")]),t._l(t.olympic_teams,(function(e,s){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(s.replace(/^\w/,(function(t){return t.toUpperCase()})))+" ")])}))],2)],1)],1)})),0)]),i("h4",{staticClass:"subtitle is-4"},[t._v("Presets")]),i("h5",{staticClass:"subtitle is-5"},[t._v("Rep your Olympic Team!")]),i("b-field",t._l(Object.keys(t.olympic_teams),(function(e){return i("b-radio-button",{key:e,attrs:{"native-value":e,type:"is-"+e+"-team is-light is-outlined"},nativeOn:{click:function(s){return s.preventDefault(),t.setPreset(e)}},model:{value:t.preset,callback:function(e){t.preset=e},expression:"preset"}},[i("span",[t._v(t._s(e.replace(/^\w/,(function(t){return t.toUpperCase()}))))])])})),1),i("h5",{staticClass:"subtitle is-5"},[t._v("Other")]),i("b-field",t._l(t.presets,(function(e,s){return i("b-radio-button",{key:s,attrs:{"native-value":s,type:"is-"+e["color"]+" is-light is-outlined"},nativeOn:{click:function(e){return e.preventDefault(),t.setPreset(s)}},model:{value:t.preset,callback:function(e){t.preset=e},expression:"preset"}},[i("span",[t._v(t._s(s))])])})),1)],1),i("footer",{staticClass:"modal-card-foot"},[i("b-button",{attrs:{label:"Close"},on:{click:function(e){t.isCustomizeModalActive=!1}}}),i("b-button",{attrs:{label:"Save",type:"is-primary"},on:{click:t.saveCustomizations}})],1)])]),i("b-modal",{attrs:{"can-cancel":"['escape', 'outside']"},model:{value:t.isCreditsModalActive,callback:function(e){t.isCreditsModalActive=e},expression:"isCreditsModalActive"}},[i("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v("Credits")]),i("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.isCreditsModalActive=!1}}})]),i("section",{staticClass:"modal-card-body"},[i("p",[t._v("Bao AiDan: Design Help and the Original Idea")]),i("p",[t._v("Mr. Swag: Design Help")]),i("p",[t._v("Timbo: Moral Support")]),i("p",[t._v("Jay Cob:")]),i("p",[t._v("Reed: Read")]),i("p",[t._v("Tim: Getting into an argument and then realizing we were agreeing with him.")])]),i("footer",{staticClass:"modal-card-foot"},[i("b-button",{attrs:{label:"Close"},on:{click:function(e){t.isCreditsModalActive=!1}}})],1)])]),i("footer",{staticClass:"footer"},[i("div",{staticClass:"content has-text-centered"},[t._m(0),i("p",[t._v("Found a Bug? Email: lchang24@bayschoolsf.org")]),i("p",[i("a",{on:{click:function(e){t.isCreditsModalActive=!0}}},[t._v("Other Credits")]),t._v(".")])])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Coded by "),s("a",{attrs:{href:"https://github.com/FairfieldBW",target:"_blank"}},[t._v("Lucas Chang")]),t._v(".")])}],l=s("3835"),r=(s("4fad"),s("07ac"),s("d3b7"),s("b64b"),s("ddb0"),s("c565")),c=s("d4aa"),n=s("486e"),u=s("ba4d"),d=s("0800"),v={data:function(){return{time:new Date,schedule:r,special_schedule:c,immersives:n,breaks:u,presets:d,isRescheduleModalActive:!1,isCustomizeModalActive:!1,isLunchModalActive:!1,isCreditsModalActive:!1,information_bools:{Clock:!0,"Time Left":!0,Date:!0,"Special Schedule Indicator":!0},other_options:{"Detailed Time Left":!1},button_colors:{"Useful Links":"","Lunch Menu":"","Custom Schedule":"",Customize:""},olympic_teams:{blue:"is-blue-team",crimson:"is-crimson-team",orange:"is-orange-team",gold:"is-gold-team",green:"is-green-team",grey:"is-grey-team",pink:"is-pink-team",purple:"is-purple-team"},blocks:{A:"A",B:"B",C:"C",D:"D",E:"E",F:"F"},btn_possible_colors:{Black:"is-black",Gray:"is-dark",Green:"is-primary",Blue:"is-info",Yellow:"is-warning",Red:"is-danger",None:""},bar_possible_colors:{Gray:"is-dark",Green:"is-primary",Blue:"is-info",Yellow:"is-warning",Red:"is-danger"},progress_color:"is-primary",preset:"",activities_bool:!0,activities_schedule:{Monday:[[15,45],[17,0]],Tuesday:[[15,45],[17,0]],Wednesday:[[15,45],[17,0]],Thursday:[[14,35],[16,0]],Friday:[[14,35],[16,0]]},activity_name:"Activities + Sports/Drama Block",activities_tabs:0,menu_length:0,special_schedule_bool:!1,show_schedule:!0}},methods:{setPreset:function(t){if(this.preset=t,t in this.olympic_teams){var e="is-"+t+"-team";this.progress_color=e,this.button_colors={"Useful Links":e,"Lunch Menu":e,"Custom Schedule":e,Customize:e}}else this.progress_color=this.presets[t]["progress_color"],this.button_colors=this.presets[t]["button_colors"]},saveCustomizations:function(){var t={information_bools:this.information_bools,progress_color:this.progress_color,button_colors:this.button_colors,other_options:this.other_options},e=JSON.stringify(t);localStorage.setItem("customizations",e),this.isCustomizeModalActive=!1},saveBlocks:function(){var t=JSON.stringify(this.blocks);localStorage.setItem("blocks",t);for(var e={},s=0,i=Object.entries(this.activities_schedule);s<i.length;s++){var o=Object(l["a"])(i[s],2),a=o[0],r=o[1];e[a]=[[r[0].getHours(),r[0].getMinutes()],[r[1].getHours(),r[1].getMinutes()]]}var c={activities_bool:this.activities_bool,activities_schedule:e,activity_name:this.activity_name},n=JSON.stringify(c);localStorage.setItem("activity_data",n),this.isRescheduleModalActive=!1},getName:function(t){return"Activities + Sports/Drama Block"==t?this.activity_name:t in this.blocks?this.blocks[t]:t},loadSchedule:function(t){for(var e=t,s=this.time,i=0,o=Object.values(e);i<o.length;i++){var a=o[i];if("[object Array]"==Object.prototype.toString.call(a))a[0]=new Date(a[0]),a[1]=new Date(a[1]);else for(var l=0,r=Object.values(a);l<r.length;l++){var c=r[l];c[0]=new Date(s.getFullYear(),s.getMonth(),s.getDate(),c[0][0],c[0][1]),c[1]=new Date(s.getFullYear(),s.getMonth(),s.getDate(),c[1][0],c[1][1])}}return e},getTimeLeft:function(t){var e="",s=0;if(this.other_options["Detailed Time Left"]){var i=Math.floor(t/36e5);s=Math.floor(t%36e5/6e4);var o=Math.floor(t%36e5%6e4/1e3);0!=i&&(e+=i+":"),s=s<10?"0"+s:s,o=o<10?"0"+o:o,e+=s+":"+o}else s=Math.floor(t/6e4),e+=s+" minutes";return e},getDayDict:function(){for(var t=0,e=Object.keys(this.special_schedule);t<e.length;t++){var s=e[t],i=new Date(s);if(i.getFullYear()===this.time.getFullYear()&&i.getMonth()===this.time.getMonth()&&i.getDate()===this.time.getDate())return this.special_schedule_bool=!0,this.special_schedule[s]}if(this.time>this.immersives["Immersive1"][0]&&this.time<this.immersives["Immersive1"][1])return this.immersives["Immersive1 Schedule"];if(this.time>this.immersives["Immersive2"][0]&&this.time<this.immersives["Immersive2"][1])return this.immersives["Immersive2 Schedule"];if(this.special_schedule_bool=!1,this.activities_bool){var o=Object.values(this.schedule)[this.time.getDay()-1];return o["Activities + Sports/Drama Block"]=Object.values(this.activities_schedule)[this.time.getDay()-1],o}return Object.values(this.schedule)[this.time.getDay()-1]},getCurrentTime:function(t,e){var s=this.time.getHours(),i=this.time.getMinutes(),o=this.time.getSeconds(),a="AM";return s>11&&(12!=s&&(s-=12),a="PM"),i=i<10?"0"+i:i,o=o<10?"0"+o:o,e?s+":"+i+":"+o+a:s+":"+i+":"+o},getProgress:function(t){var e=parseInt((t[1]-t[0])/1e3)/60,s=parseInt((this.time-t[0])/1e3)/60;return Math.round(s/e*100)},getTime:function(t){var e=t.getHours(),s=t.getMinutes();return e>11&&12!=e&&(e-=12),e=e<10?"0"+e:e,s=s<10?"0"+s:s,e+":"+s},getFirstPeriod:function(t){return Object.values(t)[0][0]},getLastPeriod:function(t){return Object.values(t)[Object.keys(t).length-1][1]},getBlock:function(){for(var t=0,e=Object.entries(this.breaks);t<e.length;t++){var s=Object(l["a"])(e[t],2),i=s[0],o=s[1],a=new Date(o[0]),r=new Date(o[1]);if(this.time>a&&this.time<r)return this.show_schedule=!1,i}if(0==this.time.getDay()||6==this.time.getDay())return this.show_schedule=!1,"Weekend";var c=this.getDayDict();if(delete c["Activities + Sports/Drama Block"],this.time<this.getFirstPeriod(c))return this.show_schedule=!0,"School hasn't started";if(this.time>this.getLastPeriod(c))return this.show_schedule=!0,"School is over";this.show_schedule=!0;for(var n=0,u=Object.values(c);n<u.length;n++){var d=u[n];if(this.time>=d[0]&&this.time<d[1]){var v=d[1]-this.time;return this.getTimeLeft(v)+" left"}}return"Passing"},tick:function(){this.time=new Date,document.title=this.getBlock()}},created:function(){if(this.schedule=this.loadSchedule(this.schedule),this.immersives=this.loadSchedule(this.immersives),this.special_schedule=this.loadSchedule(this.special_schedule),localStorage.getItem("blocks"))try{this.blocks=JSON.parse(localStorage.getItem("blocks"));for(var t=0,e=Object.keys(this.blocks);t<e.length;t++){var i=e[t];"Activies + Sports/Drama"==i&&(this.blocks["Activities + Sports/Drama"]=this.blocks["Activies + Sports/Drama"],delete this.blocks["Activies + Sports/Drama"],this.saveBlocks())}}catch(h){localStorage.removeItem("blocks")}if(localStorage.getItem("customizations"))try{var o=JSON.parse(localStorage.getItem("customizations"));this.information_bools=o["information_bools"],this.progress_color=o["progress_color"],this.button_colors=o["button_colors"],this.other_options=o["other_options"]}catch(h){localStorage.removeItem("customizations")}if(localStorage.getItem("activity_data"))try{var a=JSON.parse(localStorage.getItem("activity_data"));this.activities_bool=a["activities_bool"],this.activities_schedule=a["activities_schedule"],this.activity_name=a["activity_name"]}catch(h){localStorage.removeItem("activity_data")}for(var r=0,c=Object.entries(this.activities_schedule);r<c.length;r++){var n=Object(l["a"])(c[r],2),u=n[0],d=n[1];this.activities_schedule[u]=[new Date(this.time.getFullYear(),this.time.getMonth(),this.time.getDate(),d[0][0],d[0][1]),new Date(this.time.getFullYear(),this.time.getMonth(),this.time.getDate(),d[1][0],d[1][1])]}var v=s("3f31");this.menu_length=v.keys().length,setInterval(this.tick,1e3)}},h=v,m=s("2877"),b=Object(m["a"])(h,o,a,!1,null,null,null),p=b.exports,f=(s("2fc4"),s("289d"));i["a"].config.productionTip=!1,i["a"].use(f["a"]),new i["a"]({render:function(t){return t(p)}}).$mount("#app")},"6c20":function(t,e,s){t.exports=s.p+"img/1.3d6780d2.jpg"},ba4d:function(t){t.exports=JSON.parse('{"S1 Midterm Break":["2021/10/16","2021/10/24"]}')},c565:function(t){t.exports=JSON.parse('{"Monday":{"Morning Meeting":[[8,30],[8,50]],"A":[[8,55],[10,10]],"B":[[10,15],[11,30]],"Lunch":[[11,30],[12,30]],"C":[[12,30],[13,45]],"D":[[13,50],[15,5]],"Tutorial":[[15,5],[15,35]]},"Tuesday":{"Group Advisory/1-on-1s":[[8,30],[8,50]],"E":[[8,55],[10,10]],"F":[[10,15],[11,30]],"Lunch":[[11,30],[12,30]],"A":[[12,30],[13,45]],"B":[[13,50],[15,5]],"Tutorial":[[15,5],[15,35]]},"Wednesday":{"Morning Meeting":[[8,30],[8,50]],"C":[[8,55],[10,10]],"D":[[10,15],[11,30]],"Lunch":[[11,30],[12,30]],"E":[[12,30],[13,45]],"F":[[13,50],[15,5]],"Tutorial":[[15,5],[15,35]]},"Thursday":{"Group Advisory/1-on-1s":[[8,30],[8,50]],"B":[[8,55],[10,25]],"A":[[10,35],[12,5]],"Lunch":[[12,5],[12,55]],"C":[[12,55],[14,25]],"Tutorial":[[14,25],[14,55]]},"Friday":{"Morning Meeting":[[8,30],[8,50]],"D":[[8,55],[10,25]],"F":[[10,35],[12,5]],"Lunch":[[12,5],[12,55]],"E":[[12,55],[14,25]]}}')},d4aa:function(t){t.exports=JSON.parse('{"2021/09/30":{"Group Advisory/1-on-1s":[[8,30],[8,50]],"A":[[8,55],[10,10]],"B":[[10,15],[11,30]],"Lunch":[[11,30],[12,30]],"Field Day":[[12,30],[14,50]]},"2021/10/01":{"Morning Meeting":[[8,30],[8,50]],"C":[[8,55],[10,10]],"D":[[10,15],[11,30]],"Lunch":[[11,30],[12,30]],"E":[[12,30],[13,45]],"F":[[13,50],[15,5]]}}')}});
//# sourceMappingURL=app.694df7eb.js.map