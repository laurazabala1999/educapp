!function(){function e(e,a){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,a){if(!e)return;if("string"==typeof e)return t(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,a)}(e))||a&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw r}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{yQXb:function(t,i,o){"use strict";o.r(i),o.d(i,"AnalisisPageModule",(function(){return C}));var r=o("ofXK"),l=o("3Pt+"),s=o("TEn/"),d=o("tyNb"),u=o("LvDl"),c=o("fXoL"),m=o("nVU4");function f(e,t){if(1&e){var a=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ion-button",8),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](a),c["\u0275\u0275nextContext"]().analizar()})),c["\u0275\u0275text"](1,"ACTUALIZAR ESTUDIO"),c["\u0275\u0275elementEnd"]()}}function p(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ion-list-header"),c["\u0275\u0275text"](1," Riesgos detectados "),c["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ion-list-header"),c["\u0275\u0275text"](1," No se ha detectado ningun riesgo "),c["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e){var a=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ion-item-sliding"),c["\u0275\u0275elementStart"](1,"ion-item"),c["\u0275\u0275elementStart"](2,"ion-label"),c["\u0275\u0275elementStart"](3,"h2"),c["\u0275\u0275text"](4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"h3"),c["\u0275\u0275text"](6,"Asingatura: Matem\xe1ticas"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275text"](8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"ion-item-options",10),c["\u0275\u0275elementStart"](10,"ion-item-option",11),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](a);var e=t.$implicit;return c["\u0275\u0275nextContext"](2).abrir(e)})),c["\u0275\u0275text"](11,"ABRIR"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){var n=t.$implicit;c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate1"]("Estudiante: ",n.alumno,""),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](n.mensaje)}}function v(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ion-list"),c["\u0275\u0275template"](1,p,2,0,"ion-list-header",5),c["\u0275\u0275template"](2,g,2,0,"ion-list-header",5),c["\u0275\u0275template"](3,h,12,2,"ion-item-sliding",9),c["\u0275\u0275elementEnd"]()),2&e){var a=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",a.riesgos&&a.riesgos.length),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!a.riesgos.length),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",a.riesgos)}}function b(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ion-card"),c["\u0275\u0275elementStart"](1,"ion-card-header"),c["\u0275\u0275elementStart"](2,"ion-card-title"),c["\u0275\u0275text"](3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"ion-card-subtitle"),c["\u0275\u0275text"](5,"Asingatura: Matem\xe1ticas"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ion-card-content"),c["\u0275\u0275text"](7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var a=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"]("Estudiante: ",a.modalData.alumno,""),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate1"](" ",a.modalData.mensaje," ")}}function y(e,t){if(1&e){var a=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ag-grid-angular",12),c["\u0275\u0275listener"]("firstDataRendered",(function(e){return c["\u0275\u0275restoreView"](a),c["\u0275\u0275nextContext"]().onFirstDataRendered(e)})),c["\u0275\u0275elementEnd"]()}if(2&e){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("rowData",n.rowData)("columnDefs",n.columnDefs)("rowSelection",n.rowSelection)}}function S(e,t){if(1&e){var a=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ion-button",13),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](a),c["\u0275\u0275nextContext"]().cerrar()})),c["\u0275\u0275text"](1,"CERRAR"),c["\u0275\u0275elementEnd"]()}}function w(e,t){if(1&e){var a=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ion-button",8),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](a);var e=c["\u0275\u0275nextContext"]();return e.normalizar(e.modalData)})),c["\u0275\u0275text"](1,"IGNORAR RIESGO"),c["\u0275\u0275elementEnd"]()}}var E,I,x,D=[{path:"",component:(E=function(){function t(e,n){a(this,t),this.changeDetectorRef=e,this.router=n,this.lista=!0,this.detalle=!1,this.profesor=localStorage.getItem("user"),this.pruebas=JSON.parse(localStorage.getItem("pruebas"))||[],this.misPruebas=u.filter(this.pruebas,{profesor:this.profesor})||[],this.modalData={},this.riesgos=JSON.parse(localStorage.getItem("riesgos"))||[],this.columnDefs=[{headerName:"Nombre de la Prueba",field:"titulo",sortable:!0,filter:!0},{headerName:"Asignatura",field:"asignatura",sortable:!0,filter:!0},{headerName:"Calificaci\xf3n",field:"nota",sortable:!0,filter:!0,valueParser:this.numberParser,cellStyle:this.cellStyle},{headerName:"Tiempo",field:"tiempo",sortable:!0,filter:!0,valueParser:this.numberParser,cellStyle:this.cellStyle}],this.rowData=[],this.rowSelection="single"}var i,o,r;return i=t,(o=[{key:"cellStyle",value:function(e){var t="",a=JSON.parse(localStorage.getItem("pruebas"))||[],n=u.find(a,{id:e.data.id})?u.find(a,{id:e.data.id}).mediaTiempo:null,i=u.find(a,{id:e.data.id})?u.find(a,{id:e.data.id}).mediaNota:null,o=u.find(a,{id:e.data.id})?u.find(a,{id:e.data.id}).tiempoEstimado:null;if("nota"==e.colDef.field)return e.value<i?t="lightcoral":e.value==i?t="":e.value>i&&(t="lightgreen"),{backgroundColor:t};var r=(n+o)/2;return r=Math.trunc(r),e.value>r?t="lightcoral":e.value==r?t="":e.value<r&&(t="lightgreen"),{backgroundColor:t}}},{key:"numberParser",value:function(e){var t=e.newValue;return null==t||""===t?null:parseFloat(e.newValue)}},{key:"ngOnInit",value:function(){if(!this.riesgos.length){var t,a={},n=[],i=[],o=e(this.misPruebas);try{for(o.s();!(t=o.n()).done;){var r,l=t.value,s=e(l.entregas);try{for(s.s();!(r=s.n()).done;){var d=r.value;d.calificaci\u00f3n<5&&d.calificaci\u00f3n<l.mediaNota&&i.push(d),d.tiempoTotal>l.mediaTiempo&&d.tiempoTotal>l.tiempoEstimado&&n.push(d)}}catch(x){s.e(x)}finally{s.f()}}}catch(x){o.e(x)}finally{o.f()}for(var u=0,c=i;u<c.length;u++){var m=c[u];a[m.alumno]||(a[m.alumno]={notas:[],tiempo:[]}),a[m.alumno].notas.push(m)}for(var f=0,p=n;f<p.length;f++){var g=p[f];a[g.alumno]||(a[g.alumno]={notas:[],tiempo:[]}),a[g.alumno].tiempo.push(g)}var h=this.misPruebas.length;for(var v in a){var b={alumno:v,mensaje:null,id:Math.floor(1e5*Math.random()),nota:a[v].notas,tiempo:a[v].tiempo},y=JSON.parse(localStorage.getItem("entregasRefuerzo_"+v))||[],S="";if(y){var w,E=0,I=e(y);try{for(I.s();!(w=I.n()).done;)w.value<5&&E++}catch(x){I.e(x)}finally{I.f()}E>y.length/3&&(S=" Por \xfaltimo, indicar que de las "+y.length+" tareas de refuerzo entregadas, no ha cumplido los requisitos m\xednimos en "+E+" de ellas. ")}a[v].notas.length>=h/2&&a[v].tiempo.length<h/2&&(b.mensaje=v+",del grupo de 6\xbaA Primaria, est\xe1 teniendo dificultades en la asigntara de Matem\xe1ticas. De las \xfaltimas "+h+" pruebas ha suspendido "+a[v].notas.length+". Adem\xe1s la nota media de la clase es superior a su nivel actual."+S+"A continuaci\xf3n se mostrar\xe1n los datos de las pruebas en las que el estudiante no ha dado el nivel esperado:"),a[v].tiempo.length>=h/2&&a[v].notas.length<h/2&&(b.mensaje=v+",del grupo de 6\xbaA Primaria, est\xe1 teniendo dificultades en los tiempos de lectura / ejecuci\xf3n de los ejercicios de la asigntara de Matem\xe1ticas. De las \xfaltimas "+h+" ha tenido un tiempo de ejecuci\xf3n elevado en  "+a[v].tiempo.length+" ocasiones. Adem\xe1s la capacidad lectora / resolutiva de la clase es superior a su nivel actual. "+S+"A continuaci\xf3n se mostrar\xe1n los datos de las pruebas en las que el estudiante ha tenido una resoluci\xf3n con un tiempo demasiado elevado:"),a[v].tiempo.length>=h/2&&a[v].notas.length>=h/2&&(b.mensaje=v+",del grupo de 6\xbaA Primaria, est\xe1 teniendo dificultades, tanto a nivel de tiempos de resoluci\xf3n como de resultados, en la asigntara de Matem\xe1ticas. De las \xfaltimas "+h+" pruebas ha suspendido "+a[v].notas.length+", superando el tiempo de resoluci\xf3n esperado en "+a[v].tiempo.length+" ejercicios. El nivel general de la clase es superior a su nivel actual."+S+"A continuaci\xf3n se mostrar\xe1n los datos de las pruebas en las que el estudiante ha tenido problemas:"),b.mensaje&&this.riesgos.push(b),localStorage.setItem("riesgos",JSON.stringify(this.riesgos))}}}},{key:"analizar",value:function(){this.riesgos=[];var t,a={},n=[],i=[],o=e(this.misPruebas);try{for(o.s();!(t=o.n()).done;){var r,l=t.value,s=e(l.entregas);try{for(s.s();!(r=s.n()).done;){var d=r.value;d.calificaci\u00f3n<5&&d.calificaci\u00f3n<l.mediaNota&&i.push(d),d.tiempoTotal>l.mediaTiempo&&d.tiempoTotal>l.tiempoEstimado&&n.push(d)}}catch(x){s.e(x)}finally{s.f()}}}catch(x){o.e(x)}finally{o.f()}for(var u=0,c=i;u<c.length;u++){var m=c[u];a[m.alumno]||(a[m.alumno]={notas:[],tiempo:[]}),a[m.alumno].notas.push(m)}for(var f=0,p=n;f<p.length;f++){var g=p[f];a[g.alumno]||(a[g.alumno]={notas:[],tiempo:[]}),a[g.alumno].tiempo.push(g)}var h=this.misPruebas.length;for(var v in a){var b={alumno:v,mensaje:null,id:Math.floor(1e5*Math.random()),nota:a[v].notas,tiempo:a[v].tiempo},y=JSON.parse(localStorage.getItem("entregasRefuerzo_"+v))||[],S="";if(y){var w,E=0,I=e(y);try{for(I.s();!(w=I.n()).done;)w.value<5&&E++}catch(x){I.e(x)}finally{I.f()}E>y.length/3&&(S=" Por \xfaltimo, indicar que de las "+y.length+" tareas de refuerzo entregadas, no ha cumplido los requisitos m\xednimos en "+E+" de ellas. ")}a[v].notas.length>=h/2&&a[v].tiempo.length<h/2&&(b.mensaje=v+",del grupo de 6\xbaA Primaria, est\xe1 teniendo dificultades en la asigntara de Matem\xe1ticas. De las \xfaltimas "+h+" pruebas ha suspendido "+a[v].notas.length+". Adem\xe1s la nota media de la clase es superior a su nivel actual."+S+"A continuaci\xf3n se mostrar\xe1n los datos de las pruebas en las que el estudiante no ha dado el nivel esperado:"),a[v].tiempo.length>=h/2&&a[v].notas.length<h/2&&(b.mensaje=v+",del grupo de 6\xbaA Primaria, est\xe1 teniendo dificultades en los tiempos de lectura / ejecuci\xf3n de los ejercicios de la asigntara de Matem\xe1ticas. De las \xfaltimas "+h+" ha tenido un tiempo de ejecuci\xf3n elevado en  "+a[v].tiempo.length+" ocasiones. Adem\xe1s la capacidad lectora / resolutiva de la clase es superior a su nivel actual. "+S+"A continuaci\xf3n se mostrar\xe1n los datos de las pruebas en las que el estudiante ha tenido una resoluci\xf3n con un tiempo demasiado elevado:"),a[v].tiempo.length>=h/2&&a[v].notas.length>=h/2&&(b.mensaje=v+",del grupo de 6\xbaA Primaria, est\xe1 teniendo dificultades, tanto a nivel de tiempos de resoluci\xf3n como de resultados, en la asigntara de Matem\xe1ticas. De las \xfaltimas "+h+" pruebas ha suspendido "+a[v].notas.length+", superando el tiempo de resoluci\xf3n esperado en "+a[v].tiempo.length+" ejercicios. El nivel general de la clase es superior a su nivel actual."+S+"A continuaci\xf3n se mostrar\xe1n los datos de las pruebas en las que el estudiante ha tenido problemas:"),b.mensaje&&this.riesgos.push(b),localStorage.setItem("riesgos",JSON.stringify(this.riesgos))}}},{key:"salir",value:function(){this.router.navigate(["/home"])}},{key:"onFirstDataRendered",value:function(e){this.gridApi=e.api,e.api.sizeColumnsToFit()}},{key:"abrir",value:function(t){this.modalData=t,this.lista=!1,this.detalle=!0;var a=t.nota.concat(t.tiempo);this.rowData=[];var n,i=e(a);try{for(i.s();!(n=i.n()).done;){var o=n.value,r={titulo:o.idPrueba.split("_X")[0],id:o.idPrueba,asignatura:"Matem\xe1ticas",nota:o.calificaci\u00f3n,tiempo:o.tiempoTotal};u.find(this.rowData,{id:o.idPrueba})||this.rowData.push(r)}}catch(l){i.e(l)}finally{i.f()}this.changeDetectorRef.detectChanges()}},{key:"cerrar",value:function(){this.lista=!0,this.detalle=!1,this.changeDetectorRef.detectChanges()}},{key:"normalizar",value:function(e){this.lista=!0,this.detalle=!1,u.remove(this.riesgos,(function(t){return t.id==e.id})),this.changeDetectorRef.detectChanges(),localStorage.setItem("riesgos",JSON.stringify(this.riesgos)),this.changeDetectorRef.detectChanges()}}])&&n(i.prototype,o),r&&n(i,r),t}(),E.\u0275fac=function(e){return new(e||E)(c["\u0275\u0275directiveInject"](c.ChangeDetectorRef),c["\u0275\u0275directiveInject"](d.g))},E.\u0275cmp=c["\u0275\u0275defineComponent"]({type:E,selectors:[["app-analisis"]],decls:16,vars:6,consts:[["size","10"],["size","2"],["color","primary",1,"home",3,"click"],["name","home-outline"],["expand","full","color","success",3,"click",4,"ngIf"],[4,"ngIf"],["style","width: 100%; height: 30%;","class","ag-theme-balham",3,"rowData","columnDefs","rowSelection","firstDataRendered",4,"ngIf"],["expand","full",3,"click",4,"ngIf"],["expand","full","color","success",3,"click"],[4,"ngFor","ngForOf"],["side","end"],[3,"click"],[1,"ag-theme-balham",2,"width","100%","height","30%",3,"rowData","columnDefs","rowSelection","firstDataRendered"],["expand","full",3,"click"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ion-header"),c["\u0275\u0275elementStart"](1,"ion-toolbar"),c["\u0275\u0275elementStart"](2,"ion-row"),c["\u0275\u0275elementStart"](3,"ion-col",0),c["\u0275\u0275elementStart"](4,"ion-title"),c["\u0275\u0275text"](5,"ANALISIS DE RIESGOS"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ion-col",1),c["\u0275\u0275elementStart"](7,"ion-button",2),c["\u0275\u0275listener"]("click",(function(){return t.salir()})),c["\u0275\u0275element"](8,"ion-icon",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"ion-content"),c["\u0275\u0275template"](10,f,2,0,"ion-button",4),c["\u0275\u0275template"](11,v,4,3,"ion-list",5),c["\u0275\u0275template"](12,b,8,2,"ion-card",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](13,y,1,3,"ag-grid-angular",6),c["\u0275\u0275template"](14,S,2,0,"ion-button",7),c["\u0275\u0275template"](15,w,2,0,"ion-button",4)),2&e&&(c["\u0275\u0275advance"](10),c["\u0275\u0275property"]("ngIf",t.lista),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.lista),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.detalle),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.detalle),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.detalle),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.detalle))},directives:[s.m,s.F,s.x,s.j,s.E,s.d,s.n,s.k,r.i,s.u,r.h,s.v,s.s,s.p,s.t,s.r,s.q,s.e,s.g,s.i,s.h,s.f,m.AgGridAngular],styles:[".red[_ngcontent-%COMP%]{background-color:#f08080}.green[_ngcontent-%COMP%]{background-color:#90ee90}.amber[_ngcontent-%COMP%]{background-color:#ffa07a}.yellow[_ngcontent-%COMP%]{background-color:#ff0}"]}),E)}],A=((x=function e(){a(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[d.i.forChild(D)],d.i]}),x),C=((I=function e(){a(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[r.b,l.a,s.G,A,m.AgGridModule.withComponents([])]]}),I)}}])}();