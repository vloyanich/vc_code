

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
        for (const findClient of company.clients) {
            
            if (findClient.name === companyName){   
                console.log("Властивість company.clients " + companyName + " існує"); 
               console.log(findClient);  
            }
           // else {console.log("Властивість company.clients.partners - " + companyName + " не знайдено");  }

          // console.log(findClient.partners); 

               if (findClient.partners)      { 
                        for (const partner of findClient.partners) {
                            if (partner.name === companyName){

                        console.log("Властивість company.clients.partners " + companyName + "  існує");
                        console.log(partner); 
                       //console.log(partner.partners) ; 

                        
                         if (partner.partners)  
                              {    for (const partnerSub of partner.partners){
                                     if (partnerSub.name === companyName)
         //console.log(partnerSub);
       // console.log(partnerSub.name );
                                        
                                  console.log("Властивість company.clients.partners.partners " + companyName + "  існує");
                                 //console.log(partnerSub);

                    
                              }
                              }

                            }}}
                        }
        }  
            let result = findValueByKey ('Клієнт 1.2'); 
      

  