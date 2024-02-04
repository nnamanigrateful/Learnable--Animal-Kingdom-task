class Animal {
    constructor(name, backbone, bloodTemp) {
      this.name = name;
      this.backbone = backbone;
      this.bloodTemp = bloodTemp;
    }
  }
  
  class Invertebrate extends Animal {
    constructor(name) {
      super(name, false, null);
    }
  }
  
  class Vertebrate extends Animal {
    constructor(name, bloodTemp) {
      super(name, true, bloodTemp);
    }
  }
  
  class Fish extends Vertebrate {
    constructor(name) {
      super(name, 'cold-blooded');
    }
  }
  
  class Amphibian extends Vertebrate {
    constructor(name) {
      super(name, 'cold-blooded');
    }
  }
  
  class Reptile extends Vertebrate {
    constructor(name) {
      super(name, 'cold-blooded');
    }
  }
  
  class Aves extends Vertebrate {
    constructor(name) {
      super(name, 'warm-blooded');
    }
  }
  
  
  class Mammal extends Vertebrate {
    constructor(name) {
      super(name, 'warm-blooded');
    }
  }
  
  // Example instances
  let butterfly = new Invertebrate('Butterfly');
  let cat = new Mammal('Cat');
  let john = new Mammal('Human');
  console.log(butterfly);
  console.log(cat);
