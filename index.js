const express = require('express')
const nodeMailer = require('nodemailer')
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express()
const port = 3005


app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//
// app.get('/sendMessage',async  (req, res) => {
//
//     let info = await transporter.sendMail({
//         from: 'Sveta', // sender address
//         to: "SunkovaSvetlana@gmail.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         // text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body =сдесь мы прямо можем сверстать письмо-)
//     });
//     res.send('send')
// })
//
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`) //колбэк который запуститься , когда приложение стартанет
//
// })
let transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: "sunkovasvetlana@gmail.com",
        pass: "1010desiat",
    },
})

app.get('/', function (req, res) {
    res.send('Hello World');
})


app.post('/sendMessage', async function (req, res) {
    let {name, email, message} = req.body.data

    let info = await transporter.sendMail({
        from: "From my portfolio page",
        to: "sunkovasvetlana@gmail.com",
        subject: "From my portfolio page",
        html: ` <b>Hello world?</b> 
            <div>Message from your portfolio page</div>
            <div>${message}</div>
            <div>${email}</div>
            <div>${name}</div>`
    });
    res.send('ok');
});


app.listen(port, function () {
    console.log('Example app listening on port 3005')
});