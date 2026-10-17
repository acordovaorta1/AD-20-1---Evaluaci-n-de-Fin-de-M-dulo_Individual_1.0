const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


// Tarea 2: add() con un usuario que no está en la lista
test('add user that is not in the list', () => {
  const controller = new UserController();
  const user = new User(1, "Ana", "ana@generation.org");
  expect(controller.getUsers()).not.toContain(user);
  controller.add(user);
  expect(controller.getUsers()).toContain(user);
});

// Tarea 2: remove() con un usuario que no está en la lista
test('remove user that is not in the list', () => {
  const controller = new UserController();
  const user1 = new User(1, "Ana", "ana@generation.org");
  const user2 = new User(2, "Luis", "luis@generation.org");
  controller.add(user1);
  controller.remove(user2);
  expect(controller.getUsers()).toHaveLength(1);
  expect(controller.getUsers()).toContain(user1);
});

// Tarea 2: findByEmail()
test('findByEmail returns the user with that email', () => {
  const controller = new UserController();
  const user = new User(1, "Ana", "ana@generation.org");
  controller.add(user);
  expect(controller.findByEmail("ana@generation.org")).toBe(user);
});

test('findByEmail returns undefined if the email does not exist', () => {
  const controller = new UserController();
  controller.add(new User(1, "Ana", "ana@generation.org"));
  expect(controller.findByEmail("noexiste@generation.org")).toBeUndefined();
});

// Tarea 2: findById()
test('findById returns the user with that id', () => {
  const controller = new UserController();
  const user = new User(1, "Ana", "ana@generation.org");
  controller.add(user);
  expect(controller.findById(1)).toBe(user);
});

test('findById returns undefined if the id does not exist', () => {
  const controller = new UserController();
  controller.add(new User(1, "Ana", "ana@generation.org"));
  expect(controller.findById(99)).toBeUndefined();
});
