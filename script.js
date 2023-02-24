var auto = {
    marka: "vw",
    gorivo: "benzin",
    model: "golf",
    godina: 2022,
    boja: "crvena",
    maxBrzina: 160,
    minBrzina: 0,
    trenutnaBrzina: 0,
    ubrzaj: function(ubrzanje) {
        this.trenutnaBrzina += ubrzanje;
        return this.trenutnaBrzina;
    },
    zakoci: function(brojSekundi){
        while (this.trenutnaBrzina > 0 && broj  <=0 ){
        this.trenutnaBrzina -= 2;
        console.log("Trenutna brzina pri kočenju je: " + this.trenutnaBrzina);
            brojSekundi--;
        }
    }
   ,
   brojKotaca: 4
  
};
console.log("Ja vozim auto marke: " + auto.marka);
auto.marka = "BMW";
console.log("Sada vozim auto marke: " + auto.marka);


console.log("Auto vozi brzinom " + auto.trenutnaBrzina);
console.log("Auto nakon ubrzanja vozi brzinom " + auto.ubrzaj(60));
console.log("Auto nakon kocenja vozi brzinom " + auto.zakoci(2));
