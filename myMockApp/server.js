var Mockaroo = require('mockaroo');

var client = new Mockaroo.Client({
    apiKey: '48b71860' // see http://mockaroo.com/api/docs to get your api key 
})
client.generate({
    count: 10,
    fields: [{
        name: 'id',
        type: 'Row Number'
    }, {
        name: 'transactionType',
        type: 'Custom List',
        values: ['credit', 'debit']
    }]
}).then(function (records) {
    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        console.log('record ' + i, 'id:' + record.id + ', transactionType:' + record.transactionType);
    }
});