module.exports = {
	genFfmpegFormatConfigs: (url, port, options = []) => {
		let path = null;
		let pathIndex = options.indexOf('path');
		if (pathIndex !== -1 && options.length > pathIndex + 1) {
			path = options[pathIndex + 1];
			options.splice(pathIndex, 2);
		}

		if (!path) {
			path = 'file://tmp/output.mkv';
		}

		return [
			'-rtsp_transport', 'tcp',
			'-i', url,
			'-codec:v', 'mpeg1video',
			'-r', '30'
		].concat(options).concat([
			'-map', '0:v',
			'-map', '0:a',
			'-f', 'mpegts',
			`tee:${path}|http://localhost:${port}/s1`
		]);
	}
};
