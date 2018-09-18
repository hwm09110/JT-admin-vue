let axios_base_url = '';
let img_base_url = '';
let api_domain = '';

switch(process.env.NODE_ENV){
	case 'development':
		axios_base_url = '';
		api_domain = '';
		img_base_url = 'http://192.168.8.90';
	break;
	case 'production':
		// axios_base_url = 'https://oa.jointas.com';
		// api_domain = 'https://oa.jointas.com';
		// img_base_url = 'https://oa.jointas.com';
		axios_base_url = '';
		api_domain = '';
		img_base_url = '';
	break;
}

export default {
	axios_base_url,
	img_base_url,
	api_domain
}