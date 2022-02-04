// {"opendata.setsviews/water-object-filter":{"filter":"{"waterObjectCode":{"searchType":"CONTAIN","value":"01010000212199000001050"},"waterObjectName":{"searchType":"CONTAIN","value":"Иртыш"}}","page":"0","size":"3","sort":""}}


// '"{"waterObjectCode":{"searchType":"CONTAIN","value":"01010000212199000001050"},"waterObjectName":{"searchType":"CONTAIN","value":"Иртыш"}}","page":"0","size":"3","sort":""}}'
let code = 'Ушна';
Liferay.Service(
    '/opendata.setsviews/water-object-filter',
    {
    filter: `{"waterObjectName":{"searchType":"CONTAIN","value":"Ока"},"waterObjectCode":{"searchType":"CONTAIN","value":""}}`,
    page: '',
    size: '',
    sort: ''
},
function(obj) {
    console.log(obj);
}
);