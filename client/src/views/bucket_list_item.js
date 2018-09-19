const PubSub = require('../helpers/pub_sub');

const BucketListItem = function () {

}

BucketListItem.prototype.render = function (bucketListObject) {
  const itemDiv = document.createElement('div');

  const itemActivity = document.createElement('h3');
  itemActivity.textContent = bucketListObject.activity_name;
  itemDiv.appendChild(itemActivity);

  const itemTargetDate = document.createElement('p');
  itemTargetDate.textContent = `Target Date: ${bucketListObject.target_date}`;
  itemDiv.appendChild(itemTargetDate);

  const itemLocation = document.createElement('p');
  itemLocation.textContent = `Location: ${bucketListObject.location}`;
  itemDiv.appendChild(itemLocation);

  const itemDeleteButton = document.createElement('button');
  itemDeleteButton.textContent = 'DELETE';
  itemDiv.appendChild(itemDeleteButton);

  itemDeleteButton.addEventListener('click', (event) => {
    PubSub.publish('BucketListItem:item-delete-clicked', bucketListObject._id)
  })

  return itemDiv;

}

module.exports = BucketListItem;
