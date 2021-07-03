#     DevOps - CI/CD Assignment  

## CI/CD pipeline implemented using GitHub Actions:

- Create docker container (Github & VSC)
- Push to Docker Hub
- Deploy to Google Cloud Run (Cloud Shell Editor)



# Steps:

## 1. Github
- Create a new repository (remember to Add a README file)
- Go to Actions and create workflow



## 2. Visuol Studio Code (VSC)  
- Go to Clone Git Repository
- Run ``` Git clone https://github.com/WL152/forms.git ```  
- Update files (e.g index.html, Dockerfile, etc) and save the changes
- Push to Github (```  git add .  ```      /      ```  git commit -m "Remark"  ```      / ``` git push ``` )
- After push, go to Github to check the workflow is running successfully



## 3. Go to VSC or Terminal to build Docker Container
- Run ```  docker build . -t forms:v1  ```
- Run ```  docker run -d -p 3008:80 forms:v1  ```

I found this link very useful. Help me build Container easily https://docs.docker.com/ci-cd/github-actions/



## 4. Docker Desktop
- Go to Images, select Remote Repositories and press PULL for the file. The file will move to Local
- Go to Local and press RUN. Fill in the Local Host: 3008 (or change the last 2 digits) 
- Key in Local Host: 3008 in the browser 



## 5. Google Cloud Shell with Editor
- Run ``` docker run -d -p 3008:80 wl0152/forms ```
- Run ``` git clone https://github.com/WL152/forms.git ```
- Run ``` cd forms ```
- Run ``` docker build . -t forms:v1```
- Run ``` docker run -d -p 3008:80 forms:v1 ```
- If there is an error message, run ```docker kill $(docker ps -q)``` to kill the container running on the same port 
and re-run ```docker run -d -p 3008:80 forms:v1```
- Remember change port to 3008



While doing this project, I have learned how to build, run and deploy to cloud 😀
