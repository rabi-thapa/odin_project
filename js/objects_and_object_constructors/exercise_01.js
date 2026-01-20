
function Book(){
    this.title= title
    this.author= author
    this.pages= pages
    this.read= read

    this.info= function(){
        return `${this.title} by ${this.author}, ${pages} pages, ${read} `;
        
    }
}