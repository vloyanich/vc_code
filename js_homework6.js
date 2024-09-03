

const company = { 
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };

  let a = 0;
       function findValueByKey(companyName) {
            for (   i = 0 ; i < company.clients.length; i++) {
                if (company.clients[i].name === companyName){
                   
              //  console.log(company.clients[i]);
                  ;
                  if (company.clients[i].partners) 
                    {
                        console.log("Властивість company.clients[" + i + "].partners існує");
                        a = company.clients[i].partners;
                        console.log(a);
                       console.log(a.length);
                       }
                       
                       for ( j = 0 ; j < a.length; j++) {
                        if (a[j].name === companyName){
               
                            console.log(a[j]);}

                        }

                       // console.log(company.clients[i].partners);
                      // if (company.clients[i].partners.name === companyName){
                       //    console.log(company.clients[i]);
                           ;
                    }
                    else {
                        console.log("Властивість company.clients[i].partners не знайдено"); }
                    }}                       
            
            let result = findValueByKey ('Клієнт 1');
     

