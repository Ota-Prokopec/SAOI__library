


/*const find = new Find("ahoj jak se máš");
const sentence = find.sentence("ahoj");
const word = find.word("ahoj");
const array = find.inArray("1");
console.log(sentence);*/
const database = {

        a:"hello my girl friend",
        b:"you are",
        c:"ahoj ahoj",
        d:"jak se máš"

};
const array = [1, 4];
let find;
let word;





    find = new Find(array);
console.log(
             find.array(1, true, function callback(array, item) {

             })
);



    find = new Find(database);
console.log(
  find.object(function callback(value) {
                                 word = new Find(value);
                      return {   string:word.sentence("ahoj").string, trueth:word.sentence("ahoj").isit}
                                  }


                                ));
