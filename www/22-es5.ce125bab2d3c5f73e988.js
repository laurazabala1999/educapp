!function(){function e(e,n){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==a.return||a.return()}finally{if(l)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"6Q79":function(t,i,r){"use strict";r.r(i),r.d(i,"TareaspendientesPageModule",(function(){return E}));var o=r("ofXK"),s=r("3Pt+"),l=r("TEn/"),c=r("tyNb"),u=r("LvDl"),p=r("fXoL"),h=r("nVU4");function d(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-button",7),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).empezar()})),p["\u0275\u0275text"](1,"EMPEZAR"),p["\u0275\u0275elementEnd"]()}}function m(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-content"),p["\u0275\u0275elementStart"](1,"ag-grid-angular",5),p["\u0275\u0275listener"]("selectionChanged",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().onSelectionChanged(e)}))("firstDataRendered",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().onFirstDataRendered(e)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](2,d,2,0,"ion-button",6),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("rowData",a.rowData)("columnDefs",a.columnDefs)("rowSelection",a.rowSelection),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",a.show)}}function g(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-content"),p["\u0275\u0275elementStart"](1,"ion-item"),p["\u0275\u0275elementStart"](2,"ion-label",8),p["\u0275\u0275text"](3,"\xbfQu\xe9 te ha parecido la prueba? \xbfHas tenido alg\xfan problema? \xbfLo has entendido bien?"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-item"),p["\u0275\u0275elementStart"](5,"ion-textarea",9),p["\u0275\u0275listener"]("ngModelChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().opinion=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"ion-button",7),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().finalizar()})),p["\u0275\u0275text"](7,"FINALIZAR TAREA"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("ngModel",a.opinion)}}function f(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-item"),p["\u0275\u0275elementStart"](1,"ion-label",12),p["\u0275\u0275text"](2,"Responda aqu\xed"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"ion-input",13),p["\u0275\u0275listener"]("ngModelChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).respuesta=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngModel",a.respuesta)}}function S(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-list"),p["\u0275\u0275elementStart"](1,"ion-grid"),p["\u0275\u0275elementStart"](2,"ion-row"),p["\u0275\u0275elementStart"](3,"ion-col"),p["\u0275\u0275elementStart"](4,"ion-item",14),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).seleccionarOopcion("A")})),p["\u0275\u0275elementStart"](5,"ion-label"),p["\u0275\u0275text"](6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"ion-col"),p["\u0275\u0275elementStart"](8,"ion-item",14),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).seleccionarOopcion("B")})),p["\u0275\u0275elementStart"](9,"ion-label"),p["\u0275\u0275text"](10),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ion-row"),p["\u0275\u0275elementStart"](12,"ion-col"),p["\u0275\u0275elementStart"](13,"ion-item",14),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).seleccionarOopcion("C")})),p["\u0275\u0275elementStart"](14,"ion-label"),p["\u0275\u0275text"](15),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"ion-col"),p["\u0275\u0275elementStart"](17,"ion-item",14),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).seleccionarOopcion("D")})),p["\u0275\u0275elementStart"](18,"ion-label"),p["\u0275\u0275text"](19),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](4),p["\u0275\u0275propertyInterpolate"]("color",a.claseSeleccionadaA),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"]("A) ",a.opcionA,""),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("color",a.claseSeleccionadaB),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"]("B) ",a.opcionB,""),p["\u0275\u0275advance"](3),p["\u0275\u0275propertyInterpolate"]("color",a.claseSeleccionadaC),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"]("C) ",a.opcionC,""),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("color",a.claseSeleccionadaD),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"]("D) ",a.opcionD,"")}}function b(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ion-content"),p["\u0275\u0275elementStart"](1,"ion-item"),p["\u0275\u0275elementStart"](2,"ion-label",10),p["\u0275\u0275text"](3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"ion-textarea",11),p["\u0275\u0275listener"]("ngModelChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().pregunta=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](5,f,4,1,"ion-item",4),p["\u0275\u0275template"](6,S,20,8,"ion-list",4),p["\u0275\u0275elementStart"](7,"ion-button",7),p["\u0275\u0275listener"]("click",(function(){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().continuar()})),p["\u0275\u0275text"](8,"CONTINUAR"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"]("Pregunta n\xfamero ",a.numero,""),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngModel",a.pregunta),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",a.pruebaCompletar),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",a.pruebaTest)}}var v,x,C,w=[{path:"",component:(v=function(){function t(e,a){n(this,t),this.changeDetectorRef=e,this.router=a,this.numero=1,this.user=localStorage.getItem("user"),this.rowSelection="single",this.show=!1,this.idSelect="",this.tipoSelect="",this.grupo=localStorage.getItem("grupo"),this.showPrueba=!1,this.showTabla=!0,this.rowData=[],this.columnDefs=[{headerName:"Nombre de la Prueba",field:"titulo",sortable:!0,filter:!0},{headerName:"Asignatura",field:"asignatura",sortable:!0,filter:!0}],this.pregunta="",this.respuestaCorrecta="",this.respuesta="",this.pruebaCompletar=!1,this.pruebaTest=!1,this.opcionA="",this.opcionB="",this.opcionC="",this.opcionD="",this.claseSeleccionadaA="",this.claseSeleccionadaB="",this.claseSeleccionadaC="",this.claseSeleccionadaD="",this.examen={preguntas:[],tiempoTotal:0,"calificaci\xf3n":0,alumno:this.user,grupo:this.grupo,idPrueba:this.idSelect,opinion:""},this.showEvaluacion=!1,this.opinion=""}var i,r,o;return i=t,(r=[{key:"ngOnInit",value:function(){this.pruebas=JSON.parse(localStorage.getItem("pruebas"))||[];var t,n=JSON.parse(localStorage.getItem("completadas_"+this.user))||[],a=e(this.pruebas);try{for(a.s();!(t=a.n()).done;){var i=t.value;-1!=i.grupos.indexOf(this.grupo)&&-1==n.indexOf(i.id)&&"ABIERTA"==i.abierta&&this.rowData.push(i)}}catch(r){a.e(r)}finally{a.f()}}},{key:"ngDoCheck",value:function(){this.changeDetectorRef.detectChanges()}},{key:"onFirstDataRendered",value:function(e){this.gridApi=e.api,e.api.sizeColumnsToFit()}},{key:"onSelectionChanged",value:function(e){this.idSelect="",this.tipoSelect="";var t=e.api.getSelectedRows();this.idSelect=t[0].id,this.tipoSelect=t[0].tipo,this.pruebaSelect=t[0],this.show=!0,this.changeDetectorRef.detectChanges()}},{key:"empezar",value:function(){this.showTabla=!1,this.showPrueba=!0,this.pruebaCompletar=!1,this.pruebaTest=!1,this.examen.idPrueba=this.idSelect,"TEST"==this.tipoSelect?(this.pruebaTest=!0,this.pruebaCompletar=!1):"COMPLETAR"==this.tipoSelect&&(this.pruebaCompletar=!0,this.pruebaTest=!1),this.preguntaActual=0,this.pregunta=this.pruebaSelect.preguntas[this.preguntaActual].pregunta,this.respuesta="",this.respuestaCorrecta=this.pruebaSelect.preguntas[this.preguntaActual].correcta,this.opcionA=this.pruebaSelect.preguntas[this.preguntaActual].respuestas?this.pruebaSelect.preguntas[this.preguntaActual].respuestas[0].texto:"",this.opcionB=this.pruebaSelect.preguntas[this.preguntaActual].respuestas?this.pruebaSelect.preguntas[this.preguntaActual].respuestas[1].texto:"",this.opcionC=this.pruebaSelect.preguntas[this.preguntaActual].respuestas?this.pruebaSelect.preguntas[this.preguntaActual].respuestas[2].texto:"",this.opcionD=this.pruebaSelect.preguntas[this.preguntaActual].respuestas?this.pruebaSelect.preguntas[this.preguntaActual].respuestas[3].texto:"",this.cronometro("start"),this.changeDetectorRef.detectChanges()}},{key:"finalizar",value:function(){this.examen.opinion=this.opinion,this.examen.calificaci\u00f3n=this.examen.calificaci\u00f3n/this.pruebaSelect.preguntas.length*10;var t=u.findIndex(this.pruebas,{id:this.idSelect}),n=u.find(this.pruebas,{id:this.idSelect});n.entregas.push(this.examen);var a,i=0,r=0,o=e(n.entregas);try{for(o.s();!(a=o.n()).done;){var s=a.value;i+=s.calificaci\u00f3n,r+=s.tiempoTotal}}catch(g){o.e(g)}finally{o.f()}var l=r/n.entregas.length;n.mediaNota=i/n.entregas.length,n.mediaTiempo=l,this.pruebas.splice(t,1,n),localStorage.setItem("pruebas",JSON.stringify(this.pruebas));var c=JSON.parse(localStorage.getItem("completadas_"+this.user))||[];c.push(this.idSelect),localStorage.setItem("completadas_"+localStorage.getItem("user"),JSON.stringify(c));var p,h=JSON.parse(localStorage.getItem("falladas_"+this.user))||[],d=0,m=e(this.examen.preguntas);try{for(m.s();!(p=m.n()).done;)"NO"==p.value.correcta&&h.push({tipo:n.tipo,pregunta:n.preguntas[d]}),d++}catch(g){m.e(g)}finally{m.f()}localStorage.setItem("falladas_"+localStorage.getItem("user"),JSON.stringify(h)),alert("Tarea finalizada y guardada correctamente"),this.showPrueba=!1,this.showEvaluacion=!1,this.showTabla=!0,this.changeDetectorRef.detectChanges(),this.router.navigate(["/home"])}},{key:"continuar",value:function(){this.cronometro("restart");var e={correcta:this.respuestaCorrecta==this.respuesta?"SI":"NO",tiempo:this.cronoResta,respuesta:this.respuesta};this.examen.preguntas.push(e),this.examen.tiempoTotal=this.examen.tiempoTotal+this.cronoResta,"SI"==e.correcta&&(this.examen.calificaci\u00f3n=this.examen.calificaci\u00f3n+1),this.preguntaActual++,this.pruebaSelect.preguntas.length==this.preguntaActual?(this.showPrueba=!1,this.showEvaluacion=!0,this.showTabla=!1,this.cronometro("end")):(this.claseSeleccionadaA="",this.claseSeleccionadaB="",this.claseSeleccionadaC="",this.claseSeleccionadaD="",this.pregunta=this.pruebaSelect.preguntas[this.preguntaActual].pregunta,this.respuesta=null,this.respuestaCorrecta=this.pruebaSelect.preguntas[this.preguntaActual].correcta,this.opcionA=this.pruebaSelect.preguntas[this.preguntaActual].respuestas?this.pruebaSelect.preguntas[this.preguntaActual].respuestas[0].texto:"",this.opcionB=this.pruebaSelect.preguntas[this.preguntaActual].respuestas?this.pruebaSelect.preguntas[this.preguntaActual].respuestas[1].texto:"",this.opcionC=this.pruebaSelect.preguntas[this.preguntaActual].respuestas?this.pruebaSelect.preguntas[this.preguntaActual].respuestas[2].texto:"",this.opcionD=this.pruebaSelect.preguntas[this.preguntaActual].respuestas?this.pruebaSelect.preguntas[this.preguntaActual].respuestas[3].texto:"",this.numero++,this.changeDetectorRef.detectChanges())}},{key:"cronometro",value:function(e){"start"==e?this.cronoInit=new Date:"end"==e?(this.cronoResta="",this.cronoInit="",this.cronoEnd=""):(this.cronoEnd=new Date,this.cronoResta=this.cronoEnd.getTime()-this.cronoInit.getTime(),this.cronoResta=Math.round(this.cronoResta/1e3),this.cronoInit=this.cronoEnd,this.cronoEnd="")}},{key:"seleccionarOopcion",value:function(e){"A"==e?(this.respuesta="A",this.claseSeleccionadaA="secondary",this.claseSeleccionadaB="",this.claseSeleccionadaC="",this.claseSeleccionadaD=""):"B"==e?(this.respuesta="B",this.claseSeleccionadaA="",this.claseSeleccionadaB="secondary",this.claseSeleccionadaC="",this.claseSeleccionadaD=""):"C"==e?(this.respuesta="C",this.claseSeleccionadaA="",this.claseSeleccionadaB="",this.claseSeleccionadaC="secondary",this.claseSeleccionadaD=""):"D"==e&&(this.respuesta="D",this.claseSeleccionadaA="",this.claseSeleccionadaB="",this.claseSeleccionadaC="",this.claseSeleccionadaD="secondary"),this.changeDetectorRef.detectChanges()}},{key:"salir",value:function(){this.router.navigate(["/home"])}}])&&a(i.prototype,r),o&&a(i,o),t}(),v.\u0275fac=function(e){return new(e||v)(p["\u0275\u0275directiveInject"](p.ChangeDetectorRef),p["\u0275\u0275directiveInject"](c.g))},v.\u0275cmp=p["\u0275\u0275defineComponent"]({type:v,selectors:[["app-tareaspendientes"]],decls:12,vars:3,consts:[["size","10"],["size","2"],["color","primary",1,"home",3,"click"],["name","home-outline"],[4,"ngIf"],[1,"ag-theme-balham",2,"width","100%","height","50%",3,"rowData","columnDefs","rowSelection","selectionChanged","firstDataRendered"],["expand","full",3,"click",4,"ngIf"],["expand","full",3,"click"],[2,"text-align","center"],[3,"ngModel","ngModelChange"],["position","floating"],["disabled","true",3,"ngModel","ngModelChange"],["position","stacked"],["onkeyup","this.value = this.value.toUpperCase();",3,"ngModel","ngModelChange"],[3,"color","click"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"ion-header"),p["\u0275\u0275elementStart"](1,"ion-toolbar"),p["\u0275\u0275elementStart"](2,"ion-row"),p["\u0275\u0275elementStart"](3,"ion-col",0),p["\u0275\u0275elementStart"](4,"ion-title"),p["\u0275\u0275text"](5,"MIS TAREAS PENDIENTES"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"ion-col",1),p["\u0275\u0275elementStart"](7,"ion-button",2),p["\u0275\u0275listener"]("click",(function(){return t.salir()})),p["\u0275\u0275element"](8,"ion-icon",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](9,m,3,4,"ion-content",4),p["\u0275\u0275template"](10,g,8,1,"ion-content",4),p["\u0275\u0275template"](11,b,9,4,"ion-content",4)),2&e&&(p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("ngIf",t.showTabla),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.showEvaluacion),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",t.showPrueba))},directives:[l.m,l.F,l.x,l.j,l.E,l.d,l.n,o.i,l.k,h.AgGridAngular,l.p,l.t,l.D,l.K,s.d,s.e,l.o,l.u,l.l],styles:[""]}),v)}],y=((C=function e(){n(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[c.i.forChild(w)],c.i]}),C),E=((x=function e(){n(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[o.b,s.a,l.G,y,h.AgGridModule.withComponents([])]]}),x)}}])}();