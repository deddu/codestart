# codestart
basic serverless starting template

a barebone starter kit for aws lambda, fully CD. 
Running the cloudformation template `pipeline.yaml` will create buckets and a repository for you. Add the resulting as a remote, and subsequently every commit to master will trigger a code-build. 
After the build, all the resources in the `template.yaml` will be created via cloudformation. 
