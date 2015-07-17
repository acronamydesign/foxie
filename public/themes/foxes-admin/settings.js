stylesheets = [
	"styles/main.css"
]

scripts = [
	"scripts/main.js"
]

libraries = [
	"jquery",
	"bootstrap",
	"greensock"
]

build = {
	enabled:true,//TODO
	src:"/src",
	dest:{
		styles:"/styles",
		images:"/images",
		scripts:"/scripts"
	},
	options:{
		styles:{
			compress:true,
			watch:true,//TODO
			index:"/src/styles/main.styl"
		},
		scripts:{//TODO
			compress:true,
			index:"main"
		},
		images:{//TODO
			compress:true
		}
	}
}
