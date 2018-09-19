use bucket_list;
db.dropDatabase();

db.bucket_list_items.insertMany([
  { activity_name: "Bungee jump",
    completed: "false",
    target_date: "2019-05-17",
    location: "Cairns"
  },
  { activity_name: "Sky-dive",
    completed: "false",
    target_date: "2028-02-28",
    location: "in the Sky"
  }
]);
