# node-mongo-update

Run application

````
npm run serve
````

### Update multi documents in mongo shell
````
db.collection.find({'comments.author': 'firstName'}).forEach(function (comment) {
    comment.rates.forEach(function (rate) {
      if (rate == '0')
        rate = '5';
    });
    db.collection.save(comment);
});
````

````
db.products.find().forEach(function (product) {
    product.perspectives.forEach(function (perspective) {
        perspective.views.forEach(function (view) {
            view.alias = "a" + view.name;
        })
    });
    db.products.save(product);
})
````
