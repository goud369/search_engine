var summaries = data["summaries"];

function searchEngine(query,k){
   result = [];
   queryArray = [...new Set(query.trim().split(" "))];
   summaries.map((d,i) => {
        queryOccuranceCount  = 0;
        queryArray.forEach(element => {
            if(d['summary'].search(element) != -1){
                queryOccuranceCount++;
               }
        });
       result.push({"queryOccuranceCount" : queryOccuranceCount, "summary" : d['summary'], "id":d['id'], "title": data['titles'][d['id']]});
   });
   sortedResult = result.sort(function(a,b){
       return b.queryOccuranceCount - a.queryOccuranceCount;
   });
   return sortedResult.slice(0,k);
}

console.log(searchEngine('is a problem',10));
console.log(searchEngine('The Book is good',3));