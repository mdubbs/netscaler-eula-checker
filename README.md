# Automatic NetScaler EULA Checker
Is it annoying when you try to login Citrix NetScaler only to realize you have to check the stupid \"I accept the Terms & Conditions\" box? I know it does for me, so I created this tiny (seriously, it's under 10 lines of code) Chrome extensions to automatically check that box and enabled the Log On button so you only have to worry about entering your username and password and then hitting the enter key.

### What does it do?
The script checks to see if the `citrix-fonts.css` was loaded and then attempts to check the EULA checkbox and enabled the "Log On" button... That's it.

### Is this going to steal my credentials?
Dear lord, I hope not. Don't take my word for it, check the `content.js` file to see the code. It's pretty straightforward.

### Did you actually make a Chrome extension to do this?
Yep, I seem to always just hit 'enter' reflexively on login pages once I have entered my credentials and this little box is a serious downer. :anguished: