const Request = require('../helpers/request')
const PubSub = require('../helpers/pub_sub')

const BucketList = function(url){
  this.url = url
  this.request = new Request(this.url)
}

BucketList.prototype.bindEvents = function(){
  PubSub.subscribe('BucketListForm:new-item-submitted', (event) => {
    const newItem = event.detail;
    this.postData(newItem);
  })

  PubSub.subscribe('BucketListItem:item-delete-clicked', (event) => {
    const deletingItemId = event.detail;
    this.deleteDataItem(deletingItemId);
  })

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

BucketList.prototype.postData = function (newItem) {
  this.request.post(newItem)
  .then((data) => {
    PubSub.publish("BucketList:data-loaded", data);
    console.log(data);
  })
  .catch(console.error);
}

BucketList.prototype.deleteDataItem = function (id) {
  this.request.delete(id)
  .then((data) => {
    PubSub.publish("BucketList:data-loaded", data);
    console.log(data);
  })
  .catch(console.error);
}


module.exports = BucketList;
