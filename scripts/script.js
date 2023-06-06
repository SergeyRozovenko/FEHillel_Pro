
class HTMLElement {

    constructor(tagName, className, id) {
      this.tagName = tagName;
      this.className = className;
      this.id = id;

    }
  
    rotate() {
      console.log("rotating from HTMLElement", this.tagName);
    }
  
    render() {
      console.log("rendering from HTMLElement", this.tagName);
    }
  }
 
  class HTMLElementInput extends HTMLElement {
    #typeInputAbout = "";
    #value = "";
    valid = false;
  
    constructor(type, value, ...args) {
      super(...args);
      this.#typeInputAbout = type;
      this.value = value;
    }
  
    get type() {
      return this.#typeInputAbout;
    }
  
    get value() {
      return this.#value;
    }
  
    set value(value) {
      this.#value = value.trim();
    }
  
    stringMethod(string) {
      this.text = string || "some default text";
      console.log("This is a method from HTMLElementInput");
    }
  
    validate() {
      if (this.#value) {
        this.valid = false;
      } else {
        this.valid = true;
      }
    }
  }
  
  let a1 = new HTMLElementInput("text", "input", "myinput", "check", 10);
  
  a1.stringMethod("Russiaisaterroriststate");
  a1.value = "" ;
  a1.validate();
  console.log(a1,a1.valid);
  
  
