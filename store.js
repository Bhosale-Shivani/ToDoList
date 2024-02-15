const store ={
  todos: [
    {
      id: "1",
      title: "Completed Task A",
      completed: false
    },
    {
      id: "2",
      title: "Read Book",
      completed: true
    },
    {
      id: "3",
      title: "Write code",
      completed: true
    }
  ],
};

const storeHandler = {
  get(target, property){
    console.log("oh you are  trying to get", property)
    return target[property];
  },
}

const storeProxy = new Proxy(store , storeHandler);
export default storeProxy;