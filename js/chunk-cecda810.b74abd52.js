(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cecda810"],{"45fc":function(e,t,r){"use strict";var a=r("23e7"),o=r("b727").some,s=r("a640"),n=r("ae40"),i=s("some"),c=n("some");a({target:"Array",proto:!0,forced:!i||!c},{some:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},cfe4:function(e,t,r){},d60c:function(e,t,r){"use strict";var a=r("cfe4"),o=r.n(a);o.a},ddaa:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"add-user"}},[e._l(e.titles,(function(t,a){return r("form",{key:a,staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.addUser(t)}}},[e._l(t,(function(t,a){return r("div",{key:a,staticClass:"form-group"},[r("input","checkbox"===("email"===a?"email":"text")?{directives:[{name:"model",rawName:"v-model",value:e.form[a],expression:"form[name]"}],staticClass:"form-field",attrs:{placeholder:a,id:a,name:a,required:"",autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(e.form[a])?e._i(e.form[a],null)>-1:e.form[a]},on:{change:function(t){var r=e.form[a],o=t.target,s=!!o.checked;if(Array.isArray(r)){var n=null,i=e._i(r,n);o.checked?i<0&&e.$set(e.form,a,r.concat([n])):i>-1&&e.$set(e.form,a,r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,a,s)}}}:"radio"===("email"===a?"email":"text")?{directives:[{name:"model",rawName:"v-model",value:e.form[a],expression:"form[name]"}],staticClass:"form-field",attrs:{placeholder:a,id:a,name:a,required:"",autocomplete:"off",type:"radio"},domProps:{checked:e._q(e.form[a],null)},on:{change:function(t){return e.$set(e.form,a,null)}}}:{directives:[{name:"model",rawName:"v-model",value:e.form[a],expression:"form[name]"}],staticClass:"form-field",attrs:{placeholder:a,id:a,name:a,required:"",autocomplete:"off",type:"email"===a?"email":"text"},domProps:{value:e.form[a]},on:{input:function(t){t.target.composing||e.$set(e.form,a,t.target.value)}}}),r("label",{staticClass:"form-label",attrs:{for:a}},[e._v(e._s(a))])])})),r("Button",{attrs:{title:"Add User","color-style":"green",icon:"fas fa-plus-circle"}})],2)})),e.dublicationMsg?r("Message",{attrs:{tag:"p",message:"User "+this.form.name+" already exists!","align-text":"center"}}):e._e()],2)},o=[],s=(r("45fc"),r("b0c0"),r("d3b7"),function(){return r.e("chunk-04102ca7").then(r.bind(null,"4c1a"))}),n=function(){return r.e("chunk-175e6a03").then(r.bind(null,"b3fa"))},i={components:{Button:s,Message:n},props:{titles:{type:Array,default:null},users:{type:Array,default:null}},data:function(){return{form:{},dublicationMsg:!1}},methods:{addUser:function(){var e=this,t=this.users.some((function(t){return t.name===e.form.name})),r={name:this.form.name,notification:"added"};t?(this.dublicationMsg=!0,setTimeout((function(){e.dublicationMsg=!1}),2e3)):(this.dublicationMsg=!1,this.$store.dispatch("users/addUser",this.form),this.$store.dispatch("users/userName",r),this.form={})}}},c=i,l=(r("d60c"),r("2877")),u=Object(l["a"])(c,a,o,!1,null,"1df71f94",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-cecda810.b74abd52.js.map