Deploy the S3 Bucket:
```
sls deploy --param="bucket-name=<BUCKET_NAME>"
```

Export the Neptuen URI:
```
export NEPTUNE_ENDPOINT=<ENDPOINT_URL>:<PORT_NUMBER>
```

Neptune Load Command:
```
curl -X POST -H -k 'Content-Type: application/json' \
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

Test the import:
```
:remote connect tinkerpop.server conf/neptune-remote.yaml
:remote console
g.V().valueMap(true)
g.E().valueMapt(true)
```