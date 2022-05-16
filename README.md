You don't really need any of the code, you can make your own implementation with the ABIs.
Please update to the latest version of node and npm.

ABIs are in the 'src/abi' folder and more info can be found in the 'src/class/CrnInfo.js' file.

---

Setup for running in a browser:
- npm i
- npm run build
	- uses babel and browserify to convert the syntax
	- babel outputs to 'lib'
	- browserify outputs to 'lib/bundle.js'

---

If you just want to run it in the console, you can remove all the dev dependencies except for ethers and run 'index.js' with node.
Otherwise, you'll need to import 'bundle.js' in an HTML file and open it in a browser.