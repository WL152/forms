#     DevOps - CI/CD Assignment  

### CI/CD pipeline implemented using GitHub Actions:

- Create docker container (Github & VSC)
- Push to Docker Hub
- Deploy to Google Cloud Run (Cloud Shell Editor)
---
# Objective
### - To create an application form and deploy to Cloud. 

---

# Steps:

## 1. Github
- Create a new repository (remember to Add a README file)✅
- Go to Actions and create workflow
 
## 2. Visual Studio Code (VSC)
- Go to Clone Git Repository
- Run ``` Git clone https://github.com/WL152/forms.git ```  
- Update files (e.g index.html, Dockerfile, main.yml, etc) and save the changes
- Push to Github (```  git add .  ```      /      ```  git commit -m "Remark"  ```      / ``` git push ``` )
- After push, go to Github to check the workflow is running successfully


## 3. Go to Terminal to build Docker Container
- Run `  docker build . -t forms:v1`



![image](https://user-images.githubusercontent.com/81748800/124373942-56ef6980-dcc9-11eb-9704-83986c73974d.png)

- Run `  docker run -d -p 3008:80 forms:v1`

![image](https://user-images.githubusercontent.com/81748800/124373916-26a7cb00-dcc9-11eb-9212-b0161067f61a.png)


I do face some error messages while build container. Luckily I managed to solve it by looking for solutions on the internet. 😅
![image](https://user-images.githubusercontent.com/81748800/124373342-26f19780-dcc4-11eb-9a7a-35107d845fc2.png)

**Lesson learn : Remember to install docker desktop https://docs.docker.com/docker-for-windows/install/ and run at the correct path**  🤣

## 4. Setting up a GitHub Action CI/CD pipeline with Docker containers
- Need to create Docker ID first  https://docs.docker.com/docker-hub/
- Add your Docker ID as a secret to GitHub. Go to GitHub repository and click Settings > Secrets > New repository secret
- Create a new Access Token with the name `DOCKER_HUB_USERNAME` and Docker ID as value.
- Create a new Personal Access Token (PAT). To create a new token, go to Docker Hub Settings and click New Access Token.
- Add Personal Access Token (PAT) as a second secret to the GitHub secrets UI with the name `DOCKER_HUB_ACCESS_TOKEN`

![image](https://user-images.githubusercontent.com/81748800/124376413-7db59c00-dcd9-11eb-8472-da45a1281820.png)

For an easy reference https://docs.docker.com/ci-cd/github-actions/

## 5. Change workflow in VSC 
- Go to workflow and change accordingly
- Push to Github (```  git add .  ```      /      ```  git commit -m "Remark"  ```      / ``` git push ``` )
- After push, go to Github to check the workflow is running successfully


```javascript
name: CI to Docker Hub

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
     
    runs-on: ubuntu-latest

    steps:
    - name: Check Out Repo
      uses: actions/checkout@v2

    - name: Login to Docker Hub
      uses: docker/login-action@v1
      with:
        username: ${{ secrets.DOCKER_HUB_USERNAME }}
        password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}

    - name: Set up Docker Buildx
      id: buildx
      uses: docker/setup-buildx-action@v1


    - name: Build and push
      id: docker_build
      uses: docker/build-push-action@v2
      with:
        context: ./
        file: ./Dockerfile
        push: true
        tags: ${{ secrets.DOCKER_HUB_USERNAME }}/forms:latest

    - name: Image digest
      run: echo ${{ steps.docker_build.outputs.digest }}
```
----

# View using Docker Destop or Cloud Run
## Docker Desktop  (View thru localhost)
- Go to Images, select Remote Repositories and press PULL for the file. The file will move to Local
- Go to Local and press RUN. Fill in the Localhost: 3008 
- Go to Containers/App and select latest running Name.
- Select button OPEN IN BROWSER or Key in `http://localhost:3008` in the browser 


## Cloud Run (View thru Google Cloud Shell with Editor)
- Pushed to Docker Hub
- Go to https://shell.cloud.google.com/?hl=en_GB&fromcloudshell=true&show=ide%2Cterminal
- Run ` docker run -d -p 3008:80 wl0152/forms `
- Run ``` git clone https://github.com/WL152/forms.git ```
- Run ``` cd forms ```
- Run ``` docker build . -t forms:v1```
- Run ``` docker run -d -p 3008:80 forms:v1 ```
- If there is an error message, run ```docker kill $(docker ps -q)``` to kill the container running on the same port 
and re-run ```docker run -d -p 3008:80 forms:v1```
- Remember change port to 3008



While doing this project, I have learned how to build, run and deploy to cloud through a lot of practices 😀
