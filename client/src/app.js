const BucketList = require('./models/bucket_list');
const BucketListDetails = require('./views/bucket_list_details');
const BucketListForm = require('./views/bucket_list_form');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello World!');

  const bucketList = new BucketList('http://localhost:3000/api/bucket_list_items');
  bucketList.bindEvents();

  const bucketListContainer = document.querySelector('.bucket-list-container');
  const bucketListDetails = new BucketListDetails(bucketListContainer);
  bucketListDetails.bindEvents();

  const bucketListInputForm = document.querySelector('#new-bucket-list-item-form');
  const bucketListForm = new BucketListForm(bucketListInputForm);
  bucketListForm.bindEvents();


})



// TODO create bucket_list_details and subscribe to data loaded
// render methods
