module.exports = {
	genFfmpegFormatConfigs: (url, port, options = []) => {
		options.push(`http://localhost:${port}/s1`);
		return ["-rtsp_transport", "tcp", "-i", url, '-f', 'mpegts', '-codec:v', 'mpeg1video', '-b:v', '800k', '-r', '30', '-muxdelay', '0.4'].concat(options);
	}
};
