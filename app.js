// //Bài 1:
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://127.0.0.1:${port}`)
// })
//---------------------------------------------------------------------------------------------------
// //Bài 2:
// const express = require('express')
// const app = express()
// // const { readFile, writeFile } = require('fs');
// const fs = require("node:fs");
// const bodyParser = require('body-parser')

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())
// const port = 3000

// // //Bước 1:
// // app.get('/api/v1/todos', (req, res) => {
// //     fs.readFile(`${__dirname}/ask-community-project/dev-data/todos.json`, (err, data) => {
// //         if (err) throw err;
// //         res.status(200).json(JSON.parse(data))
// //       })
// // })

// // //Bước 2:
// // app.get('/api/v1/todos/:id', (req, res) => {
// //     fs.readFile(`${__dirname}/ask-community-project/dev-data/todos.json`, (err, data) => {
// //         if (err) throw err;
// //         let toDos = JSON.parse(data);
// //         let idParams = req.params.id;
// //         console.log(idParams);
// //         let toDoIndex = toDos.findIndex((e) => e.id == idParams);
// //         // console.log(toDoIndex);
// //         if(toDoIndex == -1) {
// //             res.status(400).json("Không có ID này")
// //         } else {
// //             res.status(200).json(toDos[toDoIndex])
// //         }
// //       })
// // })

// // //Bước 3:
// // app.post('/api/v1/todos', (req, res) => {
// //     fs.readFile(`${__dirname}/ask-community-project/dev-data/todos.json`, (err, data) => {
// //         if (err) throw err;
// //         let toDos = JSON.parse(data);
// //         let titleValue = req.body.title;
// //         console.log(titleValue);
// //         let titleIndex = toDos.findIndex((e) => e.title == titleValue);
// //         // console.log(titleIndex);
// //         if(titleIndex == -1) {
// //             let tempData = {
// //                 ...req.body,
// //                 userId : Number(req.body.userId),
// //                 id : Number(req.body.id),
// //                 completed: Boolean(req.body.completed)
// //             }
// //             toDos.push(tempData);
// //             fs.writeFile(`${__dirname}/ask-community-project/dev-data/todos.json`, JSON.stringify(toDos), (err) => {
// //                 if (err) throw err
// //                 res.status(200).json("{message: “Update successfully” }")
// //             })
// //         } else {
// //             res.status(200).json(toDos[titleIndex])
// //         }
// //       })
// // })

// // //Bước 4:
// // app.put('/api/v1/todos/:id', (req, res) => {
// //     fs.readFile(`${__dirname}/ask-community-project/dev-data/todos.json`, (err, data) => {
// //         if (err) throw err;
// //         let toDos = JSON.parse(data);
// //         let idBody = req.body.id;
// //         // console.log(req.body);
// //         let toDoIndex = toDos.findIndex((e) => e.id == idBody);
// //         // console.log(toDoIndex);
// //         if(toDoIndex == -1) {
// //             res.status(400).json("{message: “Todo not found” }")
// //         } else {
// //             let tempData = {
// //                 ...req.body,
// //                 userId : Number(req.body.userId),
// //                 id : Number(req.body.id),
// //                 completed: Boolean(req.body.completed)
// //             }
// //             // console.log(tempData);
// //             // console.log(toDoIndex);

// //             toDos.splice(toDoIndex,1,tempData);
// //             // console.log(toDos);
// //             fs.writeFile(`${__dirname}/ask-community-project/dev-data/todos.json`, JSON.stringify(toDos), (err) => {
// //                 if (err) throw err
// //                 res.status(200).json("{message: “Update successfully” }")
// //             })
// //         }
// //       })
// // })

// // //Bước 5:
// // app.delete('/api/v1/todos/:id', (req, res) => {
// //     fs.readFile(`${__dirname}/ask-community-project/dev-data/todos.json`, (err, data) => {
// //         if (err) throw err;
// //         let toDos = JSON.parse(data);
// //         let idBody = req.body.id;
// //         // console.log(req.body);
// //         let toDoIndex = toDos.findIndex((e) => e.id == idBody);
// //         // console.log(toDoIndex);
// //         if(toDoIndex == -1) {
// //             res.status(400).json("{message: “Todo not found” }")
// //         } else {
// //             // console.log(tempData);
// //             // console.log(toDoIndex);

// //             toDos.splice(toDoIndex,1);
// //             // console.log(toDos);
// //             fs.writeFile(`${__dirname}/ask-community-project/dev-data/todos.json`, JSON.stringify(toDos), (err) => {
// //                 if (err) throw err
// //                 res.status(200).json("{message: “Delete successfully” }")
// //             })
// //         }
// //       })
// // })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://127.0.0.1:${port}`)
// })
//---------------------------------------------------------------------------------------------------

