//box["navbar"] = "navigation"
//box["sidebar_primary"] = "sidebar"
//box["sidebar_secondary"] = "amazing sidebar"
//
//wrapper["navbar"] = "nav"


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

////how mixins go into boxes
//mixin["navbar"] = {
//	"2":"<h1>This is some mixin content</h1>",
//	"3":"<p>This comes last</p>",
//	"0":"<h4>auto ordering sweet!</h4>",
//	"1":"<b>This comes first</b>"
//}
//
//mixin["sidebar_primary"] = {
//	"3":"<h1>This is another thing in 3rd</h1>",
//	"7":"<p>foo 7th</p>",
//	"5":"<h4>what is this its 5</h4>",
//	"2":"<b>number 2</b>"
//}
