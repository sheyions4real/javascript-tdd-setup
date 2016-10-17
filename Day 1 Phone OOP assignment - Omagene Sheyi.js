var phone = new function(name, brand, model) {
   
    //define class variables
    this.name = "Global";
    this.brand = "";
    this.model = "";
    this.os = "";
    this.battery_life = 0; //in hours
    this.cover_color = "";
    this.memory ="2GB";
    this.supportWinApp = true;
    this.screenSize = 10;
    this.timeToFormat = 15; // in minutes
    this.canReset = false;
    this.supportInternet = false;
    this.javaEnabled = false;
   
   
    if( Boolean( brand ))  {this.brand = brand; } 
  if( Boolean( model )) {this.model = model; }
  if( Boolean( name ))  {this.name = name; }
   
    // special settings for some phones
    if ( this.brand === "Smart" ) {
    this.screenSize = 7;
    this.memory =4;
    this.battery_life = 5;
    this.canReset = true;
    this.supportInternet = true;
    }else if(this.brand === "BlackBerry" ) {
    this.screenSize = 6;
    this.memory =3;
    this.supportInternet = true;
    this.battery_life = 5;
    this.canReset = true;
    }else if(this.brand === "Apple" ) {
    this.screenSize = 5;
    this.memory =5;
    this.supportInternet = true;
    this.battery_life = 8;
    this.canReset = true;
    }else{
        this.canReset = false;
        this.supportInternet = false;
    }
 
  //this function increase memory
    this.increaseMemory = function(n){     
        this.memory += n;    
        return this.memory;
    };   
   
    //this function reduce memory
    this.reduceMemory = function(n){     
        this.memory -= n;    
        return this.memory;
    };   
   
    //get the memory of a phone
    this.getMemory(){
        return this.memory;
    }
   
    // assigns the operating system of a phone
    this.assignOs =function(os){
    if(this.name === "Microsoft"){this.os = "Windows Mobile"; this.javaEnabled = true;}   
    if(this.name === "Visaphone"){this.os = "chinko"; this.javaEnabled = false;}
    if(this.name === "Apple"){this.os = "ios"; this.javaEnabled = true;}   
    }
   
    this.flash =function(name){
       
        //formats and retore to factory setttings
        var successful = false;
        if(this.memory > 0 && this.canReset ){
            this.name = "Global";
            this.brand = "";
            this.model = "";
            this.os = "";
            this.battery_life = 0; //in hours
            this.cover_color = "";
            this.memory ="2GB";
            this.supportWinApp = true;
            this.screenSize = 10;
            this.timeToFormat = 15; // in minutes
       
    }
       
    this.getInfo = function () {
        return this.name + ' ' + this.memory + ' brand' + this.brand;
    };
   
   //un implemented
    this.returnObject = function(){
        //return new phone
    }
}
