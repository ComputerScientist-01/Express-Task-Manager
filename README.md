<p align="center">
    <a href="https://jayvardhanrathi.tech">
	<img src="https://user-images.githubusercontent.com/39644109/110592126-e6fc2700-819f-11eb-9ca5-8827418963c7.png" width=60%/>
</a>

<h2 align="center">Task Manager Backend</h2>

</p>

## :bulb: Built Using

- MongoDB
- Express
- Node.JS
- Javascript

## Run

### Configure Database Connection String

You need to go to `.env` file and add your connection string to your mongoDB database based on how it's explained in the course.
You can use the following url, but you need to get your `username`, `password` and `dbname` which you created in your databse.

```
mongodb+srv://<username>:<password>@cluster0.x1ccn.mongodb.net/<dbname>?retryWrites=true&w=majority
```

### To Install all the dependencies

```
npm install
```

### Start API

```
npm start
```

## Routes

```
GET      /api/v1/tasks      - get all tasks  
GET      /api/v1/tasks/:id  - get single task
POST     /api/v1/tasks      - create a new task
PATCH    /api/v1/tasks/:id  - update task
DELETE	 /api/v1/tasks/:id  - delete task
```



<!-- LICENSE -->  

## License

Distributed under the MIT License. See `LICENSE` for more information.  


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request  



<!-- CONTACT -->

## :man: Project Created & Maintained By -

- **Hey guys, I'm Jayvardhan. Find out more about me** [ here](https://linkedin.com/in/rathi406)
- **Reach out to me at** [rathi406@gmail.com](rathi406@gmail.com)

<h3 align="right">Built with :heart: by Jayvardhan Rathi</h3>

