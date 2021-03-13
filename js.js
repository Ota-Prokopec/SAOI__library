












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







        array(item, callback) {
          callback(this.string, item);
           let pocet = 0;
           let arr = this.string;


            for (let i = 0; i < 4; i ++ ) {


              for (let pos = 0; pos < 4; pos ++) {
                pocet ++;

              //console.log(arr);

              if (Array.isArray(arr[i])) {

                    arr = arr[i];
                    if (arr[i] === item) {
                      return {value:true, positon:[i, pos], chars:arr[i], true:true};
                    }

              }
              else {

                      //i = 0;
                      if (pocet < this.string.length*4) {
                        pos = 0;
                        arr = this.string.splice(i, i + 1);
                        i = 0;
                      }

              }

            }



          }


          //console.log(arr);


        }







      object(callback) {

        for (const [key, value] of Object.entries(this.string)) {

          const find = callback(value);
                            if (find.trueth) {
                   if (key === find.string) {
                     return {key:"key", value:true, objectString:key};
                   }
                    if (value === find.string) {
                         return {key:"value", value:true, objectString:value};
                   }
                               }





        }



      }








}
