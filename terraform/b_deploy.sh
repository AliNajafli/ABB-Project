yum update
yum install docker -y
usermod -aG docker ec2-user
systemctl enable docker
systemctl start docker
yum  install git -y

mkdir backend
cd frontend
git clone https://github.com/AliNajafli/ABB-Project.git
cd ABB-Project
 docker build -f  app .
 docker run -it --rm --pid=host app
