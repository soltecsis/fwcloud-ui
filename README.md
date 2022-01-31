# FWCloud-UI (source code)
This is the repository for the Angular user interface source code of the <a href="https://fwcloud.net">FWCloud</a> project.<br>
Please, go to our main website for full information about it:<br>
https://fwcloud.net

FWCloud's source code is published under the free software license <a href="http://www.gnu.org/licenses/agpl-3.0.en.html">GNU AGPL, v3</a> and thus is freely available for download, use and share.<br>

## Getting started

Compilation in development mode (runs the application in port 4200):

`$ npm start`

Compilation in production mode:

`$ npm build`

It generates a `build` folder with all the files needed to be deployed. There's a Github action, defined in the `.github/workflows/main.yml` file to run this process when a new version is uploaded to the `devel` branch, that will generate a compiled app in the repository https://github.com/soltecsis/fwcloud-ui.