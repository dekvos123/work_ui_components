(function(window){var svgSprite='<svg><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M810.666667 273.493333 750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512 810.666667 273.493333Z"  ></path></symbol><symbol id="icon-youjiantou" viewBox="0 0 1024 1024"><path d="M772.649462 948.483929l-405.307664-405.755635a42.663965 42.663965 0 0 1 0-60.326846l408.080822-408.080822a42.535973 42.535973 0 0 0-28.414201-74.235298 41.640029 41.640029 0 0 0-31.20869 14.548412L715.245098 14.079108l-8.852773 8.874105v-0.597296L246.858762 482.444112a42.663965 42.663965 0 0 0 0 60.326846L715.650405 1012.202561l0.575964-0.575964a42.024005 42.024005 0 0 0 29.438135 12.393882 42.493309 42.493309 0 0 0 26.984958-75.53655z"  ></path></symbol><symbol id="icon-zuojiantou" viewBox="0 0 1024 1024"><path d="M251.317473 75.515478l405.201257 405.755889a42.663991 42.663991 0 0 1 0 60.326884L248.437653 949.679327a42.535999 42.535999 0 0 0 28.414218 74.235345 41.640055 41.640055 0 0 0 31.20871-14.548421l0.554632 0.554632 8.852778-8.87411v0.597296l459.53385-460.088482a42.663991 42.663991 0 0 0 0-60.326884L308.209905 11.796807l-0.575964 0.575964a42.024031 42.024031 0 0 0-29.438154-12.39389 42.493335 42.493335 0 0 0-26.878314 75.536597z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)