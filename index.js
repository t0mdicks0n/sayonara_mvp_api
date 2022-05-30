const functions = require('@google-cloud/functions-framework');
const { GarminConnect } = require('garmin-connect');

exports.getActivities = async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  console.log('username ', username)
  console.log('password ', password)

  try {
    const GCClient = new GarminConnect();
    await GCClient.login(username, password);
    const activities = await GCClient.getActivities(0, 30);
    res.json(activities)
  } catch (error) {
    console.log("got error: ", error);
    res.status(500).send(error);
  }
}

exports.getActivity = async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var activityId = req.body.activityid;

  if (activityId === undefined) {
    return res.status(500).send("You have to provide an activityid")
  }

  console.log('username ', username)
  console.log('password ', password)
  console.log('activityId ', activityId)

  try {
    const GCClient = new GarminConnect();
    await GCClient.login(username, password);
    const activity = await GCClient.getActivity({ 'activityId': parseInt(activityId) });
    res.json(activity)
  } catch (error) {
    console.log("got error: ", error);
    res.status(500).send(error);
  }
}
