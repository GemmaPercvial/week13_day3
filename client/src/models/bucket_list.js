const Request = require('../helpers/request')
const PubSub = require('../helpers/pub_sub')

const BucketList = function(url){
  this.url = url
  this.request = new Request(this.url)
}

BucketList.prototype.bindEvents = function(){
  this.getData();

}

BucketList.prototype.getData = function(){
  this.request.get()
  .then((data) => {
    PubSub.publish("BucketList:data-loaded", data);
    console.log(data);
  })
  .catch(console.error);
}


module.exports = BucketList;