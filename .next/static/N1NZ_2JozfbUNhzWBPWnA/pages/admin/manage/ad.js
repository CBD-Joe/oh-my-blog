(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{EeMl:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/manage/ad",function(){return a("FORq")}])},FORq:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),i=a.n(n),l=(a("8Kt/"),a("xy40"),a("a6RD"),a("TeRw")),o=a("2/Rp"),s=a("q1tI"),r=a.n(s),c=a("lv9T"),_=a.n(c),u=a("jhxP"),m=(a("YFqc"),a("m/3j")),d=a.n(m),g=a("Qu4l"),b=r.a.createElement;var f=function(e){var t=Object(s.useState)(!0),a=t[0],n=t[1],i=Object(s.useState)(!0),l=i[0],o=i[1],r=Object(s.useState)(!0),c=r[0],_=r[1],u=Object(s.useState)(""),m=u[0],f=u[1],h=Object(s.useState)(""),w=h[0],p=h[1],y=Object(s.useState)(""),k=y[0],j=y[1];return Object(s.useEffect)((function(){n(e.label),o(e.id),_(e.show),f(e.title),p(e.adUrl),j(e.imgUrl)}),[]),Object(s.useEffect)((function(){e.onChange({key:l,label:a,show:c,title:m,adUrl:w,imgUrl:k})}),[m,c,w,k,l,a]),b("div",{className:d.a.form},b("p",{className:d.a._admin_body_section_title2},e.label),b("div",{className:"_admin_body_section_block",style:{padding:30}},b(g.a,{title:"\u662f\u5426\u663e\u793a",type:"switch",value:c,onChange:function(e){_(e)}}),b(g.a,{title:"\u6807\u9898",placeholder:"\u8bf7\u8f93\u5165\u6807\u9898",value:m,onChange:function(e){f(e)}}),b(g.a,{title:"\u5c01\u9762",type:"image",placeholder:"\u8bf7\u8f93\u5165\u5c01\u9762",value:k,onChange:function(e){j(e)}}),b(g.a,{title:"\u5916\u90e8\u94fe\u63a5",placeholder:"\u8bf7\u8f93\u5165\u5916\u90e8\u94fe\u63a5",value:w,onChange:function(e){p(e)}})))},h=a("Ruh/"),w=a("je4i"),p=a.n(w),y=[{label:"\u3010\u6587\u7ae0\u5217\u8868\u3011\u5e7f\u544a\u4f4d1 (270x220)",show:!0,adUrl:"",imgUrl:"",key:p.a.generate()},{label:"\u3010\u6587\u7ae0\u5217\u8868\u3011\u5e7f\u544a\u4f4d2 (270x220)",show:!0,adUrl:"",imgUrl:"",key:p.a.generate()},{label:"\u3010\u6587\u7ae0\u8be6\u60c5\u3011\u5e7f\u544a\u4f4d1 (270x220)",show:!0,adUrl:"",imgUrl:"",key:p.a.generate()},{label:"\u3010\u52a8\u6001\u5217\u8868\u3011\u5e7f\u544a\u4f4d1 (270x220)",show:!0,adUrl:"",imgUrl:"",key:p.a.generate()},{label:"\u3010\u52a8\u6001\u5217\u8868\u3011\u5e7f\u544a\u4f4d2 (270x220)",show:!0,adUrl:"",imgUrl:"",key:p.a.generate()}],k=r.a.createElement;t.default=function(e){var t=Object(s.useState)(null),a=t[0],n=t[1],r=Object(s.useState)(null),c=r[0],m=r[1],d=Object(s.useState)([]),g=d[0],b=d[1],w=function(){Object(h.b)().then((function(e){e?(m(e),e.attributes.ads&&e.attributes.ads.length>0?b(e.attributes.ads):b(y)):Object(h.a)().then((function(t){m(t),t.attributes.ads&&t.attributes.ads.length>0?b(e.attributes.ads):b(y)}))}))};return Object(s.useEffect)((function(){w()}),[]),k(u.a,{onChange:function(e){n(e.userinfo)}},k("p",{className:"_admin_body_section_title"},"\u5e7f\u544a\u8bbe\u7f6e"),a&&100===a.toJSON().priority&&c?k("div",{className:_.a.ad},g.map((function(e,t){return k(f,{key:e.key,id:e.key,show:e.show,label:e.label,title:e.title,adUrl:e.adUrl,imgUrl:e.imgUrl,onChange:function(e){!function(e){var t=e.index,a=e.value,n=g;n[t]=a,b(n)}({index:t,value:e})}})})),k(o.a,{type:"primary",size:"large",onClick:function(){i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(Object(h.c)({profileItem:c,params:{ads:g}}));case 2:w(),l.a.success({message:"\u66f4\u65b0\u6210\u529f"});case 4:case"end":return e.stop()}}),null,null,null,Promise)}},"\u4fdd\u5b58")):k("div",{className:"_admin_body_section_block",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:100}},"\u6682\u65e0\u6743\u9650\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u5f00\u901a\uff5e"))}},lv9T:function(e,t,a){e.exports={menus:"manage_menus__362L2",block:"manage_block__XUJN_",block_waring:"manage_block_waring__i0FRS",block_waring_waring:"manage_block_waring_waring__Y44kD",setting:"manage_setting__uz7OE",item:"manage_item__1t2m1",item_title:"manage_item_title__14yTt",item_right:"manage_item_right__3DOiZ",item_right_logo:"manage_item_right_logo__1r1Z7"}},"m/3j":function(e,t,a){e.exports={form:"AdForm_form__zS5lk",_admin_body_section_title2:"AdForm__admin_body_section_title2__iuJxV"}}},[["EeMl",1,0,3,2,4,5,6,7,9,8,13,16,19]]]);