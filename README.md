# @uteamjs/template
[@uteamjs/template](https://u.team/document/template) bootstrap the creation of **React-Redux** & __Node.js__ application and packages by providing the following templates:
- React & Node.js Application template for use in [uteam create application](https://u.team/document/cli#create)
- React Package template for use in [uteam create packages](https://u.team/document/cli#create)
- Example templates for use in [Tutorial section](https://u.team/document/tutorial/helloworld)
- Individual file template for [YAML uteam generation](https://u.team/document/cli#generate)

## Installation
@uteamjs/template is installed under the [uteam cli](https://u.team/document/cli) __node_modules__ folder.  Install the __uteam cli__ automatically install the template.
```
$ npm install -g uteam
```

## React Template
### react-application
Default application template for using in __uteam create application__. Run the following command to create [@uteamjs/react](https://u.team/document/uteam-react/overview) application:
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
Note: --generate automatically run [uteam generate](https://u.team/document/cli#generate) to create the JSX files.

Change to __...packages/main__ folder, then start the webpack development server:
```
$ npm start
```
Open your browser with URL http://localhost:3000, then click the __Get Started__ link:

![Get Started](https://u.team/assets/img/kix.sznz2xcqhgjb.png)

Each item on the top menu bar represents one package.  

Each package has its own tree menu which can be customized through the [app.yaml file](https://u.team/document/yaml/appyaml). 
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
Default application template for creating [@uteamjs/node](https://u.team/document/uteam-node/overview) application.  Run the following command to create application:
```
$ uteam create -a <application name> -t node-application
```
The follow folders are created:
```
/<project_folder>/tutorial-node/
    ...
    packages/
        main/
            config.json
            package.json
            server.js
```
The __server.js__ is the main entry point of the server application.   Change to __...packages/main__ folder, then start the server using command:
```
$ node server
```
To build server packages, you can just add [Restful API](https://u.team/document/uteam-node/api) component.js files under each package folder.
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
Batch of examples to illustrate __YAML code generation__. Run the follow command to add to your application:
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