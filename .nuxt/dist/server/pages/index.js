exports.ids = [1];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1c0aa543", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/input.vue?vue&type=template&id=1fa8c7e7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col m-input"},[_vm._ssrNode("<label class=\"text-sub-header\" data-v-1fa8c7e7>"+_vm._ssrEscape(_vm._s(_vm.label)+"\n    ")+"<span class=\"m-asterisk text-gray-office-card\" data-v-1fa8c7e7>*</span></label> "),_vm._ssrNode("<div id=\"input_container\""+(_vm._ssrClass(null,[
      _vm.warningText ? 'ring-danger' : 'ring-input',
      'h-input',
      'p-input',
      'rounded-input',
      'border-transparent',
      'shadow-sm',
      'ring-2',
      'focus-within:outline-none',
      'focus-within:ring-2',
      'focus-within:ring-input-blue' ]))+" data-v-1fa8c7e7>","</div>",[(_vm.type === 'tel')?_c('input',{directives:[{name:"mask",rawName:"v-mask",value:('(999) 999-9999'),expression:"'(999) 999-9999'"}],attrs:{"type":_vm.type,"id":_vm.id,"placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"input":function (ref) {
        var target = ref.target;

        return _vm.$emit('input', target.value);
},"change":_vm.select}},[]):_vm._ssrNode(("<input"+(_vm._ssrAttr("type",_vm.type))+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrAttr("value",_vm.value))+" data-v-1fa8c7e7>")),_vm._ssrNode(" "),(_vm.warningText)?_c('fa',{staticClass:"text-danger",attrs:{"icon":['fas', 'exclamation-circle']}}):_vm._e()],2),_vm._ssrNode(" "+((_vm.warningText)?("<p class=\"text-twelve text-danger m-warning\" data-v-1fa8c7e7>"+_vm._ssrEscape("\n    "+_vm._s(_vm.warningText)+"\n  ")+"</p>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/input.vue?vue&type=template&id=1fa8c7e7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  data() {
    return {
      warningText: null
    };
  },

  props: {
    id: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    warning: {
      type: String,
      default: null
    }
  },
  methods: {
    select() {
      this.warningText = null;
    }

  },
  watch: {
    warning() {
      this.warningText = this.warning;
    }

  }
});
// CONCATENATED MODULE: ./components/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/input.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1fa8c7e7",
  "3342a57a"
  
)

/* harmony default export */ var input = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(33).default})


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/locationCard.vue?vue&type=template&id=1dddf688&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'overflow-y-hidden',
    'transition-height',
    'duration-500',
    'ease-in-out',
    'transform',
    'rounded-all',
    'shadow-lg',
    'p-card',
    'm-card',
    'w-default',
    'font-sans',
    'text-left',
    'bg-white',
    'flex',
    'flex-col',
    _vm.isWarning ? 'h-location-warning' : '',
    _vm.isOpen ? 'h-location' : 'bg-blue-add h-button-location' ]},[(_vm.isOpen)?_vm._ssrNode("<div class=\"text-sub-header font-bold text-black flex flex-row justify-between items-center m-title-location\">","</div>",[_vm._ssrNode("<h3 class=\"text-sub-header font-bold\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.isEdit ? "Edit Location" : "New Location")+"\n    ")+"</h3> "),_vm._ssrNode("<button class=\"text-black\">","</button>",[_c('fa',{attrs:{"icon":['fas', 'times']}})],1)],2):_vm._ssrNode("<div class=\"space-x-btn font-sans cursor-pointer text-white flex flex-row justify-between items-center m-title-location\">","</div>",[_vm._ssrNode("<span class=\"text-sub-header text-white\">Add New Location</span> "),_vm._ssrNode("<button class=\"text-white\">","</button>",[_c('fa',{attrs:{"icon":['fas', 'plus']}})],1)],2),_vm._ssrNode(" "),_c('Input',{attrs:{"id":"title","label":"Title","warning":_vm.titleWarning},on:{"update:warning":function($event){_vm.titleWarning=$event}},model:{value:(_vm.title),callback:function ($$v) {_vm.title=$$v},expression:"title"}}),_vm._ssrNode(" "),_c('Input',{attrs:{"id":"address","label":"Enter the address","warning":_vm.addressWarning},on:{"update:warning":function($event){_vm.addressWarning=$event}},model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v},expression:"address"}}),_vm._ssrNode(" <h3 class=\"text-twelve text-blue-header\">CONTACT INFORMATION</h3> <hr class=\"m-line-location border-line\"> "),_c('Input',{attrs:{"id":"fullname","label":"Full name","warning":_vm.fullnameWarning},on:{"update:warning":function($event){_vm.fullnameWarning=$event}},model:{value:(_vm.fullname),callback:function ($$v) {_vm.fullname=$$v},expression:"fullname"}}),_vm._ssrNode(" "),_c('Input',{attrs:{"id":"job","label":"Job Position","warning":_vm.jobWarning},on:{"update:warning":function($event){_vm.jobWarning=$event}},model:{value:(_vm.job),callback:function ($$v) {_vm.job=$$v},expression:"job"}}),_vm._ssrNode(" "),_c('Input',{attrs:{"id":"email","label":"Email address","placeholder":"name@example.com","type":"email","warning":_vm.emailWarning},on:{"update:warning":function($event){_vm.emailWarning=$event}},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._ssrNode(" "),_c('Input',{attrs:{"id":"phone","label":"Phone","placeholder":"(xxx) xxx-xxxx","type":"tel","warning":_vm.phoneWarning},on:{"update:warning":function($event){_vm.phoneWarning=$event}},model:{value:(_vm.phone),callback:function ($$v) {_vm.phone=$$v},expression:"phone"}}),_vm._ssrNode(" <button class=\"bg-blue-add p-save text-white w-save rounded-all\">\n    Save\n  </button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/locationCard.vue?vue&type=template&id=1dddf688&

// EXTERNAL MODULE: ./components/input.vue + 4 modules
var input = __webpack_require__(33);

// CONCATENATED MODULE: ./utils/validators.js
function isValidEmail(emailAddress) {
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  return pattern.test(emailAddress);
}
;
function isValidPhoneNumber(phoneNumber) {
  var pattern = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i);
  return pattern.test(phoneNumber);
}
;
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/locationCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const emptyField = "This field cannot be empty";
const invalidNumber = "Invalid number";
const invalidEmail = "Invalid e-mail";
/* harmony default export */ var locationCardvue_type_script_lang_js_ = ({
  data() {
    return {
      title: "",
      address: "",
      fullname: "",
      job: "",
      email: "",
      phone: "",
      titleWarning: null,
      addressWarning: null,
      fullnameWarning: null,
      jobWarning: null,
      emailWarning: null,
      phoneWarning: null,
      isOpen: false,
      isEdit: false,
      indexCurr: null
    };
  },

  props: {
    save: Function,
    data: Object
  },
  components: {
    Input: input["default"]
  },
  methods: {
    reset() {
      this.title = "";
      this.address = "";
      this.fullname = "";
      this.job = "";
      this.email = "";
      this.phone = "";
      this.titleWarning = null;
      this.addressWarning = null;
      this.fullnameWarning = null;
      this.jobWarning = null;
      this.emailWarning = null;
      this.phoneWarning = null;
    },

    open(data, index) {
      this.reset();
      this.isOpen = true;

      if (data) {
        this.indexCurr = index;
        this.isEdit = true;
        this.title = data.title;
        this.address = data.address;
        this.fullname = data.fullname;
        this.job = data.job;
        this.email = data.email;
        this.phone = data.phone;
      }
    },

    close() {
      this.isOpen = false;
      this.isEdit = false;
    },

    dropdown() {
      this.isOpen = !this.isOpen;
      this.Edit = false;
      this.reset();
    },

    check() {
      if (!isValidEmail(this.email)) this.emailWarning = invalidEmail;
      if (!isValidPhoneNumber(this.phone)) this.phoneWarning = invalidNumber;
      if (this.title.length === 0) this.titleWarning = emptyField;
      if (this.address.length === 0) this.addressWarning = emptyField;
      if (this.fullname.length === 0) this.fullnameWarning = emptyField;
      if (this.job.length === 0) this.jobWarning = emptyField;
      if (this.email.length === 0) this.emailWarning = emptyField;
      if (this.phone.length === 0) this.phoneWarning = emptyField;
      return isValidEmail(this.email) && isValidPhoneNumber(this.phone) && this.title.length > 0 && this.address.length > 0 && this.fullname.length > 0 && this.job.length > 0 && this.email.length > 0 && this.phone.length > 0;
    },

    saveAll() {
      if (this.check()) {
        this.save(this.$data, this.indexCurr);
        this.isOpen = false;
        this.indexCurr = null;
      }
    }

  },
  watch: {
    title() {
      this.isOpen = true;
      this.titleWarning = null;
    },

    address() {
      this.isOpen = true;
      this.addressWarning = null;
    },

    fullname() {
      this.isOpen = true;
      this.fullnameWarning = null;
    },

    job() {
      this.isOpen = true;
      this.jobWarning = null;
    },

    email() {
      this.isOpen = true;
      this.emailWarning = null;
    },

    phone() {
      this.isOpen = true;
      this.phoneWarning = null;
    }

  },
  computed: {
    isWarning: function () {
      return this.titleWarning || this.addressWarning || this.fullnameWarning || this.jobWarning || this.emailWarning || this.phoneWarning;
    }
  }
});
// CONCATENATED MODULE: ./components/locationCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_locationCardvue_type_script_lang_js_ = (locationCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/locationCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_locationCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a104c508"
  
)

/* harmony default export */ var locationCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Input: __webpack_require__(33).default})


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/officeCard.vue?vue&type=template&id=782868fc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'overflow-y-hidden',
    'transition-height',
    'duration-500',
    'ease-in-out',
    'h-close',
    'transform',
    'rounded-down',
    'shadow-lg',
    'm-card',
    _vm.isRemoved ? 'h-delete p-delete m-delete' : '',
    _vm.isOpen ? 'h-open' : '' ]},[_vm._ssrNode("<div"+(_vm._ssrClass(null,[
      'rounded-up',
      'transition',
      'p-card',
      'font-sans',
      'text-left',
      'transition',
      'duration-500',
      'ease-in-out',
      'bg-white',
      _vm.isOpen ? 'bg-gray-office-card' : '' ]))+">","</div>",[_vm._ssrNode("<div class=\"flex flex-row justify-between items-center\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col\"><p"+(_vm._ssrClass(null,[
            'font-bold',
            'text-header',
            'transition',
            'duration-500',
            'ease-in-out',
            'text-black',
            _vm.isOpen ? 'text-white' : '' ]))+">"+_vm._ssrEscape("\n          "+_vm._s(_vm.title)+"\n        ")+"</p> <p"+(_vm._ssrClass(null,[
            'transition',
            'duration-500',
            'ease-in-out',
            'text-sub-header',
            _vm.isOpen ? 'text-white' : 'text-gray-office-card' ]))+">"+_vm._ssrEscape("\n          "+_vm._s(_vm.address)+"\n        ")+"</p></div> "),_c('fa',{class:[
          'justify-items-end',
          'transition',
          'duration-500',
          'transform',
          'ease-in-out',
          _vm.isOpen ? 'text-white -rotate-180' : 'text-blue-add' ],attrs:{"icon":['fas', 'chevron-down']}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,['bg-white', 'rounded-down', 'p-card', 'font-sans', 'text-left']))+">","</div>",[_vm._ssrNode("<div class=\"items-center\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col space-y-sp\">","</div>",[_vm._ssrNode("<p"+(_vm._ssrClass(null,['font-bold', 'text-header', 'text-black']))+">"+_vm._ssrEscape("\n          "+_vm._s(_vm.fullname.slice(0, 13))+_vm._s(_vm.fullname.length > 13 ? "..." : "")+"\n        ")+"</p> <p"+(_vm._ssrClass(null,['text-black', 'text-sub-header']))+">"+_vm._ssrEscape("\n          "+_vm._s(_vm.job)+"\n        ")+"</p> <p"+(_vm._ssrClass(null,['text-blue-header', 'text-sub-header']))+">"+_vm._ssrEscape("\n          "+_vm._s(_vm.email)+"\n        ")+"</p> <p"+(_vm._ssrClass(null,['text-black', 'text-sub-header']))+">"+_vm._ssrEscape("\n          "+_vm._s(_vm.phone)+"\n        ")+"</p> <hr class=\"m-line border-line\"> "),_vm._ssrNode("<div class=\"flex flex-row justify-between\">","</div>",[_vm._ssrNode("<button class=\"flex flex-row justify-between items-center bg-white space-x-icon-btn text-gray-office-card\">","</button>",[_c('fa',{staticClass:"text-icon",attrs:{"icon":['fas', 'pen']}}),_vm._ssrNode(" <p class=\"text-button\">EDIT</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<button class=\"flex flex-row justify-between items-center bg-white space-x-icon-btn text-danger\">","</button>",[_c('fa',{staticClass:"text-icon",attrs:{"icon":['far', 'trash-alt']}}),_vm._ssrNode(" <p class=\"text-button\">DELETE</p>")],2)],2)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/officeCard.vue?vue&type=template&id=782868fc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/officeCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var officeCardvue_type_script_lang_js_ = ({
  data() {
    return {
      isOpen: false,
      isRemoved: false
    };
  },

  props: {
    title: String,
    address: String,
    fullname: String,
    job: String,
    email: String,
    phone: String,
    remove: Function,
    editOffice: Function
  },
  methods: {
    dropdown() {
      this.isOpen = !this.isOpen;
    },

    autoRemove() {
      this.isOpen = false;
      this.isRemoved = true;
      setTimeout(() => this.remove(), 500);
    },

    autoEdit() {
      this.dropdown();
      this.editOffice();
    }

  }
});
// CONCATENATED MODULE: ./components/officeCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_officeCardvue_type_script_lang_js_ = (officeCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/officeCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_officeCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f3650d7a"
  
)

/* harmony default export */ var officeCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_1fa8c7e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_1fa8c7e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_1fa8c7e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_1fa8c7e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_1fa8c7e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_id_1fa8c7e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#input_container[data-v-1fa8c7e7]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}input[data-v-1fa8c7e7]{outline:none;width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 38:
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Headquarters\",\"address\":\"3763 W. Dallas St.\",\"fullname\":\"Hellena John\",\"job\":\"Software Tester\",\"email\":\"georgia.young@example.com\",\"phone\":\"(808) 555-0111\"},{\"title\":\"Headquarters 2\",\"address\":\"3762 W. Dallas St.\",\"fullname\":\"Hellena John\",\"job\":\"Software Tester\",\"email\":\"georgia.young@example.com\",\"phone\":\"(808) 555-0111\"}]");

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nav>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(21px*var(--tw-space-x-reverse));margin-left:calc(21px*(1 - var(--tw-space-x-reverse)))}.nav{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));align-items:center;align-content:center;height:80px;transition-property:opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.5s}.container,.nav{display:flex;justify-content:center}.container{margin:0 auto;min-height:100vh;text-align:center}.title{font-family:\"Proxima Nova\",Arial,sans-serif;font-style:normal;display:block;font-weight:300;font-size:64px;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=fbcb07f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav"+(_vm._ssrClass(null,['nav', _vm.isUpdated ? 'opacity-100' : 'opacity-0']))+">","</nav>",[_c('fa',{staticClass:"text-check",attrs:{"icon":['fas', 'check']}}),_vm._ssrNode(" <h3 class=\"text-twelve\">THE LOCATION HAS BEEN UPDATED</h3>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h1 class=\"title text-blue-header my-title\">Offices</h1> "),_c('LocationCard',{ref:"locationcard",attrs:{"isEdit":_vm.isEdit,"save":_vm.save},on:{"input":function($event){_vm.pageTitle = $event}}}),_vm._ssrNode(" "),_vm._l((_vm.offices),function(office,index){return _c('OfficeCard',{key:office.title + index,attrs:{"title":office.title,"address":office.address,"fullname":office.fullname,"job":office.job,"email":office.email,"phone":office.phone,"remove":function () { return _vm.remove(index); },"editOffice":function () { return _vm.editOffice(index); }}})})],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=fbcb07f0&

// EXTERNAL MODULE: ./components/officeCard.vue + 4 modules
var officeCard = __webpack_require__(35);

// EXTERNAL MODULE: ./components/locationCard.vue + 5 modules
var locationCard = __webpack_require__(34);

// EXTERNAL MODULE: ./data/fake-data.json
var fake_data = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      offices: fake_data,
      isUpdated: false,
      isLocationCardOpen: false,
      isEdit: false
    };
  },

  components: {
    OfficeCard: officeCard["default"],
    LocationCard: locationCard["default"]
  },
  methods: {
    save(data, index) {
      if (index) {
        const offices = [...this.offices];
        offices[index] = {
          title: data.title,
          address: data.address,
          fullname: data.fullname,
          job: data.job,
          email: data.email,
          phone: data.phone
        };
        this.offices = offices;
      } else this.offices.push({
        title: data.title,
        address: data.address,
        fullname: data.fullname,
        job: data.job,
        email: data.email,
        phone: data.phone
      });
    },

    remove(index) {
      this.$delete(this.offices, index);
    },

    editOffice(index) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      this.isEdit = true;
      this.$refs.locationcard.open(this.offices[index], index);
    }

  },
  watch: {
    offices() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      this.isUpdated = true;
      setTimeout(() => this.isUpdated = false, 4000);
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7798a6cb"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LocationCard: __webpack_require__(34).default,OfficeCard: __webpack_require__(35).default})


/***/ })

};;
//# sourceMappingURL=index.js.map