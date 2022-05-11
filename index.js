const AWS=require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: "AKIARW2ZVLFK34YTCIVS",  
    secretAccessKey: "Qr1e7Dk+HshTozzYXh0in8srBOe6kTYD04t9BbU/", 
    //Bucket: "mmysecurityfiles"     
  });
  var params = {
    Bucket: 'mmysecurityfiles', //replace example bucket with your s3 bucket name
    //Key: 'data/data.json' // replace file location with your s3 file location
}

function getObjects(){


s3.listObjects(params,function(err,data){
    if(err){
        console.log("err",err)
    }
    else{
        console.log("objects",data)

    }
    

})
}

function getCredentials(){
    const sts = new AWS.STS();
sts
  .assumeRole({
    DurationSeconds: 3600,
    ExternalId: '1234-1234-1234-1234-1234',
    RoleArn: 'arn:aws:iam::117762775381:role/Mys3rOLE',
    RoleSessionName: 'abc',
  })
  .promise()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
}
//getCredentials()
//call getApi 
getObjects()