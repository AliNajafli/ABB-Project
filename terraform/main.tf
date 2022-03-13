resource "aws_instance" "app-server" {
  ami           = "ami-002068ed284fb165b"
  instance_type = "t.micro"

  tags = {
    Name = "Backend"
  }
  }
resource "aws_instance" "app" {
  ami           = "ami-002068ed284fb165b"
  instance_type = "t.micro"

  tags = {
    Name = "frontend"
  }
  }
resource "aws_vpc" "my-vpc" {
  cidr_block = "10.0.0.0/16"
}
resource "aws_subnet" "subnet" {
  vpc_id     = aws_vpc.my-vpc.id
  cidr_block = "10.0.1.0/24"

  tags = {
    Name = "Main"
  }
}