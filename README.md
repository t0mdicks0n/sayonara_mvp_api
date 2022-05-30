#### How to run
Activate listening to the endpoints:
`npx @google-cloud/functions-framework --target=getActivities`

Make a test request to the endpoint:
`curl --request POST --url 'http://localhost:8080' -d "username=tom&password=secret"`

#### How to deploy
Steps:
1. Go to the root path of this project.
2. Download the Google Cloud CLI.
3. Authorize to the Sayonara Google Cloud project.
4. After that you can deploy the endpoints by typing in the following two commands:
`gcloud functions deploy getActivities --runtime nodejs16 --trigger-http --allow-unauthenticated`
`gcloud functions deploy getActivity --runtime nodejs16 --trigger-http --allow-unauthenticated`

#### How to access in production
`curl --request POST --url 'https://us-central1-sayonara-1337.cloudfunctions.net/getActivities' -d "username=youremail@gmail.com&password=yourpassword"`

`curl --request POST --url 'https://us-central1-sayonara-1337.cloudfunctions.net/getActivity' -d "username=youremail@gmail.com&password=yourpassword&activityid=8743974762"`
