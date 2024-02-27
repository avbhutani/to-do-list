
// User class is used to define the properties of the current user and it stores all the message objects
// The message objects inturn store all the 3 properties that are specified by the Task class.
class User {
    // Constructor to add the messageList to that particular user.
    constructor() {
        this.messageList = []
    }

    // function to add the task to the user object message list.
    addTask(message,messageExtraContent) {
        // First creating the msgObj
        let msgObj = new Task(message,messageExtraContent)
        this.messageList.push(msgObj)
    }

    getMessageList() {
        return this.messageList
    }

    
}


// The Users class stores all the users data as objects.
class Users {

}

class Task{
    constructor(task,extraContent) {
        this.task = task
        // this.timeStamp = timeStamp 
        this.extraContent = extraContent
    }

    getTimestamp() {
        return this.timeStamp
    }
    getAddTask() {
        return this.task
    }
    getTaskContent() {
        return this.taskContent
    }
    setTimeStamp() {
        const ts = Date.now()
        this.timeStamp = ts
    }
    setAddTask(task)  {
        this.task = task
    }
    setExtraContent(extraContent) {
        this.extraContent = extraContent
    }
}

