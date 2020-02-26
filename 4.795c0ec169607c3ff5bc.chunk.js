(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{317:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(468);a.default=function(e){var a=e.components;!function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"hr",components:a}),o.a.createElement(r.MDXTag,{name:"p",components:a},"title: Loaders\nsort: 3\ncontributors:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"manekinekko"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"evenstensberg"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"SpaceK33z"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"gangachris"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"TheLarkInn"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"simon04"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"jhnns"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"byzyk"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"debs-obrien"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"EugeneHlushko"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"wizardofhogwarts"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"lukasgeiter"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"furkle"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"jamesgeorge007")),o.a.createElement(r.MDXTag,{name:"hr",components:a}),o.a.createElement(r.MDXTag,{name:"p",components:a},"Loaders are transformations that are applied to the source code of a module. They allow you to pre-process files as you ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"import")," or “load” them. Thus, loaders are kind of like “tasks” in other build tools and provide a powerful way to handle front-end build steps. Loaders can transform files from a different language (like TypeScript) to JavaScript or load inline images as data URLs. Loaders even allow you to do things like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"import")," CSS files directly from your JavaScript modules!"),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"example"}},"Example",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#example","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},"For example, you can use loaders to tell webpack to load a CSS file or to convert TypeScript to JavaScript. To do this, you would start by installing the loaders you need:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-bash",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"npm")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"install")," --save-dev css-loader ts-loader")),o.a.createElement(r.MDXTag,{name:"p",components:a},"And then instruct webpack to use the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/loaders/css-loader"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"css-loader"))," for every ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".css")," file and the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/TypeStrong/ts-loader"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"ts-loader"))," for all ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".ts")," files:"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"webpack.config.js")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},"module",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"exports ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  module",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    rules",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),"\n      ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{")," test",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token regex"}},"/\\.css$/"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," use",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'css-loader'")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n      ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{")," test",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token regex"}},"/\\.ts$/"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," use",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'ts-loader'")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n    ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),"\n  ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"using-loaders"}},"Using Loaders",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#using-loaders","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},"There are three ways to use loaders in your application:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#configuration"}},"Configuration")," (recommended): Specify them in your ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"webpack.config.js")," file."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#inline"}},"Inline"),": Specify them explicitly in each ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"import")," statement."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#cli"}},"CLI"),": Specify them within a shell command.")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"configuration"}},"Configuration",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#configuration","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/configuration/module/#modulerules"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"module.rules"))," allows you to specify several loaders within your webpack configuration.\nThis is a concise way to display loaders, and helps to maintain clean code. It also offers you a full overview of each respective loader."),o.a.createElement(r.MDXTag,{name:"p",components:a},"Loaders are evaluated/executed from right to left (or from bottom to top). In the example below execution starts with sass-loader, continues with css-loader and finally ends with style-loader. See ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/concepts/loaders/#loader-features"}},'"Loader Features"')," for more information about loaders order."),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js-with-links",metaString:""}},"module",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"exports ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  module",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    rules",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),"\n      ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        test",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token regex"}},"/\\.css$/"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n        use",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// [style-loader](/loaders/style-loader)"),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{")," loader",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'style-loader'")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// [css-loader](/loaders/css-loader)"),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n            loader",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'css-loader'"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n            options",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n              modules",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"true"),"\n            ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// [sass-loader](/loaders/sass-loader)"),"\n          ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{")," loader",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'sass-loader'")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n        ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),"\n      ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n    ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),"\n  ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"inline"}},"Inline",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#inline","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},"It's possible to specify loaders in an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"import")," statement, or any ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/api/module-methods"}},'equivalent "importing" method'),". Separate loaders from the resource with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"!"),". Each part is resolved relative to the current directory."),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"import")," Styles ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'style-loader!css-loader?modules!./styles.css'"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"p",components:a},"It's possible to override any loaders, preLoaders and postLoaders from the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/configuration"}},"configuration")," by prefixing the inline ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"import")," statement:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Prefixing with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"!")," will disable all configured normal loaders")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"import")," Styles ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'!style-loader!css-loader?modules!./styles.css'"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Prefixing with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"!!")," will disable all configured loaders (preLoaders, loaders, postLoaders)")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"import")," Styles ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'!!style-loader!css-loader?modules!./styles.css'"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Prefixing with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"-!")," will disable all configured preLoaders and loaders but not postLoaders")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"import")," Styles ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"from")," ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'-!style-loader!css-loader?modules!./styles.css'"),o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"))),o.a.createElement(r.MDXTag,{name:"p",components:a},"Options can be passed with a query parameter, e.g. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"?key=value&foo=bar"),", or a JSON object, e.g. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'?{"key":"value","foo":"bar"}'),"."),o.a.createElement(r.MDXTag,{name:"blockquote",components:a,props:{className:"tip"}},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},"Use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"module.rules")," whenever possible, as this will reduce boilerplate in your source code and allow you to debug or locate a loader faster if something goes south.")),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"cli"}},"CLI",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h3",props:{href:"#cli","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},"You can also use loaders through the CLI:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-bash",metaString:""}},"webpack --module-bind pug-loader --module-bind ",o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'css=style-loader!css-loader'"))),o.a.createElement(r.MDXTag,{name:"p",components:a},"This uses the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"pug-loader")," for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".jade")," files, and the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/loaders/style-loader"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"style-loader"))," and ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/loaders/css-loader"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"css-loader"))," for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".css")," files."),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"loader-features"}},"Loader Features",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#loader-features","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Loaders can be chained. Each loader in the chain applies transformations to the processed resource. A chain is executed in reverse order. The first loader passes its result (resource with applied transformations) to the next one, and so forth. Finally, webpack expects JavaScript to be returned by the last loader in the chain."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Loaders can be synchronous or asynchronous."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Loaders run in Node.js and can do everything that’s possible there."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Loaders can be configured with an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"options")," object (using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"query")," parameters to set options is still supported but has been deprecated)."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Normal modules can export a loader in addition to the normal ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"main")," via ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"package.json")," with the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"loader")," field."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Plugins can give loaders more features."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Loaders can emit additional arbitrary files.")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Loaders provide a way to customize the output through their preprocessing functions. Users now have more flexibility to include fine-grained logic such as compression, packaging, language translations and ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/loaders"}},"more"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"resolving-loaders"}},"Resolving Loaders",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#resolving-loaders","aria-hidden":"true"}},o.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}}))),o.a.createElement(r.MDXTag,{name:"p",components:a},"Loaders follow the standard ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/concepts/module-resolution/"}},"module resolution"),". In most cases it will be loaded from the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/concepts/module-resolution/#module-paths"}},"module path")," (think ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"npm install"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"node_modules"),")."),o.a.createElement(r.MDXTag,{name:"p",components:a},"A loader module is expected to export a function and be written in Node.js compatible JavaScript. They are most commonly managed with npm, but you can also have custom loaders as files within your application. By convention, loaders are usually named ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"xxx-loader")," (e.g. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"json-loader"),"). See ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/contribute/writing-a-loader/"}},'"Writing a Loader"')," for more information."))}},467:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o=p(n(0)),r=p(n(470)),s=p(n(1));function p(e){return e&&e.__esModule?e:{default:e}}var m=(0,r.default)({}),c=m.Provider,l=m.Consumer;a.withMDXComponents=function(e){return function(a){var n=a.components,r=function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}(a,["components"]);return o.default.createElement(l,null,function(a){return o.default.createElement(e,t({components:n||a},r))})}};var i=function(e){var a=e.components,n=e.children;return o.default.createElement(c,{value:a},n)};i.propTypes={components:s.default.object.isRequired,children:s.default.element.isRequired},a.default=i},468:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(469);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return r(t).default}});var o=n(467);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},469:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}(),r=n(0),s=c(r),p=c(n(36)),m=n(467);function c(e){return e&&e.__esModule?e:{default:e}}var l={inlineCode:"code",wrapper:"div"},i=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,r.Component),o(a,[{key:"render",value:function(){var e=this.props,a=e.name,n=e.parentName,o=e.props,r=void 0===o?{}:o,m=e.children,c=e.components,i=void 0===c?{}:c,u=e.Layout,d=e.layoutProps,g=i[n+"."+a]||i[a]||l[a]||a;return u?((0,p.default)(this,u),s.default.createElement(u,t({components:i},d),s.default.createElement(g,r,m))):s.default.createElement(g,r,m)}}]),a}();a.default=(0,m.withMDXComponents)(i)},470:function(e,a,n){"use strict";a.__esModule=!0;var t=r(n(0)),o=r(n(471));function r(e){return e&&e.__esModule?e:{default:e}}a.default=t.default.createContext||o.default,e.exports=a.default},471:function(e,a,n){"use strict";a.__esModule=!0;var t=n(0),o=(s(t),s(n(1))),r=s(n(472));s(n(473));function s(e){return e&&e.__esModule?e:{default:e}}function p(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function m(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function c(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}var l=1073741823;a.default=function(e,a){var n,s,i="__create-react-context-"+(0,r.default)()+"__",u=function(e){function n(){var a,t,o,r;p(this,n);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return a=t=m(this,e.call.apply(e,[this].concat(c))),t.emitter=(o=t.props.value,r=[],{on:function(e){r.push(e)},off:function(e){r=r.filter(function(a){return a!==e})},get:function(){return o},set:function(e,a){o=e,r.forEach(function(e){return e(o,a)})}}),m(t,a)}return c(n,e),n.prototype.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,t=e.value,o=void 0;((r=n)===(s=t)?0!==r||1/r==1/s:r!=r&&s!=s)?o=0:(o="function"==typeof a?a(n,t):l,0!=(o|=0)&&this.emitter.set(e.value,o))}var r,s},n.prototype.render=function(){return this.props.children},n}(t.Component);u.childContextTypes=((n={})[i]=o.default.object.isRequired,n);var d=function(a){function n(){var e,t;p(this,n);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return e=t=m(this,a.call.apply(a,[this].concat(r))),t.state={value:t.getValue()},t.onUpdate=function(e,a){0!=((0|t.observedBits)&a)&&t.setState({value:t.getValue()})},m(t,e)}return c(n,a),n.prototype.componentWillReceiveProps=function(e){var a=e.observedBits;this.observedBits=null==a?l:a},n.prototype.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?l:e},n.prototype.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[i]?this.context[i].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(t.Component);return d.contextTypes=((s={})[i]=o.default.object,s),{Provider:u,Consumer:d}},e.exports=a.default},472:function(e,a,n){"use strict";(function(a){var n="__global_unique_id__";e.exports=function(){return a[n]=(a[n]||0)+1}}).call(this,n(13))},473:function(e,a,n){"use strict";var t=n(474);e.exports=t},474:function(e,a,n){"use strict";function t(e){return function(){return e}}var o=function(){};o.thatReturns=t,o.thatReturnsFalse=t(!1),o.thatReturnsTrue=t(!0),o.thatReturnsNull=t(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o}}]);