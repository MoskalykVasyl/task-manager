import mongoose from 'mongoose';

const URI ='mongodb+srv://moskalikvasiok:o910tHG6X2S3DYMi@cluster0.ty9zvm7.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch((e)=>{
    console.log(e);
});

