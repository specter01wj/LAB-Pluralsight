const AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-2'});

const dynamodb = new AWS.DynamoDB();

const item = {
  Item: {
    id: {
      S: (new Date()).getTime().toString()
    },
    value: {
      S: process.argv[2]
    }
  },
  TableName: 'JinWang_first_table'
};

dynamodb.putItem(item, (err, res) => {
  if (err) throw err;
});