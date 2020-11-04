
const DB = ({})

// 打开数据库或新建数据库
 DB.openIndexedDB=(dbName,dbVersion) => {
    // 打开一个数据库
    let request = indexedDB.open(dbName, dbVersion);
    // 打开失败
    request.onerror = function (e) {
      console.log(e.currentTarget.error.message);
    };
    // 打开成功！
    request.onsuccess = function (e) {
     let db = e.target.result;
     
    };
    // 打开成功后，如果版本有变化自动执行以下事件
    request.onupgradeneeded = function (e) {
        let db = e.target.result;
        let personStores = ["jinrishuofa", "jiaodianfangtan", "xinwen"]
        for (let personStore of personStores) { 
            if (!db.objectStoreNames.contains(personStore)) {
                console.log("我需要创建一个新的存储对象");
                //如果表格不存在，创建一个新的表格（keyPath，主键 ； autoIncrement,是否自增），会返回一个对象（objectStore）
                var objectStore = db.createObjectStore(personStore, {
                  keyPath: "id",
                  autoIncrement: true
                });
                //指定可以被索引的字段，unique字段是否唯一, 指定索引可以加快搜索效率。
                objectStore.createIndex("id", "id", {
                    unique: true
                  });
                objectStore.createIndex("title", "title", {
                  unique: false
                });
                objectStore.createIndex("synopsis", "synopsis", {
                  unique: false
                });
                objectStore.createIndex("content", "content", {
                    unique: false
                });
                objectStore.createIndex("from", "from", {
                    unique: false
                  });
              }
        }
        console.log('数据库版本更改为： ' + dbVersion);
     };
    //  添加数据
     DB.add = (name,message) => { 
       // 打开一个数据库
        var request = indexedDB.open("news");
        // 打开成功！
        request.onsuccess = function (e) {
        let db = e.target.result;
        console.log(db);
        var request = db.transaction(name, 'readwrite').objectStore(name).add(message)
        request.onsuccess = function (event) {
            console.log('数据写入成功');
          };
          request.onerror = function (event) {
              console.log('数据写入失败');
          }
         };
     }
    //读取数据
     DB.read = (name,id) => { 
        // 打开一个数据库
        var request = indexedDB.open("news");
        // 打开成功！
         request.onsuccess = function (e) { 
             let db = e.target.result;
             var transaction = db.transaction(name);
             var objectStore = transaction.objectStore(name);
             var request = objectStore.get(id);
             request.onerror = function(event) {
                console.log('事务失败');
             };
             request.onsuccess = function( event) {
                 if (request.result) {
                    console.log('获取内容成功')
                  console.log('Name: ' + JSON.stringify(request.result) );
                } else {
                  console.log('未获得数据记录');
                }
             };
         }
     }
     //更新数据 
     DB.update = (name,message) => { 
         // 打开一个数据库
         var request = indexedDB.open("news");
         // 打开成功！
         request.onsuccess = function (e) {
         let db = e.target.result;
         console.log(db);
         var request = db.transaction(name, 'readwrite').objectStore(name).put(message)
         request.onsuccess = function (event) {
             console.log('数据写入成功');
           };
           request.onerror = function (event) {
               console.log('数据写入失败');
           }
          };
     }
}
   
export default DB
