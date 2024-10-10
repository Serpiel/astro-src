"use strict";

interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    lastLogin: Date;
}

interface Project {
    id: string;
    name: string;
    description: string;
    owner: User;
    collaborators: User[];
    createdAt: Date;
    updatedAt: Date;
}

interface Task {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'in-progress' | 'done';
    assignee: User;
    project: Project;
    dueDate: Date;
}

interface Comment {
    id: string;
    content: string;
    author: User;
    task: Task;
    createdAt: Date;
}

interface Notification {
    id: string;
    type: 'task-assigned' | 'comment-added' | 'project-update';
    recipient: User;
    content: string;
    isRead: boolean;
    createdAt: Date;
}

class Animal {
    public type: string;
    public name: string;
    public color: string;
    public static animalInstaces: number = 0;
    public static animalTypes: string[] = ['dog', 'cat', 'bird', 'fish'];

    public constructor(type: string, name: string, color: string) {
        this.type = type;
        this.name = name;
        this.color = color;
    }
}
class Dog extends Animal {
    public constructor(type: string, name: string, color: string) {
        super(type, name, color);
    }
}
const Hubert = new Animal('dog', 'Hubert', 'brown');
console.log(Hubert.type);
Hubert.name = "Super dog";

console.log(Animal.animalInstaces);