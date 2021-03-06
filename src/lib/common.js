export { getDomain };

/**
 * 提取给定的url的域名
 *
 * @param {String} url
 */
function getDomain(url) {
	var URL_PATTERN = /.+:\/\/([\w.-]+).*/;
	var groups = url.match(URL_PATTERN);
	return groups[1];
}
