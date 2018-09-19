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

  return itemDiv;

}

module.exports = BucketListItem;
