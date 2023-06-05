
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
    #typeInput = "";
  
    constructor(type, ...arg) {
      super(...arg);
      this.#typeInput = type
    }
  
    stringMethod(string) {
        this.text = string || 'some default text';
        console.log("This is a method from HTMLElementInput");
      }

    redirect() {
      console.log("redirecting...", this.tageName);
    }
  
    rotate() {
      console.log("Prepareing rotate from HTMLAnchor", this.tagName);
    }
  }
  
  const a1 = new HTMLElementInput("Input", "Text", "Class", 10);
  
  a1.stringMethod("CheckUp");
  
