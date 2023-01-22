const express = require('express');
const app = express();
const con = require('./config');

// app.get("/",(req,res)=>{
//     con.query("select * from pg",(err,result)=>{
//         if(err)
//             res.send("error");
//         else
//             res.send(result);
//     })
// })

// // app.post("/",(req,res)=>{
// //     const data = {name:"Maharsh",PG_ID:4,landmark:"Arch",No_Rooms:20,Rooms_Filled:10,Rooms_vac:10,Address:"RRNagar",facilities:"food",foods:"idly"};
// //     con.query('insert into pg set ?',data,(err,result,fields)=>{
// //         if(err)
// //             res.send("error");
// //         else 
// //             res.send(result);
// //     })
// // })
 


// app.put("/",(req,res)=>{
//     const data = ["tony",3];
//     con.query("Update pg set name = ? where PG_ID =  ?",data,(err,result,fields)=>{
//         if(err)
//             res.send("error");
//         else 
//             res.send(result);
        
//     })
// })


// app.delete("/",(req,res)=>{
//     con.query("Delete from pg where PG_ID = 4",(err,result)=>{
//         if(err)
//             res.send("error");
//         else 
//             res.send(result);
//     })
// })


// //owner table api

// app.get("/",(req,res)=>{
//     con.query("select * from owner",(err,result)=>{
//         if(err)
//             res.send("error");
//         else
//             res.send(result);
//     })
// })


// // app.post("/",(req,res)=>{
// //     const data = {name:"Maharsh",PG_ID:4,landmark:"Arch",No_Rooms:20,Rooms_Filled:10,Rooms_vac:10,Address:"RRNagar",facilities:"food",foods:"idly"};
// //     con.query('insert into owner set ?',data,(err,result,fields)=>{
// //         if(err)
// //             res.send("error");
// //         else 
// //             res.send(result);
// //     })
// // })


// // app.put("/",(req,res)=>{
// //     const data = ["tony",3];
// //     con.query("Update owner set name = ? where PG_ID =  ?",data,(err,result,fields)=>{
// //         if(err)
// //             res.send("error");
// //         else 
// //             res.send(result);
        
// //     })
// // })


// app.delete("/",(req,res)=>{
//     con.query("Delete from owner where PG_ID = 4",(err,result)=>{
//         if(err)
//             res.send("error");
//         else 
//             res.send(result);
//     })
// })


// // tenant table

// app.get("/",(req,res)=>{
//     con.query("select * from tenant",(err,result)=>{
//         if(err)
//             res.send("error");
//         else
//             res.send(result);
//     })
// })


// // app.post("/",(req,res)=>{
// //     const data = {name:"Maharsh",PG_ID:4,landmark:"Arch",No_Rooms:20,Rooms_Filled:10,Rooms_vac:10,Address:"RRNagar",facilities:"food",foods:"idly"};
// //     con.query('insert into owner set ?',data,(err,result,fields)=>{
// //         if(err)
// //             res.send("error");
// //         else 
// //             res.send(result);
// //     })
// // })


// // app.put("/",(req,res)=>{
// //     const data = ["tony",3];
// //     con.query("Update owner set name = ? where PG_ID =  ?",data,(err,result,fields)=>{
// //         if(err)
// //             res.send("error");
// //         else 
// //             res.send(result);
        
// //     })
// // })


// app.delete("/",(req,res)=>{
//     con.query("Delete from tenant where PG_ID = 4",(err,result)=>{
//         if(err)
//             res.send("error");
//         else 
//             res.send(result);
//     })
// })


// //flat


// app.get("/",(req,res)=>{
//     con.query("select * from flat",(err,result)=>{
//         if(err)
//             res.send("error");
//         else
//             res.send(result);
//     })
// })


// // app.post("/",(req,res)=>{
// //     const data = {name:"Maharsh",PG_ID:4,landmark:"Arch",No_Rooms:20,Rooms_Filled:10,Rooms_vac:10,Address:"RRNagar",facilities:"food",foods:"idly"};
// //     con.query('insert into flat set ?',data,(err,result,fields)=>{
// //         if(err)
// //             res.send("error");
// //         else 
// //             res.send(result);
// //     })
// // })


// // app.put("/",(req,res)=>{
// //     const data = ["tony",3];
// //     con.query("Update flat set name = ? where PG_ID =  ?",data,(err,result,fields)=>{
// //         if(err)
// //             res.send("error");
// //         else 
// //             res.send(result);
        
// //     })
// // })


// app.delete("/",(req,res)=>{
//     con.query("Delete from flat where PG_ID = 4",(err,result)=>{
//         if(err)
//             res.send("error");
//         else 
//             res.send(result);
//     })
// })

const bp = require('body-parser');
const path=require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, 'public')));
// app.get('/signup',(req,res)=>{
//     res.render('signup.ejs');
// });
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'/signup.html'));
// });
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/reg.html');
});

app.post('/',(req,res)=>{
    console.log(req.body);
});
app.listen(3000);

