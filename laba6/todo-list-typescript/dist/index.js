"use strict";
var TodoItem = /** @class */ (function () {
    function TodoItem(id, text) {
        this.id = id;
        this.text = text;
        this.completed = false;
    }
    TodoItem.prototype.markComplete = function () {
        this.completed = true;
    };
    TodoItem.prototype.markIncomplete = function () {
        this.completed = false;
    };
    TodoItem.prototype.getText = function () {
        return this.text;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addItem = function (item) {
        this.items.push(item);
    };
    TodoList.prototype.removeItem = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    };
    TodoList.prototype.getItems = function () {
        return this.items;
    };
    return TodoList;
}());
var todoList = new TodoList();
var item1 = new TodoItem(1, '1');
var item2 = new TodoItem(2, '2');
todoList.addItem(item1);
todoList.addItem(item2);
console.log(todoList.getItems());
