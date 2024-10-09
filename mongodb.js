const {MongoClient, GridFSBucketWriteStream}=require('mongodb');

const url='mongodb://localhost:27017';

const database='class';

const client=new MongoClient(url);

async function dbConnect(){

    let result =await client.connect();
     db=result.db(database);

     return db.collection('data');
    




    
}

module.exports=dbConnect;
