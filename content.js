if (document.head.querySelector('link[href*="/logon/fonts/citrix-fonts.css"]') != null) {
	var eulaCheckboxElement = document.getElementById('eula_check');
	var logOnElement = document.getElementById('Log_On');

	if(eulaCheckboxElement != null && logOnElement != null) {
		eulaCheckboxElement.checked = true;
		logOnElement.disabled = false;
	}
}