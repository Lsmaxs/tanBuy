import axios from 'axios';
import Qs from 'qs';

const http = axios.create({
})

http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
http.defaults.transformRequest = [function (data) {
	data = Qs.stringify(data);
	return data;
}]
// Add a request interceptor
http.interceptors.request.use(function (config) {
	// Do something before request is sent
	
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
	// Do something with response data
	
	return response.data;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});



export default http;
  