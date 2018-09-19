const PubSub = require('../helpers/pub_sub');

const BucketListForm = function (form) {
  this.form = form;
}

BucketListForm.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = this.createItem(event.target);
    PubSub.publish('BucketListForm:new-item-submitted', newItem);
    event.target.reset();
  })
}

BucketListForm.prototype.createItem = function (form) {
  return {
    activity_name: form.activity_name.value,
    completed: 'false',
    target_date: form.target_date.value,
    location: form.location.value
  }
}


module.exports = BucketListForm;
