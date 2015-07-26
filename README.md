#Tinstreet Frontend

##Installation

First, create a file in the root directory called options.json
and put in
```
{
    "app.config": {
        "basePath": "http://path.to.api/endpoint"
    }
}
```
where the path to the api endpoint has been changed to the appropriate
URL. Then, run

    npm install
    bower install
    grunt build

and then serving everything that ends up in ./dist/ using nginx or
similar should work just a treat.

##Development

Built using https://github.com/cgross/generator-cg-angular , so new 
features should use 'yo' when appropriate e.g. 

    yo cg-angular:partial my-partial
    
