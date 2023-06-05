
class HTMLElement {
    foo = 12;

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
 
  
  class HTMLAnchor extends HTMLElementInput {
    href = "";
  
  
    constructor(href, ...arg) {
      super(...arg); // < --- must have call parent constructor
      this.href = href;
    }
  
   
    redirect() {
      console.log("redirecting...", this.tageName);
    }
  
    rotate() {
      console.log("Prepareing rotate from HTMLAnchor", this.tagName);
    }
  }
  
  const a1 = new HTMLAnchor("https://roga", "anchor", "link", "facebook-link");
  console.log(a1.hrefWithoutProtocol, "a1");
  
  a1.rotate();
  