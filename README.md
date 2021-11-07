# @uteamjs/template
__@uteamjs/template__ bootstrap the creation of React-Redux & Node.js application and packages by providing the following templates:
- React & Node.js Application template for use in uteam create application
- React Package template for use in uteam create packages
- Example templates for use in Tutorial section
- Individual file template for YAML uteam generation
## Installation
@uteamjs/template is installed under the uteam cli node_modules folder.  Install the uteam cli automatically install the template.
```
$ npm install -g uteam
```
## React Template
### react-application
Default application template for uteam create application. Run the following command to create application:
```
$ uteam create --application <application name>
```
The following directory will be created under your <project_folder>:
```
/<application name>/
    node_modules/
        @uteamjs/react  
        <react, redux, react-router... etc>

    packages/
        main/
            config/
            ...
            src/
                index.js
            package.json

    package.json
```
__packages/main__ is the only package bundled which is the entry point of the application.   

The __index.js__ is the layout container with:
- Top logo and menu bar.
- Responsive side tree menu .
- Toastify messages.
### react-packages
Default package template for adding your customer modules.  Run the following command to create single or multiple packages:
```
$ uteam create --packages <packages name1> <packages name2> --generate
```
Note: --generate automatically run uteam generate to create the JSX files.

Change to ...packages/main folder, then start the webpack development server:
```
$ npm start
```
Open your browser with URL http://localhost:3000, then click the Get Started link:

![Get Started](https://u.team/assets/img/kix.sznz2xcqhgjb.png)

Each item on the top menu bar represents one package.  

Each package has its own tree menu which can be customized through the app.yaml file. 
### react-redux
There are four template files used for YAML generation of JSX code:

__modules.js__ - An index file for exporting all the components in the package.
```jsx
import { lazy } from 'react'
 
/*route*/
/*popRoute*/
```
Note: The /* … */ comment statements are insertion points for code generation. Please do not delete or change the statement.

When exports switch enabled in YAML, the following pair of files are being used:
__init.js__ - File for user to insert custom code.
__exports.js__ - File for generation of _reducer object and _layout class to be exported.

Otherwise use the following file:
__page.js__ - File for creating single page components.
## Node.js Template
### node-application
Default application template for creating @uteamjs/node application.  Run the following command to create application:
```
$ uteam create -a <application name> -t node-application
```
The follow folder is created:
```
/<project_folder>/tutorial-node/
    ...
    packages/
        main/
            config.json
            package.json
            server.js
```
The server.js is the main entry point of the server application.   Change to __...packages/main__ folder, then start the server using command:
```
$ node server
```
To build server packages, you can just add Restful API component.js files under each package folder.
```
/<project_folder>/tutorial-node/
    ...
    packages/
        main/
        <package 1>
            <component 1>.js
            <component 2>.js
```
## Examples Template
### yaml-examples
Batch of examples to illustrate YAML code generation. Run the follow command to add to your application:
```
$ uteam create -p yaml-examples -t yaml-examples -g
```
Note: The package name must be yaml-examples otherwise some broken link may appear.

![YAML Examples](https://u.team/assets/img/kix.k452tyxghxfs.png)

### yaml-crud 
A full example with the following features:
- Complete CRUD operation with minimal JSX code
- Support co-exist of YAML and JSX code
- Add-on JSX code will not be overwritten in re-generation

Run the follow command to add to your application:
```
$ uteam create -p crud -t yaml-crud -g
```
![CRUD](https://u.team/assets/img/kix.tbr16n77h14y.png)
### yaml-crud-api
Similar to the yaml-crud except the CRUD action will be fetched to the backend API server. 

![CRUD api](https://u.team/assets/img/kix.z7pqrddqn169.png)

For frontend package, run the following command to add to your application:
```
$ uteam create -p crud-api -t yaml-crud-api -g
```
### node-crud-api
Backend package to handle CRUD requests from the yaml-crud-api frontend. Run the following command UNDER the @uteamjs/node application created above:
```
$ uteam create -p crud-api -t node-crud-api
```
Note: --generation option is not required for backend application.

## Template Update
Since the @uteamjs/template is installed in the npm global folder, it is hard to locate the directory for updating.  The update process is executed through the uteam cli as follows:
```
$ uteam template --update
```
Note: npm update -g uteam may be update the @uteamjs/template.