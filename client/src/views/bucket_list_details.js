const BucketListItem = require('./bucket_list_item');
const PubSub = require('../helpers/pub_sub');

const BucketListDetails = function (container) {
  this.container = container;
}

BucketListDetails.prototype.bindEvents = function () {
  PubSub.subscribe("BucketList:data-loaded", (event) => {
    this.container.innerHTML = '';
    const bucketList = event.detail;
    this.render(bucketList);
  })
}

BucketListDetails.prototype.render = function (data) {
  data.forEach((dataItem) => {
    const newDataItem = new BucketListItem();
    const newItemDiv = newDataItem.render(dataItem);
    this.container.appendChild(newItemDiv);
  })
}


module.exports = BucketListDetails;
