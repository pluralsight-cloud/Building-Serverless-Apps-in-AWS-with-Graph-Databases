Deploy the S3 Bucket:
```
sls deploy --param="bucket-name=<BUCKET_NAME>"
```

Neptune Load Command:
```
curl -X POST -H 'Content-Type: application/json' \
https://$NEPTUNE_ENDPOINT/loader -d '
{
"source": "s3://<BUCKET_NAME>/<CSV>.csv",
"format": "csv",
"iamRoleArn": "<ROLE_ARN>",
"region": "us-east-1",
"failOnError": "FALSE",
"parallelism": "MEDIUM",
"queueRequest": "TRUE"
}'
```