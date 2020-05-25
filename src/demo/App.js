import './css/App.css';
import Lib from './../lib';

class App {
  constructor(){

    function y () {
      let o = "o";
      return {
        o,
        print: () => console.log("O", o)
      }
    }

    function p (text) {
      return {
        p: () => text.y.o = "oooop"
      }
    }

    let l = Lib({l: "ANY", p, y});

    l.y.print();
    l.p.p();
    l.y.print();

    let libInstance = new Lib({Mon: "sss"});



    

    console.log("Demo loaded!", libInstance);
    this.demoArrowMethod();
    
  }

  demoArrowMethod = () => {
    console.log("Arrow methods will work");
  }
}

export default App;
