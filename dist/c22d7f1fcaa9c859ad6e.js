(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{399:function(t,e,a){},406:function(t,e,a){"use strict";var s=a(399);a.n(s).a},412:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container about"},[t._m(0),a("form",{staticClass:"form about__form list--half",on:{submit:function(e){return e.preventDefault(),t.createCategory(e)}}},[a("div",{staticClass:"form__title"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"about__form-title",attrs:{type:"text",name:"title",placeholder:"Название новой группы"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._m(1)]),a("hr",{staticClass:"form-divider"}),a("div",{staticClass:"form__content"},[a("ol",t._l(t.categories,function(e){return a("li",{key:e.id},[t._v(t._s(e.category))])}),0)]),t._m(2)])])};s._withStripped=!0;var i=a(129),o=a.n(i),n=localStorage.getItem("token")||"";o.a.defaults.baseURL="https://webdev-api.loftschool.com",o.a.defaults.headers.Authorization="Bearer ".concat(n);var r={data:function(){return{title:"",categories:[]}},created:function(){this.fetchCategories()},methods:{createCategory:function(){var t=this;o.a.post("/categories",{title:this.title}).then(function(e){t.categories.unshift(e.data)})},fetchCategories:function(){var t=this;o.a.get("/categories/342").then(function(e){t.categories=e.data})}}},c=(a(406),a(94)),l=Object(c.a)(r,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about__info"},[e("h1",{staticClass:"section__title"},[this._v('Блок "Обо мне"  ')]),e("a",{staticClass:"addbutton"},[this._v("Добавить группу ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__buttons"},[e("button",{staticClass:"form__thick-btn",attrs:{type:"submit"}}),e("button",{staticClass:"form__remove-btn",attrs:{name:"remove"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__controls"},[e("input",{staticClass:"form__controls-name",attrs:{name:"name",type:"text",placeholder:"Новый навык"}}),e("div",{staticClass:"form__controls-value-wrapper"},[e("input",{staticClass:"form__controls-value",attrs:{name:"name",type:"number",min:"0",max:"100",placeholder:"100"}})]),e("button",{staticClass:"form__controls-btn",attrs:{disabled:"disabled"}})])}],!1,null,"7a383ca2",null);l.options.__file="src/admin/components/pages/about.vue";e.default=l.exports}}]);