(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(19),s=n.n(c),i=(n(17),n(23)),r=n(2),p=n(3),u=n(8),l=n(0);var d=function(e){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{className:"header__logo"}),Object(l.jsx)("div",{className:"header__menu",children:Object(l.jsxs)(p.d,{children:[Object(l.jsx)(p.b,{path:"/sign-up",children:Object(l.jsx)(u.b,{to:"./sign-in",className:"header__auth",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(l.jsx)(p.b,{path:"/sign-in",children:Object(l.jsx)(u.b,{to:"./sign-up",className:"header__auth",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(l.jsxs)(p.b,{path:"/",children:[Object(l.jsx)("p",{className:"header__email",children:e.email}),Object(l.jsx)("button",{className:"header__auth",onClick:e.onLogout,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})})]})},h=o.a.createContext();var j=function(e){var t=o.a.useContext(h),n=e.card.owner._id===t._id,a="photo__delete-icon ".concat(n?"":"photo__delete-icon_hidden"),c=e.card.likes.some((function(e){return e===t._id})),s="photo__card-like ".concat(c?"photo__card-like_active":"photo__card-like");return Object(l.jsxs)("li",{className:"photo__card",children:[Object(l.jsx)("div",{onClick:function(){e.onCardClick(e.name,e.link)},className:"photo__card-place",style:{backgroundImage:"url(".concat(e.link,")")}}),Object(l.jsx)("button",{className:a,onClick:function(){e.onCardDelete(e.card)},type:"reset","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e"}),Object(l.jsxs)("div",{className:"photo__flex",children:[Object(l.jsx)("h2",{className:"photo__card-discprition",children:e.name}),Object(l.jsxs)("div",{className:"photo__like-container",children:[Object(l.jsx)("button",{className:s,onClick:function(){e.onCardLike(e.card)},type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a"}),Object(l.jsx)("p",{className:"photo__like-counter",children:e.likes})]})]})]})};var _=function(e){var t=o.a.useContext(h);return Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__flex",children:[Object(l.jsxs)("div",{className:"profile__container-avatar",children:[Object(l.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")},alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),Object(l.jsx)("button",{onClick:e.onEditAvatar,className:"profile__avatar-update",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__edit",children:[Object(l.jsx)("h1",{className:"profile__edit-author",children:t.name}),Object(l.jsx)("button",{onClick:e.onEditProfile,className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})]}),Object(l.jsx)("h2",{className:"profile__profession",children:t.about})]})]}),Object(l.jsx)("button",{onClick:e.onAddPlace,className:"profile__button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"})]}),Object(l.jsx)("section",{className:"photo",children:Object(l.jsx)("ul",{className:"photo__grid",children:e.cards.map((function(t){return Object(l.jsx)(j,{link:t.link,name:t.name,likes:t.likes.length,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var b=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__mesto",children:"\xa9 2021 Mesto Russia"})})};var m=function(e){return Object(l.jsx)("div",{className:e.isOpen?"popup popup_opened":"popup",id:e.name,children:Object(l.jsxs)("form",{className:e.className,name:e.name,onSubmit:e.onSubmit,noValidate:!0,children:[Object(l.jsx)("button",{onClick:e.onClose,className:"popup__close-button",type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(l.jsx)("h3",{className:"popup__header",children:e.title}),e.children,Object(l.jsx)("button",{className:"popup__button",type:"submit","aria-label":e.buttonText,children:e.buttonText})]})})};var O=function(e){return Object(l.jsx)("div",{className:e.isOpen?"popup popup_opened":"popup",id:"popup-image",children:Object(l.jsxs)("div",{className:"popup__block",children:[Object(l.jsx)("button",{onClick:e.onClose,className:"popup__close-button",type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"}),Object(l.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(l.jsx)("p",{className:"popup__description",children:e.card.name})]})})},f=n(21),x=n(22),v=new(function(){function e(t){var n=t.address,a=t.token,o=t.format;Object(f.a)(this,e),this._address=n,this._token=a,this._format=o}return Object(x.a)(e,[{key:"getUser",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{Authorization:this._token,Accept:"application/json","Content-Type":this._format}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{Authorization:this._token,Accept:"application/json","Content-Type":this._format}}).then(this._checkResponse)}},{key:"editUser",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{Authorization:this._token,Accept:"application/json","Content-Type":this._format},body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{Authorization:this._token,"Content-Type":this._format},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{Authorization:this._token,"Content-Type":this._format},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e._id),{method:"DELETE",headers:{Authorization:this._token,"Content-Type":this._format}}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{Authorization:this._token,"Content-Type":this._format}}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{Authorization:this._token,"Content-Type":this._format}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.addLike(e):this.removeLike(e)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}}]),e}())({address:"http://api.mesto.student.project.nomoredomains.club",token:"Bearer ".concat(localStorage.getItem("jwt")),format:"application/json"});var g=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),p=Object(r.a)(i,2),u=p[0],d=p[1],j=o.a.useContext(h);return Object(a.useEffect)((function(){s(j.name),d(j.about)}),[j,e.isOpen]),Object(l.jsxs)(m,{name:"popup-author",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",className:"popup__container",children:[Object(l.jsx)("input",{value:c||"",onChange:function(e){s(e.target.value)},id:"popup__name-author",className:"popup__input",type:"text",placeholder:"\u0418\u043c\u044f",name:"author",minLength:2,maxLength:40,required:!0}),Object(l.jsx)("span",{className:"popup__name-author-error popup__error"}),Object(l.jsx)("input",{value:u||"",onChange:function(e){d(e.target.value)},id:"popup__link-author",className:"popup__input",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"description",minLength:2,maxLength:200,required:!0}),Object(l.jsx)("span",{className:"popup__link-author-error popup__error"})]})};var k=function(e){var t=o.a.useRef();return Object(l.jsxs)(m,{name:"popup-update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",className:"popup__container popup__container_avatar",children:[Object(l.jsx)("input",{ref:t,id:"popup__link-avatar",className:"popup__input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430",name:"avatar",required:!0}),Object(l.jsx)("span",{className:"popup__link-avatar-error popup__error"})]})};var N=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),p=i[0],u=i[1];return Object(l.jsxs)(m,{name:"popup-addimage",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateCards({name:o,link:p}),c(""),u("")},buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",className:"popup__container",children:[Object(l.jsx)("input",{value:o,onChange:function(e){c(e.target.value)},id:"popup__name",className:"popup__input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:2,maxLength:30,required:!0}),Object(l.jsx)("span",{className:"popup__name-error popup__error"}),Object(l.jsx)("input",{value:p,onChange:function(e){u(e.target.value)},id:"popup__link",className:"popup__input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430",name:"link",required:!0}),Object(l.jsx)("span",{className:"popup__link-error popup__error"})]})};var C=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),p=i[0],d=i[1];return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onRegister(o,p)},className:"popup__container popup__container_auth",noValidate:!0,children:[Object(l.jsx)("h3",{className:"popup__header popup__header_auth",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(l.jsx)("input",{value:o,onChange:function(e){c(e.target.value)},id:"email",className:"popup__input popup__input_auth",type:"email",placeholder:"Email",name:"email",required:!0}),Object(l.jsx)("input",{value:p,onChange:function(e){d(e.target.value)},id:"password",className:"popup__input popup__input_auth",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",minLength:6,maxLength:40,required:!0}),Object(l.jsx)("button",{className:"popup__button popup__button_auth",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(l.jsx)(u.b,{to:"/sign-in",className:"popup__register-auth",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})};var y=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),p=i[0],u=i[1];return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o&&p&&e.onLogin(o,p)},className:"popup__container popup__container_auth",noValidate:!0,children:[Object(l.jsx)("h3",{className:"popup__header popup__header_auth",children:"\u0412\u0445\u043e\u0434"}),Object(l.jsx)("input",{value:o,onChange:function(e){c(e.target.value)},id:"email",className:"popup__input popup__input_auth",type:"email",placeholder:"Email",name:"email",required:!0}),Object(l.jsx)("input",{value:p,onChange:function(e){u(e.target.value)},id:"password",className:"popup__input popup__input_auth",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",minLength:6,maxLength:40,required:!0}),Object(l.jsx)("button",{className:"popup__button popup__button_auth",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})},S=n(24),T=n(25),L=function(e){var t=e.component,n=Object(T.a)(e,["component"]);return Object(l.jsx)(p.b,{children:function(){return n.loggedIn?Object(l.jsx)(t,Object(S.a)({},n)):Object(l.jsx)(p.a,{to:"./sign-in"})}})};var A=function(e){return Object(l.jsx)("section",{className:e.isOpen?"popup popup_opened":"popup",id:"InfoTooltip",children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),e.isSuccess?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"popup__img"}),Object(l.jsx)("h2",{className:"popup__header popup__header_info",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"popup__img popup__img_fail"}),Object(l.jsx)("h2",{className:"popup__header popup__header_info",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437!"})]})]})})},E="http://api.mesto.student.project.nomoredomains.club",w=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))};var P=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),s=Object(r.a)(c,2),u=s[0],j=s[1],f=Object(a.useState)(!1),x=Object(r.a)(f,2),S=x[0],T=x[1],P=Object(a.useState)(!1),D=Object(r.a)(P,2),I=D[0],R=D[1],U=Object(a.useState)(!1),q=Object(r.a)(U,2),z=q[0],J=q[1],F=Object(a.useState)(!1),B=Object(r.a)(F,2),V=B[0],H=B[1],M=Object(a.useState)(""),G=Object(r.a)(M,2),K=G[0],Q=G[1],W=Object(a.useState)(!1),X=Object(r.a)(W,2),Y=X[0],Z=X[1],$=Object(a.useState)({link:"",name:"",isOpen:!1}),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)([]),oe=Object(r.a)(ae,2),ce=oe[0],se=oe[1],ie=Object(a.useState)({}),re=Object(r.a)(ie,2),pe=re[0],ue=re[1],le=Object(a.useState)(),de=Object(r.a)(le,2),he=de[0],je=de[1],_e=Object(p.g)();function be(){R(!0)}function me(){o(!1),j(!1),T(!1),R(!1),ne({link:"",name:"",isOpen:!1}),J(!1)}function Oe(e){Z(e)}return Object(a.useEffect)((function(){v.getUser().then((function(e){ue({_id:e.data._id,name:e.data.name,about:e.data.about,avatar:e.data.avatar})})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),Object(a.useEffect)((function(){v.getInitialCards().then((function(e){se(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),Object(a.useEffect)((function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(E,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(w)).then((function(e){Q({email:e.data.email}),H(!0),_e.push("/")})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[_e]),Object(l.jsx)(h.Provider,{value:pe,children:Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"page__container",children:[Object(l.jsx)(d,{email:K.email,onLogout:function(){localStorage.removeItem("jwt"),H(!1),Q(" "),_e.push("/sign-in")}}),Object(l.jsxs)(p.d,{children:[Object(l.jsx)(L,{exact:!0,path:"/",loggedIn:V,component:_,onEditAvatar:function(){o(!0)},onEditProfile:function(){j(!0)},onAddPlace:function(){T(!0)},cards:ce,onCardClick:function(e,t){ne({name:e,link:t,isOpen:!0})},onCardLike:function(e){var t=e.likes.some((function(e){return e===pe._id}));v.changeLikeCardStatus(e._id,!t).then((function(t){se((function(n){return n.map((function(n){return n._id===e._id?t.data:n}))}))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){je(e),J(!0)}}),Object(l.jsx)(p.b,{path:"/sign-in",children:Object(l.jsx)(y,{onLogin:function(e,t){(function(e,t){return fetch("".concat(E,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(w)})(e,t).then((function(t){t.token&&(localStorage.setItem("jwt",t.token),Q({email:e}),H(!0),_e.push("/"))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e)),Oe(!1),be()}))}})}),Object(l.jsx)(p.b,{path:"/sign-up",children:Object(l.jsx)(C,{onRegister:function(e,t){(function(e,t){return fetch("".concat(E,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(w)})(e,t).then((function(e){e&&(Oe(!0),be(),_e.push("/sign-in"))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e)),Oe(!1),be()}))}})})]}),Object(l.jsx)(b,{}),Object(l.jsx)(g,{isOpen:u,onClose:me,onUpdateUser:function(e){v.editUser(e).then((function(e){ue(e.data),me()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(l.jsx)(k,{isOpen:n,onClose:me,onUpdateAvatar:function(e){v.editAvatar(e).then((function(e){ue(e.data),me()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(l.jsx)(N,{isOpen:S,onClose:me,onUpdateCards:function(e){v.addCard(e).then((function(e){se([e.card].concat(Object(i.a)(ce))),me()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(l.jsx)(m,{isOpen:z,onSubmit:function(e){e.preventDefault(),v.deleteCard(he).then((function(){var e=ce.filter((function(e){return e._id!==he._id}));J(!1),se(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onClose:me,name:"popup-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",className:"popup__container popup__confirm-container",buttonText:"\u0414\u0430"}),Object(l.jsx)(O,{card:te,isOpen:te.isOpen,onClose:function(){return me()}}),Object(l.jsx)(A,{isOpen:I,onClose:me,isSuccess:Y})]})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(u.a,{children:Object(l.jsx)(P,{})})}),document.getElementById("root")),D()}},[[36,1,2]]]);
//# sourceMappingURL=main.0433b3c9.chunk.js.map