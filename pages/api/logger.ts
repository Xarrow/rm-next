import { NowRequest, NowResponse } from '@vercel/node'

export default (req: NowRequest, res: NowResponse) => {
    var admin = require("firebase-admin");

    var serviceAccount = require("../../static/firebase/cellular-fold-258708-firebase-adminsdk-lw0nz-1c93a24a9d.json");

    try{
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://cellular-fold-258708.firebaseio.com"
    });
}catch(e){

}
    
    const db = admin.database();
    var ref = db.ref("server/saving-data/fireblog");
    ref.set("Hello",function(){})
    res.json({ name: 'John', email: 'john@example.com' })
  }