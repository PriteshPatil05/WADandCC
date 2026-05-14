====================================
DOCKER PRACTICAL FINAL FILE
====================================

Assignment:
Create Docker Container Environment

====================================
CASE 1 : Ubuntu Already Installed
====================================

STEP 1 : Open Docker Desktop

Check:
Engine Running

---

STEP 2 : Open CMD / Terminal

---

STEP 3 : Check Docker

Command:

docker --version

Purpose:
Checks Docker installation.

---

STEP 4 : Check Existing Images

Command:

docker images

Purpose:
Shows available Docker images.

If ubuntu image is already present,
directly continue next step.

---

STEP 5 : Run Ubuntu Container

Command:

docker run -it ubuntu

Purpose:
Creates and starts Ubuntu container.

Expected Output:

root@container-id:

Meaning:
Ubuntu container is running.

---

STEP 6 : Run Linux Commands

Command 1:

ls

Purpose:
Shows files and folders.

---

Command 2:

pwd

Purpose:
Shows current directory path.

---

Command 3:

mkdir test

Purpose:
Creates new folder.

---

Command 4:

echo Hello Docker

Purpose:
Prints text inside container.

---

STEP 7 : Exit Container

Command:

exit

Purpose:
Stops container session.

---

STEP 8 : Check Containers

Command:

docker ps -a

Purpose:
Shows all containers including stopped containers.

====================================
CASE 2 : Ubuntu NOT Installed
====================================

STEP 1 : Pull Ubuntu Image

Command:

docker pull ubuntu

Purpose:
Downloads Ubuntu image from Docker Hub.

---

STEP 2 : Run Ubuntu Container

Command:

docker run -it ubuntu

---

STEP 3 : Run Linux Commands

ls

pwd

mkdir test

echo Hello Docker

---

STEP 4 : Exit Container

exit

---

STEP 5 : Check Containers

docker ps -a

====================================
IMPORTANT VIVA QUESTIONS
====================================

1. What is Docker?

Docker is containerization platform.

---

2. What is Container?

Container is lightweight isolated environment.

---

3. What is Docker Image?

Docker image is template used to create containers.

---

4. What does docker pull do?

Downloads image from Docker Hub.

---

5. What does docker run do?

Creates and starts container.

---

6. What does -it mean?

-i = Interactive mode
-t = Terminal mode

---

7. What is Docker Hub?

Online repository for Docker images.

---

8. Difference between Image and Container?

Image:
Template

Container:
Running instance of image

---

9. Difference between VM and Container?

VM:
Heavy and separate operating system

Container:
Lightweight and shares host OS

---

10. What does docker ps do?

Shows running containers.

---

11. What does docker ps -a do?

Shows all containers including stopped containers.

---

12. What does exit command do?

Stops container session.

---

13. Why use Docker?

Used for application deployment and isolated environments.

====================================
FINAL PRACTICAL FLOW
====================================

docker images
↓
docker run -it ubuntu
↓
ls
pwd
mkdir test
echo Hello Docker
↓
exit
↓
docker ps -a

====================================
PRACTICAL COMPLETED
====================================
