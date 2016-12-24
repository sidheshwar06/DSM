var render = function(theme, data, meta, require){
	theme('home',  {
		header:[{
			partial:'header',
			context:data.header
		}],

		title:[{
			partial:'title',
			context:data.title
		}],

		sidenavi:[{
			partial:'sidenavi',
			context:data.sidenavi
		}],

		main:[{
			partial:'registration',
			context:data.registration
		}],/*

	footer:[{
			partial:'footer',
			context:data.footer
		}]*/
	});
};
