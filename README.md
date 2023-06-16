
<h2 align="center">PORTFOLIO</h2>

## :scroll: Description

This is my personal portfolio where I showcase some of my professional and personal works, highlight the technologies I have knowledge in, and provide my contact information to get in touch with me.

Here is my personal portfolio, showcasing a selection of my professional and personal projects, demonstrating my skills in different areas. Additionally, I share my expertise in various technologies and offer my contact details to facilitate communication.

Feel free to explore my portfolio and learn more about me and my work. If you have any questions or are interested in collaborating, don't hesitate to reach out. I am available for discussions and exciting opportunities.

Contact:

    Email: [jpsevero30@hotmail.com]
    LinkedIn: [https://www.linkedin.com/in/juan-pablo-003233201]

## :rocket: Technologies

The technologies usage in this project is:
- [Python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [JavaScript](https://www.javascript.com/)
- [Bootstrap](https://getbootstrap.com/)
- [JQuery](https://jquery.com/)


##  :wrench: Setup
Clone this repository in your computer.
```
$ git clone https://github.com/JuanPabloDS/SMRings.git
```
After, install python development package:

Ubuntu.
```shell
$ sudo apt-get install python-dev
```

Fedora.
```shell
$ sudo dnf install python3-devel
```

Inside the project directory, you need to create your virtual enviroment and active it:
```shell
$ python -m venv pyenv
$ source pyenv/bin/activate
```

Upgrade pip:
```shell
$ pip install -U pip
```

Run the command to install the env requirements:
```shell
$ pip install -r requirements.txt
```

Run the migrations:
```shell
$ python manage.py migrate
```

Create your Django User:
```shell
$ python manage.py createsuperuser
```

Start the application:
```shell
$ python manage.py runserver
```

Look the swagger accessing *http://localhost:8000*
Look the django-admin accessing *http://localhost:8000/admin* and use your superuser email and password.
