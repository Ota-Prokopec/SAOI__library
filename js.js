












class Find {
  constructor(string) {
     this.string = string
  }





      word(word) {

        return this.string.split(' ').some(function(w){return w === word})

      }





      sentence(value) {
            const isit = this.string.indexOf(value) >= 0;
            return {isit:isit, value:this.string.indexOf(value), string:this.string};
      }







      array(item, callback, length) {

        let array1 = [];
        let array = this.string;
        let input = [];



                  for (let pos = 0; pos < length; pos ++) {

                 for (let i = 0; i < array.length; i ++) {

                   callback({length:i, height:pos});

                      //console.log(array);

                   if (Array.isArray(array[i])) {


                                      for (let a = 0; a < array[i].length; a++) {


                                        array1.push(array[i][a]);

                                      }


                   }
                   else {
                     if (item === array[i] || item === array) {

                       console.log("equal");

                       input.push({item:item, array:this.string});

                     }

                   }

                 }
                   array = array1;
                   if (Array.isArray(array)) {
                     length ++;
                   }

                 }

                 return input;
      }







      object(callback) {

            const array = [];

        for (const [key, value] of Object.entries(this.string)) {

          const find = callback(key, value, array);
                            if (find.isit) {
                   if (key === find.string) {
                     array.push( {objectKey:"key", trueth:true, key:key, value:value});
                   }
                    if (value === find.string) {
                         array.push( {objectKey:"value", trueth:true, key:key, value:value});
                   }
                               }


                       }



               return array;



      }








}
