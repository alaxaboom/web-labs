class TodoItem {
     id: number;
    private text: string;
    private completed: boolean;
  
    constructor(id: number, text: string) {
      this.id = id;
      this.text = text;
      this.completed = false;
    }
  
    public markComplete() {
      this.completed = true;
    }
  
    public markIncomplete() {
      this.completed = false;
    }
  
    public getText() {
      return this.text;
    }
  
    // Дополнительные методы, если необходимо
  }
  
  class TodoList {
    private items: TodoItem[];
  
    constructor() {
      this.items = [];
    }
  
    public addItem(item: TodoItem) {
      this.items.push(item);
    }
  
    public removeItem(id: number) {
        this.items = this.items.filter(item => item.id !== id);
    }
  
    public getItems() {
      return this.items;
    }
  }
  const todoList = new TodoList();
  const item1 = new TodoItem(1, '1');
  const item2 = new TodoItem(2, '2');
  todoList.addItem(item1);
  todoList.addItem(item2);
  
  console.log(todoList.getItems());