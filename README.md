# codestart
### serverless bootstrapping CI goodness

## Getting Started
0. bare clone this repo `git clone --bare ${THISREPO}`
1. add a new stack in cloudformation, and use `pipeline_template.yml` as template.
2. when the stack reach `CREATE_COMPLETE` you can delete `pipeline_template.yml`.
3. `git init` and upload codebase to freshly created repo (`git remote add $repo` etc etc)

whenever a commit is made to the master branch of the created repository, the pipeline will start.

## CI PIPELINE:

1. Commit on master
2. Builds bundle zip on s3
3. Builds via codebuild in container app
4. Computes CFN changeset if any
5. Execute Changeset

## The App
The app is a node js lambda example. It exposes two simple paths, you can GET `/env` and POST `/test`. Edit as needed. *Note that you'll need to define the api endpoints in the `template.yml` as  well* if you want to see them exposed on the gateway. Or edit the `template.yml` to use a swagger file, and update that as you go.

## Further Reading
Most of the code is adapted from [AWS continuous deployment for serverless applications](https://aws.amazon.com/blogs/compute/continuous-deployment-for-serverless-applications/);

